import { Routes } from "react-router-dom"
import { Route } from "react-router-dom"
import Navbar from "./components/Navbar.jsx"

import Layout from "./components/Layout.jsx"
import Interprete from "./pages/Interprete.jsx"
import Pelicula from "./pages/Peliculas.jsx"
import Inicio from "./pages/Inicio";
import Admin from "./pages/Admin";
import DetallePelicula from "./pages/DetallePelicula.jsx"
import DetalleInterprete from "./pages/DetalleInterprete.jsx"
import FormularioDiscos from "./pages/FormularioDiscos.jsx"
import Validacion from "./pages/Validacion.jsx"

function App() {
  return (
    <>
      <Navbar></Navbar>

      <Layout>
        <Routes>
          {/* <Route element={<Contenedor />}> */}
            <Route path="/" element={<Inicio />} />
            <Route path="/interpretes" element={<Interprete />} />
            <Route path="/interpretes/:id" element={<DetalleInterprete />} />
            <Route path="/peliculas" element={<Pelicula />} />
            <Route path="/peliculas/:id" element={<DetallePelicula />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/formulariodiscos" element={<FormularioDiscos/>} />
            <Route path="/validacion" element={<Validacion/>} />
          {/* </Route> */}

          {/* <Route path="*" element={<ErrorPage />} /> */}
        </Routes>
      </ Layout>

    </>
  )
}

export default App
