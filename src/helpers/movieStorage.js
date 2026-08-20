import initialData from "../data/initialData";

const STORAGE_KEY = "movies";

// Carga las películas desde LocalStorage.
// Si no hay nada guardado todavía (primera vez que se abre la web),
// inicializa con los datos de initialData.js
export const loadMovies = () => {
  const stored = localStorage.getItem(STORAGE_KEY);

  if (stored) {
    return JSON.parse(stored);
  }

  localStorage.setItem(STORAGE_KEY, JSON.stringify(initialData));
  return initialData;
};

// Guarda el array completo de películas en LocalStorage
export const saveMovies = (movies) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(movies));
};

// Genera un id único para una película nueva
export const generateId = () => {
  return Date.now();
};