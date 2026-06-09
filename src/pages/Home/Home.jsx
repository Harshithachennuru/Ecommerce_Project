import react from 'react';
import './Home.css'
import Carousel from '../../Components/Carousel/Carousel';
import CategoryCard from '../../Components/CategoryCard';
import axios from 'axios';
import { useEffect,useState} from 'react';
import ProductCard from '../../Components/ProductCard';
function Home(){
    const[storeProducts,setStoreProducts] = useState([]);
    useEffect(()=>{
        async function getProducts(){
            let k = await axios.get('https://dummyjson.com/products?limit=500');
            setStoreProducts(k.data.products);
            
        }
        getProducts();
    },[])
    return(
        <>
            <Carousel />
            <div>
                <h1>Categories</h1>
                <div className='d-flex justify-content-between column-gap-3'> 
                    <CategoryCard filename={'Clothes.png'} categoryName={'clothes'} />
                    <CategoryCard filename={'beauty.png'} categoryName={'beauty'} />
                    <CategoryCard filename={'electronics.png'} categoryName={'electronics'} />
                    <CategoryCard filename={'furniture.png'} categoryName={'furniture'} />
                    <CategoryCard filename={'Groceries.jpg'} categoryName={'groceries'} />
                    
                </div>
            </div>

            <div>
                <h1>Products</h1>
                <div className='d-flex justify-content-between column-gap-3 row-gap-3 flex-wrap' style={{width:"100%"}}>
                {storeProducts && storeProducts.length>1 && storeProducts.map(product=>{
                    return <ProductCard product={product}/>
                })}
                </div>
            </div>
        </>
    )
}
export default Home;