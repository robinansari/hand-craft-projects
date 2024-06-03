import { Link, useNavigate} from "react-router-dom";
import UseHook from "../CustomHook/UseHook";
import swal from "sweetalert";

const Address = () => {
    const {user}= UseHook()
    const navigate=useNavigate()
    const handleBooking =(event)=>{
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const village = form.village.value;
        const upazila = form.UpazilaName.value
        const district = form.district.value;
        const contract = form.contract.value;
        const postcode = form.postcode.value;
        const date = form.date.value;
        const nationality =form.nationality.value
        const email =user?.email;
       const order = {
        name,
        village,
        upazila,
        district ,
        contract,
        postcode,
        date,
        nationality,
        email
       }
       console.log(order)
       fetch('http://localhost:5000/booking',{
        method: 'POST',
        headers: {
            'content-type': 'application/json'

        },
        body: JSON.stringify(order)
       })
       .then( res => res.json())
       .then( data => {
        console.log(data)
        if(data.insertedId){
            swal('order successfully')
            navigate('/order')
            
        }
       })
       

    }
    return (
        <div className="hero min-h-screen">
            <div className="card">
                <h1 className="text-2xl  text-green-500 font-extrabold text-center">Please Provide Personal Address</h1>
                <form onSubmit= {handleBooking} className="card-body">
                    <div className="grid grid-cols-3 gap-3">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Village </span>
                            </label>
                            <input type="text" name="village" placeholder="village name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Upazila Name</span>
                            </label>
                            <input type="text" name="UpazilaName" placeholder="UpazilaName" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">District Name </span>
                            </label>
                            <input type="text" name="district" placeholder="district name" className="input input-bordered" required />
                        </div>
                        
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Contract Number </span>
                            </label>
                            <input type="number" name="contract" placeholder="contract number" className="input input-bordered" required id="" />
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
                            <input type="email" name="email" placeholder="email" defaultValue={user?.email} className="input input-bordered" required />
                        </div>
                    </div>
                    <div className=" text-center mt-4">
                        <input className="btn btn-primary w-60" type="submit" value="Submit" />
                        <div>
                            <h1 className="text-white">
                                <Link className="text-green-500 font-extrabold " to='/'>Back to home</Link></h1>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default Address;