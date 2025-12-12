import { useState } from "react";

function Validacion() {
    const [error, setError] = useState("");

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
            [id]: type === "checkbox" ? checked : value,
        }));
    };


    function handleSubmit(e) {
        e.preventDefault();
        if (formData.nombre.length < 5) {
            setError("El nombre del disco debe tener al menos 5 caracteres.");
            return;
        }
        if (formData.artista.length < 5) {
            setError("El nombre del artista debe tener al menos 5 caracteres.");
            return;
        }
        if (!formData.anio.match(/^\d{4}$/)) {
            setError("El año debe ser un número de 4 dígitos.");
            return;
        }
        if (formData.genero == null || formData.genero === "") {
            setError("Debe seleccionar un género.");
            return;
        }
        if (!formData.localizacion.match(/^ES-\d{3}[A-Z]{2}$/)) {
            setError("La localización debe empezar por ES- seguido de tres dígitos y de dos letras mayúsculas.");
            return;
        }
        setError("");
        console.log("Datos del formulario:", formData);
    }
    return (
        <div className="flex justify-center items-center min-h-screen bg-amber-100 p-4">
            <form
                onSubmit={handleSubmit}
                className="bg-white p-6 rounded-lg shadow-md w-full max-w-md"
                noValidate
            >
                <div className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">
                    Formulario Discos Validado
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
                        aria-invalid={!!error}
                        required

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
                        aria-invalid={!!error}
                        required
                        minLength={5}
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
                        aria-invalid={!!error}
                        minLength={4}
                        maxLength={4}
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
                        value={formData.genero} 
                        onChange={handleChange}
                        aria-invalid={!!error}
                        required
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="">Selecciona un género</option>
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
                    <div>
                        {error && <p className="text-red-700 bg-red-100 px-3 py-2 rounded-lg mt-2">{error}</p>}
                    </div>
                </div>
            </form>
        </div>
    );
}
export default Validacion;