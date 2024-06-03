
import { useState } from "react";

import { useEffect } from "react";
import axios from "axios";
import Card from "./Card/Card";

const Products = () => {
    const [products,setProducts]=useState([])

    useEffect(()=>{
        const url = "http://localhost:5000/services"
        axios.get(url)
        .then(res => setProducts(res.data))

        // fetch('http://localhost:5000/services')
        // .then(res => res.json())
        // .then(data => setProducts(data))
    }
        ,[])
    return (
        <div >
            <h1 className="text-3xl text-white text-center">Products Available {products.length}</h1>
            <div className="grid grid-cols-3">
                {
                    products.map( product => <Card key={product._id} product={product}></Card>)
                }
             
            </div>
        </div>
    );
};

export default Products;