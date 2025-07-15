import React from 'react';
import './Experience.css';
import { FaMapMarkerAlt } from 'react-icons/fa';

const Experience = () => {
  return (
    <div className="experience-section content-fade-in">
      <h2 className="experience-title">Experience</h2>
      <p className="experience-subtitle">My professional journey in development and research</p>

      <div className="experience-card">
        <div className="experience-header">
          <h3>Web <br /> Developer</h3>
          <span className="experience-date">August 2022 – January 2023</span>
        </div>
        <p className="experience-company">Apple Developer</p>
        <p className="experience-program">Studi Independen - MBKM</p>
        <div className="experience-location">
          <FaMapMarkerAlt className="location-icon" />
          <span>Batam</span>
        </div>
        <hr />
        <ul className="experience-details">
          <li>
            Participated in mentorship sessions led by experts in Web Development,
            covering topics such as UI/UX design, web fundamentals (HTML, CSS, JavaScript),
            React.js, backend development using Express.js, Node.js, and MongoDB.
          </li>
          <li>
            Contributed to the development of three web projects: OneClick Dokter, Freedum,
            and Unicate. Project contributions included:
            <ul>
              <li>a. Collaborated in a team to apply effective design thinking methodologies.</li>
              <li>b. Designed UI/UX interfaces using Figma, starting from research, user flow, prototyping to final UI implementation.</li>
              <li>c. Developed full-stack web applications using React JS, Node JS, Express JS, and MySQL.</li>
              <li>d. Unicate was successfully published as a featured project. Also contributed as a video editor for the Developer Festival event.</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Experience;
