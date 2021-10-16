import React, { useRef, useState, useEffect } from 'react'
import PropTypes from 'prop-types';

import Grid from './Grid';
import ProductCard from './ProductCard';


const InfinityList = props => {

  const listRef = useRef(null)

  const perload = 9  // item each load

  const [data, setData] = useState([])

  const [load, setLoad] = useState(true);

  const [index, setIndex] = useState(0)


  useEffect(() => {
    setData(props.data.slice(0, perload))
    setIndex(1)
  }, [props.data])

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if(listRef && listRef.current) {
        if(
          window.scrollY + window.innerHeight >= 
          listRef.current.clientHeight + listRef.current.offsetTop + 200
        ) {
          setLoad(true)
        }
      }
    })
  }, [listRef])


  useEffect(() => {
    const getItems = () => {
      const pages = Math.floor(props.data.length / perload)
      const maxIndex = props.data.length % perload === 0 ? pages : pages + 1

      if(load && index <= maxIndex) {
        const start = perload * index
        const end = start + perload

        setData(data.concat(props.data.slice(start, end)))
        setIndex(index + 1)
      }
    }
    getItems()
    setLoad(false)
  }, [load, index, props.data, data])

  return (
    <div ref={listRef}>
      <Grid col={3} mdCol={2} smCol={1} gap={20}>
        {
          data.map((item, index) => <ProductCard product={item} key={index} />)
        }
      </Grid>
    </div>
  );
}

InfinityList.propTypes = {
  data: PropTypes.array.isRequired
}

export default InfinityList
