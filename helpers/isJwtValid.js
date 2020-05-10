import jwtDecode from 'jwt-decode';

export default function(token) {
  if (!token) {
    return false;
  }

  const jwtData = jwtDecode(token) || {};
  const expires = jwtData.exp || 0;

  return new Date().getTime() / 1000 < expires;
}
