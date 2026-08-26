import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppContext } from "../../context/AppContext";

const Navbar = ({ busqueda, setBusqueda }) => {
  const [mostrarBuscador, setMostrarBuscador] = useState(false);
  const { isAuthenticated, logout } = useAppContext();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="bg-[#2f2f2f] text-white px-4 py-3 flex items-center justify-between border-b border-yellow-400">
      <div className="flex items-center gap-8">
        <Link to="/" className="flex items-center gap-1">
          <img
            src="/logotipo_inti2.png"
            alt="Logotipo de Inti"
            className=" w-32 "
          />
        </Link>

        <div className="flex gap-6 text-sm">
          <Link to="/" className="hover:text-yellow-400">
            Inicio
          </Link>

          <Link to="/peliculas" className="hover:text-yellow-400">
            Películas
          </Link>

          <Link to="/series" className="hover:text-yellow-400">
            Series
          </Link>

          <Link to="/mi-lista" className="hover:text-yellow-400">
            Mi Lista
          </Link>
        </div>
      </div>

      <div className="flex items-center gap-4">
        {mostrarBuscador && (
          <input
            type="text"
            placeholder="Buscar películas..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            className="bg-[#2f2f2f] text-white px-4 py-2 rounded border border-yellow-400"
          />
        )}
        <button
          onClick={() => setMostrarBuscador(!mostrarBuscador)}
          className="cursor-pointer"
        >
          <img
            src="/buscador.png"
            alt="Buscar"
            className="w-8 h-8 object-contain"
          />
        </button>

        {isAuthenticated ? (
          <div className="flex items-center gap-3">
            <Link
              to="/admin"
              className="text-sm hover:text-yellow-400 font-medium"
            >
              Admin
            </Link>
            <button
              onClick={handleLogout}
              className="text-sm bg-yellow-400 text-black px-3 py-1.5 rounded font-medium hover:brightness-90 cursor-pointer"
            >
              Cerrar sesión
            </button>
          </div>
        ) : (
          <Link to="/login">
            <img
              src="/usuario.png"
              alt="Usuario"
              className="w-10 h-10 object-contain"
            />
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;