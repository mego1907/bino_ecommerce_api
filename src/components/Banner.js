import React from 'react';
// import modules from react-bootstrap
import { Container } from 'react-bootstrap'
import Grid from './Grid'
// import modules from react-router-dom
import { Link } from 'react-router-dom'

const HomeBanner = () => {
  return (
    <div className="banner">
      <Grid col={2} mdCol={2} smCol={1} gap={20}>
        <div className="banner__widget banner__men">
          <div className="banner__widget__content banner__men__content">
            <h3 className="banner__widget__content__title">Men Cloth</h3>
            <p className="banner__widget__content__description">
              HOT FASHION TRENDS 2021
            </p>
            <Link
              to="/shop"
              className="banner__widget__content__btn banner__men__content__btn "
            >
              Shop Now
            </Link>
          </div>

          <div className="banner__widget__img">
            <img src="/assets/imgs/banners/men.png" alt="Men banner" />
          </div>
        </div>
        <div className="banner__widget">
          <div className="banner__widget__content">
            <h3 className="banner__widget__content__title">New Edition</h3>
            <p className="banner__widget__content__description">
              STYLES OF THE YEAR COLLECTION
            </p>
            <Link to="/shop" className="banner__widget__content__btn">
              Shop Now
            </Link>
          </div>

          <div className="banner__widget__img">
            <img src="/assets/imgs/banners/girl.png" alt="Girl banner" />
          </div>
        </div>
      </Grid>
    </div>
  );
}

export default HomeBanner
