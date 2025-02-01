import { useLoaderData, useParams } from "react-router";
import { ToastContainer, toast } from 'react-toastify';
import { savejobapplication } from "../../utility/localstorage";


const JobDetails = () => {

    const jobs = useLoaderData();
    const {id} = useParams();
    const job = jobs.find(job => job.id == id);
    console.log(job);


    const notify = () => {
        savejobapplication(id);
        toast(`You have applied to ${job.job_title}`);
    }


    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-6">Job Details for: {id}</h1>
            <div className="grid gap-6 md:grid-cols-3">
                <div className="md:col-span-2 border p-6 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-semibold mb-4">Job Details</h2>
                    <p className="text-gray-600">Here, you can provide more detailed information about the job, such as description, requirements, etc.</p>
                </div>


                <div className="border p-6 rounded-lg shadow-lg">
                    <h2 className="text-xl font-semibold mb-4">Apply for this Job</h2>
                    <p className="text-gray-600 mb-6">Some additional info or instructions can go here.</p>
                    <button onClick={notify} className="bg-blue-600  text-white py-3 px-6 rounded-lg w-full hover:bg-blue-700 transition-all">
                        Apply Now
                    </button>
                </div>
            </div>
            <ToastContainer />
        </div>

    );
};

export default JobDetails;
