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
        backgroundColor: "#0d0d0d",
        color: "#f5f5f5",
        textAlign: "center",
        padding: "2rem",
      }}
    >
      <div style={{ fontSize: "3.5rem", marginBottom: "1rem" }}>🎬</div>

      <h1
        style={{
          fontSize: "5rem",
          margin: 0,
          color: "#f5c518",
          fontWeight: "bold",
        }}
      >
        404
      </h1>

      <h2
        style={{
          fontSize: "2rem",
          margin: "0.5rem 0 1.5rem",
          color: "#f5f5f5",
          fontWeight: "bold",
        }}
      >
        ¡Corte! Escena no encontrada
      </h2>

      <p
        style={{
          color: "#b5b5b5",
          maxWidth: "480px",
          marginBottom: "2.5rem",
          lineHeight: "1.6",
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
          backgroundColor: "#f5c518",
          color: "#0d0d0d",
          padding: "0.9rem 2.2rem",
          borderRadius: "8px",
          fontWeight: "bold",
          textDecoration: "none",
          fontSize: "1.05rem",
        }}
      >
        🏠 Volver al Inicio
      </Link>
    </div>
  );
};

export default Error404;