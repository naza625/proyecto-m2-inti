import TarjetaPelicula from "./TarjetaPelicula";

const SeccionPeliculas = ({ titulo, peliculas }) => {
  return (
    <section className="bg-black py-10">
      <h2 className="text-white text-2xl font-bold mb-12 pl-50">
        {titulo}
      </h2>

      <div className="flex gap-8 flex-wrap justify-center">
        {peliculas.map((pelicula) => (
          <TarjetaPelicula
            key={pelicula.id}
            pelicula={pelicula}
          />
        ))}
      </div>
    </section>
  );
};

export default SeccionPeliculas;