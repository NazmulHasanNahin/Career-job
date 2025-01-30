import { Outlet } from "react-router";
import Footer from "../Common/Footer";
import Nav from "../Common/Nav";

const Root = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;