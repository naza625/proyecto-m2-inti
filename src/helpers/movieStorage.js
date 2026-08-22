import initialData from "../data/initialData";

const STORAGE_KEY = "movies";

export const loadMovies = () => {
  const stored = localStorage.getItem(STORAGE_KEY);

  if (stored) {
    return JSON.parse(stored);
  }

  localStorage.setItem(STORAGE_KEY, JSON.stringify(initialData));
  return initialData;
};

export const saveMovies = (movies) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(movies));
};

export const generateId = () => {
  return Date.now();
};