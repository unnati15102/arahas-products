import React from 'react'
// import Header from './Header'
import "./dashboard.css"
import ProductCard from './ProductCard'

function Dashboard({ products }) {
    return (
        <div className="container">
            {/* navbar for the page */}
            <nav class="prod-nav">
                <h2>Our Products</h2>
                <div class="filter-sort">
                    <div class="collection-sort">
                        <label className='label'>Filter by:</label>
                        <select>
                            <option value="/">All Products</option>
                            <option value="/">Newer Products</option>
                            <option value="/">Older Products</option>
                        </select>
                    </div>

                    <div class="collection-sort">
                        <label className='label'>Sort by:</label>
                        <select>
                            <option value="/">Featured1</option>
                            <option value="/">Featured2</option>
                            <option value="/">Featured3</option>
                        </select>
                    </div>
                </div>
            </nav>
            {/* product cards */}
            <div class="products">
                {/* {products.length > 0 ? products.map((product) => ( */}
                <ProductCard products={products} />
                {/* // )) : []} */}
                {/* key={product._id} products={product} */}
                {/* <ProductCard /> */}
            </div>
        </div>
    )
}

export default Dashboard
