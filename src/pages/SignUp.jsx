import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Authcontext } from "../Provider/AuthProvider";
import swal from "sweetalert";

const SignUp = () => {
      const {createUser} =useContext(Authcontext);
      const navigate = useNavigate()
    const handleSignUp =(event)=>{
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const userName = form.userName.value;
        const idNumber = form.nationalId.value;
        const contract = form.contract.value;
        const postcode = form.postcode.value;
        const date = form.date.value;
        const nationality =form.nationality.value
        const email = form.email.value;
        const password = form.password.value;

        console.log(name,userName,idNumber,contract,postcode,date,nationality,email,password)

        createUser(email,password)
        .then( res =>{
            const user = res.user
            console.log('user',user)
            swal('User created successfully')
            navigate('/login')
        })
        .catch(eror =>{
            console.log(eror)
        })
    }
    return (
        <div className="hero min-h-screen">
            <div className="card">
                <h1 className="text-4xl  text-green-500 font-extrabold text-center">Create a new account</h1>
                <form onSubmit={handleSignUp} className="card-body">
                    <div className="grid grid-cols-3 gap-3">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">User Name</span>
                            </label>
                            <input type="text" name="userName" placeholder="User Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">National Id </span>
                            </label>
                            <input type="number" name="nationalId" placeholder="national id number" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Contract Number </span>
                            </label>
                            <input type="number" name="contract" placeholder="contract" className="input input-bordered" required id="" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Postal Code</span>
                            </label>
                            <input type="number" name="postcode" placeholder="post code" className="input input-bordered" required id="" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Date of Birth</span>
                            </label>
                            <input type="date" name="date" placeholder="Birthday date" className="input input-bordered" id="" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Nationality</span>
                            </label>
                            <input type="text" name="nationality" placeholder="nationality" className="input input-bordered" required />
                        </div>
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
                        </div>


                    </div>
                    <div className=" text-center mt-4">
                        <input className="btn btn-primary w-60" type="submit" value="Sign Up" />
                        <div>
                            <h1 className="text-white">
                                Have Your Account? please 
                                <Link className="text-green-500 font-extrabold " to='/login'>Login</Link></h1>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default SignUp;