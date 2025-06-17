import {Menu, X} from 'lucide-react'
import { useState } from 'react';
import logo from '../assets/logo.png';
import { navItems } from '../constants';
const NavBar = () => {
    const [mobileDrawerOpen, setmobileDrawerOpen] = useState(false);
    const toggleNavBar = () =>{
        setmobileDrawerOpen(!mobileDrawerOpen)
    }
  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
        <div className="container mx-auto  text-sm">
            <div className="flex justify-between items-center">
                <div className="flex items-center flex-shrink-0 ml-2">
                    <img className='h-10 w-10' src={logo} alt="logo"/>
                    <span className='text-xl tracking-tight'>Virtual_Theo711</span>
                </div>
                <ul className='hidden lg:flex ml-14 space-x-12'>
                    {navItems.map((item, index)=>(
                        <li key={index}>
                            <a href={item.href}>{item.label}</a>

                        </li>
                    ))}
                </ul>
                <div className='hidden lg:flex items-center space-x-12'>
                    <a href = "#" className='py-2 px-3 border rounded-md'>
                        Sign In
                    </a>
                    <a href = "#" className='py-2 px-3 bg-gradient-to-r from-orange-500 to-orange-800 border rounded-md'>
                        Creante An Account
                    </a>

                </div>
            </div>
            <div className='lg:hidden mr-2 md:flex flex-col absolute right-0 top-6'>
                <button onClick={toggleNavBar}>
                    {mobileDrawerOpen ? <X /> : <Menu />}   
                </button>
                {mobileDrawerOpen && (
                <div className='fixed right-0 top-16 z-20 bg-neutral-900 p-12 flex flex-col items-center justify-center w-full'>
                    <ul>
                        {navItems.map((item, index) => (
                        <li key={index} className='mb-4'>
                            <a href={item.href} className='text-white'>{item.label}</a>
                        </li>
                        ))}
                    </ul>
                    <div className='flex space-x-12 mt-6'>
                        <a href = "#" className='py-2 px-3 border rounded-md'>
                            Sign In
                        </a>
                        <a href = "#" className='py-2 px-3 bg-gradient-to-r from-orange-500 to-orange-800 border rounded-md'>
                            Creante An Account
                        </a>
                    </div>
                </div>
                )}
            </div>
        </div>
    </nav>
  )
}

export default NavBar
