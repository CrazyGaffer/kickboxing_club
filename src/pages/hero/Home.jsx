import React from 'react';
import './Home.scss';
import {FaUsers, FaStar, FaDumbbell, FaUserNinja} from 'react-icons/fa';
import { GiBoxingGloveSurprise } from "react-icons/gi";
import heroImage from '/src/assets/kickboxer.png';

const Home = () => {
    return (
        <section className="hero">
            <div className="hero__shape hero__shape--one" />
            <div className="hero__shape hero__shape--two" />

            <div className="hero__container">
                <div className="hero__content">
                    <h1 className="hero__title">
                        Unleash <span>the Fighter</span> in You
                    </h1>
                    <p className="hero__subtitle">
                        Join our high-energy Kickboxing Club and train with the best to become the champion
                        you’ve always dreamed of.
                    </p>
                    <button className="hero__cta">Get Started</button>

                    <div className="hero__services">
                        <h2 className="hero__services-title">What We Offer</h2>
                        <div className="hero__stats">
                            <div className="hero__stat-card">
                                <div className="hero__stat-icon">
                                    <FaUsers />
                                </div>
                                <div>
                                    <h3>Kickbox Tribe</h3>
                                    <p>Join our fighter family</p>
                                </div>
                            </div>
                            <div className="hero__stat-card">
                                <div className="hero__stat-icon">
                                    <GiBoxingGloveSurprise />
                                </div>
                                <div>
                                    <h3>Power Sessions</h3>
                                    <p>High-octane training</p>
                                </div>
                            </div>
                            <div className="hero__stat-card">
                                <div className="hero__stat-icon">
                                    <FaDumbbell />
                                </div>
                                <div>
                                    <h3>Elite Coaching</h3>
                                    <p>Personalized programs</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="hero__image-wrapper">
                    <img src={heroImage} alt="Kickboxer" className="hero__image" />

                    <div className="hero__floating-card hero__floating-card--one">
                        <div className="stat-icon-star">
                            <FaStar />
                        </div>
                        <div className="hero__floating-card-text">
                            <h4>4.8</h4>
                            <p>Satisfaction</p>
                        </div>
                    </div>

                    <div className="hero__floating-card hero__floating-card--two">
                        <div className="stat-icon">
                            <FaDumbbell />
                        </div>
                        <div className="hero__floating-card-text">
                            <h4>Train Like a Pro</h4>
                            <p>From Beginners to Pros</p>
                        </div>
                    </div>

                    <div className="hero__floating-card hero__floating-card--third">
                        <div className="stat-icon">
                            <FaUserNinja />
                        </div>
                        <div className="hero__floating-card-text">
                            <h4>10+ Years Experience</h4>
                            <p>Certified Coaches</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;