import {Link} from "react-router-dom";
const TarjetaPelicula = ({ pelicula }) => {
  return (
    <article className="w-44">
      < Link to={`/detalle-pelicula/${pelicula.id}`}>
        <img
          src={pelicula.imageUrl}
          alt={pelicula.titulo}
          className="w-64 h-64 object-cover rounded transition hover:scale-110"
        />
      
      

      <h3 className="mt-4 text-white text-sm font-semibold">
        {pelicula.titulo}
      </h3>
    </Link>
    </article>
  );
};

export default TarjetaPelicula;