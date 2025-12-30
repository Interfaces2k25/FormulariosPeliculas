import { Link } from "react-router-dom";
import { useState } from "react";
import { NavLink } from "react-router-dom";


function NavbarAdmin() {
    const [open, setOpen] = useState(false);
    return (

        <header className="bg-[#ead498] text-[#6b4200] p-4 shadow-lg">

            <button onClick={() => setOpen(!open)} className="md:hidden" aria-label="Menu hamburguesa" aria-expanded={open}
                aria-controls="menu-movil">☰</button>

            <nav className="hidden md:flex gap-8 text-lg flex-1 justify-center" aria-label="Barra de navegación">

                <div className="flex gap-8 text-lg flex-1 justify-center">
                    <Link to="/peliculaControlado" className="hover:underline">Añadir Película - Controlado</Link>
                    <Link to="/peliculaNoControlado" className="hover:underline">Añadir Película - No Controlado</Link>
                    <Link to="/añadirInterprete" className="hover:underline">Añadir Intérprete</Link>
                </div>
            </nav>

            <div className="relative flex items-center justify-between">
                <nav id="menu-movil" className={`absolute top-16 left-0 w-full bg-white flex flex-col p-4 gap-4 md:hidden 
      transition-all ${open ? "block" : "hidden"}`} aria-label="Menú para móvil">
                    <NavLink to="/peliculaControlado" className="hover:underline" onClick={() => setOpen(false)} >Añadir Película - Controlado</NavLink>
                    <NavLink to="/peliculaNoControlado" className="hover:underline" onClick={() => setOpen(false)}>Añadir Película - No Controlado</NavLink>
                    <NavLink to="/añadirInterprete" className="hover:underline" onClick={() => setOpen(false)}>Añadir Intérprete</NavLink>
                </nav>
            </div>
        </header >
    )
}

export default NavbarAdmin;