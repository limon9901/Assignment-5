import { use,  type Dispatch, type SetStateAction } from 'react'
import TechnologiesCard from './TechnologiesCard'
import Stack from './Stack'
import type { DataType } from './type'
import { Bounce, toast } from 'react-toastify'
interface TechnologiesProps {
    technologiesdata: Promise<DataType[]>
    addstack: DataType[]
    setaddstack: Dispatch<SetStateAction<DataType[]>>
}
const Technologies = ({ technologiesdata, addstack, setaddstack }: TechnologiesProps) => {
    const data = use(technologiesdata)

    const hanslebutton = (data: DataType) => {
        const newdata = [...addstack, data];

        setaddstack(newdata)

        toast.success('Added successfully!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        })

    }



    return (
        <div className='md:container w-full mx-auto px-2 md:px-0 text-center md:text-left '>
            <h2 className='text-[#0F172A] font-inter md:text-4xl text-[24px] md:font-extrabold font-bold md:mb-2 mb-1'>Explore the <span className='bg-linear-to-r from-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent'>Technologies</span></h2>
            <p className='md:text-[16px] text-[12px] font-plusfont text-[#64748B] mb-10 '>Pick one technology per category to build your ideal stack.</p>
            <div className='grid md:grid-cols-4 grid-cols-1 md:gap-5 gap-2 '>
                <div className='col-span-3 grid md:grid-cols-3  grid-cols-1 md:gap-5 gap-2'>
                    {
                        data.map(item => <TechnologiesCard key={item.id} item={item} addstack={addstack} setaddstack={setaddstack} hanslebutton={() => hanslebutton(item)} />)
                    }
                </div>
                <div className='md:col-span-1 '> <Stack addstack={addstack} setaddstack={setaddstack} /></div>
            </div>
        </div>
    )
}

export default Technologies