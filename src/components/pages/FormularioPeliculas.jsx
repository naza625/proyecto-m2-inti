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
    
        </form>
      </div>
    </div>
  );
}