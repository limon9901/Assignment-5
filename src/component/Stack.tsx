

const Stack = () => {
  return (
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
  )
}

export default Stack