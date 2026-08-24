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
          <span className="font-bold text-white hover:text-gold-400 transition-colors">
            {titulo}
          </span>
        </div>
      </td>

      {/* Categoría */}
      <td className="px-6 py-4 font-medium text-gray-400">
        {categoria}
      </td>
    </tr>
  );
}