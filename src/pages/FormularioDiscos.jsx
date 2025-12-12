import { useState } from "react";

function FormularioDiscos() {
    const [formData, setFormData] = useState({
        nombre: "",
        artista: "",
        anio: "",
        genero: "",
        localizacion: "",
        prestado: false,
    });

    const handleChange = (e) => {
        console.log(formData);

        const { id, type, value, checked } = e.target; //Para el checked agregar checked y type
        setFormData((prev) => ({
            ...prev,
            [id]: type ==="checkbox" ? checked : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Datos del formulario:", formData);
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-amber-100 p-4">
            <form
                onSubmit={handleSubmit}
                className="bg-white p-6 rounded-lg shadow-md w-full max-w-md"
            >
                <div className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">
                    Formulario Discos
                </div>

                <div className="mb-4">
                    <label
                        htmlFor="nombre"
                        className="block text-gray-700 font-semibold mb-2"
                    >
                        Nombre del disco:
                    </label>
                    <input
                        id="nombre"
                        type="text"
                        value={formData.nombre}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ></input>
                </div>

                <div className="mb-4">
                    <label
                        htmlFor="artista"
                        className="block text-gray-700 font-semibold mb-2"
                    >
                        Nombre del artista:
                    </label>
                    <input
                        id="artista"
                        type="text"
                        value={formData.artista}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ></input>
                </div>

                <div className="mb-4">
                    <label
                        htmlFor="anio"
                        className="block text-gray-700 font-semibold mb-2"
                    >
                        Año del disco:
                    </label>
                    <input
                        id="anio"
                        type="text"
                        value={formData.anio}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ></input>
                </div>

                <div className="mb-4">
                    <label
                        htmlFor="genero"
                        className="block text-gray-700 font-semibold mb-2"
                    >
                        Género:
                    </label>

                    <select
                        id="genero"
                        name="genero"
                        checked={formData.genero} //checked en vez de value
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="rock">Rock</option>
                        <option value="progressive">Progressive</option>
                        <option value="punk">Punk</option>
                        <option value="trash">Trash</option>
                    </select>
                </div>


                <div className="mb-4">
                    <label
                        htmlFor="localizacion"
                        className="block text-gray-700 font-semibold mb-2"
                    >
                        Localización:
                    </label>
                    <input
                        id="localizacion"
                        type="text"
                        value={formData.localizacion}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ></input>
                </div>

                <div className="mb-4">
                    <label
                    htmlFor="prestado"
                    className="block text-gray-700 font-semibold mb-2"
                    >
                        ¿Es prestado?
                    </label>

                    <input
                    id="prestado"
                    type="checkbox"
                    checked={formData.prestado}
                    onChange={handleChange}
                    ></input>
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
    );
}
export default FormularioDiscos