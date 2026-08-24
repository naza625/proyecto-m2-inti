import { useState } from "react";
import Navbar from "../shared/Navbar";

import Hero from "../home/hero";
//import {loadMovies} from "../../helpers/movieStorage";
import Footer from "../shared/Footer";
import SeccionPeliculas from "../home/SeccionPeliculas";
import Buscador from "../home/Buscador";

const peliculasTendencias = [
  {
    id: 1,
    nombre: "El diablo viste a la moda 2",
    imagen:
      "https://static.wikia.nocookie.net/doblaje/images/5/56/El_diablo_viste_a_lamoda2.jpg/revision/latest/scale-to-width-down/1000?cb=20260312164526&path-prefix=es",
  },
  {
    id: 2,
    nombre: "Golpe bajo: El juego final",
    imagen:
      "https://static.wikia.nocookie.net/doblaje/images/a/ac/Golpe_Bajo_El_Juego_Final.png/revision/latest?cb=20140102094729&path-prefix=es",
  },
  {
    id: 3,
    nombre: "Nando: Entre dos mundos",
    imagen:
      "https://static.wikia.nocookie.net/doblaje/images/7/7b/Nando_entre_dos_mundos_-_Poster.jpg/revision/latest?cb=20260814185330&path-prefix=es",
  },
  {
    id: 4,
    nombre: "Alien: Romulus",
    imagen:
      "https://static.wikia.nocookie.net/doblaje/images/5/54/Alien_Romulus.webp/revision/latest/scale-to-width-down/1000?cb=20240723232701&path-prefix=es",
  },
];
const peliculasAccion = [
  {
    id: 5,
    nombre: "El botín",
    imagen:
      "https://static.wikia.nocookie.net/doblaje/images/0/06/El_Bot%C3%ADn_-_Poster.jpg/revision/latest?cb=20260203034723&path-prefix=es",
  },
  {
    id: 6,
    nombre: "Equipo demolición",
    imagen:
      "https://static.wikia.nocookie.net/doblaje/images/9/92/Poster-TWC.jpg/revision/latest/scale-to-width-down/1000?cb=20260124021506&path-prefix=es",
  },
  {
    id: 7,
    nombre: "Mortal Kombat II",
    imagen:
      "https://static.wikia.nocookie.net/doblaje/images/b/b1/Mortal_Kombat_2_-_P%C3%B3ster.jpg/revision/latest/scale-to-width-down/1000?cb=20260228000124&path-prefix=es",
  },
  {
    id: 8,
    nombre: "Psycho Killer",
    imagen:
      "https://www.themoviedb.org/t/p/w1280/5xgxxmLivJXL8aF0HdZfpx8aAIo.jpg",
  },
];

const peliculasComedia = [
  {
    id: 9,
    nombre: "Bolas arriba",
    imagen:
      "https://static.wikia.nocookie.net/doblaje/images/0/07/BA_-_Poster.jpg/revision/latest/scale-to-width-down/1000?cb=20260320051717&path-prefix=es",
  },
  {
    id: 10,
    nombre: "El ciudadano ilustre",
    imagen:
      "https://cartelera.elpais.com/assets/uploads/2019/11/15030156/C_15234.jpg",
  },
  {
    id: 11,
    nombre: "Parque Lezama",
    imagen:
      "https://digg-posts-prod-958054887.imgix.net/anygoodmovies-BYlddza/911ae0c519dd08e416a5d49337db4a9d?auto=format%2Ccompress&fit=crop&h=800&w=600",
  },
  {
    id: 12,
    nombre: "Turbulencia en la oficina",
    imagen:
      "https://static.wikia.nocookie.net/doblaje/images/6/66/OfficeRomanceposterspanishNetflix.png/revision/latest?cb=20260606062740&path-prefix=es",
  },
];
const todasLasPeliculas = [
  ...peliculasTendencias,
  ...peliculasAccion,
  ...peliculasComedia,
];

const Inicio = () => {
  const [busqueda, setBusqueda] = useState("");
  // const movies = loadMovies();
  // const featuredMovie =
  // movies.find((movie) => movie.isFeatured) || movies[0]; // Si no se encuentra ninguna película destacada, se recurrirá a la primera película.
  return (
    <div className="min-h-screen bg-black">
      <Navbar busqueda={busqueda} setBusqueda={setBusqueda} />

      <main className="w-full">
        <div className="max-w-[1500px] mx-auto px-6">
          {busqueda === "" ? (
            <>
              <Hero />

              <SeccionPeliculas
                titulo="Tendencias"
                peliculas={peliculasTendencias}
              />

              <SeccionPeliculas titulo="Acción" peliculas={peliculasAccion} />

              <SeccionPeliculas titulo="Comedia" peliculas={peliculasComedia} />
            </>
          ) : (
            <Buscador peliculas={todasLasPeliculas} busqueda={busqueda} />
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Inicio;
