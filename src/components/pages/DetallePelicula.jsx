import { useParams } from "react-router";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
import TarjetaPelicula from "../home/TarjetaPelicula";

const peliculas = [
  {
    id: "1",
    nombre: "El diablo viste a la moda 2",
    anio: "2026",
    genero: "Comedia dramática",
    direccion: "David Frankel",
    guion: "Aline Brosh McKenna",
    reparto: ["Meryl Streep", "Anne Hathaway", "Emily Blunt", "Stanley Tucci"],
    descripcion:
      "Miranda Priestly, leyenda de la moda y directora de Runway, se enfrenta a una nueva amenaza: Emily Charlton, su ambiciosa exasistente ahora convertida en poderosa ejecutiva de una empresa rival.",
    categoria: "Tendencias",
    imagen:
      "https://static.wikia.nocookie.net/doblaje/images/5/56/El_diablo_viste_a_lamoda2.jpg/revision/latest/scale-to-width-down/1000?cb=20260312164526&path-prefix=es",
    trailerEmbed:
      "https://www.youtube.com/embed/laIQnBssTzw?si=xUA3pupZdM6-gyo8",
  },
  {
    id: "2",
    nombre: "Golpe bajo: El juego final",
    anio: "2005",
    duracion: "113 min",
    genero: "Comedia, Drama carcelario, Deporte",
    direccion: "Peter Segal, Sheldon Turner",
    guion: "John Singleton",
    reparto: [
      "Adam Sandler",
      "Chris Rock",
      "Burt Reynolds",
      "Nelly",
      "Michael Irvin",
      "Terry Crews",
      "Bill Goldberg",
      "Bob Sapp",
      "Dalip Singh",
      "Nicholas Turturro",
      "Tracy Morgan",
      "James Cromwell",
      "William Fichtner",
      "Steve Austin",
      "Kevin Nash",
      "Brian Bosworth",
      "Courteney Cox",
      "Cloris Leachman",
      "Rob Schneider",
    ],
    descripcion:
      "Paul Crewe, un jugador de fútbol americano, y Nate Scarboro, entrenador y antiguo campeón, se encuentran cumpliendo condena en la misma prisión. Juntos deciden formar un equipo que juegue contra el de los guardias de la cárcel.",
    categoria: "Tendencias",
    imagen:
      "https://static.wikia.nocookie.net/doblaje/images/a/ac/Golpe_Bajo_El_Juego_Final.png/revision/latest?cb=20140102094729&path-prefix=es",
    trailerEmbed:
      "https://www.youtube.com/embed/HBz1rR7TK6I?list=PLaC2qY5tgPsxHX70M7EgrIY4v2tbYCQPE",
  },
  {
    id: "3",
    nombre: "Nando: Entre dos mundos",
    anio: "2026",
    duracion: "90 min",
    genero: "Comedia, Drama, Fantasía",
    direccion: "Juan Carlos Coto",
    guion: "Juan Carlos Coto",
    reparto: [
      "Christian Malheiros",
      "Jottapê",
      "Bruna Mascarenhas",
      "Duda Pimenta",
      "Julia Yamaguchi",
      "Henrique Santana",
      "Pedro Pereira Vicente",
      "Marcelo Salazar",
      "Adri Duarte",
      "José Trassi",
      "Rosana Maris",
    ],
    descripcion:
      "Nando, un joven que se lanza a la vida del crimen para vengar la muerte de su hermano, se encuentra con un dilema moral cuando descubre que su objetivo es un hombre honorable.",
    categoria: "Tendencias",
    imagen:
      "https://static.wikia.nocookie.net/doblaje/images/7/7b/Nando_entre_dos_mundos_-_Poster.jpg/revision/latest?cb=20260814185330&path-prefix=es",
    trailerEmbed:
      "https://www.youtube.com/embed/g9ymQv7BD04?si=eMRm4YW4kG002SW",
  },
  {
    id: "4",
    nombre: "Alien: Romulus",
    anio: "2024",
    duracion: "108 min",
    genero: "Ciencia ficción, Suspenso",
    direccion: "Fede Álvarez",
    guion: "Fede Álvarez",
    reparto: [
      "Cailee Spaeny",
      "David Jonsson",
      "Archie Renaux",
      "Isabela Merced",
      "Spike Fearn",
      "Aileen Wu",
      "Robert Bobroczkyi",
      "Daniel Betts.",
    ],
    descripcion:
      "En el año 2157, una nave espacial se encuentra en órbita alrededor de un planeta hostil. Una tripulación de exploradores descubre una misteriosa instalación subterránea que les lleva a enfrentarse a una amenaza letal.",
    categoria: "Tendencias",
    imagen:
      "https://static.wikia.nocookie.net/doblaje/images/5/54/Alien_Romulus.webp/revision/latest/scale-to-width-down/1000?cb=20240723232701&path-prefix=es",
    trailerEmbed:
      "https://www.youtube.com/embed/SevrcuQcS6g?si=UnKbwc3GaMfEiuvR",
  },
  {
    id: "13",
    nombre: "La guerra de los últimos",
    anio: "2026",
    duracion: "1 h 58 min",
    genero: "Ciencia ficción, Postapocalíptica",
    direccion: "Ridley Scott",
    guion: "Mark L. Smith",
    reparto: [
       "Jacob Elordi",
    "Josh Brolin",
    "Margaret Qualley",
    "Allison Janney",
    "Guy Pearce",
    "Benedict Wong",
    ],
    descripcion:
       "Hig, un joven piloto que sobrevivió a una devastadora gripe pandémica, vive aislado en un aeródromo fortificado junto a Bangley, un militar experto en supervivencia. Cuando capta una misteriosa transmisión de radio, recupera la esperanza de encontrar otros sobrevivientes y decide aventurarse más allá de los límites de su refugio.",
    categoria: "Acción",
    imagen:
      "https://static.wikia.nocookie.net/doblaje/images/a/a9/La_guerra_de_los_%C3%BAltimos_teaser_poster.jpg/revision/latest/scale-to-width-down/1000?cb=20260416234108&path-prefix=es",
    trailerEmbed:
      "https://www.youtube.com/embed/A1PP0ZxHGcM?si=ugzre5CAtRHSiiyS",
  }
];

const DetallePelicula = () => {
  const { id } = useParams();

  const peliculaEncontrada = peliculas.find(
    (pelicula) => pelicula.id === id
  );
  if (!peliculaEncontrada) {
    return <p className="text-white">Película no encontrada</p>;
  }
  const esPrincipal = peliculaEncontrada.id === "13";
  
  const peliculasRelacionadas = peliculas.filter(
    (pelicula) =>
      pelicula.categoria === peliculaEncontrada.categoria &&
      pelicula.id !== peliculaEncontrada.id,
  );

  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />

      <main className="px-10 py-10">
        <div className="flex gap-20">
          <img
            src={peliculaEncontrada.imagen}
            alt={peliculaEncontrada.nombre}
            className="w-130 rounded"
          />

          <div className="flex-1">
            
            {esPrincipal ? (
    <p className="text-yellow-400 text-xl font-bold">
      ESTRENO EXCLUSIVO INTI
      </p>
      ) :(
      <p className="text-yellow-400 font-semibold" 
> {peliculaEncontrada.categoria}</p>
  )}
  <h1 className={esPrincipal 
    ? "text-6xl font-bold mt-3" 
    : "text-4xl font-bold mt-3"}>
      {peliculaEncontrada.nombre}
    </h1>

            <p className="mt-4">
              {peliculaEncontrada.anio} • {peliculaEncontrada.genero}
            </p>

            <p className="mt-6">{peliculaEncontrada.descripcion}</p>
            {peliculaEncontrada.trailerEmbed && (
              <div className="mt-6 flex justify-center">
                <iframe
                  width="560"
                  height="315"
                  src={peliculaEncontrada.trailerEmbed}
                  title={`Tráiler de ${peliculaEncontrada.nombre}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            )}

            <p className="mt-8">Dirección: {peliculaEncontrada.direccion}</p>
            <p className="mt-3">Guion: {peliculaEncontrada.guion}</p>

            <p className="mt-3">
              Reparto: {peliculaEncontrada.reparto.join(", ")}
            </p>
          </div>
        </div>
      </main>
      {!esPrincipal && (
      <section className="px-10 py-10">
        <h2 className="text-2xl font-bold mb-8 text-center">Más como esta película</h2>

        <div className="flex flex-wrap justify-center gap-8">
          {peliculasRelacionadas.map((pelicula) => (
            <TarjetaPelicula key={pelicula.id} pelicula={pelicula} />
          ))}
        </div>
      </section>
      )}
      <Footer />
    </div>
  );
};

export default DetallePelicula;
