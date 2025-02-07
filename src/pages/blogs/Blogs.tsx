import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { BLOGS_LISTS } from "../../data/blogs";

const Blogs = () => {
  return (
    <Container className="mt-4">
      <Row>
        {BLOGS_LISTS.map((blog) => (
          <Col md={4} key={blog.id} className="mb-4">
            <Card>
              <Card.Img
                variant="top"
                src={blog.image || "https://placehold.co/300x200"}
                alt={blog.title}
                onError={(e) =>
                  (e.currentTarget.src = "https://placehold.co/300x200")
                }
              />

              <Card.Body>
                <Card.Title>{blog.title}</Card.Title>
                <Card.Text>{blog.description}</Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Blogs;
