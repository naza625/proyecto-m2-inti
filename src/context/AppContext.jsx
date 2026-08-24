import { createContext, useContext, useState, useEffect } from "react";
import { loadMovies, saveMovies } from "../helpers/movieStorage";
import { isLoggedIn, setLoggedIn, logout as logoutHelper, validateLogin } from "../helpers/auth";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return typeof isLoggedIn === "function" ? isLoggedIn() : Boolean(isLoggedIn);
  });
  const [movies, setMovies] = useState(() => loadMovies() || []);
  const [searchQuery, setSearchQuery] = useState("");

  // Sincronizar el estado de películas con LocalStorage ante cualquier cambio
  useEffect(() => {
    saveMovies(movies);
  }, [movies]);

  // Autenticación: Inicio de sesión
  const login = (email, password) => {
    if (email && validateLogin(email, password)) {
      setLoggedIn();
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };

  // Autenticación: Cierre de sesión
  const logout = () => {
    logoutHelper();
    setIsAuthenticated(false);
  };

  // Manejadores CRUD de películas
  const addMovie = (newMovie) => {
    setMovies((prev) => {
      let updatedList = prev;
      if (newMovie.isFeatured) {
        updatedList = prev.map((m) =>
          m.isFeatured ? { ...m, isFeatured: false } : m
        );
      }
      return [...updatedList, newMovie];
    });
  };

  const editMovie = (updatedMovie) => {
    setMovies((prev) => {
      let updatedList = prev;
      if (updatedMovie.isFeatured) {
        updatedList = prev.map((m) =>
          m.id !== updatedMovie.id && m.isFeatured
            ? { ...m, isFeatured: false }
            : m
        );
      }
      return updatedList.map((m) =>
        m.id === updatedMovie.id ? updatedMovie : m
      );
    });
  };

  const deleteMovie = (id) => {
    setMovies((prev) => prev.filter((m) => m.id !== id));
  };

  const togglePublished = (id) => {
    setMovies((prev) =>
      prev.map((m) =>
        m.id === id ? { ...m, publicado: !m.publicado } : m
      )
    );
  };

  const toggleFeatured = (id) => {
    setMovies((prev) => {
      const target = prev.find((m) => m.id === id);
      if (!target) return prev;

      const newFeaturedState = !target.isFeatured;

      return prev.map((m) => {
        if (m.id === id) {
          return { ...m, isFeatured: newFeaturedState };
        }
        if (newFeaturedState) {
          return { ...m, isFeatured: false };
        }
        return m;
      });
    });
  };

  const value = {
    isAuthenticated,
    login,
    logout,
    movies,
    setMovies,
    searchQuery,
    setSearchQuery,
    addMovie,
    editMovie,
    deleteMovie,
    togglePublished,
    toggleFeatured,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext debe usarse dentro de un AppProvider");
  }
  return context;
};

export default AppContext;