import { useParams } from "react-router-dom";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
import TarjetaPelicula from "../home/TarjetaPelicula";
import { useAppContext } from "../../context/AppContext";

const DetallePelicula = () => {
  const { id } = useParams();
  const { movies } = useAppContext();

  const peliculaEncontrada = movies.find(
    (pelicula) => pelicula.id === id
  );

  if (!peliculaEncontrada) {
    return (
      <div className="bg-black text-white min-h-screen">
        <Navbar />

        <main className="px-10 py-10">
          <p>Película no encontrada</p>
        </main>

        <Footer />
      </div>
    );
  }

  const esPrincipal = peliculaEncontrada.isFeatured;

  const peliculasRelacionadas = movies.filter(
    (pelicula) =>
      pelicula.categoria === peliculaEncontrada.categoria &&
      pelicula.id !== peliculaEncontrada.id &&
      pelicula.isFeatured === false &&
      pelicula.publicado
  );

  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />

      <main className="px-10 py-10">
        <div className="flex gap-20">
          <img
            src={peliculaEncontrada.imageUrl}
            alt={peliculaEncontrada.titulo}
            className="w-130 rounded"
          />

          <div className="flex-1">
            {esPrincipal ? (
              <p className="text-yellow-400 text-xl font-bold">
                ESTRENO EXCLUSIVO INTI
              </p>
            ) : (
              <p className="text-yellow-400 font-semibold">
                {peliculaEncontrada.categoria}
              </p>
            )}

            <h1
              className={
                esPrincipal
                  ? "text-6xl font-bold mt-3"
                  : "text-4xl font-bold mt-3"
              }
            >
              {peliculaEncontrada.titulo}
            </h1>

            {(peliculaEncontrada.anio || peliculaEncontrada.genero) && (
              <p className="mt-4">
                {peliculaEncontrada.anio}

                {peliculaEncontrada.anio &&
                  peliculaEncontrada.genero &&
                  " • "}

                {peliculaEncontrada.genero}
              </p>
            )}

            <p className="mt-6">
              {peliculaEncontrada.descripcion}
            </p>

            {peliculaEncontrada.trailerEmbed && (
              <div className="mt-6 flex justify-center">
                <iframe
                  width="560"
                  height="315"
                  src={peliculaEncontrada.trailerEmbed}
                  title={`Tráiler de ${peliculaEncontrada.titulo}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            )}

            {peliculaEncontrada.direccion && (
              <p className="mt-8">
                Dirección: {peliculaEncontrada.direccion}
              </p>
            )}

            {peliculaEncontrada.guion && (
              <p className="mt-3">
                Guion: {peliculaEncontrada.guion}
              </p>
            )}

            {peliculaEncontrada.reparto && (
              <p className="mt-3">
                Reparto: {peliculaEncontrada.reparto.join(", ")}
              </p>
            )}
          </div>
        </div>
      </main>

      {!esPrincipal && peliculasRelacionadas.length > 0 && (
        <section className="px-10 py-10">
          <h2 className="text-2xl font-bold mb-8 text-center">
            Más como esta película
          </h2>

          <div className="flex flex-wrap justify-center gap-8">
            {peliculasRelacionadas.map((pelicula) => (
              <TarjetaPelicula
                key={pelicula.id}
                pelicula={pelicula}
              />
            ))}
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default DetallePelicula;