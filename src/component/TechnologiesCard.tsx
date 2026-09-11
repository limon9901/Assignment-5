
import type { Dispatch, SetStateAction } from 'react';
import type { DataType } from './type'
import { FaStar } from 'react-icons/fa'

interface ItemType {
    item: DataType;
    addstack: DataType[];
    setaddstack: Dispatch<SetStateAction<DataType[]>>;
}


const TechnologiesCard = ({ item, addstack, setaddstack }: ItemType) => {
    

    const badgeStyle: Record<string, string> = {
        Popular: "bg-[#F0F9FF] text-[#0EA5E9]",
        Essential: "bg-[#F0F9FF] text-[#0EA5E9]",
        Fast: "bg-[#FFF7ED] text-[#EA580C]",
        Containers: "bg-[#F0F9FF] text-[#0EA5E9]",
        Automation: "bg-[#F0F9FF] text-[#0EA5E9]",


    }
    const getBadgeStyle = (bage: string) => {
        return badgeStyle[bage] || "bg-slate-100 text-slate-500"

    }

    const hanslebutton = (data:DataType)=>{
        const newdata = [...addstack , data];
        setaddstack(newdata)
        


    }
    console.log(addstack)
    

    return (
        <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">

            {/* Top: Icon + Badge */}
            <div className="flex items-center justify-between">
                <img
                    src={item.icon}
                    alt={item.name}
                    className="h-7 w-7 object-contain"
                />


                <span className={`rounded-full px-3 py-1 text-xs font-medium ${getBadgeStyle(item.badge)} `} >
                    {item.badge}
                </span>
            </div>

            {/* Technology Name */}
            <h3 className="mt-5 text-lg font-bold text-[#0F172A]">
                {item.name}
            </h3>

            {/* Description */}
            <p className="mt-2 min-h-15 text-[13px] leading-5 text-[#64748B]">
                {item.description}
            </p>

            {/* Divider */}
            <div className="my-3 border-t border-slate-100"></div>

            {/* Category + Difficulty + Rating */}
            <div className="flex items-center justify-between text-xs">

                <span className="rounded bg-slate-100 px-2 py-1 text-[#475569]">
                    {item.category}
                </span>

                <span className="text-[#64748B]">
                    {item.difficulty}
                </span>

                <span className="flex items-center gap-1 text-[#334155]">
                    <FaStar className="text-yellow-400" size={11} />
                    {item.rating}
                </span>

            </div>

            {/* Button */}
            <button
            onClick={()=>hanslebutton(item)}
                className="mt-3 w-full rounded-lg bg-[#080D1B] py-2.5 text-sm font-medium text-white transition hover:bg-[#151b2c]"
            >
                Add to Stack
            </button>

        </div>
    )
}

export default TechnologiesCard