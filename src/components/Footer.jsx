import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './Navbar.css';


const FooterComponent = () => {
  return (
    <footer className="main-footer">
            <div className="container footer-content-wrapper py-5"> {/* Menggunakan container biasa dan padding vertikal */}
            <div className="row">
                {/* Kolom Kiri: Nama dan Deskripsi */}
                <div className="col-md-5 footer-brand-col mb-4 mb-md-0">
                <h3 className="footer-brand-name fw-bold mb-3">Josua Ronaldo Pandiangan</h3>
                <p className="footer-brand-description">
                    UI/UX Designer and Web & Mobile Developer with a strong
                    interest in crafting modern digital experiences and innovative
                    front-end solutions. Based in Indonesia with a background in
                    Information Technology from Universitas Sumatera Utara.
                </p>
                </div>

                {/* Kolom Tengah: About Me & Links */}
                <div className="col-md-3 footer-links-col mb-4 mb-md-0">
                <h5 className="footer-column-title mb-3">About Me</h5>
                <ul className="list-unstyled footer-links">
                    <li><a href="#home">Home</a></li> {/* Sesuaikan ID ini jika bagian home utama tidak ada ID */ }
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#resume">Resume</a></li> {/* Jika resume ada sebagai section terpisah */}
                </ul>
                </div>

                {/* Kolom Kanan: Connect & Social Icons */}
                <div className="col-md-4 footer-connect-col">
                <h5 className="footer-column-title mb-3">Connect</h5>
                <div className="footer-social-icons-new d-flex flex-wrap gap-3"> {/* Menggunakan flex dan gap */}
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
                </div>
            </div>

            {/* Garis Pemisah */}
            <div className="footer-divider my-4"></div> {/* my-4 untuk margin vertikal */}

            {/* Hak Cipta */}
            <div className="footer-copyright text-center">
                &copy;{new Date().getFullYear()} Josua Ronaldo Pandiangan. All rights reserved.
            </div>
            </div>
        </footer>
  );
};

export default FooterComponent;