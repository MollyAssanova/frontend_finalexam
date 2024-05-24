import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.png";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={homeLogo} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                <strong className="main-name"> Hello everyone!</strong>
              </h1>

              <h1 className="heading-name">
                My name is Moldir
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
              <h1 className="heading-name">
              Welcome to my portfolio! I am an Information Technology student with a strong passion for exploring new technologies and a dedicated drive to grow in the IT industry. Here, you will find a showcase of my projects, skills, and achievements. 
              </h1>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
            About me
            </h1>
            <p className="home-about-body">
              <br />
                <b className="purple">As an Information Technology student, I am deeply passionate about diving into the latest technologies and continually enhancing my skills. My journey in the IT field is driven by a curiosity to understand how things work and a dedication to developing innovative solutions.
                                      Throughout my academic career, I have engaged in various projects that showcase my proficiency in software development, web development, and network management. I thrive in environments that challenge me to push my boundaries and learn something new every day.
                </b>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
              <img src={myImg} className="img-fluid" alt="avatar" />
          </Col>
        </Row>
        <br></br>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>You can find me at:</h1>
            <h2>
               <span className="purple">Contact </span> me
            </h2>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/MollyAssanova"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/moldir-assanova/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
    </section>
  );
}

export default Home;
