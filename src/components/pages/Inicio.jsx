import { useState } from "react";
import Navbar from "../shared/Navbar";
import Hero from "../home/hero";
import Footer from "../shared/Footer";
import SeccionPeliculas from "../home/SeccionPeliculas";
import Buscador from "../home/Buscador";
import { useAppContext } from "../../context/AppContext";

const Inicio = () => {
  const [busqueda, setBusqueda] = useState("");

  const { movies } = useAppContext();

  const peliculasPublicadas = movies.filter(
    (pelicula) => pelicula.publicado
  );

  const peliculasTendencias = peliculasPublicadas.filter(
    (pelicula) => pelicula.categoria === "Tendencias"
  );

  const peliculasAccion = peliculasPublicadas.filter(
    (pelicula) =>
      pelicula.categoria === "Acción" &&
      pelicula.isFeatured === false
  );

  const peliculasComedia = peliculasPublicadas.filter(
    (pelicula) => pelicula.categoria === "Comedia"
  );

  return (
    <div className="min-h-screen bg-black">
      <Navbar
        busqueda={busqueda}
        setBusqueda={setBusqueda}
      />

      <main className="w-full">
        <div className="max-w-[1500px] mx-auto px-6">
          {busqueda === "" ? (
            <>
              <Hero />

              <SeccionPeliculas
                titulo="Tendencias"
                peliculas={peliculasTendencias}
              />

              <SeccionPeliculas
                titulo="Acción"
                peliculas={peliculasAccion}
              />

              <SeccionPeliculas
                titulo="Comedia"
                peliculas={peliculasComedia}
              />
            </>
          ) : (
            <Buscador
              peliculas={peliculasPublicadas}
              busqueda={busqueda}
            />
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Inicio;