import { useRef, useState } from 'react';
import NavbarAdmin from '../components/NavbarAdmin';

function FormularioPeliculaNoControlado() {

    const [error, setError] = useState({
        nombre: "",
        director: "",
        clasificacion: "",
        nota: "",
        cartelera: "",
    });

    const refs = {
        nombre: useRef(null),
        director: useRef(null),
        clasificacion: useRef(null),
        recaudacion: useRef(null),
        nota: useRef(null),
        url: useRef(null),
    };

    function handleSubmit(e) {
        e.preventDefault();

        const datos = {
            nombre: refs.nombre.current.value,
            director: refs.director.current.value,
            clasificacion: refs.clasificacion.current.value,
            recaudacion: refs.recaudacion.current.value,
            nota: refs.nota.current.value,
            url: refs.url.current.value
        };

        const newErrors = {};

        if (datos.nombre.length < 5) {
            newErrors.nombre = ("El nombre de la película debe de tener al menos 5 caracteres.");
        }

        if (datos.director.length < 5) {
            newErrors.director = ("Director mínimo 5 caracteres");
        }

        if (datos.clasificacion === "") {
            newErrors.clasificacion = ("Clasificación obligatoria");
        }

        const nota = Number(datos.nota);

        if (isNaN(nota) || nota < 1 || nota > 10) {
            newErrors.nota = ("Nota entre 1 y 10");
        }

        if (!datos.url.startsWith("http")) {
            newErrors.url = ("La URL debe empezar por http");
        }

        setError(newErrors)

        if (Object.keys(newErrors).length === 0) {
            console.log("Datos del formulario:", datos);
        }
    }


    return (
        <div>
            <NavbarAdmin />

            <div className="relative flex justify-center items-center min-h-screen bg-amber-100 p-4">

                <a href="/admin" className="absolute top-4 left-4 text-black hover:underline ml-4 bg-white p-2 rounded-2xl">← Volver a admin</a>

                <form
                    onSubmit={handleSubmit}
                    className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">

                    <div className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">
                        Añadir Película - No Controlado
                    </div>

                    <div className='mb-4'>
                        <label
                            htmlFor='nombre'
                            className="block text-gray-700 font-semibold mb-2"
                        >
                            Nombre:
                        </label>
                        <input
                            id="nombre"
                            type='text'
                            ref={refs.nombre}
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600"
                        >
                        </input>
                        <div>
                            {error.nombre && <p className="text-red-700 bg-red-100 px-3 py-2 rounded-lg mt-2">{error.nombre}</p>}
                        </div>
                    </div>

                    <div className='mb-4'>
                        <label
                            htmlFor='director'
                            className='block text-gray-700 font-semibold mb-2'
                        >
                            Director:
                        </label>
                        <input
                            id='director'
                            type='text'
                            ref={refs.director}
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600"
                        >
                        </input>
                        <div>
                            {error.director && <p className="text-red-700 bg-red-100 px-3 py-2 rounded-lg mt-2">{error.director}</p>}
                        </div>
                    </div>

                    <div className='mb-4'>
                        <label
                            htmlFor='clasificacion'
                            className='block text-gray-700 font-semibold mb-2'
                        >
                            Clasificación:
                        </label>
                        <input
                            id='clasificacion'
                            type='text'
                            ref={refs.clasificacion}
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600"
                        >
                        </input>
                        <div>
                            {error.clasificacion && <p className="text-red-700 bg-red-100 px-3 py-2 rounded-lg mt-2">{error.clasificacion}</p>}
                        </div>
                    </div>


                    <div className='mb-4'>
                        <label
                            htmlFor='recaudacion'
                            className='block text-gray-700 font-semibold mb-2'
                        >
                            Recaudación:
                        </label>
                        <input
                            id='recaudacion'
                            type='text'
                            ref={refs.recaudacion}
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600"
                        >
                        </input>
                        <div>
                            {error.recaudacion && <p className="text-red-700 bg-red-100 px-3 py-2 rounded-lg mt-2">{error.recaudacion}</p>}
                        </div>
                    </div>

                    <div className='mb-4'>
                        <label
                            htmlFor='nota'
                            className='block text-gray-700 font-semibold mb-2'
                        >
                            Nota:
                        </label>
                        <input
                            name='nota'
                            type='number'
                            ref={refs.nota}
                            defaultValue={1}
                            min={1}
                            max={10}
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600"
                        >
                        </input>
                        <div>
                            {error.nota && <p className="text-red-700 bg-red-100 px-3 py-2 rounded-lg mt-2">{error.nota}</p>}
                        </div>
                    </div>

                    <div className='url'>
                        <label
                            htmlFor='url'
                            className='block text-gray-700 font-semibold mb-2'>
                            Url:
                        </label>
                        <input
                            name='url'
                            type='text'
                            ref={refs.url}
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600"
                        ></input>
                        <div>
                            {error.url && <p className="text-red-700 bg-red-100 px-3 py-2 rounded-lg mt-2">{error.url}</p>}
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
export default FormularioPeliculaNoControlado;