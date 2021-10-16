import React from 'react';
import Helmet from "../components/Helmet";
import HeroSlider from "../components/HeroSlider";
import PopularProducts from '../components/PopularProducts';
import Banner from '../components/Banner';
import Policies from "../components/Policies";

import { Link } from 'react-router-dom';

import useFetchData from '../hooks/useFetchData'
import { Container } from 'react-bootstrap';
import Grid from '../components/Grid';
import Loading from '../components/Loading';

const Home = () => {

  // const { data: slider, loading } = useFetchData(
  //   "http://localhost:5000/hero-slider"
  //   );
  // const { data: collections } = useFetchData(
  //   "http://localhost:5000/collections"
  //   );
  // const { data: banners } = useFetchData(
  //     "http://localhost:5000/banners"
  //   );

  const { data: slider, loading } = useFetchData(
    "https://api.npoint.io/402b2b47fdf3738c33c2/hero-slider"
  );
  const { data: collections } = useFetchData(
    "https://api.npoint.io/402b2b47fdf3738c33c2/collections"
  );


  if (loading) {
    return <Loading />
  }

  return (
    <Helmet title="Home">
      <HeroSlider data={slider} />

      <div className="home">
        <Container>
          <div className="home__collections">
            <Grid col={3} mdCol={3} smCol={1} gap={30}>
              {collections.map((item, index) => (
                <Link to="/shop" key={index}>
                  <div className="home__collections__category">
                    <div className="home__collections__category__content">
                      <h3>{item.name}</h3>
                      <p>{item.desc}</p>
                    </div>
                    <img
                      className="home__collections__category__image"
                      src={item.img}
                      alt={item.name}
                    />
                  </div>
                </Link>
              ))}
            </Grid>
          </div>

          <PopularProducts />

          <Banner />
          {/* <Grid col={2} mdCol={2} smCol={1} gap={20}>
            {
              banners.map((item, index) => (
                <Banner title={item.title} desc={item.desc} img={item.img} />
              ))
            }
          </Grid> */}

          <Policies />
        </Container>
      </div>
    </Helmet>
  );
}

export default Home
