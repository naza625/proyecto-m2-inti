import { Film, CheckCircle, FileText, ArrowUpRight } from 'lucide-react';

function TarjetaMetrica({ icono: Icono, titulo, valor, subtitulo, colorBorde, colorIcono, fondoIcono, extra }) {
  return (
    <div className="bg-dark-card border border-white/5 rounded-xl p-6 relative overflow-hidden group hover-gold-glow transition-all">
      <div className={`absolute top-4 right-4 w-12 h-12 rounded-lg ${fondoIcono} border flex items-center justify-center ${colorIcono} group-hover:scale-105 transition-transform duration-300`}>
        <Icono className="w-6 h-6" />
      </div>
      <p className="text-xs text-gray-500 font-bold uppercase tracking-wider block">{titulo}</p>
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
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      {/* Las tarjetas se implementan a continuación */}
    </div>
  );
}