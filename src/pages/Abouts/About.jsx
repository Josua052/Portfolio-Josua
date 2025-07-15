import React from 'react';
import profileImage from '../../assets/profile.jpg';
import maskShape from '../../assets/mask-shape.png';
import './About.css';

const About = () => {
  return (
    <div className="about-section content-fade-in">
      {/* Gambar dengan masking */}
      <div
        className="profile-mask-container"
        style={{
          WebkitMaskImage: `url(${maskShape})`,
          maskImage: `url(${maskShape})`,
        }}
      >
        <img src={profileImage} alt="Josua Ronaldo Pandiangan" className="profile-img" />
      </div>

      {/* Heading */}
      <h1 className="about-title">Hi, I’m Josua Ronaldo Pandiangan</h1>

      {/* Lokasi */}
      <div className="about-location">
        <i className="bi bi-geo-alt-fill"></i> Indonesia
      </div>

      {/* Deskripsi */}
      <div className="about-description">
        <p>
          🎨 I’m a passionate UI/UX designer and full-stack developer with over 6 years of experience crafting intuitive and visually engaging digital products. As an Information Technology graduate from the University of North Sumatra, I specialize in React.js, Tailwind CSS, and Flutter, combined with strong design skills using Figma and Adobe Creative Suite.
        </p>
        <p>
          🚀 I have hands-on experience in the end-to-end product development process, from conducting user research and prototyping to building responsive web and mobile applications. My ability to bridge design and development allows me to deliver digital solutions that are not only functional but also user-focused.
        </p>
        <p>
          ✨ Outside of work, I love exploring new technologies, following the latest in sport football, and working on creative side projects. I’m a firm believer in continuous learning and staying ahead of design trends to keep delivering innovative experiences.
        </p>
      </div>

      {/* Education */}
      <section className="education-section">
        <h2 className="education-title">Education</h2>

        <div className="education-container">
          {/* Garis */}
          <div className="education-line"></div>

          {/* Entry 1 */}
          <div className="education-entry">
            <div className="education-date">
              <div className="date-pill">2019–2025</div>
            </div>
            <div className="education-dot-wrapper">
              <div className="education-dot"></div>
            </div>
            <div className="education-content">
              <h5>Universitas Sumatera Utara</h5>
              <em>Teknologi Informasi</em>
              <p><strong>GPA:</strong> 3.57</p>
              <p>
                "Graduated with a Bachelor's degree in Information Technology from Universitas Sumatera Utara in 2021 with a GPA of 3.57, laying a strong foundation for a career in design and software development."
              </p>
            </div>
          </div>

          {/* Entry 2 */}
          <div className="education-entry">
            <div className="education-date">
              <div className="date-pill">2016–2019</div>
            </div>
            <div className="education-dot-wrapper">
              <div className="education-dot"></div>
            </div>
            <div className="education-content">
              <h5>SMA Negeri 1 Tigalingga</h5>
              <em>Sains</em>
              <p><strong>Nilai Akhir:</strong> 92.5</p>
              <p>
                "Completed high school in Science at SMA Negeri 1 Tigalingga with a final score of 92.5, marking the initial steps toward a journey in technology and academic excellence."
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
