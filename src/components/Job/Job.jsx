import { IoLocationOutline } from "react-icons/io5";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { Link } from "react-router-dom"; // Corrected the import for `Link`

const Job = ({ job }) => {
    const { id, logo, job_title, job_type, location, remote_or_onsite, company_name, salary } = job;
    return (
        <div className="p-4">
            <div className="mt-4 bg-white border-2 border-dashed border-gray-300 rounded-lg p-6 md:p-10">
                <figure className="flex items-start mb-4">
                    <img src={logo} alt={job_title} className="w-[150px] h-[50px] object-contain" />
                </figure>
                <div className="text-left">
                    <h2 className="text-2xl font-bold text-[#191919] mb-2">{job_title}</h2>
                    <p className="text-xl text-[#7e90fe] mb-4">{company_name}</p>
                    <div className="flex gap-3 mb-4">
                        <button className="border-2 px-4 py-2 rounded border-[#7e90fe] text-[#7e90fe] font-medium">
                            {remote_or_onsite}
                        </button>
                        <button className="border-2 px-4 py-2 rounded border-[#7e90fe] text-[#7e90fe] font-medium">
                            {job_type}
                        </button>
                    </div>
                    <div className="flex gap-6 items-center mb-6 text-sm text-[#777]">
                        <div className="flex items-center">
                            <IoLocationOutline className="text-lg mr-1" /> {location}
                        </div>
                        <div className="flex items-center">
                            <HiOutlineCurrencyDollar className="text-lg mr-1" /> {salary}
                        </div>
                    </div>
                    <Link to={`/job/${id}`}>
                        <div className="mt-4">
                            <div className="inline-block px-6 py-3 bg-gradient-to-r from-[#7e90fe] to-[#9873ff] rounded-lg">
                                <button className="text-white text-lg font-bold">View Details</button>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Job;
