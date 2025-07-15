import  React, { useState, useEffect} from "react";
import { Routes, Route } from "react-router-dom";
import Home from '../pages/Homes/Home';
import About from '../pages/Abouts/About';
import Contact from '../pages/Contacts/Contact';
import Experience from '../pages/Experiences/Experience';
import Project from '../pages/Projects/Project';
import NavbarComponent from '../components/Navbar';
import FooterComponent from '../components/Footer';
import useDarkMode from "../hooks/useDarkMode";
import CardSpotifyPlayer from "../components/CardSpotifyPlayer";
import SpotifyEmbed from "../components/Spotify";



function AppRoutes  () {
    const { isDarkMode, toggleDarkMode } = useDarkMode();
    return (

            <div className={`app-container ${isDarkMode ? "dark-mode" : "light-mode"}`}>
                <NavbarComponent
                isDarkMode={isDarkMode}
                toggleDarkMode={toggleDarkMode}
                />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/project" element={<Project />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            <SpotifyEmbed />
            <FooterComponent />
        </div>
    );
}

export default AppRoutes;