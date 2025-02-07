import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import "./style.css";
import { PROFILE } from "../../../data";
const Footer = () => {
  return (
    <footer className="footer bg-dark text-light py-4">
      <Container>
        <Row>
          {/* About Section */}
          <Col md={4} className="mb-3">
            <h5 className="text-uppercase">About Us</h5>
            <p>
              We provide innovative solutions tailored to meet your business
              needs. Our goal is to empower your growth with cutting-edge
              technology and exceptional service.
            </p>
          </Col>

          {/* Quick Links Section */}
          <Col md={4} className="mb-3">
            <h5 className="text-uppercase">Quick Links</h5>
            <Nav className="flex-column">
              <Nav.Link href="/about" className="text-light">
                About Us
              </Nav.Link>
              <Nav.Link href="/service" className="text-light">
                Services
              </Nav.Link>
              <Nav.Link href="/blog" className="text-light">
                Blog
              </Nav.Link>
              <Nav.Link href="/contact" className="text-light">
                Contact
              </Nav.Link>
            </Nav>
          </Col>

          {/* Contact Section */}
          <Col md={4} className="mb-3">
            <h5 className="text-uppercase">Contact Us</h5>
            <p>
              <strong>Email:</strong> {PROFILE.EMAIL}
            </p>
            <p>
              <strong>Phone:</strong> {PROFILE.PHONE}
            </p>
            <p>
              <strong>Address:</strong> {PROFILE.ADDRESS}
            </p>
          </Col>
        </Row>

        <hr className="bg-secondary" />

        <Row className="text-center">
          {/* Social Media Links */}
          <Col>
            <h5 className="text-uppercase">Follow Us</h5>
            <div className="d-flex justify-content-center">
              <a
                href={PROFILE.FACEBOOK_URL}
                className="text-light me-3"
                aria-label="Facebook"
              >
                <i className="bi bi-facebook" style={{ fontSize: "1.5rem" }}></i>
              </a>
              <a
                href={PROFILE.TWITTER_URL}
                className="text-light me-3"
                aria-label="Twitter"
              >
                <i className="bi bi-twitter" style={{ fontSize: "1.5rem" }}></i>
              </a>
              <a
                href={PROFILE.INSTAGRAM_URL}
                className="text-light me-3"
                aria-label="Instagram"
              >
                <i
                  className="bi bi-instagram"
                  style={{ fontSize: "1.5rem" }}
                ></i>
              </a>
              <a
                href={PROFILE.LINKEDIN_URL}
                className="text-light"
                aria-label="LinkedIn"
              >
                <i
                  className="bi bi-linkedin"
                  style={{ fontSize: "1.5rem" }}
                ></i>
              </a>
            </div>
          </Col>
        </Row>

        <hr className="bg-secondary" />

        {/* Copyright Section */}
        <Row>
          <Col className="text-center">
            <p className="mb-0">
              &copy; {new Date().getFullYear()} {PROFILE.COMPANY_NAME}. All Rights
              Reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
