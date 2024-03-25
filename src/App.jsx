import React, { useEffect } from 'react'
import {
  createBrowserRouter, RouterProvider
} from 'react-router-dom'
import { BrowserRouter as Router } from "react-router-dom";

import AOS from 'aos'
import 'aos/dist/aos.css';

import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import Home from './pages/Home/Home'
import Services from './pages/Services/Services'
import ConfirmEmail from './pages/ConfirmEmail/ConfirmEmail';
import Profile from './profile/Profile';
import 'react-toastify/dist/ReactToastify.css';
import Routers from './Router';
AOS.init();
const App = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className='dark:text-white dark:bg-gray-900'>
      <Router>
        <Routers />
      </Router>
    </div>
  )
}

export default App