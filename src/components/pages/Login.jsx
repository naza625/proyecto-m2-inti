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
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#000000",
        backgroundImage:
          "radial-gradient(ellipse at top, #1a1a1a 0%, #000000 60%), radial-gradient(ellipse at bottom, #131313 0%, #000000 70%)",
        backgroundBlendMode: "screen",
        fontFamily: "Inter, sans-serif",
        padding: "1.5rem",
      }}
    >
      <div
        style={{
          backgroundColor: "#131313",
          border: "1px solid #2A2A2A",
          borderRadius: "8px",
          padding: "2.5rem 2.5rem 2rem",
          width: "100%",
          maxWidth: "420px",
          textAlign: "center",
        }}
      >
        <img
  src="/logo-inti.png"
  alt="Inti"
  style={{
    width: "100px",
    display: "block",
    margin: "0 auto 1rem",
  }}
/>

<h1
  style={{
    fontFamily: "'Hanken Grotesk', sans-serif",
    fontWeight: 700,
    fontSize: "1.8rem",
    color: "#ffffff",
    margin: "0 0 0.4rem",
  }}
>
  Bienvenido
</h1>

<p
  style={{
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: "0.7rem",
    fontWeight: 500,
    color: "#FFD700",
    letterSpacing: "0.05em",
    textTransform: "uppercase",
    margin: "0 0 0.6rem",
  }}
>
  Donde el cine brilla con luz propia
</p>

<p
  style={{
    color: "#c7c7c7",
    fontSize: "0.9rem",
    margin: "0 0 1.5rem",
  }}
>
  Ingresa a tu cuenta para continuar
</p>

        <form onSubmit={handleSubmit} style={{ textAlign: "left" }}>
          <label
            style={{
              display: "block",
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.7rem",
              color: "#919191",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              marginBottom: "0.4rem",
            }}
            htmlFor="email"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="tu@email.com"
            style={{
              width: "100%",
              backgroundColor: "#0D0D0D",
              border: "1px solid #2A2A2A",
              borderRadius: "4px",
              padding: "0.75rem 1rem",
              color: "#ffffff",
              fontSize: "0.95rem",
              marginBottom: "1.25rem",
              outline: "none",
              boxSizing: "border-box",
            }}
            onFocus={(e) => (e.target.style.borderColor = "#FFD700")}
            onBlur={(e) => (e.target.style.borderColor = "#2A2A2A")}
          />

          <label
            style={{
              display: "block",
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.7rem",
              color: "#919191",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              marginBottom: "0.4rem",
            }}
            htmlFor="password"
          >
            Contraseña
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            style={{
              width: "100%",
              backgroundColor: "#0D0D0D",
              border: "1px solid #2A2A2A",
              borderRadius: "4px",
              padding: "0.75rem 1rem",
              color: "#ffffff",
              fontSize: "0.95rem",
              marginBottom: "1.5rem",
              outline: "none",
              boxSizing: "border-box",
            }}
            onFocus={(e) => (e.target.style.borderColor = "#FFD700")}
            onBlur={(e) => (e.target.style.borderColor = "#2A2A2A")}
          />

          {error && (
            <p
              style={{
                color: "#ffb4ab",
                fontSize: "0.85rem",
                marginBottom: "1rem",
                textAlign: "center",
              }}
            >
              {error}
            </p>
          )}

          <button
            type="submit"
            style={{
              width: "100%",
              backgroundColor: "#FFD700",
              color: "#000000",
              border: "none",
              borderRadius: "4px",
              padding: "0.85rem",
              fontWeight: 700,
              fontSize: "1rem",
              cursor: "pointer",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow =
                "0 0 10px rgba(255, 215, 0, 0.6)";
              e.currentTarget.style.transform = "scale(1.02)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "none";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            Iniciar sesión
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
