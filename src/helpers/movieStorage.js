const STORAGE_KEY = "movies";

export const loadMovies = () => {
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored ? JSON.parse(stored) : [];
};

export const saveMovies = (movies) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(movies));
};

export const generateId = () => {
  return Date.now();
};