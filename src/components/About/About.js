import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "./About.css";
import aboutImage from "../../assets/images/picture.jpeg";
import cat from "../../assets/images/cat.jpg";

export default function About() {
  return (
    <Container id="about" fluid>
      <Row>
        <Col
          xs={12}
          md={6}
          className="d-flex justify-content-center align-items-center"
        >
          <img src={aboutImage} alt={cat} className="about-image" />
        </Col>
        <Col
          xs={12}
          md={6}
          className="d-flex justify-content-center align-items-center"
        >
          <div>
            <h1 className="responsive-title">
              Hi, I'm <strong>Dilyara Tulegenova</strong>
            </h1>
            <p className="responsive-text">
              Junior Software Developer based in the United States. I’m
              passionate about coding and solving complex problems. With an
              interest in both front-end and back-end development, I enjoy
              working on projects that challenge my skills and foster growth.
              Outside of tech, I love traveling, skiing, skating, and
              hiking—activities that keep me energized and inspired.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
