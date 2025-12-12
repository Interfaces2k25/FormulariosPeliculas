import { Link } from "react-router-dom";
import { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false)
  
  return (
    // Header con el fondo en blanco y sombra para el menú hamburguesa y el NavBar normal
  <header className="w-full bg-white p-4 shadow-md">
    
    {/* Botón hamburguesa que sea invisible en pantallas medianas y grandes */}
    <button onClick={() => setOpen(!open)} className="text-3xl md:hidden" aria-label="Menú hamburguesa" 
    aria-expanded={open} aria-controls="menu-movil">☰</button>

    {/* NavBar normal en pantallas medianas y grandes, en pequeñas que se esconda */}
    <nav className="hidden md:flex gap-8 text-lg flex-1 justify-center" aria-label="Barra de navegación">
      {/* Cuando se pase por encima el ratón que se subraye */}
      <Link to="/" className="hover:underline">Inicio</Link> 
      <Link to="/peliculas" className="hover:underline">Películas</Link>
      <Link to="/interpretes" className="hover:underline">Intérpretes</Link>
      <Link to="/admin" className="hover:underline">Admin</Link>
      <Link to="/formulariodiscos" className="hover:underline">Formulario Discos</Link>
      <Link to="/validacion" className="hover:underline">Formulario Discos Validado</Link>
    </nav>

    {/* Desplegable del menú hamburguesa */}
    <nav id ="menu-movil" className={`absolute top-16 left-0 w-full bg-white flex flex-col p-4 gap-4 md:hidden 
      transition-all ${open ? "block" : "hidden"}`} aria-label="Menú para móvil">
                <NavLink to="/" className="hover:underline" onClick={() => setOpen(false)} >Inicio</NavLink>
                <NavLink to="/peliculas"  className="hover:underline" onClick={() => setOpen(false)}>Películas</NavLink>
                <NavLink to="/interpretes"  className="hover:underline" onClick={() => setOpen(false)}>Intérpretes</NavLink>
                <NavLink to="/admin"  className="hover:underline" onClick={() => setOpen(false)}>Admin</NavLink>
                <NavLink to="/formulariodiscos"  className="hover:underline" onClick={() => setOpen(false)}>Formulario Discos</NavLink>
                <NavLink to="/validacion"  className="hover:underline" onClick={() => setOpen(false)}>Formulario Discos Validado</NavLink>
            </nav>
  </header>
  );
}

export default Navbar;
