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
      <h1
        style={{
          fontSize: "6rem",
          margin: 0,
          color: "#f5c518",
          letterSpacing: "2px",
        }}
      >
        404
      </h1>

      <h2
        style={{
          fontSize: "1.8rem",
          margin: "0.5rem 0 1rem",
          color: "#f5f5f5",
        }}
      >
        Esta película no está en cartelera
      </h2>

      <p
        style={{
          color: "#a0a0a0",
          maxWidth: "400px",
          marginBottom: "2rem",
        }}
      >
        La página que buscás no existe o fue movida. Volvé al catálogo y seguí explorando.
      </p>

      <Link
        to="/"
        style={{
          backgroundColor: "#f5c518",
          color: "#0d0d0d",
          padding: "0.75rem 2rem",
          borderRadius: "6px",
          fontWeight: "bold",
          textDecoration: "none",
        }}
      >
        Volver al inicio
      </Link>
    </div>
  );
};

export default Error404;