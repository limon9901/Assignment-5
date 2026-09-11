import { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import logo from '../assets/logo-text.png'

const Nav = () => {

    const [menuOpen, setMenuOpen] = useState<boolean>(false)

    return (
        <div className='fixed top-0 left-0 z-50 w-full border-b border-[#F1F5F9] bg-white'>

            <nav className='sm:container w-full mx-auto md:py-6 flex items-center justify-between font-plusfont p-2 md:px-0'>

                {/* Hamburger */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className='md:hidden'
                >
                    {menuOpen ? (
                        <FiX className='size-7' />
                    ) : (
                        <FiMenu className='size-7' />
                    )}
                </button>

                {/* Logo */}
                <div>
                    <img src={logo} alt="Logo" />
                </div>

                {/* Desktop Menu */}
                <div className='hidden md:block'>
                    <ul className='flex items-center gap-7 text-sm font-medium text-[#475569]'>
                        <li className='text-[#DB2777] font-semibold'>Home</li>
                        <li>Technologies</li>
                        <li>Projects</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </div>

                {/* Login */}
                <div className='flex items-center md:gap-5 gap-2 md:text-sm text-[9px]'>
                    <button
                        type='button'
                        className='font-bold md:font-medium'
                    >
                        Sign In
                    </button>

                    <button
                        type='button'
                        className='md:px-5 px-2.5 md:py-2.5 py-2 bg-[#DB2777] rounded-full text-white font-semibold'
                    >
                        Sign Up
                    </button>
                </div>

            </nav>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className='md:hidden border-t border-[#F1F5F9] bg-white px-5 py-5'>
                    <ul className='flex flex-col gap-5 text-sm font-medium text-[#475569]'>
                        <li className='text-[#DB2777] font-semibold'>Home</li>
                        <li>Technologies</li>
                        <li>Projects</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </div>
            )}

        </div>
    )
}

export default Nav