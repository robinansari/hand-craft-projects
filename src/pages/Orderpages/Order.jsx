import { useEffect, useState } from "react";
import UseHook from "../CustomHook/UseHook";
import axios from "axios";
import OrderList from "./OrderList";
import swal from "sweetalert";

const Order = () => {
    const {user}= UseHook();
    const [order,setOrder]=useState([])
    const url = `http://localhost:5000/booking?email=${user?.email}`;
    
    useEffect(()=>{
        axios.get(url,{withCredentials: true})
        .then(res => {
            setOrder(res.data)
        })
    },[url])

    const handleDelete= id =>{
        const proceed = confirm('Are You sure Delete')
        if(proceed){
            fetch(`http://localhost:5000/booking/${id}`,{
                method:'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.deletedCount > 0){
                    swal('Delete successfully')
                    const remaining = order.filter(order => order._id !==id)
                    setOrder(remaining)
                }
            })

        }
    }

    const handleUpdate = id =>{
        fetch(`http://localhost:5000/booking/${id}`,{
            method:'PATCH',
            headers:{
                'content-type' : 'application/json'
            },
            body: JSON.stringify({status: 'confirm'})
        })
        .then( res => res.json())
        .then( data => {console.log(data)
        if(data.modifiedCount >0){
            const remaining= order.filter( order => order._id !== id)
            const updated = order.find(order=> order._id ===id )
            updated.status='confirm'
            const newOrder = [updated, ...remaining]
            setOrder(newOrder)
        }
        })
    }
    return (
        <div>
            <h1 className="text-2xl text-center text-orange-500">Total Order: {order.length}</h1>
            <div>
                {
                    order.map(order => <OrderList key={order._id} 
                        handleDelete={handleDelete} handleUpdate={handleUpdate} order={order}></OrderList>)
                }
            </div>
        </div>
    );
};

export default Order;