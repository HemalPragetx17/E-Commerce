/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../store/slices/cartSlice";
import { addwishItem } from "../store/slices/wishlistSlice";

const ProductCard = (props) => {
  const { img, rating, title, price } = props;

  const [isadded, setisadded] = useState(false);

  const { WishlistItems } = useSelector((state) => state.wish);

  const dispatch = useDispatch();

  const handleAddtoCart = () => {
    const item = { ...props };
    dispatch(addItem(item));

    setisadded(true);

    setTimeout(() => {
      setisadded(false);
    }, 500);
  };

  const handleAddtoWish = () => {
    const item = { ...props };
    dispatch(addwishItem(item));
  };

  return (
    <div>
      <div className="container mt-5">
        <div className="card cart_product_item text-center pt-4 pb-2">
          <span onClick={handleAddtoWish}>{WishlistItems.some((i) => i.id === props.id) ?
            (
              <i className="bx bxs-heart head-icon"></i>
            ) : (
              <i className="bx bx-heart head-icon"></i>
            )}
          </span>
          <div className='card-head align-items-center d-flex'>
            <img src={img} className="cart_product_img" />
          </div>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <strong className="rating">{rating}</strong>
            <h3 className="price">₹ {price.toLocaleString()}</h3>
            <button className="btn btn-info card-btn" onClick={handleAddtoCart}>{isadded ? "Added" : "Add To Cart"}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;




