/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Boat from './Boat';
import Jbl from './Jbl';
import Realme from './Realme';
import { useDispatch, useSelector } from "react-redux";
import { toggleCart } from "../store/slices/cartSlice";
import { toggleWish } from "../store/slices/wishlistSlice";
// import { toggleLogin } from "../store/slices/loginSlice";

const Header = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const { WishlistItems } = useSelector((state) => state.wish);
      
     


  const dispatch = useDispatch();

  // const handleOpenLogin = (open) => {
  //   dispatch(toggleLogin(open));
  // };

  const handleOpenCart = (open) => {
    dispatch(toggleCart(open));
  };

  const handleOpenWishlist = (open) => {
    dispatch(toggleWish(open));
  };

  const cartQuantity = cartItems.length;
  const wishQuantity = WishlistItems.length;

  return (
    <div>
      <Router>
        <nav className="navbar navbar-expand-lg bg-info pb-3">
          <div className="container-fluid">
            <img src='./images/logo-1.png' className='logo-img' />
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 me-5">
                {/* <li className="nav-item mt-2">
              <button className="btn btn-success" data-bs-toggle="modal" data-bs-target="#staticBackdrop1" onClick={() => handleOpenLogin(true)}>Login</button>
                </li> */}
                <li className="nav-item mt-2">
                  <Link to="/" className='custom-header mx-4'><b>Home</b></Link>
                </li>
                <li className="nav-item mt-2">
                  <Link to="/boat" className='custom-header mx-4'><b>Boat</b></Link>
                </li>
                <li className="nav-item mt-2">
                  <Link to="/jbl" className='custom-header mx-4'><b>Jbl</b></Link>
                </li>
                <li className="nav-item mt-2">
                  <Link to="/realme" className='custom-header mx-4'><b>Realme</b></Link>
                </li>
              <li className="nav-item mt-2">
                <span className='me-4' data-bs-toggle="modal" data-bs-target="#staticBackdrops" onClick={() => handleOpenWishlist(true)}>
                  <img src="/images/heart.svg" alt="heart-icon" />
                  <span className='position-absolute top-1 translate-middle badge rounded-pill bg-danger'>{wishQuantity}</span>
                </span>
                {/* </li> */}
                {/* <li className="nav-item mt-2"> */}
                <span className='me-5' data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={() => handleOpenCart(true)}>
                  <img src="/images/bag-icon.svg" alt="bag-icon" />
                  <span className="position-absolute top-1 translate-middle badge rounded-pill bg-danger">{cartQuantity}</span>
                </span>
                </li>
              </ul>
              {/* <button className="btn btn-success" >Login</button> */}
              {/* {isLoggedin ? (<button className="btn btn-danger" >Logout</button>) 
          : (<button className="btn btn-success">Login</button>)} */}
            </div>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/boat" element={<Boat />} />/
          <Route path="/jbl" element={<Jbl />} />
          <Route path="/realme" element={<Realme />} />
        </Routes>
      </Router>
    </div>
  )
}

export default Header


