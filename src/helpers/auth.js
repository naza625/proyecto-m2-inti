const ADMIN_EMAIL = import.meta.env.VITE_EMAIL;
const ADMIN_PASSWORD = import.meta.env.VITE_PASSWORD;

export const validateLogin = (email, password) => {
  return email === ADMIN_EMAIL && password === ADMIN_PASSWORD;
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