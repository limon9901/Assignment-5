
import { FiMenu } from 'react-icons/fi'
import logo from '../assets/logo-text.png'

const Nav = () => {
    return (
        <div className=' fixed top-0 left-0 z-50 w-full border-b border-[#F1F5F9] bg-white   '>
            <nav className='sm:container w-full mx-auto md:py-6 flex items-center justify-between font-plusfont p-2 md:px-0'>
                <button className='md:hidden w-4.5 h-3.5 '><FiMenu  /></button>
                {/* logo */}
                <div >
                    <img src={logo} alt="" />
                </div>
                {/* menu section */}
                <div className=' hidden md:block '>
                    <ul className='flex items-center gap-7 text-sm font-medium text-[#475569]'>
                        <li className='text-[#DB2777] font-semibold'>Home</li>
                        <li>Technologies</li>
                        <li>Projects</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </div>
                {/* Login  */}
                <div className='flex items-center md:gap-5 gap-2 md:text-sm text-[9px] '>
                    <button type='button' className='font-bold md:font-medium'>Sign In</button>
                    <button type='button' className='md:px-5 px-2.5 md:py-2.5 py-2 bg-[#DB2777] rounded-full text-white font-semibold'>Sign Up</button>
                </div>
            </nav>

        </div>
    )
}

export default Nav