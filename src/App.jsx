import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contacto from "./pages/Contacto";
import Index from "./pages/Index";
import Pruebas from "./pages/Pruebas";
import Usuarios from "./pages/admin/usuarios/Index";
import IndexAdmin from "./pages/admin/Index";
// import Layout from "./Layout/Layout";
import "./styles/styles.css";
import LayoutAdmin from "./layout/LayoutAdmin";
import Layout from "./layout/Layout";
import UsuarioGenerico from "./pages/admin/usuarios/UsuarioGenerico";
import { UserContext } from "./context/user";
import { DarkContext } from "./context/dark";
import Configuracion from "./pages/Configuracion";

function App() {
  const [userData, setUserData] = useState({ nombre: "Mauricio", suma: 0 });
  const [dark, setDark] = useState(false)
  return (
    <div><DarkContext.Provider value={{dark, setDark}}>
      <UserContext.Provider value={{ userData, setUserData }}>
        <BrowserRouter>
          <Routes>
            {/* No Pasa Nada si se deja la ruta completa o si se elimina la / */}
            <Route path="/" element={<Layout />}>
              <Route path="" element={<Index />} />
              <Route path="contacto" element={<Contacto />} />
              <Route path="pruebas" element={<Pruebas />} />
              <Route path="configuracion" element={<Configuracion />} />
            </Route>
            <Route path="/admin" element={<LayoutAdmin />}>
              <Route path="" element={<IndexAdmin />} />
              <Route path="usuarios" element={<Usuarios />} />
              <Route
                path="usuarios/:nombreusuario"
                element={<UsuarioGenerico />}
              />
            </Route>
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </DarkContext.Provider>
      {/* <Layout>
        <Index />
      </Layout> */}
    </div>
  );
}

export default App;
