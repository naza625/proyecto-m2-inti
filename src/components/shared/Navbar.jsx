import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ busqueda, setBusqueda }) => {
 const [mostrarBuscador, setMostrarBuscador] = useState(false);

  return (
    <nav className="bg-[#2f2f2f] text-white px-4 py-3 flex items-center justify-between border-b border-yellow-400">
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-1">
          <img
            src="/logotipo_inti2.png"
            alt="Logotipo de Inti"
            className=" w-32 "
          />
        </div>

        <div className="flex gap-6 text-sm">
          <a href="/" className="hover:text-yellow-400">
            Inicio
          </a>

          <a href="#" className="hover:text-yellow-400">
            Películas
          </a>

          <a href="#" className="hover:text-yellow-400">
            Series
          </a>

          <a href="#" className="hover:text-yellow-400">
            Mi Lista
          </a>
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

        <Link to="/login" title="Panel de Administración">
          <img
            src="/usuario.png"
            alt="Usuario / Admin"
            className="w-10 h-10 object-contain"
          />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;