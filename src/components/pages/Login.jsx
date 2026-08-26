import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../context/AppContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { login } = useAppContext();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (login(email, password)) {
      navigate("/admin");
    } else {
      setError("Usuario o contraseña incorrectos");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black bg-[radial-gradient(ellipse_at_top,_#1a1a1a_0%,_#000000_60%),radial-gradient(ellipse_at_bottom,_#131313_0%,_#000000_70%)] [background-blend-mode:screen] font-[Inter] p-6">
      <div className="bg-[#131313] border border-[#2A2A2A] rounded-lg px-10 pt-10 pb-8 w-full max-w-[420px] text-center">
        <img
          src="/imagotipo_inti3.png"
          alt="Inti"
          className="w-[100px] block mx-auto mb-4"
        />

        <h1 className="font-['Hanken_Grotesk'] font-bold text-3xl text-white mb-1">
          Bienvenido
        </h1>

        <p className="font-['JetBrains_Mono'] text-[0.7rem] font-medium text-[#FFD700] tracking-wide uppercase mb-2">
          Donde el cine brilla con luz propia
        </p>

        <p className="text-[#c7c7c7] text-sm mb-6">
          Ingresa a tu cuenta para continuar
        </p>

        <form onSubmit={handleSubmit} className="text-left">
          <label
            htmlFor="email"
            className="block font-['JetBrains_Mono'] text-[0.7rem] text-[#919191] uppercase tracking-wide mb-1"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="tu@email.com"
            className="w-full bg-[#0D0D0D] border border-[#2A2A2A] rounded text-white text-[0.95rem] px-4 py-3 mb-5 outline-none box-border focus:border-[#FFD700]"
          />

          <label
            htmlFor="password"
            className="block font-['JetBrains_Mono'] text-[0.7rem] text-[#919191] uppercase tracking-wide mb-1"
          >
            Contraseña
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            className="w-full bg-[#0D0D0D] border border-[#2A2A2A] rounded text-white text-[0.95rem] px-4 py-3 mb-6 outline-none box-border focus:border-[#FFD700]"
          />

          {error && (
            <p className="text-[#ffb4ab] text-sm mb-4 text-center">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="w-full bg-[#FFD700] text-black rounded font-bold text-base py-3.5 cursor-pointer transition-all duration-200 hover:shadow-[0_0_10px_rgba(255,215,0,0.6)] hover:scale-[1.02]"
          >
            Iniciar sesión
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;