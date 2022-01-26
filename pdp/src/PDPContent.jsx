import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import {getProductsById, currency} from 'home/products';

export default function PDPContent(){
    const {id} = useParams();
    const [product, setProduct]= useState(null);

    const prodImg ={
        width: "100%",
        maxWidth: "200px"
    }
    useEffect(()=>{
        if (id) {
            getProductsById(id).then(setProduct)
        }else{
            setProduct(null)
        }
    }, [id])

    if(!product) return null;

    return (
        <div className="grid grid-cols-2 gap-5">
          <div className={prodImg}>
            <img src={product.image} alt={product.name} />
          </div>
          <div>
            <div className="flex">
              <h1 className="font-bold text-3xl flex-grow">{product.name}</h1>
              <div className="font-bold text-3xl flex-end">
                {currency.format(product.price)}
              </div>
            </div>
            <div className="mt-10">{product.description}</div>
            <div className="mt-10">{product.longDescription}</div>
          </div>
        </div>
      );
}