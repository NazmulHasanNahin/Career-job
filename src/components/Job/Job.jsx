import { IoLocationOutline } from "react-icons/io5";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { Link } from "react-router";


const Job = ({ job }) => {
    const { id,logo, job_title, job_type, location, remote_or_onsite, company_name, salary } = job;
    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl">
                <figure>
                    <img
                        src={logo}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{job_title}</h2>
                    <p>{company_name}</p>
                    <div >
                        <button className="border-2 px-4 py-2 mr-3 rounded border-[#7e90fe]">{remote_or_onsite}</button>
                        <button className="border-2 px-4 py-2 border-[#7e90fe] rounded">{job_type}</button>
                    </div>
                    <div className="flex my-2">
                        <div className="flex mr-3">
                            <IoLocationOutline className="text-xl mr-1" /> {location}
                        </div>
                        <div className="flex">
                            <HiOutlineCurrencyDollar className="text-xl mr-1" /> {salary}
                        </div>
                    </div>
                    <Link to={`/job/${id}`}>
                        <div className="card-actions">
                            <div className="h-[49px] px-[18px] py-[11px] bg-gradient-to-r from-[#7e90fe] to-[#9873ff] rounded justify-start items-start gap-2.5 inline-flex">
                                <button className="text-white text-xl font-extrabold font-['Manrope']">View Details</button>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Job;