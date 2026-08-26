import { Film, CheckCircle, FileText, ArrowUpRight } from "lucide-react";

function TarjetaMetrica({
  icono: Icono,
  titulo,
  valor,
  subtitulo,
  colorBorde,
  colorIcono,
  fondoIcono,
  extra,
}) {
  return (
    <div className="bg-dark-card border border-white/5 rounded-xl p-6 relative overflow-hidden group hover-gold-glow transition-all">
      <div
        className={`absolute top-4 right-4 w-12 h-12 rounded-lg ${fondoIcono} border flex items-center justify-center ${colorIcono} group-hover:scale-105 transition-transform duration-300`}
      >
        <Icono className="w-6 h-6" />
      </div>
      <p className="text-xs text-gray-500 font-bold uppercase tracking-wider block">
        {titulo}
      </p>
      <h2 className="text-4xl font-extrabold text-white mt-2 tracking-tight">
        {valor.toLocaleString()}
      </h2>
      {extra ? (
        extra
      ) : (
        <p className="text-[10px] text-gray-400 font-medium block mt-2">
          {subtitulo}
        </p>
      )}
      <div className={`absolute bottom-0 inset-x-0 h-1 ${colorBorde}`} />
    </div>
  );
}

export default function MetricasCrud({ peliculas = [], movies }) {
  const listaPeliculas = peliculas.length > 0 ? peliculas : movies || [];
  const total = listaPeliculas.length;
  const publicadas = listaPeliculas.filter(
    (pelicula) => pelicula.publicado,
  ).length;
  const borradores = listaPeliculas.filter(
    (pelicula) => !pelicula.publicado,
  ).length;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      {/* Tarjeta de Total de Películas */}
      <TarjetaMetrica
        icono={Film}
        titulo="Total Películas"
        valor={total}
        fondoIcono="bg-gold-500/10 border-gold-500/20"
        colorIcono="text-gold-400"
        colorBorde="bg-gradient-to-r from-gold-500 to-amber-500 opacity-20"
        extra={
          <div className="text-[10px] text-emerald-400 font-semibold flex items-center gap-1 mt-2">
            <ArrowUpRight className="w-3.5 h-3.5" />
            <p>+3 agregadas recientemente</p>
          </div>
        }
      />

      {/* Tarjeta de Películas Publicadas */}
      <TarjetaMetrica
        icono={CheckCircle}
        titulo="Publicadas"
        valor={publicadas}
        subtitulo="Actualmente visibles en el catálogo"
        fondoIcono="bg-emerald-500/10 border-emerald-500/20"
        colorIcono="text-emerald-400"
        colorBorde="bg-emerald-500 opacity-25"
      />

      {/* Tarjeta de Borradores */}
      <TarjetaMetrica
        icono={FileText}
        titulo="Borradores"
        valor={borradores}
        subtitulo="Pendientes de revisión de contenido"
        fondoIcono="bg-amber-500/10 border-amber-500/20"
        colorIcono="text-amber-400"
        colorBorde="bg-amber-500 opacity-25"
      />
    </div>
  );
}
