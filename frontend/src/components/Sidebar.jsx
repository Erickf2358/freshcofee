import Categoria from './Categoria'
import useQuiosco from '../hooks/useQuiosco'

export default function Sidebar() {
  const { categorias, categoriaActual } = useQuiosco()

  return (
    <aside className="md:w-72 md:h-screen bg-white shadow-lg p-5">
      <h2 className="text-2xl font-black text-center">FreshCoffee</h2>
      <nav className="mt-10">
        {categorias.map(categoria => (
          <Categoria
            key={categoria.id}
            categoria={categoria}
            categoriaActual={categoriaActual}
          />
        ))}
      </nav>
    </aside>
  )
}