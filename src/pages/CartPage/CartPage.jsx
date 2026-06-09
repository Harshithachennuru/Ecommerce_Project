import'./Cart.css'

function CartPage(){
    return(
        <div>
           <div className="listOfProducts w-75 d-flex flex-column">
                <div className='productInCart'>
                    <img src="https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp" alt="" width={'250px'} />
                    <div clasName='productInCartDetails'>
                        <h1>Product Title</h1>
                        <h6>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam similique nemo illum enim doloribus quo earum cupiditate molestiae, quaerat sequi doloremque ab facere accusantium temporibus praesentium nesciunt amet corporis. Quae inventore quidem illo? Non atque nulla neque accusantium omnis qui.</h6>
                        <h6>Quantity 1</h6>
                    </div>
                </div>    
           </div>
           <div className="orderSummary w-25 d-flex flex-column">
            
           </div>
        </div>
    )
}
export default CartPage;