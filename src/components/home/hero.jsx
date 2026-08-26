import { Link } from "react-router-dom";
import { useAppContext } from "../../context/AppContext";

const Hero = () => {
  const { movies } = useAppContext();

  const peliculaDestacada =
    movies.find((pelicula) => pelicula.isFeatured) || movies[0];

  if (!peliculaDestacada) {
    return null;
  }

  return (
    <section
      className="min-h-[420px] md:min-h-[500px] bg-cover bg-center text-white flex items-end"
      style={{
       backgroundImage: `linear-gradient(
  to right,
  rgba(0, 0, 0, 0.45) 0%,
  rgba(0, 0, 0, 0.15) 55%,
  rgba(0, 0, 0, 0.50) 100,
  rgba(0, 0, 0, 1) 100%
), url('${
  peliculaDestacada.imagenHero || peliculaDestacada.imageUrl
}')`,
      }}
    >
      <div className="px-4 md:px-10 pb-6 md:pb-10 max-w-2xl flex flex-col items-start">
        <img
          src="/isotipo_inti1.png"
          alt="Isotipo de Inti"
          className="h-28 w-28 md:h-50 md:w-50 object-contain mb-3 transition duration-500 hover:rotate-12 hover:scale-110"
        />

        <span className="text-yellow-500 text-sm md:text-lg font-semibold tracking-wide uppercase">
          ESTRENO EXCLUSIVO INTI
        </span>

        <h2 className="text-3xl md:text-5xl font-bold mt-3 leading-tight">
          {peliculaDestacada.titulo}
        </h2>

        <p className="mt-4 text-sm md:text-base text-gray-200 leading-relaxed">
          {peliculaDestacada.descripcion}
        </p>

        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mt-6">
          {peliculaDestacada.link && (
            <a
              href={peliculaDestacada.link}
              target="_blank"
              rel="noreferrer"
              className="bg-yellow-400 text-black px-6 py-3 rounded"
            >
              Ver Película
            </a>
          )}

          <Link
            to={`/detalle-pelicula/${peliculaDestacada.id}`}
            className="border border-gray-400 px-6 py-3 rounded"
          >
            Más información
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
