import { Link } from "react-router-dom";

export const initialMovies = [
  {
  id: "1",
  titulo: "El diablo viste a la moda 2",
  categoria: "Tendencias",
  publicado: true,
  isFeatured: false,

  anio: "2026",
  duracion: "119 min",
  genero: "Comedia dramática",
  direccion: "David Frankel",
  guion: "Aline Brosh McKenna",
  reparto: [
    "Meryl Streep",
    "Anne Hathaway",
    "Emily Blunt",
    "Stanley Tucci",
  ],

  descripcion:
    "Miranda Priestly vuelve al mundo de la moda mientras Runway atraviesa nuevos desafíos y rivalidades dentro de una industria que cambió por completo.",

  imageUrl:
    "https://static.wikia.nocookie.net/doblaje/images/5/56/El_diablo_viste_a_lamoda2.jpg/revision/latest/scale-to-width-down/1000?cb=20260312164526&path-prefix=es",

  trailerEmbed:
    "https://www.youtube.com/embed/laIQnBssTzw?si=xUA3pupZdM6-gyo8",

  tags: ["Tendencias"],
},
  {
  id: "2",
  titulo: "Golpe bajo: El juego final",
  categoria: "Tendencias",
  publicado: true,
  isFeatured: false,

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
    "Un exjugador de fútbol americano encarcelado organiza junto a otros presos un equipo para enfrentarse a los guardias de la prisión.",

  imageUrl:
    "https://static.wikia.nocookie.net/doblaje/images/a/ac/Golpe_Bajo_El_Juego_Final.png/revision/latest?cb=20140102094729&path-prefix=es",

  trailerEmbed:
    "https://www.youtube.com/embed/HBz1rR7TK6I?list=PLaC2qY5tgPsxHX70M7EgrIY4v2tbYCQPE",

  tags: ["Tendencias", "Deporte"],
},

{
  id: "3",
  titulo: "Nando: Entre dos mundos",
  categoria: "Tendencias",
  publicado: true,
  isFeatured: false,

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
    "Nando queda atrapado entre dos realidades mientras intenta encontrar su lugar y resolver los conflictos que cambian su vida.",

  imageUrl:
    "https://static.wikia.nocookie.net/doblaje/images/7/7b/Nando_entre_dos_mundos_-_Poster.jpg/revision/latest?cb=20260814185330&path-prefix=es",

  trailerEmbed:
    "https://www.youtube.com/embed/g9ymQv7BD04?si=eMRm4YW4kG002SW",

  tags: ["Tendencias", "Drama"],
},
  {
  id: "4",
  titulo: "Alien: Romulus",
  categoria: "Tendencias",
  publicado: true,
  isFeatured: false,

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
    "Daniel Betts",
  ],

  descripcion:
    "Un grupo de jóvenes exploradores se enfrenta a una de las formas de vida más aterradoras del universo mientras investiga una estación espacial abandonada.",

  imageUrl:
    "https://static.wikia.nocookie.net/doblaje/images/5/54/Alien_Romulus.webp/revision/latest/scale-to-width-down/1000?cb=20240723232701&path-prefix=es",

  trailerEmbed:
    "https://www.youtube.com/embed/SevrcuQcS6g?si=UnKbwc3GaMfEiuvR",

  tags: ["Tendencias", "Ciencia ficción"],
},
  {
  id: "14",
  titulo: "Oppenheimer",
  categoria: "Tendencias",
  publicado: true,
  isFeatured: false,

  anio: "2023",
  duracion: "180 min",
  genero: "Biografía, Drama, Historia",
  direccion: "Christopher Nolan",
  guion: "Christopher Nolan",
  reparto: [
    "Cillian Murphy",
    "Emily Blunt",
    "Matt Damon",
    "Robert Downey Jr.",
  ],

  descripcion:
    "La historia del físico estadounidense J. Robert Oppenheimer y su papel en el desarrollo de la bomba atómica durante la Segunda Guerra Mundial.",

  imageUrl:
    "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",

  trailerEmbed:
    "https://www.youtube.com/embed/gMPEbJQun68?si=sm_O4dyfVtvh_7Ch",

  tags: ["Oscar", "Christopher Nolan"],
},
  {
  id: "15",
  titulo: "Spider-Man: A través del Spider-Verso",
  categoria: "Tendencias",
  publicado: true,
  isFeatured: false,

  anio: "2023",
  duracion: "140 min",
  genero: "Animación, Acción, Aventura",
  direccion: "Joaquim Dos Santos, Kemp Powers, Justin K. Thompson",
  guion: "Phil Lord, Christopher Miller, Dave Callaham",
  reparto: [
    "Shameik Moore",
    "Hailee Steinfeld",
    "Brian Tyree Henry",
    "Jake Johnson",
    "Oscar Isaac",
  ],

  descripcion:
    "Miles Morales viaja por el Multiverso y se une a un equipo de Spider-People para enfrentar una amenaza que pondrá a prueba su destino como héroe.",

  imageUrl:
    "https://static.wikia.nocookie.net/doblaje/images/8/89/FurcXefakAYv8Sc.jpeg/revision/latest/scale-to-width-down/1000?cb=20230427140834&path-prefix=es",

  trailerEmbed:
    "https://www.youtube.com/embed/oBmazlyP220?si=Sbh45qteh8OMjj0o",

  tags: ["Marvel", "Animación"],
},
  {
  id: "5",
  titulo: "El botín",
  categoria: "Acción",
  publicado: true,
  isFeatured: false,

  anio: "2026",
  duracion: "1 h 52 min",
  genero: "Acción, Suspenso, Crimen",
  direccion: "Joe Carnahan",
  guion: "Joe Carnahan",
  reparto: [
    "Matt Damon",
    "Ben Affleck",
    "Steven Yeun",
    "Teyana Taylor",
  ],

  descripcion:
    "Un grupo de policías descubre una enorme suma de dinero y el hallazgo pone a prueba sus lealtades mientras crecen las sospechas dentro del equipo.",

  imageUrl:
    "https://static.wikia.nocookie.net/doblaje/images/0/06/El_Bot%C3%ADn_-_Poster.jpg/revision/latest?cb=20260203034723&path-prefix=es",

  trailerEmbed:
    "https://www.youtube.com/embed/5Ezk_kY0jxo?si=lg0iokpwwckrKolJ",

  tags: ["Acción", "Suspenso"],
},
  {
  id: "6",
  titulo: "Equipo demolición",
  categoria: "Acción",
  publicado: true,
  isFeatured: false,

  anio: "2026",
  duracion: "124 min",
  genero: "Acción, Comedia, Crimen",
  direccion: "Ángel Manuel Soto",
  guion: "Jonathan Tropper",
  reparto: [
    "Dave Bautista",
    "Jason Momoa",
    "Claes Bang",
    "Temuera Morrison",
    "Jacob Batalon",
    "Frankie Adams",
    "Stephen Root",
    "Morena Baccarin",
  ],

  descripcion:
    "Dos hermanos distanciados se reúnen para investigar una muerte familiar y terminan enfrentándose a una peligrosa conspiración.",

  imageUrl:
    "https://static.wikia.nocookie.net/doblaje/images/9/92/Poster-TWC.jpg/revision/latest/scale-to-width-down/1000?cb=20260124021506&path-prefix=es",

  trailerEmbed:
    "https://www.youtube.com/embed/fQcGIqghfjE?si=GJCt92SorDg2k_a2",

  tags: ["Acción", "Comedia"],
},
  {
  id: "7",
  titulo: "Mortal Kombat II",
  categoria: "Acción",
  publicado: true,
  isFeatured: false,

  anio: "2026",
  duracion: "116 min",
  genero: "Acción, Aventura, Fantasía",
  direccion: "Simon McQuoid",
  guion: "Jeremy Slater",
  reparto: [
    "Adeline Rudolph",
    "Karl Urban",
    "Martyn Ford",
    "Tati Gabrielle",
    "Jessica McNamee",
    "Mehcad Brooks",
    "Ludi Lin",
  ],

  descripcion:
    "Los campeones del Reino de la Tierra regresan para enfrentar una nueva amenaza en un combate que decidirá el destino de su mundo.",

  imageUrl:
    "https://static.wikia.nocookie.net/doblaje/images/b/b1/Mortal_Kombat_2_-_P%C3%B3ster.jpg/revision/latest/scale-to-width-down/1000?cb=20260228000124&path-prefix=es",

  trailerEmbed:
    "https://www.youtube.com/embed/-S-TTb0iXzw?si=jv7Q7zteSjerHNtP",

  tags: ["Acción", "Fantasía"],
},
  {
  id: "8",
  titulo: "Psycho Killer: Asesino serial",
  categoria: "Acción",
  publicado: true,
  isFeatured: false,

  anio: "2026",
  duracion: "91 min",
  genero: "Terror, Suspenso, Crimen",
  direccion: "Gavin Polone",
  guion: "Andrew Kevin Walker",
  reparto: [
    "Georgina Campbell",
    "James Preston Rogers",
    "Malcolm McDowell",
    "Logan Miller",
    "Grace Dove",
  ],

  descripcion:
    "Una agente de policía inicia una persecución para encontrar a un peligroso asesino después de que un crimen sacuda su vida personal.",

  imageUrl:
    "https://www.themoviedb.org/t/p/w1280/5xgxxmLivJXL8aF0HdZfpx8aAIo.jpg",

  trailerEmbed:
    "https://www.youtube.com/embed/l4i7yM-zQDc?si=Gy1eSaMcCUcJoSGk",

  tags: ["Acción", "Suspenso"],
},
  {
  id: "16",
  titulo: "Batman: El caballero de la noche",
  categoria: "Acción",
  publicado: true,
  isFeatured: false,

  anio: "2008",
  duracion: "152 min",
  genero: "Acción, Crimen, Drama",
  direccion: "Christopher Nolan",
  guion: "Jonathan Nolan, Christopher Nolan",
  reparto: [
    "Christian Bale",
    "Heath Ledger",
    "Aaron Eckhart",
    "Michael Caine",
    "Maggie Gyllenhaal",
    "Gary Oldman",
    "Morgan Freeman",
  ],

  descripcion:
    "Cuando el Joker siembra el caos en Gotham City, Batman debe afrontar una de las mayores pruebas de su lucha contra la injusticia.",

  imageUrl:
    "https://static.wikia.nocookie.net/doblaje/images/9/9c/Batman_el_Caballero_de_la_Noche.png/revision/latest/scale-to-width-down/1000?cb=20110602012240&path-prefix=es",

  trailerEmbed:
    "https://www.youtube.com/embed/dzQtWkpc2-c?si=CpUrEK0lUmwL04bI",

  tags: ["DC", "Acción"],
},
  {
  id: "17",
  titulo: "Vengadores: Endgame",
  categoria: "Acción",
  publicado: true,
  isFeatured: false,

  anio: "2019",
  duracion: "181 min",
  genero: "Acción, Aventura, Ciencia ficción",
  direccion: "Anthony Russo, Joe Russo",
  guion: "Christopher Markus, Stephen McFeely",
  reparto: [
    "Robert Downey Jr.",
    "Chris Evans",
    "Mark Ruffalo",
    "Chris Hemsworth",
    "Scarlett Johansson",
    "Jeremy Renner",
  ],

  descripcion:
    "Después de los devastadores acontecimientos de Infinity War, los Vengadores restantes buscan una forma de revertir las pérdidas y restaurar el universo.",

  imageUrl:
    "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",

  trailerEmbed:
    "https://www.youtube.com/embed/sOWXQ5dj6qU?si=AmKTuqwYzTh6X0LS",

  tags: ["Marvel", "Acción"],
},
  {
  id: "9",
  titulo: "Bolas arriba",
  categoria: "Comedia",
  publicado: true,
  isFeatured: false,

  anio: "2026",
  duracion: "104 min",
  genero: "Comedia, Acción, Aventura",
  direccion: "Peter Farrelly",
  guion: "Paul Wernick, Rhett Reese",
  reparto: [
    "Mark Wahlberg",
    "Paul Walter Hauser",
    "Sacha Baron Cohen",
    "Benjamin Bratt",
    "Eva De Dominici",
    "Daniela Melchior",
    "Molly Shannon",
  ],

  descripcion:
    "Una celebración descontrolada transforma una oportunidad profesional en un problema enorme y obliga a sus protagonistas a intentar reparar el desastre.",

  imageUrl:
    "https://static.wikia.nocookie.net/doblaje/images/0/07/BA_-_Poster.jpg/revision/latest/scale-to-width-down/1000?cb=20260320051717&path-prefix=es",

  trailerEmbed:
    "https://www.youtube.com/embed/S2wHq8Fw8Ko?si=wL-ZaTh96J8B2X1w",

  tags: ["Comedia"],
},
  {
  id: "10",
  titulo: "El ciudadano ilustre",
  categoria: "Comedia",
  publicado: true,
  isFeatured: false,

  anio: "2016",
  duracion: "118 min",
  genero: "Comedia, Drama",
  direccion: "Mariano Cohn, Gastón Duprat",
  guion: "Andrés Duprat",
  reparto: [
    "Oscar Martínez",
    "Dady Brieva",
    "Andrea Frigerio",
    "Nora Navas",
    "Belén Chavanne",
    "Manuel Vicente",
  ],

  descripcion:
    "Un escritor argentino ganador del Premio Nobel regresa a su pueblo natal y vuelve a encontrarse con las personas y conflictos que inspiraron gran parte de su obra.",

  imageUrl:
    "https://cartelera.elpais.com/assets/uploads/2019/11/15030156/C_15234.jpg",

  trailerEmbed:
    "https://www.youtube.com/embed/yTZPfrAIHAw?si=23NWGQ9C855YmfLQ",

  tags: ["Comedia", "Argentina"],
},
  {
  id: "11",
  titulo: "Parque Lezama",
  categoria: "Comedia",
  publicado: true,
  isFeatured: false,

  anio: "2026",
  duracion: "115 min",
  genero: "Comedia, Drama",
  direccion: "Juan José Campanella",
  guion: "Juan José Campanella, Herb Gardner",
  reparto: [
    "Luis Brandoni",
    "Eduardo Blanco",
    "Verónica Pelaccini",
    "Agustín Aristarán",
    "Manuela Menéndez",
  ],

  descripcion:
    "Dos hombres muy diferentes entablan una inesperada amistad a partir de sus encuentros y conversaciones en el Parque Lezama.",

  imageUrl:
    "https://digg-posts-prod-958054887.imgix.net/anygoodmovies-BYlddza/911ae0c519dd08e416a5d49337db4a9d?auto=format%2Ccompress&fit=crop&h=800&w=600",

  trailerEmbed:
    "https://www.youtube.com/embed/K1ATGws0p10?si=rxEmeukpaVpGhCW5",

  tags: ["Comedia", "Argentina"],
},
  {
  id: "12",
  titulo: "Turbulencia en la oficina",
  categoria: "Comedia",
  publicado: true,
  isFeatured: false,

  anio: "2026",
  duracion: "114 min",
  genero: "Comedia, Romance",
  direccion: "Ol Parker",
  guion: "Brett Goldstein, Joe Kelly",
  reparto: [
    "Jennifer Lopez",
    "Brett Goldstein",
    "Betty Gilpin",
    "Bradley Whitford",
    "Amy Sedaris",
    "Edward James Olmos",
    "Jodie Whittaker",
    "Mary Wiseman",
    "Tony Hale",
  ],

  descripcion:
    "Una estricta política contra los romances en el trabajo se vuelve difícil de sostener cuando la atracción aparece dentro de la propia oficina.",

  imageUrl:
    "https://static.wikia.nocookie.net/doblaje/images/6/66/OfficeRomanceposterspanishNetflix.png/revision/latest?cb=20260606062740&path-prefix=es",

  trailerEmbed:
    "https://www.youtube.com/embed/ElS0kSQziPw?si=IArwL8fgEPGcT3Y7",

  tags: ["Comedia", "Romance"],
},
  {
  id: "18",
  titulo: "Intensamente 2",
  categoria: "Comedia",
  publicado: true,
  isFeatured: false,

  anio: "2024",
  duracion: "96 min",
  genero: "Animación, Comedia, Familia",
  direccion: "Kelsey Mann",
  guion: "Meg LeFauve, Dave Holstein",
  reparto: [
    "Amy Poehler",
    "Maya Hawke",
    "Kensington Tallman",
    "Liza Lapira",
    "Tony Hale",
    "Lewis Black",
    "Phyllis Smith",
  ],

  descripcion:
    "Riley entra en la adolescencia y sus emociones deben hacer lugar a otras nuevas que llegan para cambiar por completo su mundo interior.",

  imageUrl:
    "https://image.tmdb.org/t/p/w500/vpnVM9B6NMmQpWeZvzLvDESb2QY.jpg",

  trailerEmbed:
    "https://www.youtube.com/embed/9bol4Yyx9Gs?si=sgMzEwHaTe7GO2fu",

  tags: ["Pixar", "Familia"],
},
  {
  id: "19",
  titulo: "Volver al Futuro III",
  categoria: "Comedia",
  publicado: true,
  isFeatured: false,

  anio: "1990",
  duracion: "118 min",
  genero: "Comedia, Ciencia ficción, Aventura, Western",
  direccion: "Robert Zemeckis",
  guion: "Bob Gale, Robert Zemeckis",
  reparto: [
    "Michael J. Fox",
    "Christopher Lloyd",
    "Mary Steenburgen",
    "Thomas F. Wilson",
    "Lea Thompson",
    "Elisabeth Shue",
  ],

  descripcion:
    "Marty McFly viaja al año 1885 para rescatar a Doc Brown, quien ha quedado atrapado en el Viejo Oeste. Juntos deberán encontrar una forma de regresar al futuro antes de que sea demasiado tarde.",

  imageUrl:
    "https://static.wikia.nocookie.net/doblaje/images/9/9a/Volver_al_Futuro_III_Poster.jpg/revision/latest/scale-to-width-down/1000?cb=20201122065552&path-prefix=es",

  trailerEmbed:
    "https://www.youtube.com/embed/WmBX7CA-AAc?si=gSbo_3_6yZFO9Uhf",

  tags: ["Clásico", "Aventura"],
},
  {
  id: "13",
  titulo: "La guerra de los últimos",
  categoria: "Acción",
  publicado: true,
  isFeatured: true,

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
    "Después de sobrevivir a una devastadora pandemia, un piloto vive aislado en un aeródromo fortificado. Una misteriosa transmisión de radio despierta la esperanza de encontrar otros sobrevivientes.",

  imageUrl:
    "https://static.wikia.nocookie.net/doblaje/images/a/a9/La_guerra_de_los_%C3%BAltimos_teaser_poster.jpg/revision/latest/scale-to-width-down/1000?cb=20260416234108&path-prefix=es",

  imagenHero: "/la-guerra-de-los-ultimos-horizontal.jpg",
  link: "https://www.youtube.com/watch?v=A1PP0ZxHGcM",

  trailerEmbed:
    "https://www.youtube.com/embed/A1PP0ZxHGcM?si=ugzre5CAtRHSiiyS",

  tags: ["Estreno", "Destacada"],
},
];

export default initialMovies;