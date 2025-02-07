import React from "react";
import { Container, Row, Col, Card, Button, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { PORTFOLIO_DATA } from "../../data/portfolio";



const Portfolio = () => {
  const portfolioData= PORTFOLIO_DATA;
  return (
    <Container className="mt-4">
      {/* Cover Letter & Basic Info */}
      <Card className="mb-4 text-center">
        <Card.Body>
          <div className="my-3">
            <img src="/media/avatars/300-1.jpg" height={120} width={120} />
          </div>
          <Card.Title>{portfolioData.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {portfolioData.title}
          </Card.Subtitle>
          <Card.Text>{portfolioData.coverLetter}</Card.Text>
        </Card.Body>
      </Card>

      {/* Skills */}
      <Card className="mb-4">
        <Card.Body>
          <Card.Title>Skills</Card.Title>
          <Row>
            {portfolioData.skills.map((skill, index) => (
              <Col key={index} xs={4} md={2} className="text-center mb-3">
                <img src={skill.icon} alt={skill.name} width="50" height="50" />
                <p>{skill.name}</p>
              </Col>
            ))}
          </Row>
        </Card.Body>
      </Card>

      {/* Experience */}
      <Card className="mb-4">
        <Card.Body>
          <Card.Title>Experience</Card.Title>
          <Row>
            {portfolioData.experience.map((exp, index) => (
              <Col md={6} key={index} className="mb-3">
                <Card>
                  <Card.Body className="d-flex gap-4">
                    <div className="">
                      <img
                        src="/media/avatars/300-1.jpg"
                        height={120}
                        width={120}
                      />
                    </div>
                    <div>
                    <Card.Title>{exp.role}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      {exp.company}
                    </Card.Subtitle>
                    <Card.Text>{exp.duration}</Card.Text>
                    <Card.Text><Link to={""} relative="path">https://webdesign.com</Link></Card.Text>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Card.Body>
      </Card>

      {/* Projects */}
      <Card className="mb-4">
        <Card.Body>
          <Card.Title>Projects</Card.Title>
          <Row>
            {portfolioData.projects.map((project, index) => (
              <Col md={6} key={index} className="mb-3">
                <Card>
                  <Card.Body>
                    <div className="d-flex gap-4">
                    <div className="">
                      <img
                        src="/media/avatars/300-1.jpg"
                        height={120}
                        width={120}
                      />
                    </div>
                    <div>
                    <Card.Title>{project.name}</Card.Title>
                    <Card.Text>{project.description}</Card.Text>
                    <Card.Text><Link to={""} relative="path">https://webdesign.com</Link></Card.Text>
                    <Card.Text>
                      <strong>Technical Stacks:</strong> HTML, CSS, JavaScript.
                    </Card.Text>
                    </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Card.Body>
      </Card>

      {/* Education */}
      <Card className="mb-4">
        <Card.Body>
          <Card.Title>Education</Card.Title>
          <Card.Text>{portfolioData.education}</Card.Text>
        </Card.Body>
      </Card>

      {/* Hobbies */}
      <Card className="mb-4">
        <Card.Body>
          <Card.Title>Hobbies</Card.Title>
          <ListGroup>
            {portfolioData.hobbies.map((hobby, index) => (
              <ListGroup.Item key={index}>{hobby}</ListGroup.Item>
            ))}
          </ListGroup>
        </Card.Body>
      </Card>

      {/* Address & Social Links */}
      <Card className="mb-4">
        <Card.Body>
          <Card.Title>Contact</Card.Title>
          <Card.Text>
            <strong>Address:</strong> {portfolioData.address}
          </Card.Text>
          <p>
            <strong>GitHub:</strong>{" "}
            <a
              href={portfolioData.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Profile
            </a>
          </p>
          <p>
            <strong>LinkedIn:</strong>{" "}
            <a
              href={portfolioData.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn Profile
            </a>
          </p>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Portfolio;
