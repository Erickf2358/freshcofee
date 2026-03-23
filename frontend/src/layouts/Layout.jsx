import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import Resumen from '../components/Resumen'
import Modal from '../components/Modal'
import useQuiosco from '../hooks/useQuiosco'

export default function Layout() {
  const { modal } = useQuiosco()

  return (
    <div className="md:flex">
      <Sidebar />
      <main className="flex-1 h-screen overflow-y-scroll">
        <Outlet />
      </main>
      <Resumen />
      {modal && <Modal />}
    </div>
  )
}