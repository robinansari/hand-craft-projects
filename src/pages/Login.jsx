
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { FcGoogle } from "react-icons/fc";
import UseHook from "./CustomHook/UseHook";
import axios from "axios";


const Login = () => {
    const {signIn,googleLogin}=UseHook()
    const navigate =useNavigate()

    const handleGoogleLogin=(media)=>{
        media()
        .then(res=>{
            const user= res.user
            navigate('/')
            console.log(user)
        })
        .catch( eror =>console.log(eror))
    }
    const handleLogin =(event)=>{
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        if(password.length <8){
            swal('please provide 8 digit password')
            return 
        }
        console.log(email,password)
       signIn(email,password) 
       .then( res =>{
        const loggedUser = res.user
        console.log(loggedUser)
        const user = {email}
        axios.post('http://localhost:5000/jwt',user,{withCredentials: true})
        .then( res =>{
            console.log(res.data)
            if(res.data.success){
            navigate('/')
            }

        })
        
        swal('login successfully')
       })
       .catch(eror =>{
        console.log(eror)
        swal('Please sign up')
       
       })
    }
 
    
    return (
        <div className="hero min-h-screen">
            <div className="hero-content">
                <div className="card">
                    <h1 className="text-4xl text-center text-green-500 font-extrabold">Login</h1>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover text-white">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            
                            <input className=" font-extrabold btn btn-primary" type="submit" value="login" />
                            <div>
                            <h1 className="text-white mt-3">Not Your Account? please <Link className="text-green-500 font-extrabold" to='/signUp'>Sign Up</Link></h1>
                           
                            
                            </div>
                            <span className="text-center  text-green-500 font-extrabold">or</span>
                            
                        </div>
                    </form>
                    <div className="text-center">
                                <button onClick={ ()=>handleGoogleLogin(googleLogin)} className="hover:bg-red-800"><FcGoogle size={40}></FcGoogle></button>

                            </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Login;