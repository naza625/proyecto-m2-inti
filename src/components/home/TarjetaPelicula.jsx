import {Link} from "react-router";
const TarjetaPelicula = ({ pelicula }) => {
  return (
    <article className="w-44">
      < Link to={`/detalle-pelicula/${pelicula.id}`}>
        <img
          src={pelicula.imagen}
          alt={pelicula.nombre}
          className="w-64 h-64 object-cover rounded transition hover:scale-110"
        />
      
      

      <h3 className="mt-2 text-white text-sm font-semibold">
        {pelicula.nombre}
      </h3>
    </Link>
    </article>
  );
};

export default TarjetaPelicula;