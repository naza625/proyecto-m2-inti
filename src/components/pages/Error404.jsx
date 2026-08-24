import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#000000",
        color: "#e2e2e2",
        textAlign: "center",
        padding: "2rem",
        fontFamily: "Inter, sans-serif",
      }}
    >
      <div style={{ fontSize: "3.5rem", marginBottom: "1rem" }}>🎬</div>

      <h1
        style={{
          fontFamily: "'Hanken Grotesk', sans-serif",
          fontSize: "5rem",
          fontWeight: 700,
          margin: 0,
          color: "#FFD700",
          letterSpacing: "-0.02em",
        }}
      >
        404
      </h1>

      <h2
        style={{
          fontFamily: "'Hanken Grotesk', sans-serif",
          fontSize: "2rem",
          fontWeight: 600,
          margin: "0.5rem 0 1.5rem",
          color: "#ffffff",
        }}
      >
        ¡Corte! Escena no encontrada
      </h2>

      <p
        style={{
          color: "#c7c7c7",
          maxWidth: "480px",
          marginBottom: "2.5rem",
          lineHeight: "1.6",
          fontSize: "1rem",
        }}
      >
        Parece que esta película no está en nuestro catálogo o el rollo de
        cinta se ha roto en el proyector. Revisa la URL o vuelve a la
        cartelera principal.
      </p>

      <Link
        to="/"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          backgroundColor: "#FFD700",
          color: "#000000",
          padding: "0.9rem 2.2rem",
          borderRadius: "4px",
          fontWeight: 700,
          textDecoration: "none",
          fontSize: "1.05rem",
          transition: "all 0.2s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = "0 0 10px rgba(255, 215, 0, 0.6)";
          e.currentTarget.style.transform = "scale(1.02)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = "none";
          e.currentTarget.style.transform = "scale(1)";
        }}
      >
        🏠 Volver al Inicio
      </Link>
    </div>
  );
};

export default Error404;