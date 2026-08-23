import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { X } from 'lucide-react';
import Swal from 'sweetalert2';

export default function FormularioPeliculas({ isOpen, onClose, onSubmit, movieToEdit, moviesList = [] }) {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    watch,
    formState: { errors }
  } = useForm();

  const descripcionValue = watch('descripcion') || '';

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/85 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Contenedor del Modal */}
      <div className="bg-[#18161b] border border-white/10 rounded-xl w-full max-w-xl shadow-2xl relative z-10 overflow-hidden animate-[fadeIn_0.2s_ease-out]">
        
        {/* Encabezado del Modal */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/5">
          <h2 className="text-lg font-bold text-gold-400">
            {movieToEdit ? 'Editar Película' : 'Añadir Película'}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-white p-1 rounded-full hover:bg-white/5 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Cuerpo del Formulario */}
        <form className="p-6 space-y-4">
        {/* Campo Título */}
          <div className="space-y-1">
            <label className="text-xs font-bold text-gray-400 block" htmlFor="form-title">
              Título
            </label>
            <input
              id="form-title"
              type="text"
              placeholder="Ej. Neon Shadows"
              className={`w-full bg-[#0c0a0f] text-sm rounded-lg px-4 py-2.5 border text-white placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-gold-500/20 focus:border-gold-500/50 transition-all ${
                errors.titulo ? 'border-red-500/50' : 'border-white/10'
              }`}
              {...register('titulo', {
                required: 'El título es obligatorio',
                minLength: {
                  value: 2,
                  message: 'El título debe tener al menos 2 caracteres'
                },
                validate: (val) =>
                  val.trim().length >= 2 || 'El título debe tener al menos 2 caracteres'
              })}
            />
            {errors.titulo && (
              <p className="text-[11px] text-red-400 font-medium block mt-0.5">
                {errors.titulo.message}
              </p>
            )}
          </div>
          {/* Campo Descripción */}
          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold text-gray-400 block" htmlFor="form-description">
                Descripción
              </label>
              <p className={`text-[11px] font-mono ${descripcionValue.length > 300 ? 'text-red-400 font-bold' : 'text-gray-500'}`}>
                {descripcionValue.length}/300
              </p>
            </div>
            <textarea
              id="form-description"
              rows={4}
              maxLength={300}
              placeholder="Sinopsis de la película (máximo 300 caracteres)..."
              className={`w-full bg-[#0c0a0f] text-sm rounded-lg px-4 py-2.5 border text-white placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-gold-500/20 focus:border-gold-500/50 transition-all ${
                errors.descripcion ? 'border-red-500/50' : 'border-white/10'
              }`}
              {...register('descripcion', {
                required: 'La descripción es obligatoria',
                maxLength: {
                  value: 300,
                  message: 'La descripción no puede superar los 300 caracteres'
                }
              })}
            />
            {errors.descripcion && (
              <p className="text-[11px] text-red-400 font-medium block mt-0.5">
                {errors.descripcion.message}
              </p>
            )}
          </div>

          {/* Campo Categoría */}
          <div className="grid grid-cols-1 gap-4">
            <div className="space-y-1">
              <label className="text-xs font-bold text-gray-400 block" htmlFor="form-category">
                Categoría
              </label>
              <select
                id="form-category"
                className="w-full bg-[#0c0a0f] text-sm rounded-lg px-4 py-2.5 border border-white/10 text-white focus:outline-none focus:ring-1 focus:ring-gold-500/20 focus:border-gold-500/50 transition-all"
                {...register('categoria')}
              >
                <option value="Ciencia Ficción">Ciencia Ficción</option>
                <option value="Acción">Acción</option>
                <option value="Comedia">Comedia</option>
                <option value="Drama">Drama</option>
                <option value="Fantasía">Fantasía</option>
                <option value="Misterio / Noir">Misterio / Noir</option>
                <option value="Terror">Terror</option>
                <option value="Historia">Historia</option>
              </select>
            </div>
          </div>
          {/* Campo URL de Imagen */}
          <div className="space-y-1">
            <label className="text-xs font-bold text-gray-400 block" htmlFor="form-image">
              URL de Imagen
            </label>
            <input
              id="form-image"
              type="text"
              placeholder="https://..."
              className={`w-full bg-[#0c0a0f] text-sm rounded-lg px-4 py-2.5 border text-white placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-gold-500/20 focus:border-gold-500/50 transition-all ${
                errors.imageUrl ? 'border-red-500/50' : 'border-white/10'
              }`}
              {...register('imageUrl', {
                required: 'La URL de imagen es obligatoria',
                pattern: {
                  value: /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([\/\w .-]*)*\/?$/,
                  message: 'Ingrese una URL válida (http/https)'
                }
              })}
            />
            {errors.imageUrl && (
              <p className="text-[11px] text-red-400 font-medium block mt-0.5">
                {errors.imageUrl.message}
              </p>
            )}
          </div>

          {/* Campo Link Externo (TMDB, tráiler, etc.) */}
          <div className="space-y-1">
            <label className="text-xs font-bold text-gray-400 block" htmlFor="form-link">
              Link Externo (TMDB, tráiler, etc.)
            </label>
            <input
              id="form-link"
              type="text"
              placeholder="https://www.themoviedb.org/movie/..."
              className="w-full bg-[#0c0a0f] text-sm rounded-lg px-4 py-2.5 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-gold-500/20 focus:border-gold-500/50 transition-all"
              {...register('link')}
            />
          </div>
    
        </form>
      </div>
    </div>
  );
}