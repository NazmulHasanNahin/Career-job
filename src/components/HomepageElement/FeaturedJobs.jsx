import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {

    const [jobs, setJobs] = useState([]);

    const [dataLenght, setdataLenght] = useState(4);

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
            <div className="grid md:grid-cols-2 my-2">
                {
                    jobs.slice(0, dataLenght).map(job => <Job job={job} key={job.id} ></Job>)
                }
            </div>
            <div className={dataLenght === jobs.length && "hidden"}>
            <div className="h-[49px] px-[18px] py-[11px] bg-gradient-to-r from-[#7e90fe] to-[#9873ff] rounded justify-start gap-2.5 inline-flex">
                <button onClick={()=>setdataLenght(jobs.length)}

                 className="text-white text-xl font-extrabold font-['Manrope']">Show All Jobs</button>
            </div>
            </div>
        </div>

    );
};

export default FeaturedJobs;