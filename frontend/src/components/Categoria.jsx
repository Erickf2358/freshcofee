import useQuiosco from '../hooks/useQuiosco'

export default function Categoria({ categoria }) {
  const { categoriaActual, handleClickCategoria } = useQuiosco()
  const { nombre, icono, id } = categoria

  return (
    <div 
      className={`flex items-center gap-4 border p-3 cursor-pointer hover:bg-amber-400 ${categoriaActual.id === id ? 'bg-amber-400' : ''}`}
      onClick={() => handleClickCategoria(id)}
    >
      <img
        src={`/img/icono_${icono}.svg`}
        alt={`icono ${nombre}`}
        className="w-12"
      />
      <p className="text-lg font-bold">{nombre}</p>
    </div>
  )
}