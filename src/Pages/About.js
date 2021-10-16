import React from 'react';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import Helmet from '../components/Helmet';
import Heading from '../components/Heading';
import QuestionAccordion from "../components/QuestionAccordion";

import useFetchData from "../hooks/useFetchData";
import TeamMember from '../components/TeamMember';

import Section from '../components/Section'

const About = () => {

  // const { data: questions } = useFetchData(" http://localhost:5000/questions");
  // const { data: team } = useFetchData(" http://localhost:5000/team");
  const { data: questions, loading: loadingQuestions } = useFetchData(
    "https://api.npoint.io/402b2b47fdf3738c33c2/questions"
  );
  const { data: team, loading: loadingTeam } = useFetchData(
    "https://api.npoint.io/402b2b47fdf3738c33c2/team"
  );

  const days = [
    {
      day: "Monday",
      time: "12-6PM"
    },
    {
      day: "Tuesday",
      time: "12-6PM"
    },
    {
      day: "Wednesday",
      time: "12-6PM"
    },
    {
      day: "Thursday",
      time: "12-6PM"
    },
    {
      day: "Friday",
      time: "12-6PM"
    },
    {
      day: "Saturday",
      time: "12-6PM"
    },
    {
      day: "Sunday",
      time: "Closed"
    },
  ]

  return (
    <Helmet title="About">
      <Heading title="About" />

      <div className="about">
        <Section>
          <Container>
            <div className="about__top">
              <Row>
                <Col lg={4} md={12} sm={12}>
                  <div className="about__top__content">
                    <h4 className="about__top__content__title">Our Story</h4>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry’s
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </p>
                    <p>
                      It has survived not only five centuries, but also the leap
                      into electronic typesetting, remaining essentially
                      unchanged. It was popularised in the 1960s with the
                      release of Letraset sheets containing Lorem Ipsum
                      passages, and more recently with desktop publishing
                      software like Aldus PageMaker including versions of Lorem
                      Ipsum.
                    </p>
                  </div>
                </Col>
                <Col lg={8} md={12} sm={12}>
                  <div className="about__top__image">
                    <img src="/assets/imgs/about/about-top.jpg" alt="" />
                  </div>
                </Col>
              </Row>
            </div>

            <div className="about__info">
              <Row>
                <Col md={8} sm={12}>
                  <div className="about__info__questions">
                    <h4 className="about__info__questions__title">
                      What can we do for you ?
                    </h4>
                    <div className="about__info__questions__list">
                      {loadingQuestions ? (
                        <Spinner animation="border" variant="danger" className="mx-5 my-3" />
                      ) : (
                        questions.map((item, index) => (
                          <div
                            className="about__info__questions__list__item"
                            key={index}
                          >
                            <QuestionAccordion
                              header={item.title}
                              body={item.content}
                            />
                          </div>
                        ))
                      )}
                    </div>
                  </div>
                </Col>
                <Col md={4} sm={12}>
                  <div className="about__info__operation-contact">
                    <h4 className="about__info__operation-contact__title">
                      Hour Of Operation
                    </h4>
                    <ul className="about__info__operation-contact__list">
                      {days.map((item, index) => (
                        <li
                          key={index}
                          className="about__info__operation-contact__list__item"
                        >
                          <span>{item.day}: </span>
                          <span>{item.time}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="about__info__operation-contact__career">
                      <h5 className="about__info__operation-contact__career__title">
                        Career
                      </h5>
                      <p className="about__info__operation-contact__career__content">
                        If you’re interested in employment opportunities at
                        Elessi, please email us: contact@yourstore.com
                      </p>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>

            <div className="about__team">
              <h4 className="about__team__title">Our team</h4>
              <div className="about__team__list">
                {loadingTeam ? (
                  <Spinner animation="border" variant="danger" />
                ) : (
                  team.map((item, index) => (
                    <TeamMember member={item} key={index} />
                  ))
                )}
              </div>
            </div>
          </Container>
        </Section>
      </div>
    </Helmet>
  );
}

export default About
