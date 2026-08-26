import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-center px-8 font-[Inter]">
      <div className="text-6xl mb-4">🎬</div>

      <h1 className="font-['Hanken_Grotesk'] text-8xl font-bold text-[#FFD700] tracking-tight m-0">
        404
      </h1>

      <h2 className="font-['Hanken_Grotesk'] text-3xl font-semibold text-white mt-2 mb-6">
        ¡Corte! Escena no encontrada
      </h2>

      <p className="text-[#c7c7c7] max-w-md mb-10 leading-relaxed">
        Parece que esta película no está en nuestro catálogo o el rollo de
        cinta se ha roto en el proyector. Revisa la URL o vuelve a la
        cartelera principal.
      </p>

      <Link
        to="/"
        className="flex items-center gap-2 bg-[#FFD700] text-black px-9 py-3.5 rounded font-bold text-base no-underline transition-all duration-200 hover:shadow-[0_0_10px_rgba(255,215,0,0.6)] hover:scale-[1.02]"
      >
        🏠 Volver al Inicio
      </Link>
    </div>
  );
};

export default Error404;