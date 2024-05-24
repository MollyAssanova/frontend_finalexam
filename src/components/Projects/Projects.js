// src/components/Projects/Projects.js
import React, { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import { ProjectContext, ProjectProvider } from "../context/ProjectContext";

function Projects() {
  const projects = useContext(ProjectContext);

  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My recent work
        </h1>
        <p style={{ color: "white" }}>
          Projects I've been working on recently
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {projects.map((project, index) => (
            <Col key={index} md={4} className="project-card">
              <ProjectCard
                isBlog={false}
                title={project.title}
                description={project.description}
                ghLink={project.ghLink}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

