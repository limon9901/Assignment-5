import logo from "../assets/logo-text.png"
const Footer = () => {
    return (
        <div>
            <hr className="mt-22 border-[#F1F5F9] " />
            <footer className='container mx-auto  mt-16 font-plusfont'>
                <div className="grid grid-cols-5 ">
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
                    <div className="col-span-1">
                        <h3 className="text-[#0F172A] font-bold text-[12px] mb-4">PRODUCT</h3>
                        <ul className="flex flex-col gap-2.5 text-[#64748B]  text-[12px]">
                            <li>Home</li>
                            <li>Technologies</li>
                            <li>Projects</li>
                        </ul>
                    </div>
                    {/* div3 */}
                    <div className="col-span-1">
                        <h3 className="text-[#0F172A] font-bold text-[12px] mb-4">COMPANY</h3>
                        <ul className="flex flex-col gap-2.5 text-[#64748B]  text-[12px]">
                            <li>About</li>
                            <li>Contact</li>
                            <li>Careers</li>
                        </ul>
                    </div>
                    {/* div 4 */}
                    <div className="col-span-1">
                        <h3 className="text-[#0F172A] font-bold text-[12px] mb-4">LEGAL</h3>
                        <ul className="flex flex-col gap-2.5 text-[#64748B]  text-[12px]">
                            <li>Privacy Policy</li>
                            <li>Terms of Service</li>

                        </ul>
                    </div>
                </div>
                <hr className="mt-14  border-[#F1F5F9] " />
                {/* Copyright */}
                <div className="flex justify-between mt-8 mb-12 ">
                    <p className="text-[#94A3B8] text-[12px]">© 2026 Dev Stack. All rights reserved.</p>
                    <div>
                        <ul className="flex gap-6 text-[#94A3B8]  text-[12px]">
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