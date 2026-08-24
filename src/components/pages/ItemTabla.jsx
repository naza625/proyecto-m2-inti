import { Edit2, Trash2 } from 'lucide-react';

export default function ItemTabla({ movie, rowNumber, onEdit, onDelete, onToggleStatus, onToggleFeatured }) {
  const { id, titulo, imageUrl, categoria, publicado, isFeatured } = movie;

  return (
    <tr className="hover:bg-white/[0.02] transition-colors">
      {/* Número de Fila */}
      <td className="px-6 py-4 font-mono text-xs text-gray-500">
        {rowNumber}
      </td>

      {/* Portada y Título */}
      <td className="px-6 py-4">
        <div className="flex items-center gap-3">
          <img
            src={imageUrl}
            alt={titulo}
            className="w-10 h-14 rounded object-cover border border-white/5 shadow"
          />
          <p className="font-bold text-white hover:text-gold-400 transition-colors">
            {titulo}
          </p>
        </div>
      </td>

      {/* Categoría */}
      <td className="px-6 py-4 font-medium text-gray-400">
        {categoria}
      </td>
      
      {/* Botón / Insignia de Estado (Publicado / Borrador) */}
      <td className="px-6 py-4">
        <button
          onClick={() => onToggleStatus(id, publicado)}
          title={`Clic para cambiar a ${publicado ? 'Borrador' : 'Publicado'}`}
          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold transition-all cursor-pointer border ${
            publicado
              ? 'bg-emerald-500/10 hover:bg-emerald-500/20 border-emerald-500/30 text-emerald-400 shadow-sm'
              : 'bg-amber-500/10 hover:bg-amber-500/20 border-amber-500/30 text-amber-400 shadow-sm'
          }`}
        >
          <div
            className={`w-1.5 h-1.5 rounded-full ${
              publicado ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'
            }`}
          />
          {publicado ? 'Publicado' : 'Borrador'}
        </button>
      </td>





    </tr>

  );
}