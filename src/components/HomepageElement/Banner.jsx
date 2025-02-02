const Banner = () => {
    return (
        <div className="mt-14 px-4 md:px-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <div className="p-6">
                    <div className="w-full max-w-[550px]">
                        <span className="text-[#191919] leading-none text-[40px] sm:text-[50px] font-extrabold font-['Manrope']">
                            One Step <br /> Closer To Your 
                        </span>
                        <span className="text-[#7e90fe] text-[50px] sm:text-[60px] leading-tight font-extrabold font-['Manrope']">
                            <br />Dream Job
                        </span>
                    </div>
                    <div className="mt-4 text-[#191919] text-lg sm:text-xl">
                        <p>Explore thousands of job opportunities with all the information you need. It's your future. Come find it. Manage all your job applications from start to finish.</p>
                    </div>
                    <div className="mt-6">
                        <button className="p-3 bg-gradient-to-r from-[#7e90fe] to-[#9873ff] rounded-lg text-white text-base font-bold">
                            Get Started
                        </button>
                    </div>
                </div>
                <div className="flex justify-center md:justify-end">
                    <img 
                        className="max-w-full h-auto" 
                        src="https://i.ibb.co.com/bVvzmWc/P3-OLGJ1-copy-1.png" 
                        alt="Banner"
                    />
                </div>
            </div>
        </div>
    );
};

export default Banner;
