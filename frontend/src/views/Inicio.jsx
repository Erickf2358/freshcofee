import useQuiosco from '../hooks/useQuiosco'
import { formatearMoneda } from '../helpers'

export default function Inicio() {
  const { categoriaActual, productos, handleSetProducto } = useQuiosco()

  const productosFiltrados = productos.filter(
    producto => producto.categoria_id === categoriaActual.id
  ) ?? []

  return (
    <div className="p-10">
      <h2 className="text-4xl font-black">{categoriaActual.nombre}</h2>
      <p className="text-2xl my-5 font-light">
        Elige y personaliza tu pedido a continuación
      </p>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {productosFiltrados.map(producto => (
          <div key={producto.id} className="border bg-white shadow">
            <img
              src={`/img/${producto.imagen}.jpg`}
              alt={`imagen ${producto.nombre}`}
            />
            <div className="p-5">
              <h3 className="text-2xl font-bold">{producto.nombre}</h3>
              <p className="mt-3 font-black text-amber-500 text-3xl">
                {formatearMoneda(producto.precio)}
              </p>
              <button
                type="button"
                className="bg-indigo-600 hover:bg-indigo-800 text-white mt-5 w-full p-3 font-bold uppercase"
                onClick={() => handleSetProducto(producto)}
              >
                Agregar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}