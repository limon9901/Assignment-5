
import logo from '../assets/logo-text.png'

const Nav = () => {
    return (
        <div className='fixed w-full border-b border-[#F1F5F9] bg-white  '>
            <nav className='container mx-auto py-6 flex items-center justify-between font-plusfont '>
                {/* logo */}
                <div>
                    <img src={logo} alt="" />
                </div>
                {/* menu section */}
                <div>
                    <ul className='flex items-center gap-7 text-sm font-medium text-[#475569]'>
                        <li className='text-[#DB2777] font-semibold'>Home</li>
                        <li>Technologies</li>
                        <li>Projects</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </div>
                {/* Login  */}
                <div className='flex items-center gap-5 text-sm'>
                    <button type='button'>Sign In</button>
                    <button type='button' className='px-5 py-2.5 bg-[#DB2777] rounded-full text-white'>Sign Up</button>
                </div>
            </nav>

        </div>
    )
}

export default Nav