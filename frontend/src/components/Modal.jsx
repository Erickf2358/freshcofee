import { useState, useEffect } from 'react'
import ReactModal from 'react-modal'
import useQuiosco from '../hooks/useQuiosco'
import { formatearMoneda } from '../helpers'

ReactModal.setAppElement('#root')

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
}

export default function Modal() {
  const { modal, handleCloseModal, productoSeleccionado, handleAgregarPedido, pedido } = useQuiosco()
  const [cantidad, setCantidad] = useState(1)
  const { nombre, imagen, precio } = productoSeleccionado

  // Si el producto ya está en el pedido, cargar su cantidad
  useEffect(() => {
    const productoEnPedido = pedido.find(p => p.id === productoSeleccionado.id)
    if (productoEnPedido) {
      setCantidad(productoEnPedido.cantidad)
    } else {
      setCantidad(1)
    }
  }, [productoSeleccionado])

  function handleDecrementar() {
    if (cantidad <= 1) return
    setCantidad(cantidad - 1)
  }

  function handleIncrementar() {
    if (cantidad >= 5) return
    setCantidad(cantidad + 1)
  }

  function handleAgregar() {
    handleAgregarPedido({
      ...productoSeleccionado,
      cantidad
    })
  }

  return (
    <ReactModal isOpen={modal} style={customStyles}>
      <div className="md:flex gap-10">
        <div className="md:w-1/3">
          <img src={`/img/${imagen}.jpg`} alt={`imagen ${nombre}`} />
        </div>

        <div className="md:w-2/3">
          <div className="flex justify-end">
            <button onClick={handleCloseModal}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <h1 className="text-3xl font-bold mt-5">{nombre}</h1>

          <p className="mt-5 font-black text-5xl text-amber-500">
            {formatearMoneda(precio)}
          </p>

          <div className="flex gap-4 mt-5 items-center">
            <button
              type="button"
              className="text-white rounded font-bold bg-gray-600 p-2"
              onClick={handleDecrementar}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
              </svg>
            </button>

            <p className="text-3xl">{cantidad}</p>

            <button
              type="button"
              className="text-white rounded font-bold bg-gray-600 p-2"
              onClick={handleIncrementar}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
            </button>
          </div>

          <button
            type="button"
            className="bg-indigo-600 hover:bg-indigo-800 px-5 py-2 mt-5 text-white font-bold uppercase rounded w-full"
            onClick={handleAgregar}
          >
            {pedido.some(p => p.id === productoSeleccionado.id)
              ? 'Actualizar pedido'
              : 'Agregar al pedido'
            }
          </button>
        </div>
      </div>
    </ReactModal>
  )
}