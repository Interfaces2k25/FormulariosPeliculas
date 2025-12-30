import { useState } from "react";
import NavbarAdmin from "../components/NavbarAdmin";

function FormularioPeliculaControlado() {

    const [error, setError] = useState({
        nombre: "",
        director: "",
        clasificacion: "",
        nota: "",
        cartelera: "",
    });

    const [formData, setFormData] = useState({
        nombre: "",
        director: "",
        clasificacion: "",
        recaudacion: "",
        nota: "",
        cartelera: "",
    });


    const handleChange = (e) => {
        console.log(formData);

        const { id, type, value } = e.target; //Para el checked agregar checked y type
        setFormData((prev) => ({
            ...prev,
            [id]: type === "number" ? Number(value) : value,
        }));
    };


    function handleSubmit(e) {
        e.preventDefault();

        const newErrors = {};

        if (formData.nombre.length < 5) {
            newErrors.nombre = ("El nombre de la película debe tener al menos 5 caracteres.");
        }

        if (formData.director.length < 5) {
            newErrors.director = ("El nombre del director debe tener al menos 5 caracteres.");
        }

        if (formData.nota.trim() == "") {
            newErrors.nota = ("Debes seleccionar una nota")
        }

        if (formData.clasificacion.trim() == "") {
            newErrors.clasificacion = ("La clasificación es obligatoria");
        }

        if (formData.cartelera == null) {
            newErrors.cartelera = ("Debe seleccionar una url para la cartelera.");

        } if (!formData.cartelera.startsWith("http")) {
            newErrors.cartelera = ("La url debe de empezar por http")
        }

        setError(newErrors);

        if (Object.keys(newErrors).length === 0) {
            console.log("Datos del formulario:", formData);
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
                        Añadir película (Controlado)
                    </div>

                    <div className="mb-4">
                        <label
                            htmlFor="nombre"
                            className="block text-gray-700 font-semibold mb-2"
                        >
                            Nombre de la película:
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
                            htmlFor="director"
                            className="block text-gray-700 font-semibold mb-2"
                        >
                            Nombre del director:
                        </label>
                        <input
                            id="director"
                            type="text"
                            value={formData.director}
                            onChange={handleChange}
                            aria-invalid={!!error}
                            required
                            minLength={5}
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        ></input>
                        <div>
                            {error.director && <p className="text-red-700 bg-red-100 px-3 py-2 rounded-lg mt-2">{error.director}</p>}
                        </div>
                    </div>

                    <div className="mb-4">
                        <label
                            htmlFor="clasificacion"
                            className="block text-gray-700 font-semibold mb-2"
                        >
                            Clasificación:
                        </label>
                        <input
                            id="clasificacion"
                            type="text"
                            value={formData.clasificacion}
                            onChange={handleChange}
                            aria-invalid={!!error}
                            required
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        ></input>
                        <div>
                            {error.clasificacion && <p className="text-red-700 bg-red-100 px-3 py-2 rounded-lg mt-2">{error.clasificacion}</p>}
                        </div>
                    </div>

                    <div className="mb-4">
                        <label
                            htmlFor="recaudacion"
                            className="block text-gray-700 font-semibold mb-2"
                        >
                            Recaudación:
                        </label>

                        <input
                            id="recaudacion"
                            type="text"
                            name="recaudacion"
                            value={formData.recaudacion}
                            onChange={handleChange}
                            aria-invalid={!!error}
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        ></input>
                    </div>


                    <div className="mb-4">
                        <label
                            htmlFor="nota"
                            className="block text-gray-700 font-semibold mb-2"
                        >
                            Nota:
                        </label>
                        <input
                            id="nota"
                            type="number"
                            value={formData.nota}
                            onChange={handleChange}
                            min={1}
                            max={10}
                            required
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        ></input>
                        <div>
                            {error.nota && <p className="text-red-700 bg-red-100 px-3 py-2 rounded-lg mt-2">{error.nota}</p>}
                        </div>
                    </div>

                    <div className="mb-4">
                        <label
                            htmlFor="cartelera"
                            className="block text-gray-700 font-semibold mb-2"
                        >
                            Cartelera:
                        </label>

                        <input
                            id="cartelera"
                            type="url"
                            value={formData.cartelera}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        ></input>
                        <div>
                            {error.cartelera && <p className="text-red-700 bg-red-100 px-3 py-2 rounded-lg mt-2">{error.cartelera}</p>}
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
    );
}
export default FormularioPeliculaControlado;