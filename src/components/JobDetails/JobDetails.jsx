import { useLoaderData, useParams } from "react-router";

const JobDetails = () => {

    const jobs = useLoaderData();
    const {id} = useParams();
    // console.log(id,jobs);
    const job = jobs.find(job => job.id == id);
    console.log(job);

    return (
        <div>
           <h1>job detials of </h1>
        </div>
    );
};

export default JobDetails;