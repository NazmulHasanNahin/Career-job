import { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { getstoredjobapplication } from "../../utility/localstorage";

const AppliedJobs = () => {
    const jobs = useLoaderData();

    const [appliedjobs, setappliedjobs] = useState([]);


    useEffect(() => {
        const storedjobids = getstoredjobapplication();
        if (jobs.length > 0) {
            const jobsapplied = jobs.filter(job => storedjobids.includes(job.id));
            setappliedjobs(jobsapplied);
        }
    }, [jobs]); // Added 'jobs' as a dependency

    return (
        <div>

            <h1>Applied Jobs:{appliedjobs.length}</h1>
            <div className="flex justify-end">
                <details className="dropdown">
                    <summary className="btn m-1">Job Filter</summary>
                    <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow right-0 ml-auto">
                        <li><a>All</a></li>
                        <li><a>Remote</a></li>
                        <li><a>Onsite</a></li>
                    </ul>
                </details>
            </div>

            <div>
                {
                    appliedjobs.map(appliedjob => <div key={appliedjob.id} >
                        <h1>{appliedjob.job_title}</h1>
                        {/* <img src={appliedjob.logo} alt="" /> */}
                        <h1>{appliedjob.remote_or_onsite}</h1>

                    </div>

                    )
                }
            </div>
        </div>
    );
};

export default AppliedJobs;
