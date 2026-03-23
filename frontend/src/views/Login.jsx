import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <>
      <Link to="/kiosco" className="bg-amber-400 p-2 block text-center mb-5 font-bold">
        Ir al Kiosco (dev)
      </Link>
      <h1 className="text-4xl font-black text-center">Iniciar Sesión</h1>
      <p className="text-center mt-3">
        ¿No tienes cuenta?{' '}
        <Link className="text-indigo-600 font-bold" to="/registro">
          Regístrate
        </Link>
      </p>

      <form className="mt-10">
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
          value="Iniciar Sesión"
          className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 rounded-lg cursor-pointer"
        />
      </form>
    </>
  )
}

export default Login