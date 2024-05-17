import { Outlet } from 'react-router-dom'
import Header from '../components/nav/Header'
import Footer from '../components/nav/Footer'

export default function AppLayout() {
    return (
        <div className='flex flex-col min-h-screen'>
            <Header />
            <main className='flex-grow'>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}
