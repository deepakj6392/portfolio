import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./style.css";
const AboutSection = () => {
  return (
    <section className="about-section py-5 bg-light">
      <Container>
        <Row className="align-items-center">
          {/* About Image */}
          <Col md={6} className="text-center mb-4 mb-md-0">
            <img
              src="/media/avatars/300-1.jpg" // Replace with your image path
              alt="About"
              className="img-fluid rounded shadow"
              style={{ maxWidth: "100%" }}
            />
          </Col>

          {/* About Text */}
          <Col md={6}>
            <h2 className="fw-bold mb-3">About Me</h2>
            <p className="text-muted">
              Hi, I'm John Doe, a passionate developer dedicated to creating
              dynamic and user-friendly web applications. With a strong
              background in front-end and back-end development, I specialize in
              crafting solutions that are both functional and visually
              appealing.
            </p>
            <p className="text-muted">
              I thrive on challenges and love collaborating with teams to bring
              ideas to life. When I'm not coding, you'll find me exploring new
              technologies or enjoying outdoor adventures.
            </p>
            <Button variant="primary" size="lg" className="me-3">
              Learn More
            </Button>
            <Button variant="outline-secondary" size="lg">
              Contact Me
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
