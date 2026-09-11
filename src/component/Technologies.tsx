import { use, useState } from 'react'
import TechnologiesCard from './TechnologiesCard'
import Stack from './Stack'
import type { DataType } from './type'
interface TechnologiesProps {
    technologiesdata:Promise<DataType[]>
}
const Technologies = ({technologiesdata}:TechnologiesProps) => {
    const data = use(technologiesdata)
    const [addstack, setaddstack] =useState<DataType[]>([])
    
    return (
        <div className='container mx-auto '>
            <h2 className='text-[#0F172A] font-inter text-4xl  font-extrabold mb-2'>Explore the <span className='bg-linear-to-r from-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent'>Technologies</span></h2>
            <p className='text-[16px] font-plusfont text-[#64748B] mb-10 '>Pick one technology per category to build your ideal stack.</p>
            <div className='grid grid-cols-4 gap-5 '>
                <div className='col-span-3 grid grid-cols-3 gap-5'>
                    {
                        data.map(item=><TechnologiesCard key={item.id} item={item} addstack={addstack} setaddstack={setaddstack} />)
                    }
                </div>
                <div className='col-span-1 '> <Stack /></div>
            </div>
        </div>
    )
}

export default Technologies