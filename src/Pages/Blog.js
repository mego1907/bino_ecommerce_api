import React from 'react';
import Helmet from '../components/Helmet';
import Heading from '../components/Heading';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import Post from '../components/Post';
import Section from "../components/Section";

import useFetchData from '../hooks/useFetchData'

import {BiSearch} from 'react-icons/bi'

const Blog = () => {

  // const { data } = useFetchData("http://localhost:5000/posts");
  const { data, loading } = useFetchData(
    "https://api.npoint.io/402b2b47fdf3738c33c2/posts"
  );

  return (
    <Helmet title="Blog">
      <Heading title="Blog" />

      <div className="blog">
        <Section>
          <Container>
            <Row>
              <Col lg={8} md={9} sm={12}>
                <h3 className="blog__title">Lastest Blogs</h3>
                <div className="blog__posts">
                  {loading ? (
                    <Spinner
                      animation="border"
                      variant="danger"
                      className="mx-5 my-3"
                    />
                  ) : (
                    data.map((item, index) => <Post post={item} key={index} />)
                  )}
                </div>
              </Col>
              <Col lg={4} md={3} sm={12}>
                <div className="blog__sidebar">
                  <div className="blog__sidebar__search">
                    <input
                      type="search"
                      className="blog__sidebar__search__input"
                      name="search"
                      placeholder="Search here.."
                    />
                    <div className="blog__sidebar__search__icon">
                      <BiSearch />
                    </div>
                  </div>
                  <div className="blog__sidebar__content">
                    <h4 className="blog__sidebar__title">ABOUT AUTHOR</h4>
                    <img
                      src="/assets/imgs/posts/blog-sidebar.jpg"
                      alt=""
                      className="blog__sidebar__content__image"
                    />
                    <p>
                      Etiam vel magna sed leo feugiat cursus. Cras mollis
                      blandit dolor. Praesent vulputate justo quis volutpat
                      pharetra. Suspendisse
                    </p>
                  </div>
                  <div className="blog__sidebar__content">
                    <h4 className="blog__sidebar__title">RECENT POST</h4>
                    {loading ? (
                      <Spinner
                        animation="border"
                        variant="danger"
                        className="mx-3 my-3"
                      />
                    ) : (
                      data.slice(0, 3).map((item, index) => (
                        <div
                          className="blog__sidebar__content__post"
                          key={index}
                        >
                          <div className="blog__sidebar__content__post__image">
                            <img src={item.image} alt="" />
                          </div>
                          <div className="blog__sidebar__content__post__info">
                            <p>{item.date}</p>
                            <h6>{item.title}</h6>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                  <div className="blog__sidebar__banner">
                    <div className="blog__sidebar__banner__image">
                      <img
                        src="/assets/imgs/posts/blog-sidebar-banner.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </Section>
      </div>
    </Helmet>
  );
}

export default Blog
