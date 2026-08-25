import { LuPencil, LuTrash2 } from "react-icons/lu";

export default function ItemTabla({
  movie,
  indexNumber,
  onEdit,
  onDelete,
  onToggleStatus,
  onToggleFeatured,
}) {
  const { id, titulo, imageUrl, categoria, publicado, isFeatured } = movie;

  return (
    <tr className="border-b border-[#232129]/60 hover:bg-white/2 transition-colors">
      {/* ID Enumerado Secuencial */}
      <td className="px-6 py-4 font-mono text-sm text-gray-400 whitespace-nowrap">
        {indexNumber}
      </td>

      {/* Portada y Título */}
      <td className="px-6 py-4">
        <div className="flex items-center gap-3.5 min-w-50">
          <img
            src={imageUrl || "/logotipo_inti2.png"}
            alt={titulo}
            className="w-10 h-14 rounded-md object-cover border border-white/10 shadow-sm bg-neutral-900 shrink-0"
            onError={(e) => {
              e.target.src = "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=200&auto=format&fit=crop&q=80";
            }}
          />
          <p className="font-bold text-white text-sm hover:text-yellow-400 transition-colors line-clamp-1">
            {titulo}
          </p>
        </div>
      </td>

      {/* Categoría */}
      <td className="px-6 py-4 text-sm text-gray-300 whitespace-nowrap">
        {categoria}
      </td>

      {/* Estado (Publicado / Borrador) */}
      <td className="px-6 py-4 whitespace-nowrap">
        <button
          type="button"
          onClick={() => onToggleStatus(id)}
          title={`Clic para cambiar a ${publicado ? "Borrador" : "Publicado"}`}
          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold transition-all cursor-pointer border ${
            publicado
              ? "bg-[#064e3b]/30 hover:bg-[#064e3b]/50 border-[#059669]/40 text-[#34d399]"
              : "bg-[#451a03]/30 hover:bg-[#451a03]/50 border-[#d97706]/40 text-[#fb923c]"
          }`}
        >
          {publicado ? "Publicado" : "Borrador"}
        </button>
      </td>

      {/* Interruptor de Destacada */}
      <td className="px-6 py-4 text-center whitespace-nowrap">
        <div className="inline-flex items-center justify-center">
          <label className="relative inline-flex items-center cursor-pointer select-none">
            <input
              type="checkbox"
              checked={Boolean(isFeatured)}
              onChange={() => onToggleFeatured(id)}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-[#27272a] rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white peer-checked:after:bg-black peer-checked:bg-yellow-400 after:rounded-full after:h-5 after:w-5 after:transition-all border border-white/10" />
          </label>
        </div>
      </td>

      {/* Botones de Acción */}
      <td className="px-6 py-4 text-right whitespace-nowrap">
        <div className="flex items-center justify-end gap-3">
          <button
            type="button"
            onClick={() => onEdit(movie)}
            title="Editar"
            className="p-1.5 text-gray-400 hover:text-yellow-400 transition-colors cursor-pointer"
          >
            <LuPencil className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() => onDelete(movie)}
            title="Eliminar"
            className="p-1.5 text-gray-400 hover:text-red-500 transition-colors cursor-pointer"
          >
            <LuTrash2 className="w-4 h-4" />
          </button>
        </div>
      </td>
    </tr>
  );
}