import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../assets/images/LogoOption_NoMargins.svg'

export default function Navbar() {

    const navLinkClass = ({ isActive }) =>
    `inline-block border-b-[1.5px] pb-1 transition-colors duration-300 ${
        isActive
            ? 'text-red-100 border-red-100'
            : 'text-dark-30 border-transparent hover:text-red-100'
    }`;
    
  return (
    <nav className='w-full h-26.25 bg-white sticky top-0 z-50 flex items-center justify-between font-lato'>

        <Link to='/'>
            <img src={Logo} alt="Grand Atlas Logo" className="w-21.25 ml-[40.8px] flex shrink-0" />
        </Link>

        <ul className="flex list-none items-center gap-17.25 text-[20px] font-bold text-dark-30">
            <li>
                <NavLink
                to='/'
                end
                className={({ isActive }) =>
                    navLinkClass({ isActive: isActive || window.location.pathname === '/home' })
                }
                >
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink to='/units' className={navLinkClass}>
                    Units
                </NavLink>
            </li>
            <li>
                <NavLink to='/zones' className={navLinkClass}>
                    Zones
                </NavLink>
            </li>
            <li>
                <NavLink to='/developers' className={navLinkClass}>
                    Developers
                </NavLink>
            </li>
            <li>
                <NavLink to='/contact-us' className={navLinkClass}>
                    Contact Us
                </NavLink>
            </li>
        </ul>

        <button className='w-27.5 h-8.75 text-white rounded-[5px] bg-linear-to-r from-red-100 to-red-50 mr-9 cursor-pointer'>
            Register
        </button>
        
    </nav>
  )
}
