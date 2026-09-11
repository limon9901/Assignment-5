
import heroimg from '../assets/banner-stack.png'

const Hero = () => {
    return (
        <div className='container mx-auto py-40 grid grid-cols-3 gap-8 items-center '>
            {/* hero text */}
            <div className='col-span-2'>
                <h1 className='font-inter text-6xl font-extrabold text-[#0F172A] mb-6 '>Build Your Ideal <br />
                    <span className='bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent '>Development Stack</span>
                </h1>
                <p className=' text-lg text-[#475569] mb-10 font-plusfont'>Explore frontend, backend, database, and tooling options,<br />
                    compare them side by side, and put together the stack that fits your <br />
                    next project.</p>
                {/* button */}
                <div className='flex items-center  gap-3 font-inter'>
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