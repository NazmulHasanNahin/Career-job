import { useLoaderData, useParams } from "react-router";
import { ToastContainer, toast } from 'react-toastify';
import { savejobapplication } from "../../utility/localstorage";
import { IoLocationOutline } from "react-icons/io5";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const JobDetails = () => {

    const jobs = useLoaderData();
    const { id } = useParams();
    const idint = parseInt(id);
    const job = jobs.find(job => job.id === idint);
    console.log(job);


    const notify = () => {
        savejobapplication(idint);
        toast(`You have applied to ${job.job_title}`);
    }



    return (
        <div className="">
            <div>
                <h1 className="text-4xl font-bold text-center my-16">
                    Job Details
                </h1>

            </div>

            <div className="grid gap-6 md:grid-cols-3 mb-32 md:p-0 p-4 ">
                <div className="md:col-span-2 p-6 border-2 border-dashed rounded-lg leading-7">

                    <div>
                        <div className="flex justify-center items-center">
                            <img src={job.logo} alt="" className="max-w-full h-auto" />
                        </div>

                        <div className="  mb-4">
                            <h1>
                                <span className="text-[#191919] text-base font-extrabold leading-loose">Job Title:</span>
                                <span className="text-[#757575] text-base font-medium leading-loose"> {job.job_title}</span>
                            </h1>
                        </div>

                        <div className="  mb-4">
                            <h1>
                                <span className="text-[#191919] text-base font-extrabold leading-loose">Job Description:</span>
                                <span className="text-[#757575] text-base font-medium leading-loose"> {job.job_description}</span>
                            </h1>
                        </div>

                        <div className="  mb-4">
                            <h1>
                                <span className="text-[#191919] text-base font-extrabold leading-loose">Job Responsibility:</span>
                                <span className="text-[#757575] text-base font-medium leading-loose"> {job.job_responsibility}</span>
                            </h1>
                        </div>

                        <div className="  mb-4">
                            <h1>
                                <span className="text-[#191919] text-base font-extrabold leading-loose">Educational Requirements:</span>
                                <span className="text-[#757575] text-base font-medium leading-loose"> {job.educational_requirements}</span>
                            </h1>
                        </div>

                        <div className="  mb-4">
                            <h1>
                                <span className="text-[#191919] text-base font-extrabold leading-loose">Experiences:</span>
                                <span className="text-[#757575] text-base font-medium leading-loose"> {job.experiences}</span>
                            </h1>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center items-center">
                    <div className="border bg-[#F4F1FF] p-6 rounded-lg">
                        <h2 className="text-xl font-semibold mb-4">Job Details</h2>
                        <div className="w-[330px] h-[0px] mb-4 opacity-30 border border-[#7e90fe]"></div>
                        <div>
                            <div className="flex">
                                <HiOutlineCurrencyDollar className="text-lg mr-1" /> {job.salary}
                            </div>
                            <div className="flex">
                                <IoLocationOutline className="text-lg mr-1" /> {job.location}
                            </div>
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold my-4">Contact Information</h2>
                            <div className="w-[330px] h-[0px] mb-4 opacity-30 border border-[#7e90fe]"></div>
                        </div>
                        <div className="flex mb-4">
                            <FaPhoneAlt className="text-lg mr-2" /> {job.contact_information.phone}
                        </div>
                        <div className="flex mb-6">
                            <MdOutlineEmail className="text-lg mr-2" /> {job.contact_information.email}
                        </div>
                        <button onClick={notify} className="bg-gradient-to-r from-[#7e90fe] to-[#9873ff] text-white py-3 px-6 rounded-lg w-full hover:bg-blue-700 transition-all">
                            Apply Now
                        </button>
                    </div>
                </div>

            </div>
            <ToastContainer />
        </div>

    );
};

export default JobDetails;
