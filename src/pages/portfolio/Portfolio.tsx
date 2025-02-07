import React from "react";
import { Container, Row, Col, Card, Button, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

const portfolioData = {
  name: "John Doe",
  title: "Full Stack Developer",
  coverLetter:
    "Passionate developer with experience in React, Node.js, and modern web technologies.",
  skills: [
    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/react.svg",
    },
    {
      name: "Angular",
      icon: "https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/angular.svg",
    },
    {
      name: "Node.js",
      icon: "https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/nodedotjs.svg",
    },
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/javascript.svg",
    },
    {
      name: "TypeScript",
      icon: "https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/typescript.svg",
    },
    {
      name: "Bootstrap",
      icon: "https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/bootstrap.svg",
    },
    {
      name: "Express.js",
      icon: "https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/express.svg",
    },
    {
      name: "HTML",
      icon: "https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/html5.svg",
    },
    {
      name: "CSS",
      icon: "https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/css3.svg",
    },
  ],
  experience: [
    {
      company: "Tech Corp",
      role: "Frontend Developer",
      duration: "2020 - Present",
    },
    {
      company: "Web Solutions",
      role: "Backend Developer",
      duration: "2018 - 2020",
    },
  ],
  projects: [
    {
      name: "Portfolio Website",
      description: "Personal portfolio built with React and Bootstrap.",
    },
    {
      name: "E-commerce Dashboard",
      description: "Admin panel for managing an online store.",
    },
  ],
  education: "Bachelor's in Computer Science, XYZ University",
  hobbies: ["Coding", "Gaming", "Reading"],
  address: "123 Main St, City, Country",
  socialLinks: {
    github: "https://github.com/johndoe",
    linkedin: "https://linkedin.com/in/johndoe",
  },
};

const Portfolio = () => {
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
