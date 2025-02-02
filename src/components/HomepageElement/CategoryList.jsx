const CategoryList = () => {
    return (
        <div className="mt-14">
            <div>
                <h1 className="mt-6 text-4xl font-extrabold text-center">Job Category List</h1>
                <p className="text-center mt-3 text-xl">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="md:flex grid grid-cols-1 gap-8 md:gap-6 my-12">
                {/* 1 */}
                <div className="w-[311px] h-[220px] mx-auto bg-[#faf8ff] rounded-lg">
                    <div className="p-14">
                        <img src="https://i.ibb.co.com/j9gNj1XF/accounts-1.png" alt="" />
                        <div className="mt-4">
                            <h2 className="font-semibold text-[#474747]">Account & Finance</h2>
                            <p>300 Jobs Available</p>
                        </div>
                    </div>
                </div>
                {/* 2 */}
                <div className="w-[311px] h-[220px] mx-auto bg-[#faf8ff] rounded-lg">
                    <div className="p-14">
                        <img src="https://i.ibb.co.com/0jN9f4Qm/business-1.png" alt="" />
                        <div className="mt-4">
                            <h2 className="font-semibold text-[#474747]">Creative Design</h2>
                            <p>100+ Jobs Available</p>
                        </div>
                    </div>
                </div>
                {/* 3 */}
                <div className="w-[311px] h-[220px] mx-auto bg-[#faf8ff] rounded-lg">
                    <div className="p-14">
                        <img src="https://i.ibb.co.com/S40WbRhQ/social-media-1.png" alt="" />
                        <div className="mt-4">
                            <h2 className="font-semibold text-[#474747]">Marketing & Sales</h2>
                            <p>150 Jobs Available</p>
                        </div>
                    </div>
                </div>
                {/* 4 */}
                <div className="w-[311px] h-[220px] mx-auto bg-[#faf8ff] rounded-lg">
                    <div className="p-14">
                        <img src="https://i.ibb.co.com/cPXPL6f/chip-1.png" alt="" />
                        <div className="mt-4">
                            <h2 className="font-semibold text-[#474747]">Engineering Job</h2>
                            <p>224 Jobs Available</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryList;