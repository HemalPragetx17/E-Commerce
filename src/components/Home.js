/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import axios from "axios";
import {Pagination}  from '../components/Pagination';
import ProductList from '../components/ProductList';

const Home = () => {
    const [apiData, setapiData] = useState([]);
    const [currentpage, setcurrentpage] = useState(1)
    const [postprepage, setpostprepage] = useState(8)


    const get = async () => {
        await axios.get("https://63660e09f711cb49d107c6fa.mockapi.io/productData").then((r) => setapiData(r.data));
    };

    useEffect(() => {
        get();
    }, []);

    const lastindex = currentpage * postprepage;
    const firstindex = lastindex - postprepage;
    const currentposts = apiData.slice(firstindex ,lastindex);

    return (
        <div>
            <section id="home">
                <div className="container">
                    <div className="home_content">
                        {/* {apiData.map((item) => (
                            <ProductCard key={item.id} {...item}></ProductCard>
                        ))} */}

                        <ProductList apiData={currentposts}></ProductList>
    
                    </div>
                    <Pagination totalposts={apiData.length} 
                                postprepage={postprepage}
                                setcurrentpage={setcurrentpage}
                                currentpage={currentpage}></Pagination>
                </div>   
            </section>
        </div>
    );
};

export default Home;