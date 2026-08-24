import { BrowserRouter, Routes, Route } from "react-router";
import Inicio from "./components/pages/Inicio";
import Login from "./components/pages/Login";
import Error404 from "./components/pages/Error404";
import DetallePelicula from "./components/pages/DetallePelicula";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Error404 />} />
          <Route path="/detalle-pelicula/:id" element={<DetallePelicula />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
