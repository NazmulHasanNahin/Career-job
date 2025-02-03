import { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { getstoredjobapplication } from "../../utility/localstorage";
import { IoLocationOutline } from "react-icons/io5";
import { HiOutlineCurrencyDollar } from "react-icons/hi";

const AppliedJobs = () => {
    const jobs = useLoaderData();

    const [appliedjobs, setappliedjobs] = useState([]);
    const [displayjob, setdisplayjob] = useState([]);

    const handleJobsfilter = (filter) => {
        if (filter === "all") {
            setdisplayjob(appliedjobs);
        } else if (filter === "remote") {
            const remotejobs = appliedjobs.filter(
                (job) => job.remote_or_onsite === "Remote"
            );
            setdisplayjob(remotejobs);
        } else if (filter === "onsite") {
            const onsitejobs = appliedjobs.filter(
                (job) => job.remote_or_onsite === "Onsite"
            );
            setdisplayjob(onsitejobs);
        }
    };

    useEffect(() => {
        const storedjobids = getstoredjobapplication();
        if (jobs.length > 0) {
            const jobsapplied = jobs.filter((job) => storedjobids.includes(job.id));
            setappliedjobs(jobsapplied);
            setdisplayjob(jobsapplied);
        }
    }, [jobs]);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold text-center mb-8">
                Applied Jobs: {displayjob.length}
            </h1>

            <div className="flex justify-end mb-6">
                <details className="dropdown">
                    <summary className="btn bg-gradient-to-r from-[#7e90fe] to-[#9873ff] text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 transition-all">
                        Job Filter
                    </summary>
                    <ul className="menu dropdown-content bg-white rounded-lg shadow-lg w-52 p-2">
                        <li onClick={() => handleJobsfilter("all")}>
                            <a className="cursor-pointer">All</a>
                        </li>
                        <li onClick={() => handleJobsfilter("remote")}>
                            <a className="cursor-pointer">Remote</a>
                        </li>
                        <li onClick={() => handleJobsfilter("onsite")}>
                            <a className="cursor-pointer">Onsite</a>
                        </li>
                    </ul>
                </details>
            </div>

            <div className="space-y-6">
                {displayjob.map((appliedjob) => (
                    <div
                        key={appliedjob.id}
                        className="bg-white border-2 border-dashed border-gray-300 rounded-lg p-6 shadow-lg flex flex-col md:flex-row items-start"
                    >
                        <figure className="flex justify-center items-center mb-4 md:mb-0 md:mr-6">
                            <img
                                src={appliedjob.logo}
                                alt={appliedjob.job_title}
                                className="w-[150px] h-[50px] object-contain md:mt-16"
                            />
                        </figure>

                        <div className="text-left flex-1">
                            <h2 className="text-2xl font-bold text-[#191919] mb-2">
                                {appliedjob.job_title}
                            </h2>
                            <p className="text-xl text-[#7e90fe] mb-4">
                                {appliedjob.company_name}
                            </p>
                            <div className="flex gap-3 mb-4">
                                <span className="bg-[#7e90fe] text-white px-4 py-2 rounded">
                                    {appliedjob.remote_or_onsite}
                                </span>
                                <span className="bg-[#7e90fe] text-white px-4 py-2 rounded">
                                    {appliedjob.job_type}
                                </span>
                            </div>
                            <div className="flex gap-6 items-center mb-6 text-sm text-[#777]">
                                <div className="flex items-center">
                                    <IoLocationOutline className="text-lg mr-1" />{" "}
                                    {appliedjob.location}
                                </div>
                                <div className="flex items-center">
                                    <HiOutlineCurrencyDollar className="text-lg mr-1" />{" "}
                                    {appliedjob.salary}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AppliedJobs;
