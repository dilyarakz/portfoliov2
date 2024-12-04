import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "./About.css";
import Image from 'react-bootstrap/Image';
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
          
          <Image src={aboutImage} roundedCircle className="about-image" />
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
              I am a passionate software developer with expertise in Java and
              React, specializing in creating dynamic and scalable web
              applications. My experience spans both front-end and back-end
              development, allowing me to build seamless full-stack solutions
              that are both robust and user-friendly.
            </p>
            <h4 className="responsive-text">
              <strong>Core Technologies:</strong>
            </h4>
            <ul className="responsive-text">
              <li>
                <strong>Front-end Development:</strong> React, JavaScript, HTML,
                CSS, Redux – crafting responsive, interactive UIs that deliver
                exceptional user experiences.
              </li>
              <li>
                <strong>Back-end Development:</strong> Java, Spring Boot –
                designing reliable and efficient server-side applications.
              </li>
              <li>
                <strong>Other Technologies:</strong> Angular, Python – able to
                quickly adapt to different stacks when needed. Tools: Git,
                Docker, SQL – ensuring code quality, collaboration, and
                effective version control.
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
