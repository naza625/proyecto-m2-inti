# 🎬 INTI Cinema

<div align="center">

<img src="./public/imagotipo_inti3.png" alt="Logo INTI Cinema" width="220" />

### Plataforma web de películas desarrollada con React

**Proyecto Integrador - Módulo 2 | RollingCode School**

![React](https://img.shields.io/badge/React-19.x-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-8.x-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-4.x-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-7.x-CA4245?style=for-the-badge&logo=react-router&logoColor=white)

</div>

---

## 📌 Sobre INTI

**INTI Cinema** es una aplicación web de películas desarrollada como proyecto integrador del Módulo 2 de la formación Full Stack Developer en RollingCode School.

El proyecto propone una experiencia inspirada en plataformas de cine y streaming, donde los usuarios pueden recorrer un catálogo, buscar películas, visualizar información detallada y acceder a sus tráileres.

Además, cuenta con un área privada de administración desde donde se puede gestionar el catálogo mediante operaciones CRUD.



## ☀️ ¿Por qué elegimos el nombre INTI?

Elegimos el nombre **INTI** porque hace referencia al dios del Sol en la cultura andina.

La elección se relaciona directamente con el concepto visual y simbólico del proyecto: el cine también nace de la luz. La proyección, la pantalla y la imagen cinematográfica dependen de ella, por eso buscamos unir las ideas de **sol, luz y cine** dentro de una misma identidad.

A partir de ese concepto desarrollamos una estética basada en:

- Negro, como referencia al ambiente cinematográfico y la sala oscura.
- Amarillo y dorado, asociados al sol, la luz y la energía.
- Recursos visuales vinculados al cine y al símbolo solar.
- Una identidad que busca diferenciar a INTI de otras plataformas audiovisuales.

El nombre también permite vincular el proyecto con una referencia cultural latinoamericana y andina, aportándole una identidad propia.

## 🌐 Demo

La demo se puede ver en [INTI Cinema](https://inti-cinema.netlify.app/).

---

## ✨ Funcionalidades principales

### 👤 Vista pública

- Visualización de una película destacada en el Hero.
- Catálogo de películas publicadas.
- Organización del contenido por categorías.
- Secciones de Tendencias, Acción y Comedia.
- Buscador de películas en tiempo real.
- Navegación mediante React Router.
- Página de detalle individual para cada película.
- Visualización de sinopsis, año, duración, género, dirección y reparto.
- Acceso al tráiler de las películas.
- Página de Error 404 para rutas no desarrolladas.
- Diseño responsive para diferentes tamaños de pantalla.

### 🔐 Área de administración

- Inicio de sesión de administrador.
- Persistencia de sesión.
- Protección de rutas privadas.
- Panel de administración.
- Listado de películas.
- Alta de nuevas películas.
- Edición de películas existentes.
- Eliminación de películas.
- Cambio de estado entre publicada y no publicada.
- Selección de película destacada.
- Métricas generales del catálogo.
- Persistencia de los cambios mediante LocalStorage.

---

## 🛠️ Tecnologías utilizadas

| Tecnología | Uso en el proyecto |
|---|---|
| **React 19** | Desarrollo de la interfaz mediante componentes |
| **JavaScript** | Lógica y comportamiento de la aplicación |
| **Vite 8** | Entorno de desarrollo y construcción del proyecto |
| **Tailwind CSS 4** | Estilos y diseño responsive |
| **React Router DOM** | Navegación entre las distintas rutas |
| **React Context** | Manejo de estado global |
| **React Hook Form** | Manejo y validación de formularios |
| **SweetAlert2** | Alertas y confirmaciones |
| **React Icons** | Iconografía de interfaz |
| **LocalStorage** | Persistencia de datos y sesión |
| **Git** | Control de versiones |
| **GitHub** | Repositorio y trabajo colaborativo |

---

## 🎞️ Catálogo de películas

La página de inicio obtiene las películas desde el contexto global de la aplicación.

Solo se muestran en el catálogo las películas cuyo estado de publicación se encuentra habilitado.

Actualmente el contenido se organiza en:

- **Tendencias**
- **Acción**
- **Comedia**

Las películas pueden ser creadas, editadas, eliminadas, publicadas u ocultadas desde el panel de administración.

Los cambios realizados se almacenan en LocalStorage.

---

## ⭐ Película destacada

La aplicación permite seleccionar una película como destacada mediante la propiedad:

```js
isFeatured: true

La película destacada se muestra en el Hero de la página principal.

Cuando desde administración se selecciona una nueva película como destacada, la aplicación actualiza el estado de la película destacada anterior.

🔍 Buscador

El Navbar incluye un buscador que permite filtrar las películas publicadas.

Mientras el usuario realiza una búsqueda, la vista principal muestra los resultados que coinciden con el texto ingresado.

Cuando el campo de búsqueda está vacío, se vuelve a visualizar el Hero y el catálogo completo.

El flujo general del buscador es:

Usuario escribe
→ cambia el estado de búsqueda
→ se filtran las películas publicadas
→ React vuelve a renderizar
→ se muestran los resultados
🎬 Detalle de películas

Cada película puede acceder a una página de detalle mediante una ruta dinámica:

/detalle-pelicula/:id

En esta vista se puede mostrar información como:

Título.
Sinopsis.
Año.
Duración.
Género.
Dirección.
Guion.
Reparto.
Imagen.
Tráiler.

El parámetro :id permite identificar qué película debe mostrarse en cada detalle.

🛡️ Administración y CRUD

La aplicación cuenta con un panel de administración destinado a la gestión del catálogo.

Desde esta sección se pueden realizar las principales operaciones CRUD.

Crear

Agregar una nueva película al catálogo mediante un formulario.

Leer

Visualizar las películas disponibles desde el panel de administración.

Editar

Modificar los datos de una película existente.

Eliminar

Eliminar una película del catálogo.

Además, el administrador puede:

Publicar u ocultar películas.
Seleccionar la película destacada.
Consultar métricas generales.
Gestionar la información del catálogo.
🔐 Autenticación

El acceso a la administración requiere iniciar sesión.

Las credenciales no se encuentran escritas directamente dentro del código fuente, sino que se obtienen desde variables de entorno.

El proyecto utiliza:

VITE_EMAIL=
VITE_PASSWORD=

Para ejecutar el login correctamente es necesario crear un archivo .env en la raíz del proyecto.

Ejemplo:

VITE_EMAIL=correo_admin
VITE_PASSWORD=contraseña_admin

⚠️ El archivo .env contiene información privada y no debe subirse al repositorio.

La sesión del administrador se conserva mediante LocalStorage.

🔒 Rutas protegidas

Las rutas de administración se encuentran protegidas.

Si un usuario intenta acceder al panel sin haber iniciado sesión, es redirigido a la pantalla de Login.

Las rutas protegidas son:

/admin
/admin/:id
🗺️ Rutas principales
Ruta	Descripción
/	Página principal
/peliculas	Acceso al catálogo
/login	Inicio de sesión
/admin	Panel de administración
/admin/:id	Gestión o edición desde administración
/detalle-pelicula/:id	Detalle de una película
*	Página Error 404
Rutas aún no desarrolladas

Las opciones:

/series
/mi-lista

se encuentran disponibles desde la navegación, pero todavía no tienen una pantalla propia.

Por ese motivo actualmente son dirigidas a la página Error 404.

💾 Persistencia de datos

La aplicación utiliza LocalStorage como sistema de persistencia.

El catálogo inicial se carga desde:

src/data/initialData.js

Posteriormente, las modificaciones realizadas desde administración se almacenan en el navegador.

Esto permite conservar:

Nuevas películas.
Ediciones.
Eliminaciones.
Estado de publicación.
Película destacada.

La sesión del administrador también utiliza LocalStorage.

🧠 Estado global con Context

La aplicación utiliza AppContext para centralizar información y funcionalidades compartidas entre los componentes.

Desde el contexto se administran:

Autenticación.
Login.
Logout.
Catálogo de películas.
Alta de películas.
Edición de películas.
Eliminación de películas.
Publicación.
Película destacada.
Persistencia de datos.
🆔 Identificación de películas

Cada película posee un id único.

Ese identificador permite:

Encontrar una película específica.
Editarla.
Eliminarla.
Mostrar su página de detalle.
Utilizarla como key al renderizar listas en React.

Para nuevas películas puede utilizarse un identificador único mediante:

crypto.randomUUID()
🧩 Métodos de arrays utilizados

Durante el proyecto se utilizaron métodos de arrays fundamentales.

map

Permite recorrer un array y renderizar elementos.

Ejemplo:

peliculas.map(...)
filter

Permite obtener varios elementos que cumplen una condición.

Ejemplo:

movies.filter((pelicula) => pelicula.publicado)
find

Permite encontrar un solo elemento que cumple una condición.

Ejemplo:

movies.find((pelicula) => pelicula.isFeatured)

De forma resumida:

map    → recorrer/renderizar
filter → obtener varios
find   → encontrar uno
🧩 Componentes

La aplicación fue desarrollada utilizando componentes reutilizables.

Entre ellos se encuentran:

Navbar.
Hero.
Buscador.
TarjetaPelicula.
SeccionPeliculas.
Footer.
Login.
Admin.
DetallePelicula.
Error404.
ProtectedRoute.

La división en componentes permite mantener una estructura más organizada y reutilizar partes de la interfaz.

📂 Estructura del proyecto
proyecto-m2-inti/
│
├── public/
│   ├── imágenes
│   ├── logos
│   ├── iconos
│   └── recursos gráficos
│
├── src/
│   │
│   ├── components/
│   │   ├── home/
│   │   ├── pages/
│   │   └── shared/
│   │
│   ├── context/
│   │   └── AppContext.jsx
│   │
│   ├── data/
│   │   └── initialData.js
│   │
│   ├── helpers/
│   │   ├── auth.js
│   │   └── movieStorage.js
│   │
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── index.html
├── package.json
└── vite.config.js
🚀 Instalación
1. Clonar el repositorio
git clone https://github.com/naza625/proyecto-m2-inti.git
2. Ingresar al proyecto
cd proyecto-m2-inti
3. Instalar las dependencias
pnpm install
4. Crear el archivo .env

En la raíz del proyecto:

VITE_EMAIL=correo_admin
VITE_PASSWORD=contraseña_admin
5. Ejecutar el proyecto
pnpm dev

Vite mostrará en la terminal la dirección local donde se encuentra ejecutándose la aplicación.

Generalmente:

http://localhost:5173
📦 Scripts disponibles
Ejecutar en modo desarrollo
pnpm dev
Generar versión de producción
pnpm build
Ejecutar ESLint
pnpm lint
Previsualizar la versión de producción
pnpm preview
📱 Diseño responsive

La interfaz fue desarrollada con Tailwind CSS y adaptada para distintos tamaños de pantalla.

Se trabajó especialmente en la adaptación de:

Navbar.
Hero.
Tarjetas de películas.
Secciones del catálogo.
Buscador.
Detalle de películas.
Login.
Administración.
Footer.

Tailwind permite modificar la distribución de los elementos según el tamaño de pantalla utilizando clases responsive.

Ejemplo:

flex-col md:flex-row

Esto permite mostrar los elementos en columna en pantallas pequeñas y en fila a partir del breakpoint md.

🎨 Identidad visual

La identidad de INTI se basa en tres conceptos principales:

Sol
Luz
Cine

La interfaz utiliza principalmente:

Fondo negro.
Amarillo.
Dorado.
Contrastes claros.
Recursos visuales relacionados con el cine.

El objetivo fue desarrollar una estética cinematográfica reconocible y coherente en todas las pantallas.

🤝 Trabajo colaborativo

INTI Cinema fue desarrollado utilizando Git y GitHub como herramientas de control de versiones y colaboración.

Durante el desarrollo se utilizaron:

Ramas de trabajo.
Commits.
Pull Requests.
Revisiones de código.
Integración mediante la rama dev.
Resolución de conflictos de merge.

Cada integrante trabajó sobre diferentes funcionalidades antes de integrarlas al proyecto general.

La integración permitió conectar la vista pública, el catálogo, el buscador, el detalle, la autenticación y el panel de administración sobre una misma estructura de datos.

👥 Equipo INTI Cinema
Nazarena Fernanda Villafañez Riquelme

GitHub:
https://github.com/naza625

Ricardo Vosalho

GitHub:
https://github.com/ricardovosahlounsta-cloud

Rosario Pierrestegui

GitHub:
https://github.com/Rosaryto

🎓 Proyecto académico

Proyecto desarrollado como parte de la formación:

Full Stack Developer
RollingCode School

Durante el desarrollo se aplicaron conocimientos de:

React.
Componentes.
Props.
Estados.
Eventos.
Renderizado condicional.
Métodos de arrays.
Formularios.
React Router.
Rutas dinámicas.
Context.
LocalStorage.
CRUD.
Login.
Rutas protegidas.
Variables de entorno.
Diseño responsive.
Git.
GitHub.
Trabajo colaborativo.
🚧 Estado actual

Las funcionalidades principales del proyecto se encuentran implementadas:

Catálogo de películas.
Hero destacado.
Buscador.
Detalle de películas.
Tráilers.
Login.
Rutas protegidas.
Panel de administración.
CRUD.
Publicación y ocultamiento de películas.
Película destacada.
Persistencia en LocalStorage.
Diseño responsive.

Actualmente las secciones Series y Mi Lista no cuentan con una vista propia y se encuentran conectadas a la página de Error 404.

📌 Próximas mejoras posibles

Como evolución futura del proyecto podrían incorporarse:

Desarrollo de la sección Series.
Desarrollo de Mi Lista.
Incorporación de una base de datos real.
Registro de usuarios.
Perfiles personalizados.
Favoritos.
Historial de reproducción.
Mejoras en validaciones.
Más categorías de contenido.
Sistema de recomendaciones.

### 🎬 INTI Cinema

Proyecto realizado con fines educativos.

© 2026 INTI Cinema