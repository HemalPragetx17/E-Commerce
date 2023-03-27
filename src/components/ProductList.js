import React from "react";
import ProductCard from "./ProductCard";


const ProductList = ({ apiData }) => {
    return (
        <div className='api_list'>
            <div className="row">
                {apiData.map((item) => {
                    return (
                        <div className="col-lg-3 col-md-3 col-12">
                           <ProductCard key={item.id} {...item}/>    
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ProductList;