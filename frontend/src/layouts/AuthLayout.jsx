import { Outlet, Link } from 'react-router-dom'

const AuthLayout = () => {
  return (
    <div className="md:flex md:min-h-screen">
      <div className="md:w-1/3 bg-indigo-600 px-10 py-10">
        <Link to="/">
          <img src="/img/logo.svg" alt="logotipo FreshCoffee" />
        </Link>
        <div className="mt-10 text-white">
          <h2 className="text-4xl font-black">FreshCoffee</h2>
          <p className="text-xl mt-5">
            Ordena tu café favorito y recíbelo en minutos
          </p>
        </div>
      </div>

      <div className="md:w-2/3 flex flex-col items-center justify-center">
        <div className="w-full max-w-sm">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default AuthLayout