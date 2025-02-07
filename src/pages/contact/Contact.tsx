import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertVariant, setAlertVariant] = useState('success');

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setAlertMessage('Please fill in all fields.');
      setAlertVariant('danger');
      setShowAlert(true);
      return;
    }

    setAlertMessage('Your message has been sent successfully!');
    setAlertVariant('success');
    setShowAlert(true);
    
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <Container className="mt-5">
      <Row>
        <Col md={6} className="offset-md-3">
          <div className='my-3 text-center'>
            <img src='/images/contactus.png' height={100} alt='' />
          </div>
          <h2 className='text-center'>Contact Us</h2>

          {showAlert && (
            <Alert variant={alertVariant} onClose={() => setShowAlert(false)} dismissible>
              {alertMessage}
            </Alert>
          )}

          <Form onSubmit={handleSubmit} className='mb-5'>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Write your message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="mt-3">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
