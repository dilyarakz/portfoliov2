import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectItem from "./ProjectItem";
import projects from "../../data/projectData";
import "./Projects.css";

export default function Projects() {
  return (
    <Container id="projects" fluid>
      <h1>Here are a few projects I've worked on:</h1>

      <Row className="d-flex justify-content-center align-items-center g-4 row-projects">
        {projects.map((p) => (
          <Col
            md={3}
            xs={12}
            key={p.id}
            className="d-flex justify-content-center align-items-center"
          >
            {" "}
            <ProjectItem
              imageLink={p.imageLink}
              title={p.title}
              techs={p.techs}
              codelink={p.codelink}
              livelink={p.livelink}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
