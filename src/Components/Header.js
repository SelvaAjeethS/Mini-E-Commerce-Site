import Search from "./Search";
import { Link } from "react-router-dom";
import { FaShoppingCart } from 'react-icons/fa'


function Header({cartItems}) {
    return(
        <>
        <nav className="navbar row">
            <div className="col-12 col-md-3">
                <div className="navbar-brand">
                    <Link to="/">
                    <img width="150px" src="/images/logo1.png" alt="logo"/>
                    </Link>
                </div>
            </div>

            <div className="col-12 col-md-6 mt-2 mt-md-0">
                <Search />
            </div>

            <div className="col-12 col-md-3 mt-4 mt-md-0 text-center">
                <div className="navbar-cart">
                <Link to="/cart" id="cart-icon" >
                <FaShoppingCart size={40} className="me-1" /> 
                {/* <span id="cart" className="ml-2">Cart</span> */}
                <span className="ms-2" id="cart_count">{cartItems.length}</span>
                </Link>
                </div>
            </div>
        </nav>
        </>
    )
}

export default Header;