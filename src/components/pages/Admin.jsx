import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  LuPlus,
  LuSearch,
  LuChevronLeft,
  LuChevronRight,
} from "react-icons/lu";
import Swal from "sweetalert2";
import { useAppContext } from "../../context/AppContext";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
import MetricasCrud from "./MetricasCrud";
import ItemTabla from "./ItemTabla";
import FormularioPeliculas from "./FormularioPeliculas";

const Admin = () => {
  const { id: editId } = useParams();
  const navigate = useNavigate();

  const {
    movies,
    addMovie,
    editMovie,
    deleteMovie,
    togglePublished,
    toggleFeatured,
  } = useAppContext();

  // Estados locales para modal, edición, búsqueda y paginación
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [movieToEdit, setMovieToEdit] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Sincronizar parámetro de ruta /admin/:id con el modal de edición
  useEffect(() => {
    if (editId && movies.length > 0) {
      const targetMovie = movies.find(
        (m) => m.id?.toString().toLowerCase() === editId.toString().toLowerCase()
      );
      if (targetMovie) {
        setMovieToEdit(targetMovie);
        setIsModalOpen(true);
      }
    }
  }, [editId, movies]);

  // Filtrado exclusivo por título
  const filteredMovies = movies.filter((movie) => {
    const term = searchTerm.toLowerCase().trim();
    if (!term) return true;

    return movie.titulo?.toLowerCase().includes(term);
  });

  // Paginación
  const totalPages = Math.ceil(filteredMovies.length / itemsPerPage) || 1;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentMovies = filteredMovies.slice(startIndex, endIndex);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  // Abrir modal para añadir
  const handleOpenAddModal = () => {
    setMovieToEdit(null);
    setIsModalOpen(true);
    navigate("/admin");
  };

  // Abrir modal para editar (actualiza ruta a /admin/:id)
  const handleOpenEditModal = (movie) => {
    setMovieToEdit(movie);
    setIsModalOpen(true);
    navigate(`/admin/${movie.id}`);
  };

  // Cerrar modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setMovieToEdit(null);
    navigate("/admin");
  };

  // Guardar película (Añadir o Editar)
  const handleSaveMovie = (movieData) => {
    if (movieToEdit) {
      editMovie(movieData);
      Swal.fire({
        title: "¡Actualizada!",
        text: `La película "${movieData.titulo}" se actualizó correctamente.`,
        icon: "success",
        timer: 2000,
        showConfirmButton: false,
        background: "#18161b",
        color: "#ffffff",
      });
    } else {
      addMovie(movieData);
      Swal.fire({
        title: "¡Agregada!",
        text: `La película "${movieData.titulo}" se agregó al catálogo.`,
        icon: "success",
        timer: 2000,
        showConfirmButton: false,
        background: "#18161b",
        color: "#ffffff",
      });
    }
    handleCloseModal();
  };

  // Confirmar y eliminar película
  const handleDeleteMovie = (movie) => {
    Swal.fire({
      title: "¿Eliminar película?",
      text: `¿Estás seguro de que deseas eliminar "${movie.titulo}"? Esta acción no se puede deshacer.`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#eab308",
      cancelButtonColor: "#ef4444",
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
      background: "#18161b",
      color: "#ffffff",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteMovie(movie.id);
        Swal.fire({
          title: "¡Eliminada!",
          text: "La película ha sido eliminada del catálogo.",
          icon: "success",
          timer: 2000,
          showConfirmButton: false,
          background: "#18161b",
          color: "#ffffff",
        });

        // Ajustar página si era el único elemento
        if (currentMovies.length === 1 && currentPage > 1) {
          setCurrentPage(currentPage - 1);
        }
      }
    });
  };

  return (
    <div className="min-h-screen bg-[#0e0d11] text-white flex flex-col justify-between font-sans">
      {/* Navbar Oficial de Inti */}
      <div>
        <Navbar />

        {/* Contenido Principal */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Encabezado del Panel y Botón de Añadir */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-yellow-400 tracking-tight">
                Panel de Administración
              </h1>
              <p className="text-gray-400 text-sm mt-1">
                Gestiona el catálogo de contenido y las opciones de la plataforma.
              </p>
            </div>

            <button
              type="button"
              onClick={handleOpenAddModal}
              className="inline-flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-sm px-5 py-2.5 rounded-lg shadow-lg hover:shadow-yellow-400/20 transition-all cursor-pointer"
            >
              <LuPlus className="w-4 h-4 stroke-[2.5]" />
              <span>Añadir Película</span>
            </button>
          </div>

          {/* Tarjetas de Métricas */}
          <MetricasCrud movies={movies} />

          {/* Contenedor de la Tabla CRUD */}
          <div className="bg-[#18161b] border border-[#26242c] rounded-2xl overflow-hidden shadow-xl">
            {/* Cabecera de la Sección y Buscador */}
            <div className="p-6 border-b border-[#26242c] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <h2 className="text-lg font-bold text-yellow-400">
                Gestión de Películas
              </h2>

              <div className="relative w-full sm:w-80">
                <LuSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Buscar por título..."
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="w-full bg-[#26242c]/60 text-white placeholder-gray-400 text-sm rounded-lg pl-10 pr-4 py-2 border border-white/10 focus:outline-none focus:border-yellow-400/50 transition-colors"
                />
              </div>
            </div>

            {/* Tabla de Películas */}
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-[#26242c] text-xs font-semibold text-gray-400">
                    <th className="px-6 py-3.5">ID</th>
                    <th className="px-6 py-3.5">Título</th>
                    <th className="px-6 py-3.5">Categoría</th>
                    <th className="px-6 py-3.5">Estado</th>
                    <th className="px-6 py-3.5 text-center">Destacada</th>
                    <th className="px-6 py-3.5 text-right">Acciones</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#232129]/40">
                  {currentMovies.length > 0 ? (
                    currentMovies.map((movie, index) => (
                      <ItemTabla
                        key={movie.id}
                        movie={movie}
                        indexNumber={startIndex + index + 1}
                        onEdit={handleOpenEditModal}
                        onDelete={handleDeleteMovie}
                        onToggleStatus={togglePublished}
                        onToggleFeatured={toggleFeatured}
                      />
                    ))
                  ) : (
                    <tr>
                      <td
                        colSpan={6}
                        className="px-6 py-12 text-center text-gray-400 text-sm"
                      >
                        No se encontraron películas que coincidan con la búsqueda.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            {/* Pie de Tabla con Paginación */}
            <div className="px-6 py-4 border-t border-[#26242c] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
              <p>
                Mostrando {filteredMovies.length > 0 ? startIndex + 1 : 0} a{" "}
                {Math.min(endIndex, filteredMovies.length)} de{" "}
                {filteredMovies.length}
              </p>

              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="w-8 h-8 rounded flex items-center justify-center bg-[#25232a] text-gray-400 hover:text-white disabled:opacity-30 disabled:hover:text-gray-400 transition-colors cursor-pointer disabled:cursor-not-allowed"
                >
                  <LuChevronLeft className="w-4 h-4" />
                </button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => (
                    <button
                      key={page}
                      type="button"
                      onClick={() => handlePageChange(page)}
                      className={`w-8 h-8 rounded text-xs font-bold transition-all cursor-pointer ${
                        currentPage === page
                          ? "bg-yellow-400 text-black shadow-md"
                          : "bg-[#25232a] text-gray-400 hover:text-white"
                      }`}
                    >
                      {page}
                    </button>
                  )
                )}

                <button
                  type="button"
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages || totalPages === 0}
                  className="w-8 h-8 rounded flex items-center justify-center bg-[#25232a] text-gray-400 hover:text-white disabled:opacity-30 disabled:hover:text-gray-400 transition-colors cursor-pointer disabled:cursor-not-allowed"
                >
                  <LuChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Footer Oficial Inti Cinema */}
      <Footer />

      {/* Modal de Crear / Editar Película */}
      <FormularioPeliculas
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleSaveMovie}
        movieToEdit={movieToEdit}
        moviesList={movies}
      />
    </div>
  );
};

export default Admin;