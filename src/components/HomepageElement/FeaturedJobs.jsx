import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {

    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        fetch("jobs.json")
            .then(res => res.json())
            .then(data => setJobs(data));
    })

    return (
        <div>
            <div >
                <h1 className="my-6 text-4xl text-center">Featured Jobs</h1>
                <p className="text-center text-xl">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div>
                {
                    jobs.map(job => <Job job={job} key={job.id} ></Job>)
                }
            </div>
        </div>

    );
};

export default FeaturedJobs;