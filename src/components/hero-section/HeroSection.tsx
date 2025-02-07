import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./style.css";
import { PROFILE } from "../../data";
import { Link } from "react-router-dom";
const HeroSection = () => {
  return (
    <section className="hero-section bg-light py-5" data-aos="fade-up" data-aos-anchor-placement="top-center">
      <Container>
        <Row className="align-items-center">
          {/* Image Section */}
          <Col md={6} className="text-center mb-4 mb-md-0">
            <img
              src="/media/avatars/300-1.jpg" // Replace with your photo path
              alt="Hero"
              className="img-fluid rounded-circle shadow"
              style={{ maxWidth: "300px" }}
            />
          </Col>

          {/* Text Section */}
          <Col md={6}>
            <h1 className="display-4 fw-bold">{PROFILE.NAME}</h1>
            <h2 className="text-primary mb-3">{PROFILE.POSITION} </h2>
            <p className="text-muted">{PROFILE.ABOUT}</p>
            <Link to={"/contact"}>
              <Button variant="primary" size="lg" className="me-3">
                Contact Me
              </Button>
            </Link>
            <Link to={"/portfolio"}>
              <Button variant="outline-secondary" size="lg">
                View Portfolio
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
