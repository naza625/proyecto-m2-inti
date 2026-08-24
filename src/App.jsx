import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppProvider } from "./context/AppContext";
import Inicio from "./components/pages/Inicio";
import Login from "./components/pages/Login";
import Error404 from "./components/pages/Error404";
import Admin from "./components/pages/Admin";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/login" element={<Login />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/admin" element={<Admin />} />
          </Route>
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;