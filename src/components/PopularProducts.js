import React, { useState } from 'react';
// import Modules from react bootstrap
import Title, { Heading, Description} from './Title';
import ProductCard from './ProductCard';
// import useFetchData hook to fetch data with Api
import useFetchData from '../hooks/useFetchData'

import Grid from './Grid';

const PopularProducts = () => {

  // const { data } = useFetchData("http://localhost:5000/products");
  const { data } = useFetchData(
    "https://api.npoint.io/402b2b47fdf3738c33c2/products"
  );

  const category = ["Featured", "New", "Best Seller"]
  const [activeCategory, setActiveCategory] = useState("Featured");

  return (
    <div className="popular-products">
        <Title>
          <Heading>Popular Products</Heading>
          <Description>
            Browse The Collection of Best Selling and Trending Products
          </Description>
        </Title>
        <div className="popular-products__info">
          <div className="popular-products__info__category">
            <ul className="popular-products__info__category__list">
              {
                category.map((item, index) => (
                  <li 
                    className={`popular-products__info__category__list__item ${activeCategory === item ? "active" : ""}`} 
                    key={index} 
                    onClick={() => setActiveCategory(item)}>
                      {item}
                    </li>
                ))
              }              
            </ul>
          </div>
          <div className="popular-products__info__products">
            <Grid col={4} mdCol={2} smCol={1} gap={30}>
              {
                data &&
                data.map((item, index) => {
                  if(item.condition === activeCategory) {
                    return (
                      <ProductCard key={index} product={item} />
                    )
                  }
                  return true;
                })
              }
            </Grid>
          </div>
        </div>
    </div>
  );
}

export default PopularProducts;
