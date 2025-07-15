import { useState, useRef, useEffect } from "react"; // ← tambahkan useEffect
import { Row, Col, Button, Form, Card } from 'react-bootstrap';
import './Contact.css';
import emailjs from 'emailjs-com';


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isFocused, setIsFocused] = useState({
    name: false,
    email: false,
    subject: false,
    message: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFocus = (field) => {
    setIsFocused(prev => ({ ...prev, [field]: true }));
  };

  const handleBlur = (field) => {
    if (formData[field] === '') {
      setIsFocused(prev => ({ ...prev, [field]: false }));
    }
  };
    const [notification, setNotification] = useState({ message: '', type: '' });

  const handleSendMessage = (e) => {
  e.preventDefault();

  emailjs.sendForm(
    'service_i12m15v',
    'template_7f6g3ym',
    e.target,
    '3BeUQz1mU-ZPIdnfe'
  )
  .then((result) => {
    setNotification({ message: 'Pesan berhasil dikirim!', type: 'success' });

    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsFocused({ name: false, email: false, subject: false, message: false });
  }, (error) => {
    setNotification({ message: 'Gagal mengirim pesan. Silakan coba lagi.', type: 'error' });
    console.error(error);
  });
};
    useEffect(() => {
    if (notification.message) {
        const timer = setTimeout(() => {
        setNotification({ message: '', type: '' });
        }, 3000);
        return () => clearTimeout(timer);
    }
    }, [notification]);



  return (
    
    <div className="contact-section content-fade-in">
        <h2 className="display-4 fw-bold mb-3">Get In Touch</h2>
          <p className="lead">Interested in working together or starting a project? Feel free to reach out!</p>
      <Row className="justify-content-center g-4">
        <Col md={6}>
          <Card className="contact-form-card p-4">
            <Card.Body>
              <Card.Title className="mb-3">Send me a message</Card.Title>
              <Card.Text className="text-muted mb-4">
                Fill out the form below and I'll get back to you as soon as possible.
              </Card.Text>
              

              <Form onSubmit={handleSendMessage}>
                {/* Name */}
                <Form.Floating className="mb-3">
                  <Form.Control
                    id="formName"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    onFocus={() => handleFocus('name')}
                    onBlur={() => handleBlur('name')}
                    placeholder={isFocused.name || formData.name ? 'Full Name' : ' '}
                    required
                  />
                  <Form.Label htmlFor="formName">Full Name</Form.Label>
                </Form.Floating>

                {/* Email */}
                <Form.Floating className="mb-3">
                  <Form.Control
                    id="formEmail"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    onFocus={() => handleFocus('email')}
                    onBlur={() => handleBlur('email')}
                    placeholder={isFocused.email || formData.email ? 'Email address' : ' '}
                    required
                  />
                  <Form.Label htmlFor="formEmail">Email address</Form.Label>
                </Form.Floating>

                {/* Subject */}
                <Form.Floating className="mb-3">
                  <Form.Control
                    id="formSubject"
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    onFocus={() => handleFocus('subject')}
                    onBlur={() => handleBlur('subject')}
                    placeholder={isFocused.subject || formData.subject ? 'Subject' : ' '}
                    required
                  />
                  <Form.Label htmlFor="formSubject">Subject</Form.Label>
                </Form.Floating>

                {/* Message */}
                <Form.Floating className="mb-4">
                  <Form.Control
                    id="formMessage"
                    as="textarea"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    onFocus={() => handleFocus('message')}
                    onBlur={() => handleBlur('message')}
                    placeholder={isFocused.message || formData.message ? 'Message' : ' '}
                    style={{ height: '150px' }}
                    required
                  />
                  <Form.Label htmlFor="formMessage">Message</Form.Label>
                </Form.Floating>

                <Button variant="dark" type="submit" className="w-100 contact-send-button">
                  Send Message <i className="bi bi-send ms-2"></i>
                </Button>
              </Form>
              
            </Card.Body>
            {notification.message && (
                <div className={`custom-alert ${notification.type}`}>
                    {notification.message}
                </div>
                )}
          </Card>
        </Col>

        <Col md={5}>
          <Card className="connect-card p-4">
            <Card.Body>
              <Card.Title className="mb-3">Connect with me</Card.Title>
              <Card.Text className="text-muted mb-4">
                You can also reach out to me directly through these channels
              </Card.Text>

              <ul className="list-unstyled contact-info-list">
                <li className="contact-item">
                  <div className="contact-item-icon-wrapper">
                    <i className="bi bi-github"></i>
                  </div>
                  <div className="contact-item-text">
                    <strong>GitHub</strong>
                    <a href="https://github.com/JosuaRonaldoPand/" target="_blank" rel="noopener noreferrer">https://github.com/Josua052</a>
                  </div>
                </li>
                <li className="contact-item">
                  <div className="contact-item-icon-wrapper">
                    <i className="bi bi-linkedin"></i>
                  </div>
                  <div className="contact-item-text">
                    <strong>LinkedIn</strong>
                    <a href="https://www.linkedin.com/in/josua-ronaldo-pandiangan/" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/josua-ronaldo/</a>
                  </div>
                </li>
                <li className="contact-item">
                  <div className="contact-item-icon-wrapper">
                    <i className="bi bi-envelope-fill"></i>
                  </div>
                  <div className="contact-item-text">
                    <strong>Email</strong>
                    <a href="mailto:josuaronaldo96@gmail.com">josuaronaldo96@gmail.com</a>
                  </div>
                </li>
                <li className="contact-item">
                  <div className="contact-item-icon-wrapper">
                    <i className="bi bi-phone-fill"></i>
                  </div>
                  <div className="contact-item-text">
                    <strong>Phone</strong>
                    <a href="tel:+6285757966733">+62812-6483-3128</a>
                  </div>
                </li>
              </ul>

              <div className="mt-4">
                <strong>Current Location</strong>
                <br />
                Medan, North Sumatra, Indonesia
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Contact;
