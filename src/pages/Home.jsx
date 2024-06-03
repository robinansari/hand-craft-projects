import About from "./About/About";
import Baner from "./Baner/Baner";
import Moderators from "./Moderator/Moderators";
import Products from "./Products";

const Home = () => {
    return (
        <div>
            <h1 className="text-2xl font-semibold text-center mb-5 text-blue-300">
                Welcome To Our HandiCraft </h1>
            <Baner></Baner>
           <div className="space-y-52">
           <Products></Products>
            <Moderators></Moderators>
            <div className="min-h-screen">
            <About></About>
            </div>
           </div>
        </div>
    );
};

export default Home;