import { Link } from "react-router-dom";
const Card = ({product}) => {
  const {_id,title,img,price,brand} =product;
    return (
        <div className="card w-96 gap-5 mt-5 text-white shadow-xl">
  <figure><img className="h-80 w-full p-2 mx-auto" src={img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      {title}
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <p className="text-amber-400" >{brand}</p>
    <div className="card-actions justify-end">
    <div className=" text-white"><span>$</span> {price}</div>
      <div>
        <button>
          <Link className="bg-orange-300 text-black p-1 
          font-bold hover:bg-red-800 rounded-lg h-8" to={`/cardDetails/${_id}`}>Details </Link></button></div> 
     
    </div>
  </div>
</div>
    );
};

export default Card;