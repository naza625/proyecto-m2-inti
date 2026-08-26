import { LuFilm, LuCircleCheck, LuFileText } from "react-icons/lu";

function TarjetaMetrica({
  icono: Icono,
  titulo,
  valor,
  subtitulo,
  colorIcono,
  fondoIcono,
}) {
  return (
    <div className="bg-[#18161b] border border-[#26242c] rounded-2xl p-6 relative flex flex-col justify-between shadow-lg">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-semibold text-gray-300">
            {titulo}
          </p>
          <h2 className="text-4xl font-extrabold text-[#f3f4f6] mt-3 tracking-tight">
            {typeof valor === "number" ? valor.toLocaleString() : valor}
          </h2>
        </div>
        <div
          className={`w-10 h-10 rounded-xl ${fondoIcono} border flex items-center justify-center ${colorIcono}`}
        >
          <Icono className="w-5 h-5" />
        </div>
      </div>

      {subtitulo && (
        <div className="mt-4">
          <p className="text-xs text-gray-400 font-normal">
            {subtitulo}
          </p>
        </div>
      )}
    </div>
  );
}

export default function MetricasCrud({ peliculas = [], movies }) {
  const listaPeliculas = peliculas.length > 0 ? peliculas : movies || [];
  const total = listaPeliculas.length;
  const publicadas = listaPeliculas.filter(
    (pelicula) => pelicula.publicado
  ).length;
  const borradores = listaPeliculas.filter(
    (pelicula) => !pelicula.publicado
  ).length;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
      {/* Tarjeta de Total de Películas */}
      <TarjetaMetrica
        icono={LuFilm}
        titulo="Total Películas"
        valor={total}
        fondoIcono="bg-yellow-500/10 border-yellow-500/30"
        colorIcono="text-yellow-400"
      />

      {/* Tarjeta de Películas Publicadas */}
      <TarjetaMetrica
        icono={LuCircleCheck}
        titulo="Publicadas"
        valor={publicadas}
        subtitulo="Actualmente visibles"
        fondoIcono="bg-emerald-500/10 border-emerald-500/30"
        colorIcono="text-emerald-400"
      />

      {/* Tarjeta de Borradores */}
      <TarjetaMetrica
        icono={LuFileText}
        titulo="Borradores"
        valor={borradores}
        subtitulo="Pendientes de revisión"
        fondoIcono="bg-amber-500/10 border-amber-500/30"
        colorIcono="text-amber-400"
      />
    </div>
  );
}
