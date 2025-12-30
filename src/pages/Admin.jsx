import { Link, Outlet } from "react-router-dom";
import NavbarAdmin from "../components/NavbarAdmin";
import AñadirPeliculaForm from "./FormularioPeliculaControlado";

function Admin() {

    return (
        <div>
            <button>
                <a href="/" className="text-black hover:underline ml-4 bg-white p-2 rounded-2xl">← Volver al inicio</a>
            </button>
            <nav>
            <Link to={"formulariodiscos"}>Añadir Disco Controlado</Link>
            </nav>
           
            {/* <NavbarAdmin/> */}

            <Outlet/>
        </div>
        
    )
}
export default Admin;