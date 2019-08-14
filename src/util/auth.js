import Cookies from 'js-cookie'

const TokenKey = 'loginToken'
const User = 'username'

export function getToken() {
  // Cookies.get(TokenKey);
  return sessionStorage.getItem(TokenKey);
}

export function getUser() {
  // Cookies.get(TokenKey);
  return sessionStorage.getItem(User);
}

export function setToken_Username(token,username) {
  sessionStorage.setItem(TokenKey, token);
  sessionStorage.setItem(User, username);
  // return Cookies.set(TokenKey, token);
}

export function removeToken_User() {
  sessionStorage.removeItem(TokenKey);
  sessionStorage.removeItem(User);
  // return Cookies.remove(TokenKey);
}
