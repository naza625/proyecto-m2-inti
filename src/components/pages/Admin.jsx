import { useState, useEffect } from "react";
import { loadMovies, saveMovies } from "../../helpers/movieStorage";

const Admin = () => {
  const [movies, setMovies] = useState([]);

  
  useEffect(() => {
    const data = loadMovies();
    setMovies(data);
  }, []);

  
  useEffect(() => {
    if (movies.length > 0) {
      saveMovies(movies);
    }
  }, [movies]);

  return (
    <div>
      <h1>Admin Page</h1>
      <p>Películas cargadas: {movies.length}</p>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>{movie.nombre}</li>
        ))}
      </ul>
    </div>
  );
};

export default Admin;