import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { LuX, LuChevronDown } from "react-icons/lu";
import Swal from "sweetalert2";

export default function FormularioPeliculas({
  isOpen,
  onClose,
  onSubmit,
  movieToEdit,
  moviesList = [],
}) {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (isOpen) {
      if (movieToEdit) {
        setValue("titulo", movieToEdit.titulo || "");
        setValue("descripcion", movieToEdit.descripcion || "");
        setValue("categoria", movieToEdit.categoria || "Ciencia Ficción");
        setValue("imageUrl", movieToEdit.imageUrl || "");
        setValue("link", movieToEdit.link || "");
        setValue("publicado", movieToEdit.publicado ?? true);
        setValue("isFeatured", movieToEdit.isFeatured ?? false);
      } else {
        reset({
          titulo: "",
          descripcion: "",
          categoria: "Ciencia Ficción",
          imageUrl: "",
          link: "",
          publicado: true,
          isFeatured: false,
        });
      }
    }
  }, [isOpen, movieToEdit, setValue, reset]);

  if (!isOpen) return null;

  const handleFormSubmit = (data) => {
    // Verificación de título duplicado
    const cleanedTitle = data.titulo.trim().toLowerCase();
    const isDuplicateTitle = moviesList.some(
      (m) =>
        m.titulo?.trim().toLowerCase() === cleanedTitle &&
        (!movieToEdit || m.id !== movieToEdit.id)
    );

    if (isDuplicateTitle) {
      Swal.fire({
        title: "Título Duplicado",
        text: "Ya existe otra película con el mismo título en el catálogo.",
        icon: "error",
        confirmButtonColor: "#eab308",
        confirmButtonText: "Corregir",
        background: "#18161b",
        color: "#ffffff",
      });
      return;
    }

    // ID generado automáticamente con crypto.randomUUID() o conservado al editar
    const finalId = movieToEdit?.id || crypto.randomUUID();

    const savedMovie = {
      ...data,
      id: finalId,
      titulo: data.titulo.trim(),
      descripcion: data.descripcion.trim(),
      tags:
        movieToEdit?.tags ||
        (data.isFeatured
          ? ["4K HDR", "Estreno Exclusivo"]
          : ["4K HDR", "Nuevo"]),
    };

    onSubmit(savedMovie);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Fondo oscuro desenfocado */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Contenedor del Modal */}
      <div className="bg-[#18181b] border border-[#2c2b32] rounded-2xl w-full max-w-xl shadow-2xl relative z-10 overflow-hidden font-sans text-white animate-[fadeIn_0.2s_ease-out]">
        {/* Encabezado del Modal */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#2c2b32]">
          <h2 className="text-lg font-bold text-yellow-400">
            {movieToEdit ? "Editar Película" : "Añadir Película"}
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="text-gray-400 hover:text-white p-1 rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
            title="Cerrar"
          >
            <LuX className="w-5 h-5" />
          </button>
        </div>

        {/* Cuerpo del Formulario */}
        <form
          onSubmit={handleSubmit(handleFormSubmit)}
          className="p-6 space-y-4.5"
        >
          {/* Campo Título */}
          <div>
            <label
              htmlFor="form-title"
              className="block text-xs font-semibold text-gray-300 mb-1.5"
            >
              Título
            </label>
            <input
              id="form-title"
              type="text"
              placeholder="Ej. Neon Shadows"
              className={`w-full bg-[#100f14] text-sm rounded-lg px-4 py-2.5 border text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition-colors ${
                errors.titulo ? "border-red-500/60" : "border-[#2c2a33]"
              }`}
              {...register("titulo", {
                required: "El título es obligatorio",
                minLength: {
                  value: 2,
                  message: "El título debe tener al menos 2 caracteres",
                },
                validate: (val) =>
                  val.trim().length >= 2 ||
                  "El título debe tener al menos 2 caracteres",
              })}
            />
            {errors.titulo && (
              <p className="text-[11px] text-red-400 font-medium mt-1">
                {errors.titulo.message}
              </p>
            )}
          </div>

          {/* Campo Descripción */}
          <div>
            <label
              htmlFor="form-description"
              className="block text-xs font-semibold text-gray-300 mb-1.5"
            >
              Descripción
            </label>
            <textarea
              id="form-description"
              rows={4}
              maxLength={300}
              placeholder="Sinopsis de la película..."
              className={`w-full bg-[#100f14] text-sm rounded-lg px-4 py-2.5 border text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition-colors resize-none ${
                errors.descripcion ? "border-red-500/60" : "border-[#2c2a33]"
              }`}
              {...register("descripcion", {
                required: "La descripción es obligatoria",
                maxLength: {
                  value: 300,
                  message: "La descripción no puede superar los 300 caracteres",
                },
              })}
            />
            {errors.descripcion && (
              <p className="text-[11px] text-red-400 font-medium mt-1">
                {errors.descripcion.message}
              </p>
            )}
          </div>

          {/* Campo Categoría */}
          <div>
            <label
              htmlFor="form-category"
              className="block text-xs font-semibold text-gray-300 mb-1.5"
            >
              Categoría
            </label>
            <div className="relative">
              <select
                id="form-category"
                className="w-full bg-[#100f14] text-sm rounded-lg px-4 py-2.5 pr-9 border border-[#2c2a33] text-white appearance-none focus:outline-none focus:border-yellow-400 transition-colors cursor-pointer"
                {...register("categoria")}
              >
                <option value="Ciencia Ficción">Ciencia Ficción</option>
                <option value="Acción">Acción</option>
                <option value="Comedia">Comedia</option>
                <option value="Drama">Drama</option>
                <option value="Fantasía">Fantasía</option>
                <option value="Misterio / Noir">Misterio / Noir</option>
                <option value="Terror">Terror</option>
                <option value="Historia">Historia</option>
                <option value="Tendencias">Tendencias</option>
              </select>
              <LuChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
            </div>
          </div>

          {/* Campo URL de Imagen */}
          <div>
            <label
              htmlFor="form-image"
              className="block text-xs font-semibold text-gray-300 mb-1.5"
            >
              URL de Imagen
            </label>
            <input
              id="form-image"
              type="text"
              placeholder="https://..."
              className={`w-full bg-[#100f14] text-sm rounded-lg px-4 py-2.5 border text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition-colors ${
                errors.imageUrl ? "border-red-500/60" : "border-[#2c2a33]"
              }`}
              {...register("imageUrl", {
                required: "La URL de imagen es obligatoria",
              })}
            />
            {errors.imageUrl && (
              <p className="text-[11px] text-red-400 font-medium mt-1">
                {errors.imageUrl.message}
              </p>
            )}
          </div>

          {/* Interruptores: Publicada y Destacada */}
          <div className="flex flex-wrap items-center gap-8 pt-1">
            {/* Interruptor Publicada */}
            <label className="flex items-center gap-2.5 cursor-pointer select-none">
              <div className="relative">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  {...register("publicado")}
                />
                <div className="w-11 h-6 bg-[#27272a] rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white peer-checked:after:bg-black peer-checked:bg-yellow-400 after:rounded-full after:h-5 after:w-5 after:transition-all border border-white/10" />
              </div>
              <span className="text-xs font-semibold text-gray-200">
                Publicada
              </span>
            </label>

            {/* Interruptor Destacada (Única) */}
            <label className="flex items-center gap-2.5 cursor-pointer select-none">
              <div className="relative">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  {...register("isFeatured")}
                />
                <div className="w-11 h-6 bg-[#27272a] rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white peer-checked:after:bg-black peer-checked:bg-yellow-400 after:rounded-full after:h-5 after:w-5 after:transition-all border border-white/10" />
              </div>
              <span className="text-xs font-semibold text-gray-200">
                Destacada (Única)
              </span>
            </label>
          </div>

          {/* Botones de Acción */}
          <div className="flex items-center justify-end gap-3 pt-4 border-t border-[#2c2b32]">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2.5 rounded-lg border border-[#38373e] bg-[#1c1a22] hover:bg-[#25232d] text-gray-300 text-sm font-semibold transition-all cursor-pointer"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 rounded-lg bg-yellow-400 hover:bg-yellow-500 text-black text-sm font-bold shadow-lg transition-all cursor-pointer active:scale-[0.98]"
            >
              Guardar Cambios
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}