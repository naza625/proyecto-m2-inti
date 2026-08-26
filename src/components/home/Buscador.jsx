import TarjetaPelicula from "./TarjetaPelicula";

const Buscador = ({ peliculas, busqueda }) => {
  const peliculasFiltradas = peliculas.filter((pelicula) =>
    pelicula.titulo.toLowerCase().includes(busqueda.toLowerCase()),
  );

  return (
    <section className="bg-black text-white">
      {busqueda !== "" && (
        <div className="py-10">
          <h2 className="text-3xl font-bold mb-8">
            Resultados para "{busqueda}"
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            {peliculasFiltradas.map((pelicula) => (
              <TarjetaPelicula key={pelicula.id} pelicula={pelicula} />
            ))}
          </div>
          {peliculasFiltradas.length === 0 && (
            <p className="mt-6 text-center">No se encontraron películas.</p>
          )}
        </div>
      )}
    </section>
  );
};

export default Buscador;
