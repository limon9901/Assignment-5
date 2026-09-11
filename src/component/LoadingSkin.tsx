

const LoadingSkin = () => {
    return (
        <div className="container mx-auto animate-pulse">

            {/* Heading */}
            <div className="h-10 w-97 rounded-lg bg-slate-200 mb-3"></div>
            <div className="h-5 w-107 rounded-md bg-slate-200 mb-10"></div>

            <div className="grid grid-cols-4 gap-5">

                {/* Technology Cards */}
                <div className="col-span-3 grid grid-cols-3 gap-5">
                    {[1, 2, 3, 4, 5, 6].map((item) => (
                        <div
                            key={item}
                            className="h-65 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                        >
                            <div className="flex items-center justify-between">
                                <div className="h-7 w-7 rounded-md bg-slate-200"></div>
                                <div className="h-6 w-16 rounded-full bg-slate-200"></div>
                            </div>

                            <div className="h-5 w-28 rounded bg-slate-200 mt-5"></div>

                            <div className="mt-4 space-y-2">
                                <div className="h-3 w-full rounded bg-slate-200"></div>
                                <div className="h-3 w-[90%] rounded bg-slate-200"></div>
                                <div className="h-3 w-[65%] rounded bg-slate-200"></div>
                            </div>

                            <div className="h-px bg-slate-100 mt-4"></div>

                            <div className="flex items-center justify-between mt-3">
                                <div className="h-5 w-16 rounded bg-slate-200"></div>
                                <div className="h-4 w-24 rounded bg-slate-200"></div>
                                <div className="h-4 w-10 rounded bg-slate-200"></div>
                            </div>

                            <div className="h-9 w-full rounded-lg bg-slate-200 mt-4"></div>
                        </div>
                    ))}
                </div>

                {/* Stack */}
                <div className="col-span-1">
                    <div className="h-38 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

                        <div className="h-5 w-28 rounded bg-slate-200"></div>

                        <div className="h-3 w-40 rounded bg-slate-200 mt-3"></div>

                        <div className="h-16 w-full rounded-xl border border-slate-200 mt-4 flex items-center justify-center">
                            <div className="h-3 w-28 rounded bg-slate-200"></div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default LoadingSkin;

