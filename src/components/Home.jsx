import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Form, Card } from 'react-bootstrap'; // SOROT: Tambahkan Form dan Card
import './Home.css';
import profileImage from '../assets/profile.jpg';
import maskShape from '../assets/mask-shape.png';

const Home = () => {
  // --- Start: Logic untuk Bagian Home Utama ---
  const handleResumeClick = () => {
    const resumePath = '/CV_Josua Ronaldo Pandiangan.pdf';
    window.open(resumePath, '_blank');
  };

  const roles = ['Web Developer', 'UI/UX Designer', 'Mobile Developer'];
  const [roleIndex, setRoleIndex] = useState(0);
  const [animationClass, setAnimationClass] = useState('text-slide-in');

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationClass('text-slide-out');
      setTimeout(() => {
        setRoleIndex(prevIndex => (prevIndex + 1) % roles.length);
        setAnimationClass('text-slide-in');
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  // --- End: Logic untuk Bagian Home Utama ---


  // --- Logic dan Data untuk Bagian Skills ---
  const skillsData = {
    "Soft Skills": [
      "Time management",
      "Organizational skills",
      "Communication",
      "Relationship building",
      "Analytical thinking",
      "Innovation",
      "Problem solving",
      "Creativity"
    ],
    "UI/UX Design": [
      "Figma",
      "Research & Testing",
      "Typography & Color Theory",
      "Design System & Style Guide"
    ],
    "Web Developer": [
      "React JS",
      "PHP Native",
      "Laravel",
      "Responsive & Cross-browser Development",
      "CSS Framework & Styling"
    ],
    "Mobile Developer": [
      "Flutter"
    ],
    "Adobe": [
      "Adobe Photoshop",
      "Adobe Premiere Pro",
      "Adobe Illustrator"
    ],
    "Microsoft": [
      "Microsoft Word",
      "Microsoft Excel",
      "Microsoft PowerPoint"
    ]
  };

  const [activeCategory, setActiveCategory] = useState("Soft Skills");
  // --- End: Logic dan Data untuk Bagian Skills ---


  // --- SOROT: Start: Logic dan State untuk Bagian Contact Me ---
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSendMessage = (e) => {
    e.preventDefault(); // Mencegah form dari refresh halaman

    const { name, email, subject, message } = formData;
    const recipient = 'josuaronaldo96@gmail.com';
    const emailSubject = encodeURIComponent(subject || 'Inquiry from your Portfolio Website'); // Gunakan subjek dari form, jika kosong beri default
    const emailBody = encodeURIComponent(
      `Name: ${name || 'N/A'}\n` +
      `Email: ${email || 'N/A'}\n\n` +
      `Message:\n${message || 'No message provided.'}`
    );

    // Membuka klien email default
    window.location.href = `mailto:${recipient}?subject=${emailSubject}&body=${emailBody}`;

    // Opsional: Reset form setelah kirim
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };
  // --- SOROT: End: Logic dan State untuk Bagian Contact Me ---


  return (
    <>
      {/* Bagian Home Utama */}
      <Container fluid className="home-section d-flex align-items-center min-vh-90 content-fade-in">
        <Row className="justify-content-center align-items-center w-100 home-row-padded">
          <Col md={6} className="text-section d-flex flex-column justify-content-center p-4">
            <h1 className="display-4 fw-bold mb-3">Hi, I'm Josua Ronaldo Pandiangan</h1>
            <div className="role-text-container mb-4">
              <h2 key={roleIndex} className={animationClass}>
                {roles[roleIndex]}
              </h2>
            </div>
            <p className="lead mb-4">
              A passionate UI/UX Designer and Web & Mobile Developer with a strong foundation in
              user-centered design and front-end technologies. Graduated with a Bachelor's degree in
              Information Technology from Universitas Sumatera Utara, with a focus on creating
              intuitive, responsive and engaging digital experiences.
            </p>
            <div className="button-group d-flex flex-column align-items-start">
              <Button variant="dark" className="me-3 mb-3" onClick={handleResumeClick}>
                <i className="bi bi-download me-2"></i>Resume
              </Button>
              <a href="#skills" className="text-dark text-decoration-none d-flex align-items-center know-more-link">
                <i className="bi bi-mouse me-2"></i>
                Know more about me <i className="bi bi-arrow-down-short ms-2"></i>
              </a>
            </div>
          </Col>
          <Col md={6} className="image-section d-flex justify-content-center align-items-center p-4">
            <div
              className="profile-mask-container"
              style={{
                WebkitMaskImage: `url(${maskShape})`,
                maskImage: `url(${maskShape})`,
                WebkitMaskSize: 'contain',
                maskSize: 'contain',
                WebkitMaskRepeat: 'no-repeat',
                maskRepeat: 'no-repeat',
                WebkitMaskPosition: 'center',
                maskPosition: 'center'
              }}
            >
              <img src={profileImage} alt="Josua Ronaldo Pandiangan" className="img-fluid profile-img" />
            </div>
          </Col>
        </Row>
      </Container>

      {/* Bagian My Skills */}
      <section id="skills" className="skills-section py-5">
        <Container className="text-center mb-5 skills-header-container">
          <h2 className="display-4 fw-bold mb-3">My Skills</h2>
          <p className="lead">Well-versed in a broad spectrum of development tools and technologies.</p>
        </Container>

        <Container className="skills-content-container">
          <Row className="justify-content-center">
            <Col md={3} className="skills-category-menu mb-4 mb-md-0">
              {Object.keys(skillsData).map(category => (
                <div
                  key={category}
                  className={`category-item ${activeCategory === category ? 'active' : ''}`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </div>
              ))}
            </Col>
            <Col md={1} className="d-none d-md-block"></Col>
            <Col md={7} className="skills-detail-card p-4">
              <Row className="g-3">
                {skillsData[activeCategory].map((skill, index) => (
                  <Col key={index} xs={12} sm={6}>
                    <div className="skill-tag">
                      {skill}
                    </div>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      {/* SOROT: Start: Bagian Contact Me */}
      <section id="contact" className="contact-section py-5">
        <Container className="text-center mb-5">
          <h2 className="display-4 fw-bold mb-3">Get In Touch</h2>
          <p className="lead">Interested in working together or starting a project? Feel free to reach out!</p>
        </Container>

        <Container className="contact-content-container">
          <Row className="justify-content-center g-4"> {/* g-4 untuk jarak antar kolom */}
            {/* Kolom Kiri: Send a Message Form */}
            <Col md={6}>
              <Card className="contact-form-card p-4">
                <Card.Body>
                  <Card.Title className="mb-3">Send me a message</Card.Title>
                  <Card.Text className="text-muted mb-4">
                    Fill out the form below and I'll get back to you as soon as possible.
                  </Card.Text>
                  <Form onSubmit={handleSendMessage}>
                    <Form.Floating className="mb-3">
                      <Form.Control
                        id="formName" // ID unik untuk label
                        type="text"
                        placeholder="Full Name" // Placeholder sebagai fallback
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                      <Form.Label htmlFor="formName">Full Name</Form.Label> {/* Label yang akan mengambang */}
                    </Form.Floating>

                    {/* SOROT: Perubahan untuk Floating Label - Email */}
                    <Form.Floating className="mb-3">
                      <Form.Control
                        id="formEmail"
                        type="email"
                        placeholder="name@example.com"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                      <Form.Label htmlFor="formEmail">Email address</Form.Label>
                    </Form.Floating>

                    {/* SOROT: Perubahan untuk Floating Label - Subject */}
                    <Form.Floating className="mb-3">
                      <Form.Control
                        id="formSubject"
                        type="text"
                        placeholder="Subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                      />
                      <Form.Label htmlFor="formSubject">Subject</Form.Label>
                    </Form.Floating>

                    {/* SOROT: Perubahan untuk Floating Label - Message (Textarea) */}
                    <Form.Floating className="mb-4">
                      <Form.Control
                        id="formMessage"
                        as="textarea"
                        placeholder="Leave a message here" // Placeholder untuk textarea
                        style={{ height: '150px' }} // Tinggi textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                      />
                      <Form.Label htmlFor="formMessage">Message</Form.Label>
                    </Form.Floating>

                    <Button variant="dark" type="submit" className="w-100 contact-send-button">
                      Send Message <i className="bi bi-send ms-2"></i>
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
            </Col>

            {/* Kolom Kanan: Connect with me */}
            <Col md={5}>
              <Card className="connect-card p-4">
                <Card.Body>
                  <Card.Title className="mb-3">Connect with me</Card.Title>
                  <Card.Text className="text-muted mb-4">
                    You can also reach out to me directly through these channels
                  </Card.Text>

                  <ul className="list-unstyled contact-info-list">
                    {/* SOROT: Tambahkan class 'contact-item' pada setiap <li> */}
                    <li className="contact-item">
                      <div className="contact-item-icon-wrapper"> {/* SOROT: Wrapper untuk ikon */}
                        <i className="bi bi-github"></i> {/* Hapus me-3 */}
                      </div>
                      <div className="contact-item-text"> {/* SOROT: Wrapper untuk teks */}
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
        </Container>
      </section>
      <footer className="main-footer py-4">
        <div className="container-fluid footer-content-wrapper">
          <div className="footer-social-icons">
            {/* Ikon sosial yang sesuai dengan gambar */}
            <a href="https://www.linkedin.com/in/josua-ronaldo-pandiangan/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i className="bi bi-linkedin"></i>
            </a>
            <a href="mailto:josuaronaldo96@gmail.com" aria-label="Email">
              <i className="bi bi-envelope-fill"></i>
            </a>
            <a href="tel:+6285757966733" aria-label="Phone">
              <i className="bi bi-phone-fill"></i>
            </a>
            <a href="https://github.com/JosuaRonaldoPand" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <i className="bi bi-github"></i>
            </a>
          </div>
          <div className="footer-line"></div> {/* Garis pemisah */}
        </div>
      </footer>
    </>
  );
};

export default Home;