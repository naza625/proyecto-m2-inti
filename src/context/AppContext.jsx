import { createContext, useContext, useState, useEffect } from "react";
import { loadMovies, saveMovies } from "../helpers/movieStorage";
import { isLoggedIn, setLoggedIn, logout as logoutHelper } from "../helpers/auth";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(isLoggedIn());
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setMovies(loadMovies());
  }, []);

  useEffect(() => {
    if (movies.length > 0) {
      saveMovies(movies);
    }
  }, [movies]);

  const login = (email, password) => {
    const adminEmail = import.meta.env.VITE_EMAIL;
    const adminPassword = import.meta.env.VITE_PASSWORD;

    if (email === adminEmail && password === adminPassword) {
      setLoggedIn();
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };

  const logout = () => {
    logoutHelper();
    setIsAuthenticated(false);
  };

  const value = {
    isAuthenticated,
    login,
    logout,
    movies,
    setMovies,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);

export default AppContext;