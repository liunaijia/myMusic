function createHeaders(headers) {
  const defaultHeaders = {
    'Access-Control-Allow-Origin': '*',
  };
  const allHeaders = Object.assign({}, defaultHeaders, headers);
  const singleValueHeaders = {};
  const multiValueHeaders = {};
  Object.entries(allHeaders).forEach(([key, value]) => {
    if (value) {
      const targetHeaders = Array.isArray(value) ? multiValueHeaders : singleValueHeaders;
      Object.assign(targetHeaders, { [key]: value });
    }
  });

  return {
    headers: singleValueHeaders,
    multiValueHeaders,
  };
}

export function respond(fn) {
  return async function decorator(event, context, callback) {
    try {
      const { status, body, cookie } = await fn.apply(this, [event, context, callback]);
      callback(null, {
        statusCode: status || 200,
        body: JSON.stringify(body),
        ...createHeaders({ 'Set-Cookie': cookie }),
      });
    } catch (error) {
      const { status, body, cookie } = error;
      callback(null, {
        statusCode: status || 500,
        body: JSON.stringify(body || {
          Error: error.message || error,
          Reference: context.awsRequestId,
        }),
        ...createHeaders({ 'Set-Cookie': cookie }),
      });
    }
  };
}