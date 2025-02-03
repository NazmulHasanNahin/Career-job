import { IoLocationOutline } from "react-icons/io5";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { Link, useLoaderData } from "react-router-dom";

const JobsPage = () => {
    const jobs = useLoaderData();

    if (jobs.length === 0) {
        return <p>No jobs available</p>;
    }

    return (
        <div className="p-4">
            <h1 className="text-4xl text-center my-12">All Jobs</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {jobs.map((job) => (
                    <div key={job.id} className="mt-4 bg-white border-2 border-dashed border-gray-300 rounded-lg p-6 md:p-10">
                        <figure className="flex items-start mb-4">
                            <img
                                src={job.logo}
                                alt={job.job_title}
                                className="w-[150px] h-[50px] object-contain"
                            />
                        </figure>
                        <div className="text-left">
                            <h2 className="text-2xl font-bold text-[#191919] mb-2">
                                {job.job_title}
                            </h2>
                            <p className="text-xl text-[#7e90fe] mb-4">{job.company_name}</p>
                            <div className="flex gap-3 mb-4">
                                <button className="border-2 px-4 py-2 rounded border-[#7e90fe] text-[#7e90fe] font-medium">
                                    {job.remote_or_onsite}
                                </button>
                                <button className="border-2 px-4 py-2 rounded border-[#7e90fe] text-[#7e90fe] font-medium">
                                    {job.job_type}
                                </button>
                            </div>
                            <div className="flex gap-6 items-center mb-6 text-sm text-[#777]">
                                <div className="flex items-center">
                                    <IoLocationOutline className="text-lg mr-1" /> {job.location}
                                </div>
                                <div className="flex items-center">
                                    <HiOutlineCurrencyDollar className="text-lg mr-1" /> {job.salary}
                                </div>
                            </div>
                            <Link to={`/job/${job.id}`}>
                                <div className="mt-4">
                                    <div className="inline-block px-6 py-3 bg-gradient-to-r from-[#7e90fe] to-[#9873ff] rounded-lg">
                                        <button className="text-white text-lg font-bold">View Details</button>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};


export default JobsPage;
