import { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { getstoredjobapplication } from "../../utility/localstorage";

const AppliedJobs = () => {
    const jobs = useLoaderData();

    const [appliedjobs, setappliedjobs] = useState([]);

    const [displayjob, setdisplayjob] = useState([]);

    const handleJobsfilter = filter => {
        if (filter === "all") {
            setdisplayjob(appliedjobs);
        } else if (filter === "remote") {
            const remotejobs = appliedjobs.filter(job => job.remote_or_onsite === "Remote");
            setdisplayjob(remotejobs);
        } else if (filter === "onsite") {
            const onsitejobs = appliedjobs.filter(job => job.remote_or_onsite === "Onsite");
            setdisplayjob(onsitejobs);
        }
    }

    useEffect(() => {
        const storedjobids = getstoredjobapplication();
        if (jobs.length > 0) {
            const jobsapplied = jobs.filter(job => storedjobids.includes(job.id));
            setappliedjobs(jobsapplied);
            setdisplayjob(jobsapplied);
        }
    }, [jobs]);

    return (
        <div>
            <h1>Applied Jobs: {displayjob.length}</h1>
            <div className="flex justify-end">
                <details className="dropdown">
                    <summary className="btn m-1">Job Filter</summary>
                    <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow right-0 ml-auto">
                        <li onClick={() => handleJobsfilter("all")}><a>All</a></li>
                        <li onClick={() => handleJobsfilter("remote")}><a>Remote</a></li>
                        <li onClick={() => handleJobsfilter("onsite")}><a>Onsite</a></li>
                    </ul>
                </details>
            </div>

            <div>
                {displayjob.map(appliedjob => (
                    <div key={appliedjob.id}>
                        <h1>{appliedjob.job_title}</h1>
                        {/* <img src={appliedjob.logo} alt="" /> */}
                        <h1>{appliedjob.remote_or_onsite}</h1>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AppliedJobs;
