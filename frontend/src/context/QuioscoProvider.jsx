import { useState, useEffect, createContext } from 'react'
import { productos } from '../data/productos'
import clienteAxios from '../axios/axios'

const QuioscoContext = createContext()

export default function QuioscoProvider({ children }) {
  const [categoriaActual, setCategoriaActual] = useState({})
  const [modal, setModal] = useState(false)
  const [productoSeleccionado, setProductoSeleccionado] = useState({})
  const [pedido, setPedido] = useState([])
  const [categorias, setCategorias] = useState([])

  useEffect(() => {
    const obtenerCategorias = async () => {
      const { data } = await clienteAxios('/api/categorias')
      setCategorias(data.data)
      setCategoriaActual(data.data[0])
    }
    obtenerCategorias()
  }, [])

  function handleClickCategoria(id) {
    const categoria = categorias.filter(cat => cat.id === id)[0]
    setCategoriaActual(categoria)
  }

  function handleSetProducto(producto) {
    setProductoSeleccionado(producto)
    setModal(true)
  }

  function handleCloseModal() {
    setModal(false)
    setProductoSeleccionado({})
  }

  function handleAgregarPedido({ categoriaId, ...producto }) {
    if (pedido.some(p => p.id === producto.id)) {
      const pedidoActualizado = pedido.map(p =>
        p.id === producto.id ? producto : p
      )
      setPedido(pedidoActualizado)
    } else {
      setPedido([...pedido, producto])
    }
    setModal(false)
    setProductoSeleccionado({})
  }

  function handleEliminarProducto(id) {
    const pedidoActualizado = pedido.filter(p => p.id !== id)
    setPedido(pedidoActualizado)
  }

  return (
    <QuioscoContext.Provider
      value={{
        categorias,
        categoriaActual,
        handleClickCategoria,
        productos,
        modal,
        handleSetProducto,
        handleCloseModal,
        productoSeleccionado,
        pedido,
        handleAgregarPedido,
        handleEliminarProducto
      }}
    >
      {children}
    </QuioscoContext.Provider>
  )
}

export { QuioscoContext }