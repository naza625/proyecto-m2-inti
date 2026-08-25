import initialMovies from "../data/initialData";

const STORAGE_KEY = "movies";

const isUuid = (value) =>
  typeof value === "string" &&
  /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(
    value
  );

const ensureMovieIds = (movies) =>
  movies.map((movie) =>
    isUuid(movie.id) ? movie : { ...movie, id: crypto.randomUUID() }
  );

export const loadMovies = () => {
  const stored = localStorage.getItem(STORAGE_KEY);

  if (stored) {
    const movies = JSON.parse(stored);
    const moviesWithUuids = ensureMovieIds(movies);

    if (moviesWithUuids.some((movie, index) => movie.id !== movies[index].id)) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(moviesWithUuids));
    }

    return moviesWithUuids;
  }

  const moviesWithUuids = ensureMovieIds(initialMovies);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(moviesWithUuids));
  return moviesWithUuids;
};

export const saveMovies = (movies) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(movies));
};

export const generateId = () => {
  return crypto.randomUUID();
};