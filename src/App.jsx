import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppProvider } from "./context/AppContext";
import Inicio from "./components/pages/Inicio";
import Login from "./components/pages/Login";
import Error404 from "./components/pages/Error404";

import DetallePelicula from "./components/pages/DetallePelicula";

import Admin from "./components/pages/Admin";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <AppProvider>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/login" element={<Login />} />
          <Route path="/detalle-pelicula/:id" element={<DetallePelicula />} />

          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/:id" element={<Admin />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;

