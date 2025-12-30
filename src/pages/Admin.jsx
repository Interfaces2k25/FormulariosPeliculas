import { Link, Outlet } from "react-router-dom";
import NavbarAdmin from "../components/NavbarAdmin";
import AñadirPeliculaForm from "./FormularioPeliculaControlado";

function Admin() {

    return (
        <div>
            <button>
                <a href="/" className="p-2 ml-4 text-black bg-white hover:underline rounded-2xl">← Volver al inicio</a>
            </button>
            {/* <nav>
            <Link to={"formulariodiscos"}>Añadir Disco Controlado</Link>
            </nav> */}
           
            <NavbarAdmin/>

            <Outlet/>
        </div>
        
    )
}
export default Admin;