import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <section
      className="min-h-[500px] bg-cover bg-center text-white flex items-end"
      style={{
        backgroundImage:
          "linear-gradient(to right, rgba(0, 0, 0, 0.55), rgba(0,0,0,0.02)), url('/la-guerra-de-los-ultimos-horizontal.jpg')",
      }}
    >
      <div className="px-10 pb-10 max-w-2xl flex flex-col items-start">
        <img
          src="/isotipo_inti1.png"
          alt="Isotipo de Inti"
          className="h-50 w-50 object-contain mb-3 transition duration-500 hover:rotate-12 hover:scale-110"
        />

        <span className="text-yellow-500 text-lg font-semibold tracking-wide uppercase">
          ESTRENO EXCLUSIVO INTI
        </span>

        <h2 className="text-5xl font-bold mt-3 leading-tight">
          La guerra de los últimos
        </h2>

        <p className="mt-4 text-gray-200 leading-relaxed">
          En un mundo devastado por un virus mortal, un piloto superviviente
          intenta encontrar un propósito mientras enfrenta peligros, pérdidas y
          un futuro incierto.
        </p>
        <div className="flex gap-4 mt-6">
          <a
            href="https://www.youtube.com/watch?v=A1PP0ZxHGcM&list=PL5CmIRZqDmUFrPp5X19-leyr0RFBK3CMC"
            target="_blank"
            rel="noreferrer"
            className="bg-yellow-400 text-black px-6 py-3 rounded"
          >
            Ver Película
          </a>

          <Link
            to="/detalle-pelicula/13"
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
