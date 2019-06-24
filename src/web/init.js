import axios from 'axios';

// axios.defaults.baseURL = 'https://aypzbmcmj2.execute-api.ap-southeast-2.amazonaws.com/Prod';
axios.defaults.baseURL = 'http://localhost:3000';
// axios.defaults.withCredentials = true;

// attach website cookie to api request
axios.defaults.headers = {
  'X-Cookie': document.cookie,
};

function setCookieFromHeader(headers) {
  const setCookieKey = Object.keys(headers).find(k => k.toLowerCase() === 'x-set-cookie');
  const cookieHeader = headers[setCookieKey];
  if (cookieHeader) {
    JSON.parse(cookieHeader).forEach((cookie) => { document.cookie = cookie; });
  }
}

// set website cookie from api response header X-Set-Cookie
axios.interceptors.response.use(
  (response) => {
    setCookieFromHeader(response.headers);
    return response;
  },
  (error) => { throw error; },
);
