import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./style.css"
const Service = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero bg-dark text-light py-5">
        <Container>
          <Row>
            <Col md={6} className="d-flex align-items-center">
              <div>
                <h1 className="display-4">Our Services</h1>
                <p className="lead">
                  Discover a range of services designed to cater to all your
                  business needs. From web development to digital marketing, we
                  have the expertise to help you succeed.
                </p>
                <Button variant="primary" size="lg">
                  Get Started
                </Button>
              </div>
            </Col>
            <Col md={6}>
              <img
                src="/images/webandmobile.webp"
                alt="Hero"
                className="img-fluid rounded"
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Services Section */}
      <section className="services py-5">
        <Container>
          <h2 className="text-center mb-5">Our Core Services</h2>
          <Row>
            {/* Service 1 */}
            <Col md={4} className="mb-4">
              <Card className="h-100 shadow">
                <Card.Img
                  variant="top"
                  style={{height:350,objectFit:'cover'}}
                  src="/images/webd.jpeg"
                  alt="Service 1"
                />
                <Card.Body>
                  <Card.Title>Web Development</Card.Title>
                  <Card.Text>
                    Create stunning, responsive websites that captivate your
                    audience and drive results.
                  </Card.Text>
                  <Button variant="primary">Learn More</Button>
                </Card.Body>
              </Card>
            </Col>
            {/* Service 2 */}
            <Col md={4} className="mb-4">
              <Card className="h-100 shadow">
                <Card.Img
                  style={{height:350,objectFit:'cover'}}
                  variant="top"
                  src="/images/mobiled.jpeg"
                  alt="Service 2"
                />
                <Card.Body>
                  <Card.Title>Mobile App Development</Card.Title>
                  <Card.Text>
                    Build user-friendly mobile applications for Android and iOS
                    platforms.
                  </Card.Text>
                  <Button variant="primary">Learn More</Button>
                </Card.Body>
              </Card>
            </Col>
            {/* Service 3 */}
            <Col md={4} className="mb-4">
              <Card className="h-100 shadow">
                <Card.Img
                  style={{height:350,objectFit:'cover'}}
                  variant="top"
                  src="/images/digitalm.png"
                  alt="Service 3"
                />
                <Card.Body>
                  <Card.Title>Digital Marketing</Card.Title>
                  <Card.Text>
                    Enhance your online presence with our comprehensive digital
                    marketing solutions.
                  </Card.Text>
                  <Button variant="primary">Learn More</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials bg-light py-5">
        <Container>
          <h2 className="text-center mb-5">What Our Clients Say</h2>
          <Row>
            {/* Testimonial 1 */}
            <Col md={4} className="mb-4">
              <Card className="shadow">
                <Card.Body>
                  <Card.Text>
                    "This team is fantastic! They delivered our website ahead of
                    schedule and exceeded our expectations."
                  </Card.Text>
                  <footer className="blockquote-footer">
                    John Doe, CEO of Example Corp
                  </footer>
                </Card.Body>
              </Card>
            </Col>
            {/* Testimonial 2 */}
            <Col md={4} className="mb-4">
              <Card className="shadow">
                <Card.Body>
                  <Card.Text>
                    "Their digital marketing strategies increased our traffic by
                    300%. Highly recommended!"
                  </Card.Text>
                  <footer className="blockquote-footer">
                    Jane Smith, Marketing Manager
                  </footer>
                </Card.Body>
              </Card>
            </Col>
            {/* Testimonial 3 */}
            <Col md={4} className="mb-4">
              <Card className="shadow">
                <Card.Body>
                  <Card.Text>
                    "The mobile app they built for us has been a game-changer.
                    Our customers love it!"
                  </Card.Text>
                  <footer className="blockquote-footer">
                    Mike Johnson, Founder of AppCo
                  </footer>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Contact CTA Section */}
      <section className="contact-cta bg-dark text-light py-5">
        <Container>
          <Row className="text-center">
            <Col>
              <h2>Ready to Get Started?</h2>
              <p className="lead">
                Contact us today to discuss how we can help you achieve your
                business goals.
              </p>
              <Button variant="primary" size="lg">
                Contact Us
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Service;
