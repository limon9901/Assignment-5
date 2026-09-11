
import heroimg from '../assets/banner-stack.png'

const Hero = () => {
    return (
        <div className='md:container w-full mx-auto md:py-28 pt-28  grid md:grid-cols-3 grid-cols-1 md:gap-8  items-center px-2 md:px-0 '>
            {/* hero text */}
            <div className='col-span-2'>
                <h1 className='font-inter md:text-6xl text-3xl md:font-extrabold font-bold text-[#0F172A] mb-6 text-center md:text-left '>Build Your Ideal <br />
                    <span className='bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent '>Development Stack</span>
                </h1>
                <p className=' md:text-lg text-[14px] text-center md:text-left text-[#475569] mb-10 font-plusfont'>Explore frontend, backend, database, and tooling options,<br />
                    compare them side by side, and put together the stack that fits your <br className='hidden md:block' />
                    next project.</p>
                {/* button */}
                <div className='flex items-center  gap-3 font-inter justify-center md:justify-start text-[12px] md:text-[18px]'>
                    <button className='bg-linear-to-r from-[#F97316] to-[#EC4899] text-white p-3 rounded-lg  '>Explore Technologies</button>
                    <button className=' p-3 rounded-lg border border-[#E5E7EB] px-11.5 py-3 text-[#374151]'>Learn More</button>
                </div>

            </div>
            {/* hero img */}
            <div className='col-span-1'>
                <img src={heroimg} alt="" />

            </div>

        </div>
    )
}

export default Hero