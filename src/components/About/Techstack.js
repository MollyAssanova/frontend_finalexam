import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiPostgresql,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
        <h3 style={{ color: '#34c759' }}>
          90%
        </h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <h3 style={{ color: '#34c759' }}>
          82%
        </h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <h3 style={{ color: '#34c759' }}>
          70%
        </h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <h3 style={{ color: '#34c759' }}>
          78%
        </h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <h3 style={{ color: '#34c759' }}>
          85%
        </h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
        <h3 style={{ color: '#34c759' }}>
          91%
        </h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
        <h3 style={{ color: '#34c759' }}>
          75%
        </h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
        <h3 style={{ color: '#34c759' }}>
          92%
        </h3>
      </Col>
    </Row>
  );
}

export default Techstack;
