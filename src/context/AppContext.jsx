import { createContext, useContext, useState, useEffect } from "react";
import { loadMovies, saveMovies } from "../helpers/movieStorage";
import { isLoggedIn, setLoggedIn, logout as logoutHelper, validateLogin } from "../helpers/auth";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(isLoggedIn());
  const [movies, setMovies] = useState(() => loadMovies());

  useEffect(() => {
    saveMovies(movies);
  }, [movies]);

  const login = (email, password) => {
    if (validateLogin(email, password)) {
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