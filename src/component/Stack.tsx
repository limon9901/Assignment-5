import { type Dispatch, type SetStateAction } from "react";
import type { DataType } from "./type";
import { FaXmark } from "react-icons/fa6";
import { Bounce, toast } from "react-toastify";

interface StackType {
  addstack: DataType[];
  setaddstack: Dispatch<SetStateAction<DataType[]>>;
}

const Stack = ({ addstack, setaddstack }: StackType) => {
  const hanleDeleteIcon = (item: DataType) => {
    const removed = addstack.filter(itemid => item.id != itemid.id)
    toast.error(`${item.name}  Remove`, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
    setaddstack(removed)



  }
  const handleallremoved = () => {
    setaddstack([])
    toast.error("All removed item", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });

  }


  if (addstack.length === 0) {
    return (
      <div>
        <div className=" font-plusfont w-full rounded-4xl border border-[#F1F5F9] bg-white px-11 py-12 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.08),0_2px_4px_-2px_rgba(0,0,0,0.05)]">
          <h2 className="text-[16px] font-bold leading-tight text-[#0F172A] mb-1">
            Your Stack
          </h2>

          <p className="mt-3 text-[16px] text-[#94A3B8]">
            No technologies selected yet.
          </p>

          <div className="mt-8 flex h-35 items-center justify-center rounded-[25px] border-2 border-dashed border-slate-200">
            <p className="text-[12px] text-[#94A3B8]">
              Your stack is empty.
            </p>
          </div>
        </div>
      </div>
    )

  }
  else {
    return (
      <div className="font-plusfont w-full rounded-[20px] border border-slate-100 bg-white px-6 py-7 shadow-[0_2px_6px_rgba(15,23,42,0.08)]">

        {/* Title */}
        <h2 className="text-[16px] font-bold text-[#0F172A]">
          Your Stack
        </h2>

        {/* Subtitle */}
        <p className="mt-1 text-[12px] text-[#94A3B8]">
          {`${addstack.length} Technology Selected`}
        </p>

        {/* Technology List */}
        <ul className="mt-5 space-y-1.5">

          {
            addstack.map((item) => (
              <li
                key={item.id}
                className="flex h-15 items-center justify-between rounded-[10px] border border-[#E2E8F0] px-3.5"
              >

                {/* Icon + Info */}
                <div className="flex items-center gap-3">

                  <img
                    src={item.icon}
                    alt={item.name}
                    className="h-9 w-9 object-contain"
                  />

                  <div>
                    <h3 className="text-[14px] font-bold text-[#0F172A]">
                      {item.name}
                    </h3>

                    <p className="text-[10px] font-bold text-[#94A3B8]">
                      {item.category}
                    </p>
                  </div>

                </div>

                {/* Delete Icon */}
                <button
                  onClick={() => hanleDeleteIcon(item)}

                  className="text-[#94A3B8] transition hover:text-[#64748B] "
                >
                  <FaXmark size={22} />
                </button>

              </li>
            ))}

        </ul>

        {/* Remove All */}
        <button
          onClick={handleallremoved}
          className="mt-15 h-10 w-full rounded-[10px] border border-[#F87171] bg-white text-[16px] font-semibold text-[#DC2626] transition hover:bg-red-50 "
        >
          Remove All
        </button>

      </div>
    )
  }

}

export default Stack