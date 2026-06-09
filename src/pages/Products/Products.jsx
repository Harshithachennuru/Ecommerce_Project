import react from 'react';
import './products.css';
import { useState,useEffect } from 'react';
import ProductCarousel from '../../Components/ProductCarousel/ProductCarousel';
import axios from 'axios';
import { useParams } from 'react-router-dom';
function Products(){
    const[product,setProduct] = useState({})
    const{id} = useParams()
    useEffect(()=>{
        async function ProductsDetails(){
            if(id){
                let product = await axios.get('https://dummyjson.com/products/20');
                console.log("Product Data:",product.data)
                setProduct(product.data)
            }
        }
        ProductsDetails();
    },[])
    return(
        <>
            <div className ="productPage d-flex">
                <div className="productImagesDiv halfDiv d-flex justify-content-center align-items-center">
                    <ProductCarousel images={product.images} />
                </div>
                <div className="productInfoDiv halfDiv d-flex align-items-start">
                    <div className="d-flex flex-column row-gap-3 p-4"> 
                        <h1>{product.title}</h1>
                        <h3>Price: ${product.price}</h3>
                        <h5>Category: {product.category}</h5>
                        <p>{product.description}</p>
                        <button className="btn btn-primary btn-lg w-25">Add to Cart</button>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default Products;