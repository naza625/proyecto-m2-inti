# 🎬 INTI - Plataforma de Streaming de Películas & Series

<div align="center">

![React](https://img.shields.io/badge/React-19.x-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-8.x-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-v4.x-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-v7-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Netlify](https://img.shields.io/badge/Netlify-Deployed-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)

<br />

**Proyecto Integrador Módulo 2 - RollingCode School**  
*Una aplicación web interactiva estilo Netflix para explorar catálogo audiovisual y administrar contenido mediante un completo panel CRUD con persistencia en LocalStorage.*

<br />

---

## 🔗 Link de la Demo:
 [👉 Haz clic aquí para ver la demo en vivo en Netlify 👈](https://TU_LINK_DE_NETLIFY_AQUI.netlify.app/)



---

</div>

<br />

## 📖 Índice

- [📌 Sobre el Proyecto](#-sobre-el-proyecto)
- [✨ Características Principales](#-características-principales)
- [🛠️ Tecnologías Utilizadas](#️-tecnologías-utilizadas)
- [📂 Estructura de Carpetas](#-estructura-de-carpetas)
- [🚀 Instalación y Uso Local](#-instalación-y-uso-local)
- [🔐 Credenciales de Acceso (Admin)](#-credenciales-de-acceso-admin)
- [📋 Requerimientos Cumplidos](#-requerimientos-cumplidos)
- [👥 Créditos y Autores](#-créditos-y-autores)

---

## 📌 Sobre el Proyecto

**INTI** es una plataforma web desarrollada en **React** que simula un servicio de streaming de cine y series (inspirado en Netflix). Diseñada para ofrecer una experiencia fluida y visualmente atractiva con estética *Dark Cinema*, permite a los usuarios:

1. Explorar un catálogo clasificado por géneros y categorías.
2. Buscar títulos en tiempo real.
3. Consultar la ficha técnica, sinopsis y reproducir trailers.
4. Administrar el catálogo desde un **Panel de Administración (CRUD)** con control total sobre altas, bajas, modificaciones, destacados y estado de publicación.
5. Toda la información se persiste en **LocalStorage**, garantizando que los datos no se pierdan al recargar la página.

---

## ✨ Características Principales

### 🏠 Vista Pública (Home & Catálogo)
- **Banner Hero Destacado:** Muestra automáticamente la película con la propiedad `isFeatured: true`.
- **Organización por Categorías:** Mapeo y filtrado responsivo por géneros (*Acción*, *Comedia*, *Drama*, *Ciencia Ficción*, *Terror*, etc.).
- **Buscador en Tiempo Real:** Filtro predictivo e instantáneo por título.
- **Página de Detalle (`/detalle-pelicula/:id`):** Vista ampliada con tráiler incrustado, sinopsis, duración, año, categoría y elenco.

### 🛡️ Panel de Administración (CRUD)
- **Métricas y Estadísticas:** Panel de resumen con contadores de películas totales, publicadas, borradores y categorías activas.
- **Tabla de Gestión:** Listado interactivo con opciones de:
  - ➕ **Crear Película:** Formulario modal con validación de datos.
  - ✏️ **Editar Película:** Modificación en tiempo real de información y multimedia.
  - 🗑️ **Eliminar Película:** Confirmación interactiva con alertas estilizadas (*SweetAlert2*).
  - 👁️ **Publicar / Ocultar:** Control de visibilidad en el catálogo general.
  - ⭐ **Destacar (Featured):** Lógica exclusiva donde solo una película puede estar destacada a la vez en el Hero banner.
- **Validaciones Robustas:** Manejo de formularios con `react-hook-form` evitando campos vacíos y URLs inválidas.

### 🔒 Autenticación & Seguridad
- **Simulación de Login:** Autenticación de administrador con credenciales seguras.
- **Persistencia de Sesión:** Manejo de sesión con bandera `isLogged` en `localStorage`.
- **Rutas Protegidas:** Protección de las rutas `/admin` y redireccionamiento inteligente hacia `/login`.

---

## 🛠️ Tecnologías Utilizadas

| Tecnología | Descripción |
| :--- | :--- |
| **React 19** | Biblioteca principal para la interfaz de usuario basada en componentes |
| **Vite** | Empaquetador y entorno de desarrollo ultrarrápido |
| **Tailwind CSS v4** | Framework de estilos utilitarios para diseño responsive y moderno |
| **React Router DOM v7** | Enrutamiento dinámico SPA y control de navegación |
| **React Hook Form** | Manejo y validación eficiente de formularios |
| **SweetAlert2** | Modales y notificaciones interactivas |
| **React Icons** | Iconografía moderna para la interfaz |
| **LocalStorage Web API** | Persistencia de datos en el navegador |

---

## 📂 Estructura de Carpetas

```plaintext
proyecto-m2-inti/
├── public/                 # Archivos estáticos y favicons
├── src/
│   ├── components/
│   │   ├── home/           # Componentes de la vista principal (Hero, Buscador, Tarjetas, Secciones)
│   │   ├── pages/          # Vistas principales (Inicio, Login, Admin, Detalle, Error404, Métricas)
│   │   └── shared/         # Componentes globales reutilizables (Navbar, Footer, etc.)
│   ├── context/            # Contexto global de estado (AppContext)
│   ├── data/               # Datos iniciales precargados (initialData.js)
│   ├── helpers/            # Funciones auxiliares (auth.js, movieStorage.js)
│   ├── App.jsx             # Configuración de rutas y proveedores
│   ├── index.css           # Configuración de Tailwind CSS y estilos base
│   └── main.jsx            # Punto de entrada de la aplicación React
├── index.html              # HTML base con fuentes y metaetiquetas
├── package.json            # Dependencias y scripts del proyecto
└── vite.config.js          # Configuración de Vite
```

---

## 🚀 Instalación y Uso Local

Sigue estos pasos para correr el proyecto en tu entorno local:

### 1. Clonar el repositorio
```bash
git  clone https://github.com/naza625/proyecto-m2-inti.git
```

### 2. Instalar dependencias
Puedes usar `npm`, `pnpm` o `yarn`:
```bash
npm install
# o con pnpm
pnpm install
```

### 3. Iniciar el servidor de desarrollo
```bash
npm run dev
# o con pnpm
pnpm run dev
```

La aplicación estará disponible en `http://localhost:5173`.

### 4. Compilar para producción (Build)
```bash
npm run build
# o con pnpm
pnpm run build
```

---

## 🔐 Credenciales de Acceso (Admin)

Para acceder al **Panel de Administración (`/admin`)**, utiliza las siguientes credenciales predeterminadas:

- **Email:** `admin@inticinema.com`
- **Contraseña:** `Admin12345!`

*(Configuradas en `.env` mediante `VITE_EMAIL` y `VITE_PASSWORD`)*.

---

## 📋 Requerimientos Cumplidos

- [x] **Persistencia de Datos:** Uso de `localStorage` con carga de `initialData.js` en primera sesión.
- [x] **Rutas (React Router):** `/` (Catálogo), `/login` (Acceso), `/admin` (CRUD) y `/detalle-pelicula/:id`.
- [x] **Hero Banner:** Muestra la película destacada (`isFeatured`).
- [x] **Panel CRUD:** Alta, edición, eliminación lógica/física, destacar y toggle de publicación.
- [x] **Buscador en Tiempo Real:** Filtro ágil sobre el catálogo.
- [x] **Validación de Formularios:** Control de campos requeridos y URLs de imágenes.
- [x] **Diseño Responsivo:** Adaptado para dispositivos móviles, tablets y monitores de escritorio.

---

## 👥 Créditos y Autores

Proyecto desarrollado como parte de la formación **Full Stack Developer** en **RollingCode School**.

### 💻 Desarrolladores:
- 👩‍💻 **Rosario Pierrestegui**
- 👩‍💻 **Nazarena Fernanda Villafañez Riquelme**
- 👨‍💻 **Ricardo Vosahlo**

- 🎓 **Institución:** RollingCode School
---

<div align="center">
⭐ Si te gustó este proyecto, ¡no olvides dejarle una estrella al repositorio! ⭐
</div>
