import { useState } from 'react';
import { NavLink } from 'react-router-dom'
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { IoCloseSharp } from "react-icons/io5";
import DarkMode from './DarkMode';
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className='flex items-center navbar w-full z-[999] shadow-sm bg-transparent  backdrop-blur-xl fixed top-0 left-0 '>
      <div className='md:flex items-center justify-between bg-transparent py-4 md:px-10 px-7 container'>
        <div className='font-bold text-2xl cursor-pointer flex items-center gap-1 justify-between'>
          <h1 className="text-5xl text-slate-600">Vision</h1>

        </div>
        <div onClick={() => setOpen(!open)} className='absolute right-8 top-6 cursor-pointer md:hidden w-5 h-5 '>
          {
            open ? <IoCloseSharp className='text-3xl' /> : <HiMiniBars3CenterLeft className='size-8' />
          }
        </div>
        <ul className={`ml-auto font-light md:flex md:items-center md:pb-0  pb-12 absolute md:static  md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 ${open ? 'top-10' : 'top-[-490px]'}`}>
          <ul className={`h-screen md:h-auto bg-slate-900 md:bg-inherit md:flex md:flex-row md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 flex flex-col text-white md:text-inherit ${open ? 'top-12' : 'top-[-490px]'}`}>
            <NavLink onClick={e=>setOpen(false)} className={`md:ml-8 md:my-0 my-7`} to='/'>Home</NavLink>
            <NavLink onClick={e=>setOpen(false)} className={`md:ml-8 md:my-0 my-7`} to='/services'>Services</NavLink>
            <NavLink onClick={e=>setOpen(false)} className={`md:ml-8 md:my-0 my-7`} to='/contact'>Contact</NavLink>
            <a className={`md:ml-8 md:my-0 my-7 font-semibold`} href='http://localhost:5173/dashboard/auth/login'><button className="primary-btn font-light">Login</button></a>
          </ul>
        </ul>
        {/* button */}
      </div>
      <div className='md:mr-5 mr-10'>
        <DarkMode />
      </div>
    </div>
  )
}

export default Navbar