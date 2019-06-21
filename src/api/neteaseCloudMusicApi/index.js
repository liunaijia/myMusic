import request from 'NeteaseCloudMusicApi/util/request';
import { respond } from '../httpHelper';
import routes from './routes';

function parseCookie(cookie) {
  return (cookie || '').split(/\s*;\s*/).reduce((memo, expression) => {
    const index = expression.indexOf('=');
    const key = expression.substr(0, index);
    const value = expression.substr(index + 1);
    return Object.assign(memo, { [key]: value });
  }, {});
}

export default respond(async (event) => {
  const handler = routes[event.path];
  if (handler) {
    const query = Object.assign({},
      event.queryStringParameters,
      JSON.parse(event.body),
      { cookie: parseCookie(event.headers.Cookie) });
    return handler(query, request);
  }
  return { body: event };
});
