import { Link, NavLink } from "react-router-dom";
import logo from '../././../images/logo.png'
import UseHook from "./CustomHook/UseHook";
import { FcBusinessman } from "react-icons/fc";

const Navbar = () => {
    const {user,logOut}=UseHook();
    console.log(user)
    const handlelogOUt =()=>{
        logOut()
        .then(()=>{})
        .catch(eror =>{console.log(eror)})
    }

    const links = <>
        <li className=" font-bold text-white"><NavLink to='/'>Home</NavLink></li>
        <li className=" font-bold text-white"><NavLink to='/products'>Products</NavLink></li>
        <li className=" font-bold text-white"><NavLink to='/about'>About</NavLink></li>
        <li className=" font-bold text-white"><NavLink to='/signUp'>Sign Up</NavLink></li>
        { user?.email?
        <>
        <li className=" font-bold text-white"><NavLink to='/order'>Orders</NavLink></li>
        <li className="font-bold text-white" ><button onClick={handlelogOUt}>log Out</button></li>
        <li><FcBusinessman className="bg-red-800 rounded-full"  size={50}></FcBusinessman></li>
        </>
        :
            <li className=" font-bold text-white"><NavLink to='/login'>Login</NavLink></li>}
        

    </>
    return (
        <div className="navbar h-20  rounded ">
            <div className="navbar-start">
                <div className="h-28 w-28 mt-7">
                    <img src={logo} alt="" />

                </div>
                <div>
                    <Link to='/' className="text-3xl font-bold text-yellow-700">
                        <span className="text-3xl font-bold text-blue-300 ">Hand</span>Craft</Link>
                </div>

            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;