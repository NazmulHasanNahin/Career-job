import { NavLink } from "react-router-dom";
const Nav = () => {


    const commonnn = <>
        <li><NavLink className={({ isActive }) => (isActive ? "text-[#7e90fe] text-base" : "text-base")} to="/">Home</NavLink></li>
        <li><NavLink className={({ isActive }) => (isActive ? "text-[#7e90fe] text-base" : "text-base")} to="/jobs">Jobs</NavLink></li>
        <li><NavLink className={({ isActive }) => (isActive ? "text-[#7e90fe] text-base" : "text-base")} to="/applied">Applied Jobs</NavLink></li>
    </>

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn- mr-2 lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {commonnn}
                    </ul>
                </div>
                <button className="font-bold bg-white text-[#191919]  text-2xl">CareerHub</button>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {commonnn}

                </ul>
            </div>
            <div className="navbar-end">
                <div className="p-2 bg-gradient-to-r from-[#7e90fe] to-[#9873ff] rounded-lg justify-start items-start gap-2.5 inline-flex">
                    <div className="text-white text-base font-bold">Start Applying</div>
                </div>
            </div>
        </div>
    );
};

export default Nav;