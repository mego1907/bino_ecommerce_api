import React, { useState, useEffect, useCallback } from 'react'

import Heading from '../components/Heading'
import Helmet from "../components/Helmet";
import Filter from '../components/Filter';
import Loading from '../components/Loading';


import useFetchData from '../hooks/useFetchData'
import { Container } from 'react-bootstrap';

import InfinityList from '../components/InfinityList';


const Shop = () => {
  // const { data, loading } = useFetchData("http://localhost:5000/products");
  const { data, loading } = useFetchData(
    "https://api.npoint.io/402b2b47fdf3738c33c2/products"
  );

  const initFilter = {
    menCategory: [],
    girlsCategory: [],
    brand: [],
    size: [],
    color: []
  }

  const productList = data;

  const [products, setProducts] = useState([])
  const [filter, setFilter] = useState(initFilter)

  const [price, setPrice] = useState({
    value: {min: 10, max: 158}
  })
  
  // max price and min price
  const allPrices = data && data.map((item) => Number(item.price))
  const maxPrice = Math.max(...allPrices)
  const minPrice = Math.min(...allPrices)

  useEffect(() => {
    setProducts(productList)
  }, [productList])

  const filterSelect = (type, checked, item) => {
    if(checked) {
      switch (type) {
        case "MEN_CATEGORY":
          setFilter({
            ...filter, 
            menCategory: [...filter.menCategory, item]
          })
          break;
        case "GIRLS_CATEGORY":
          setFilter({
            ...filter, 
            girlsCategory: [...filter.girlsCategory, item]
          })
          break;
        case "BRAND":
          setFilter({
            ...filter, 
            brand: [...filter.brand, item]
          })
          break;
        case "SIZE":
          setFilter({
            ...filter, 
            size: [...filter.size, item]
          })
          break;
        case "COLOR":
          setFilter({
            ...filter, 
            color: [...filter.color, item]
          })
          break;
        default:
          return filter;
      }
    } else {
      switch (type) {
        case "MEN_CATEGORY":
          const newMenCategory = filter.menCategory.filter((e) => e !== item )
          setFilter({
            ...filter, 
            menCategory: newMenCategory
          })
          break;
        case "GIRLS_CATEGORY":
          const newGirlsCategory = filter.girlsCategory.filter((e) => e !== item )
          setFilter({
            ...filter, 
            girlsCategory: newGirlsCategory
          })
          break;
        case "BRAND":
          const newBrand = filter.brand.filter((brand) => brand !== item)
          setFilter({
            ...filter, 
            brand: newBrand
          })
          break;
        case "SIZE":
          const newSize = filter.size.filter((size) => size !== item)
          setFilter({
            ...filter, 
            size: newSize
          })
          break;
        case "COLOR":
          const newColor = filter.color.filter((color) => color !== item)
          setFilter({
            ...filter, 
            color: newColor
          })
          break;
        default:
          return filter;
      }
    }
  }

  const updateProducts = useCallback(() => {
    let temp = productList;

    if(filter.menCategory.length > 0) {
      temp = temp.filter((e) => {
        if(filter.menCategory.includes(e.type) && e.category === "Men") {
          return filter.menCategory.includes(e.type)
        } else {
          return filter.girlsCategory.includes(e.type)
        }
      })
    }

    if(filter.girlsCategory.length > 0) {
      temp = temp.filter((e) => {
        if(filter.girlsCategory.includes(e.type) && e.category === "Girls") {
          return filter.girlsCategory.includes(e.type)
        } else {
          return filter.menCategory.includes(e.type);
        }
      })
    }

    if(filter.brand.length > 0) {
      temp = temp.filter(e => filter.brand.includes(e.brand))
    } 

    if(filter.color.length > 0) {
      temp = temp.filter(e => {
        const check = e.colors.find((color) => filter.color.includes(color))
        return check !== undefined
      })
    } 

    if(filter.size.length > 0) {
      temp = temp.filter(e => {
        const check = e.size.find((size) => filter.size.includes(size))
        return check !== undefined
      })
    }

    if(temp) {
      temp = temp.filter(
        e => e.price >= price.value.min && e.price <= price.value.max
      )
    }

    setProducts(temp)
  }, [filter, productList, price])

  useEffect(() => {
    updateProducts()
  }, [updateProducts])


  if(loading) {
    return <Loading />
  } 

  return (
    <Helmet title="Shop">
      <Heading title="Shop" noMargin={true} />

      <Container>
        <div className="shop">
          <Filter
            filterSelect={filterSelect}
            filter={filter}
            price={price}
            setPrice={setPrice}
            maxPrice={maxPrice}
            minPrice={minPrice}
          />
          <div className="shop__products my-3">
            {products.length === 0 && (
              <div>No products were found matching your selection.</div>
            )}
            <InfinityList data={products} />
          </div>
        </div>
      </Container>
    </Helmet>
  );
}

export default Shop
