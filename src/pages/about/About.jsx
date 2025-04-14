import React from 'react';
import './About.scss';
import aboutImage from '../../assets/about/about_image_1.png';
import SocialLinks from "../../components/SocialLinks.jsx";

const About = () => {
    return (
        <section className="about-section">
            <div className="about-section__container">
                <div className="about-section__image-wrapper">
                    <img
                        src={aboutImage}
                        alt="Action shot of kickboxing"
                        className="about-section__image"
                    />
                </div>

                <div className="about-section__content">
                    <h2 className="about-section__subtitle">OUR STRENGTH</h2>
                    <h3 className="about-section__title">
                        Welcome to our kickboxing club!
                    </h3>
                    <p className="about-section__description">
                        We teach kickboxing techniques to help you reach new heights. Our training sessions
                        combine intense cardio and strength exercises, developing endurance, speed, and power.
                        In our club, you'll find support, discipline, and the opportunity to unlock your potential.
                        Join us to immerse yourself in the world of true martial arts and feel the energy of victory!
                    </p>
                    <SocialLinks/>
                </div>
            </div>
        </section>
    );
};

export default About;