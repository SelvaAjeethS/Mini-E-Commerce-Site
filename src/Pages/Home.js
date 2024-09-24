import { Fragment, useEffect, useState } from 'react'
import ProductCard from '../Components/ProductCard';

function Home() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // fetch('https://fakestoreapi.com/products')
        fetch(process.env.REACT_APP_API_URL + '/products')
        .then(res=> res.json())
        .then(res=> setProducts(res))
    }, [])
    return (
    <Fragment>

        <h1 id="products_heading">Latest Products</h1>

        <section id="products" className="container mt-5">
            <div className="row">
                {products.map(product => < ProductCard key={product.id} product={product} />)}
                {/* <div className="col-sm-12 col-md-6 col-lg-3 my-3">
                    <div className="card p-3 rounded">
                        <img
                            className="card-img-top mx-auto"
                            src="/images/products/2.jpg"
                        />
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title">
                                <a href="">
                                WRISTIO HD, Bluetooth Calling Smart Watch, 15 days battery life, Water Resistant
                                </a>
                            </h5>
                            <div className="ratings mt-auto">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star-half-o"></i>
                                <i className="fa fa-star-o"></i>
                                <span id="no_of_reviews">(5 Reviews)</span>
                            </div>
                            <p className="card-text">$150.32</p>
                            <a href="#" id="view_btn" className="btn btn-block">View Details</a>
                        </div>
                    </div>
                </div> */}
            </div>
        </section>
        
        
    </Fragment>
    )
}


export default Home;