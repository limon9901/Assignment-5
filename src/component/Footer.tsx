import logo from "../assets/logo-text.png"
const Footer = () => {
    return (
        <div>
            <hr className="md:mt-22 mt-10 border-[#F1F5F9] " />
            <footer className='md:container w-full mx-auto  md:mt-16 mt-8 font-plusfont'>
                <div className="md:grid md:grid-cols-5 flex flex-col items-center justify-center ">
                    {/* div1 */}
                    <div className="col-span-2">
                        <img src={logo} alt="" />
                        <p className="py-3 text-[#64748B] text-[12px]">Curated tools, technologies, and resources for developers building <br />
                            modern software.</p>

                        <ul className="flex gap-4 text-[#475569] text-[16px] font-semibold">
                            <li>GitHub</li>
                            <li>Twitter</li>
                            <li>LinkedIn</li>
                        </ul>

                    </div>
                    {/* div2 */}
                    <div className="col-span-1 hidden md:block">
                        <h3 className="text-[#0F172A] font-bold text-[12px] mb-4">PRODUCT</h3>
                        <ul className="flex flex-col gap-2.5 text-[#64748B]  text-[12px]">
                            <li>Home</li>
                            <li>Technologies</li>
                            <li>Projects</li>
                        </ul>
                    </div>
                    {/* div3 */}
                    <div className="col-span-1 hidden md:block">
                        <h3 className="text-[#0F172A] font-bold text-[12px] mb-4">COMPANY</h3>
                        <ul className="flex flex-col gap-2.5 text-[#64748B]  text-[12px]">
                            <li>About</li>
                            <li>Contact</li>
                            <li>Careers</li>
                        </ul>
                    </div>
                    {/* div 4 */}
                    <div className="col-span-1 hidden md:block">
                        <h3 className="text-[#0F172A] font-bold text-[12px] mb-4">LEGAL</h3>
                        <ul className="flex flex-col gap-2.5 text-[#64748B]  text-[12px]">
                            <li>Privacy Policy</li>
                            <li>Terms of Service</li>

                        </ul>
                    </div>
                </div>
                <hr className="md:mt-14 mt-7 border-[#F1F5F9] " />
                {/* Copyright */}
                <div className="flex md:justify-between justify-center mt-8 mb-12 gap-4 ">
                    <p className="text-[#94A3B8] text-[12px]">© 2026 Dev Stack. All rights reserved.</p>
                    <div>
                        <ul className="flex mdgap-6 gap-3 text-[#94A3B8]  text-[12px]">
                            <li>Privacy</li>
                            <li>Terms</li>
                        </ul>
                    </div>

                </div>

            </footer>
        </div>

    )
}

export default Footer