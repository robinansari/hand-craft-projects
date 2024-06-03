
const OrderList = ({ order,handleDelete,handleUpdate}) => {
  const { _id,name, village, upazila, district, contract,status } = order;
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Delete Order</th>
            <th>client Name</th>
            <th>village</th>
            <th>Upazila</th>
            <th>District</th>
            <th>Mobile Number</th>
            <th>Status</th>

          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr className="bg-base-200 rounded-full">
            <th><button onClick={()=>handleDelete(_id)} className="btn btn-circle  btn-outline">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" 
              fill="none" viewBox="0 0 24 24" stroke="currentColor"><path 
              strokeLinecap="round" strokeLinejoin="round" 
              strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button></th>
            <td>{name}</td>
            <td>{village}</td>
            <td>{upazila}</td>
            <td>{district}</td>
            <td>{contract}</td>
            <td>{status=== 'confirm'? <span className=" font-extrabold text-orange-500">Approved</span> :
              <button onClick={()=> handleUpdate(_id)}>Peending</button>}</td>

          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default OrderList;