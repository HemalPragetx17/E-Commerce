// import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { toggleWish, removeItem } from "../store/slices/wishlistSlice";


const Wishlist = () => {
  const { WishlistItems } = useSelector((state) => state.wish);

  const dispatch = useDispatch();

  const handleCloseWishlist = (close) => {
    dispatch(toggleWish(close));
  };
  const handleRemove = (itemId) => {
    dispatch(removeItem(itemId));
  };


  const wishQuantity = WishlistItems.length;

  return (
    <>
      <div className="modal fade" id="staticBackdrops" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg" >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">Wishlist <small>({wishQuantity})</small></h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => handleCloseWishlist(false)}></button>
            </div>
            <div className="modal-body text-center" style={{ maxHeight: 'calc(100vh - 210px)', overflowY: 'auto' }}>
              {wishQuantity === 0 ? (
                <div>
                  <h2 style={{ textAlign: "center" }}>Your wishlist is empty</h2>
                </div>
              ) : (
                WishlistItems.map((item) => {
                  const { id, img, title, price, quantity } = item;
                  const itemTotal = price * quantity;

                  return (

                    <div className="cart_items align-items-center" key={id}>
                      <div className="row align-items-center">
                        <div className="col-2"></div>
                        <div className="col-4">
                          <figure className="cart_items_img">
                            <img src={img} className="pro_img" alt="product-img" />
                          </figure>
                        </div>
                        <div className="col-2">
                          <div className="cart_items_info">
                            <h4>{title}</h4>
                            <h3 className="price">
                              ₹ {itemTotal.toLocaleString()}
                            </h3>
                          </div>
                        </div>
                        <div className="col-2">
                          <div title="Remove Item" className="cart_items_delete" onClick={() => handleRemove(id)}>
                            <span>
                              <i className="bx bxs-heart heads-icon"></i>
                            </span>
                          </div>
                        </div>
                        <div className="col-2"></div>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Wishlist;
