import { Link } from 'react-router-dom'

const Registro = () => {
  return (
    <>
      <h1 className="text-4xl font-black text-center">Crear Cuenta</h1>
      <p className="text-center mt-3">
        ¿Ya tienes cuenta?{' '}
        <Link className="text-indigo-600 font-bold" to="/login">
          Inicia Sesión
        </Link>
      </p>

      <form className="mt-10">
        <div className="mb-5">
          <label htmlFor="nombre" className="text-slate-800">Nombre:</label>
          <input
            type="text"
            id="nombre"
            className="mt-2 w-full p-3 bg-gray-50 border border-gray-200 rounded-lg"
            placeholder="Tu nombre"
          />
        </div>
        <div className="mb-5">
          <label htmlFor="email" className="text-slate-800">Email:</label>
          <input
            type="email"
            id="email"
            className="mt-2 w-full p-3 bg-gray-50 border border-gray-200 rounded-lg"
            placeholder="Tu email"
          />
        </div>
        <div className="mb-5">
          <label htmlFor="password" className="text-slate-800">Password:</label>
          <input
            type="password"
            id="password"
            className="mt-2 w-full p-3 bg-gray-50 border border-gray-200 rounded-lg"
            placeholder="Tu password"
          />
        </div>
        <input
          type="submit"
          value="Crear Cuenta"
          className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 rounded-lg cursor-pointer"
        />
      </form>
    </>
  )
}

export default Registro