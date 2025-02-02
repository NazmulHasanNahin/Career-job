import { useEffect, useState } from "react";
import Job from "../Job/Job"; // Import Job Component

const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [dataLength, setDataLength] = useState(4);

    useEffect(() => {
        fetch("jobs.json")
            .then(res => res.json())
            .then(data => setJobs(data));
    }, []);

    return (
        <div className="my-8">
            <div>
                <h1 className="my-6 text-4xl font-extrabold text-center">Featured Jobs</h1>
                <p className="text-center text-xl">Explore thousands of job opportunities with all the information you need. It's your future.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2  gap-6 my-2">
                {jobs.slice(0, dataLength).map(job => (
                    <Job key={job.id} job={job} />
                ))}
            </div>
            {dataLength < jobs.length && (
                <div className="text-center mt-6">
                    <button
                        onClick={() => setDataLength(jobs.length)}
                        className="h-[49px] px-[18px] py-[11px] bg-gradient-to-r from-[#7e90fe] to-[#9873ff] rounded text-white text-xl font-extrabold">
                        Show All Jobs
                    </button>
                </div>
            )}
        </div>
    );
};

export default FeaturedJobs;
