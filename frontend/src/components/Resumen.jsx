import useQuiosco from '../hooks/useQuiosco'
import { formatearMoneda } from '../helpers'

export default function Resumen() {
  const { pedido, handleEliminarProducto } = useQuiosco()

  const total = pedido.reduce((total, producto) =>
    total + (producto.cantidad * producto.precio), 0
  )

  return (
    <aside className="md:w-72 md:h-screen bg-white shadow-lg p-5 overflow-y-scroll">
      <h2 className="text-2xl font-black">Mi Pedido</h2>

      {pedido.length === 0 ? (
        <p className="text-center my-10">No hay elementos en tu pedido</p>
      ) : (
        <div className="mt-5">
          {pedido.map(producto => (
            <div key={producto.id} className="flex gap-3 border-t py-3">
              <div>
                <p className="text-lg font-bold">{producto.nombre}</p>
                <p className="text-sm">Cantidad: {producto.cantidad}</p>
                <p className="font-black text-amber-500">
                  {formatearMoneda(producto.precio * producto.cantidad)}
                </p>
                <button
                  className="text-red-600 text-xs font-bold uppercase mt-1"
                  onClick={() => handleEliminarProducto(producto.id)}
                >
                  Eliminar
                </button>
              </div>
            </div>
          ))}

          <div className="border-t mt-5 pt-5">
            <p className="text-xl font-black">
              Total: {formatearMoneda(total)}
            </p>
          </div>

          <button
            type="button"
            className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 font-bold uppercase rounded"
          >
            Confirmar pedido
          </button>
        </div>
      )}
    </aside>
  )
}