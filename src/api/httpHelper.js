function createHeaders(headers) {
  const defaultHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST,GET,OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token',
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
    if (event.httpMethod === 'OPTIONS') {
      callback(null, {
        statusCode: 200,
        body: JSON.stringify(event),
        ...createHeaders(),
      });
      return;
    }

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
