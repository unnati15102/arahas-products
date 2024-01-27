import React from 'react'
import "./dashboard.css"
import obj1 from './image/obj1.jpg'

function ProductCard({ products }) {
    return (
        <div class="product-card">
            {products.length > 0 ? products.map(product => (
                <div className="product-item" >
                    <div class="product-img">
                        <img src={obj1} alt='product1' />
                    </div>
                    <div class="product-desc">
                        <h5>{product.p_desc}</h5>
                        {/* <h5>Lorem ipsum dolor sit, amet consectetur elit.</h5> */}
                    </div>
                </div>
            )) : () => (<h4>Content Loading.</h4>)}
        </div>
    )
}

export default ProductCard



//     < div className = "product-item" >
// <div class="product-img">
//     <img src={obj1} alt='product1' />
// </div>
// <div class="product-desc">
//     <h5>Lorem ipsum dolor sit, amet consectetur elit.</h5>
// </div>
// </ >

// <div className="product-item">
// <div class="product-img">
//     <img src={obj1} alt='product1' />
// </div>
// <div class="product-desc">
//     <h5>Iusto explicabo magni ullam odio voluptatibus.</h5>
// </div>
// </div>

// <div className="product-item">
// <div class="product-img">
//     <img src={obj1} alt='product1' />
// </div>
// <div class="product-desc">
//     <h5>Lorem ipsum dolor sit, amet consectetur elit.</h5>
// </div>
// </div>
// <div className="product-item">
// <div class="product-img">
//     <img src={obj1} alt='product1' />
// </div>
// <div class="product-desc">
//     <h5>Lorem ipsum dolor sit, amet consectetur elit.</h5>
// </div>
// </div>
// <div className="product-item">
// <div class="product-img">
//     <img src={obj1} alt='product1' />
// </div>
// <div class="product-desc">
//     <h5>Lorem ipsum dolor sit, amet consectetur elit.</h5>
// </div>
// </div>