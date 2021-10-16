import React, { useEffect } from 'react'
import Helmet from "../components/Helmet";
import { Container } from 'react-bootstrap'

import { useSelector } from "react-redux";
import ProductView from '../components/ProductView';
import Section, { SectionBody } from '../components/Section';
import Title, { Description, Heading } from '../components/Title';
import Grid from '../components/Grid';

import useFetchData from '../hooks/useFetchData'
import ProductCard from '../components/ProductCard';

const Product = (props) => {
  const product = useSelector(state => state.shopping.currentItem)

  // const { data } = useFetchData("http://localhost:5000/products");
  const { data } = useFetchData(
    "https://api.npoint.io/402b2b47fdf3738c33c2/products"
  );
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [product])
  

  if(product === null) {
    props.history.push('/shop')
    return null
  } 

  return (
    <Helmet title={product.title}>
      <Container>
        <Section>
          <SectionBody>
            <ProductView product={product} />
          </SectionBody>
        </Section>
        <Section>
          <Title>
            <Heading>Top Products</Heading>
            <Description>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis sed.</Description>
          </Title>
          <SectionBody>
            <Grid col={4} mdCol={3} smCol={1} gap={20}>
              {
                data.slice(0, 8).map((item, index) => <ProductCard product={item} key={index}/> )
              }
            </Grid>
          </SectionBody>
        </Section>
      </Container>
    </Helmet>
  );
}

export default Product
