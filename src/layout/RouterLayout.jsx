import { Outlet } from 'react-router-dom'
import Footer from '../Components/Footer/Footer'
import Navbar from '../Components/Navbar/Navbar'
const RouterLayout = () => {
    return (
        <div className='flex flex-col h-[100%]'>
            <Navbar />
            <main className='flex-grow'>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default RouterLayout