import react from 'react'
import './AdminDashboard.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Sidebar from '../../Components/Navbar/Sidebar'

function AddProduct(){
    return(
        <>
            <div>
            <div className="full">
                <div>
                    <Sidebar/>
                </div>
                <div className='righthalf'>
                    <div className="navbar">                        
                        <h3>Admin Dashboard</h3>                        
                    </div>

                    <div className="Heading">
                        <h4 style={{fontFamily:"sans-serif", fontWeight:'bold'}}>Add New Product</h4>
                    </div>

                    <div className="Add_Product">
                            
                        <div className ="Product">
                            <div className="Add_Product_Left">
                                   <h5 style={{fontFamily:"sans-serif", fontWeight:'bold'}}>Product Information</h5>
                                   <div>
                                   <form className="product-form">
                                        <label>Product Name</label>
                                        <input type="text" placeholder="Enter Product Name"/>

                                        <label>Category</label>
                                        <select>
                                            <option>Select Category</option>
                                            <option>Beauty</option>
                                            <option>Kitchen</option>
                                            <option>Watches</option>
                                        </select>

                                        <label>Price ($)</label>
                                        <input type="number" placeholder="Enter Price"/>
                                    </form>
                                   </div>
                            </div>
                            <div className="product-right-form">
                                <label>Product Description</label>
                                <textarea
                                    name="description"
                                    placeholder="Enter product description"
                                    rows="6"
                                ></textarea>

                                <label>Product Image</label>

                                <input type="file" name="productImage" accept="image/*"/>

                            </div>
                        </div>
                    </div>

                    <div className="footer">
                        <button className='btn btn-primary btn-lg' style={{marginLeft:'500px'}}>Add Product</button>
                    </div>
                        
                </div>

            </div>
        </div>
        </>
    )
}

export default AddProduct;