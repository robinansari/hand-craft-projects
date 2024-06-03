import { Link, useLoaderData } from "react-router-dom";

const CardDetails = () => {
    const {title,img,brand,price}=useLoaderData()
    return (
       <div className="flex justify-center items-center">
         <div className="card w-2/3 h-full  text-white shadow-xl">
        <figure><img className="h-full w-full p-2 mx-auto" src={img} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">
            {title}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <p className="text-amber-400 font-extrabold" >$ {brand}</p>
          <div className="flex justify-end">
          <h1>{price}</h1>
          </div>
          </div>
          <div className="flex justify-center gap-3">
            <button className="text-yellow-300">
                <Link to='/products'>Back</Link>
            </button>
           <button className="text-orange-500 font-extrabold"><Link to='/address' >Order Confirm</Link></button>
          </div>
          </div>
       </div>
    );
};

export default CardDetails;