import { useState } from "react";
import peliculas from "../data/peliculas";
import NavbarAdmin from "../components/NavbarAdmin";


function FormularioInterprete() {

    const [error, setError] = useState({
        pelicula: "",
        nombre: "",
        biografia: "",
        imagen: "",
    });

    const [formData, setFormData] = useState({
        pelicula: "",
        nombre: "",
        fechaNacimiento: "",
        biografia: "",
        imagen: "",
    })


    const handleChange = (e) => {
        console.log(formData)

        const { id, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [id]: value
        }));
    };

    function handleSubmit(e) {
        e.preventDefault();

        const newErrors = {};

        if (formData.pelicula === "") {
            newErrors.pelicula = "Debes seleccionar una película."
        }
        if (formData.nombre.length < 5 || formData.nombre.trim() === "") {
            newErrors.nombre = "El nombre debe de tener al menos 5 caraacteres."
        }
        if (formData.biografia.length < 50 || formData.biografia.trim() === "") {
            newErrors.biografia = "La biografía es obligatoria y debe de tener al menos 50 caracteres."
        }
        if (formData.imagen.trim() === "" || !formData.imagen.startsWith("http")) {
            newErrors.imagen = "La imagen es obligatoria y debe de empezar por http"
        }

        setError(newErrors);

        if (Object.keys(newErrors).length === 0) {
            console.log("Datos del formulario: ", formData)
        }
    }

    return (

        <div>
            <NavbarAdmin />
            
            <div className="relative flex justify-center items-center min-h-screen bg-amber-100 p-4">

                <a href="/admin" className="absolute top-4 left-4 text-black hover:underline ml-4 bg-white p-2 rounded-2xl">← Volver a admin</a>

                <form
                    onSubmit={handleSubmit}
                    className="bg-white p-6 rounded-lg shadow-md w-full max-w-md"
                    noValidate
                >
                    <div className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">
                        Añadir intérprete (Controlado)
                    </div>

                    <div className="mb-4">
                        <label
                            htmlFor="pelicula"
                            className="block text-gray-700 font-semibold mb-2"
                        >
                            Película que interpreta:
                        </label>
                        <select
                            id="pelicula"
                            type="text"
                            value={formData.pelicula}
                            onChange={handleChange}
                            aria-invalid={!!error}
                            required
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="">Selecciona un género</option>
                            {peliculas.map(pelicula => (
                                <option key={pelicula.id} value={pelicula.nombre}>{pelicula.nombre}</option>
                            ))}


                        </select>
                        <div>
                            {error.pelicula && <p className="text-red-700 bg-red-100 px-3 py-2 rounded-lg mt-2">{error.pelicula}</p>}
                        </div>
                    </div>

                    <div className="mb-4">
                        <label
                            htmlFor="nombre"
                            className="block text-gray-700 font-semibold mb-2"
                        >
                            Nombre del intérprete:
                        </label>
                        <input
                            id="nombre"
                            type="text"
                            value={formData.nombre}
                            onChange={handleChange}
                            aria-invalid={!!error}
                            required
                            minLength={5}
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        ></input>
                        <div>
                            {error.nombre && <p className="text-red-700 bg-red-100 px-3 py-2 rounded-lg mt-2">{error.nombre}</p>}
                        </div>
                    </div>

                    <div className="mb-4">
                        <label
                            htmlFor="fechaNacimiento"
                            className="block text-gray-700 font-semibold mb-2"
                        >
                            Fecha de Nacimiento:
                        </label>
                        <input
                            id="fechaNacimiento"
                            type="date"
                            value={formData.fechaNacimiento}
                            onChange={handleChange}
                            aria-invalid={!!error}
                            required
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        ></input>

                    </div>

                    <div className="mb-4">
                        <label
                            htmlFor="biografia"
                            className="block text-gray-700 font-semibold mb-2"
                        >
                            Biografía:
                        </label>

                        <textarea
                            id="biografia"
                            type="text"
                            name="biografia"
                            value={formData.biografia}
                            onChange={handleChange}
                            aria-invalid={!!error}
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        ></textarea>
                        <div>
                            {error.biografia && <p className="text-red-700 bg-red-100 px-3 py-2 rounded-lg mt-2">{error.biografia}</p>}
                        </div>
                    </div>


                    <div className="mb-4">
                        <label
                            htmlFor="imagen"
                            className="block text-gray-700 font-semibold mb-2"
                        >
                            Imagen:
                        </label>
                        <input
                            id="imagen"
                            type="url"
                            value={formData.imagen}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        ></input>
                        <div>
                            {error.imagen && <p className="text-red-700 bg-red-100 px-3 py-2 rounded-lg mt-2">{error.imagen}</p>}
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="w-full bg-amber-900 text-white py-2 px-4 rounded-lg font-semibold hover:bg-amber-950 focus:outline-none focus:ring-4 focus:ring-amber-700 focus:ring-opacity-50 transition duration-150 ease-in-out"
                        >
                            Guardar
                        </button>

                    </div>
                </form>
            </div>
        </div>
    )

}
export default FormularioInterprete;