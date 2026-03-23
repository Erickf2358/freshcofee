export function formatearMoneda(cantidad) {
  return cantidad.toLocaleString('es-MX', {
    style: 'currency',
    currency: 'MXN'
  })
}