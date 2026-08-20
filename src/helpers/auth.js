const ADMIN_USER = "admin";
const ADMIN_PASS = "admin123";

export const validateLogin = (username, password) => {
  return username === ADMIN_USER && password === ADMIN_PASS;
};

export const setLoggedIn = () => {
  localStorage.setItem("isLogged", "true");
};

export const isLoggedIn = () => {
  return localStorage.getItem("isLogged") === "true";
};

export const logout = () => {
  localStorage.removeItem("isLogged");
};