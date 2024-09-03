import React, { useEffect, useState } from 'react'
import style from "./products.module.css"
export default function Products() {
    const [products,setProducts]=useState([]);
    async function getData(){
        const response=await fetch("https://fakestoreapi.com/products");
        const data=await response.json();
        setProducts(data);
    }
    useEffect(()=>{
        getData();
    },[])
  return (
    <>
    <div className="container">
            <div className="row g-3">
            {
                products.map(product=>
                    <div className="col-md-4">
                        <div className={`card text-center p-4 ${style.carde}`}>
                            <img src={product.image} className="card-img-top" alt="Product"/>
                            <div className="card-body">
                                <h5 className="card-title">{product.title.split(" ").slice(0,3).join(" ")}</h5>
                                <p className="card-text text-lowercase">{product.description.split(" ").slice(0,3).join(" ")}</p>
                            </div>
                            <div className="card-footer">
                                <small className="text-muted">Price: ${product.price}</small>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    </div>
    </>
  )
}
