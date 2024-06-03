import { Outlet } from "react-router-dom";
import Navbar from "../pages/Navbar";
import Foter from "../Foter/Foter";

const MainLayout = () => {
    return (
        <div className="max-w-7xl mx-auto bg-purple-950">
            <Navbar></Navbar>
            <div className="min-h-screen mx-auto">
            <Outlet></Outlet>
            </div>
            <Foter></Foter>
            
        </div>
    );
};

export default MainLayout;