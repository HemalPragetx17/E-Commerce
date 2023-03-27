import React, { useState, useEffect } from 'react'
import ProductCard from './../components/ProductCard';
import axios from 'axios';

const Boat = () => {

  const [x, setx] = useState([]);

  const get = async () => {

    await axios.get("https://63660e09f711cb49d107c6fa.mockapi.io/productData").then((r) => setx(r.data))

  }

  useEffect(() => {

    get();

  }, []);
  return (
    <div>
      <section id='home'>
        <div className="container">
          <div className='home_content'>
            {
              x.filter(a => a.company === "boat").map((item) =>
                <ProductCard key={item.id} {...item} ></ProductCard>)
            }
          </div>
        </div>
      </section>
    </div>
  )
}

export default Boat
