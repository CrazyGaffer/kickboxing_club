import React from 'react';
import './Features.scss';

const FeaturesSection = () => {
    return (
        <section className="features-section">
            <div className="features-section__container">
                {/* Left side: Text Content */}
                <div className="features-section__info">
                    <h2 className="features-section__subtitle">Our Exclusive Features</h2>
                    <h3 className="features-section__title">
                        Elevate Your Training Experience
                    </h3>
                    <p className="features-section__description">
                        Discover how our club stands apart with innovative training methods, expert coaching, and a community-driven approach.
                    </p>
                </div>
                {/* Right side: Feature Cards arranged in two columns */}
                <div className="features-section__cards">
                    <div className="features-section__cards-column">
                        <div className="features-section__card">
                            <div className="features-section__card-icon">🥊</div>
                            <h4 className="features-section__card-title">Expert Coaching</h4>
                            <p className="features-section__card-description">
                                Learn from seasoned professionals who know how to bring out your best.
                            </p>
                        </div>
                        <div className="features-section__card">
                            <div className="features-section__card-icon">🏆</div>
                            <h4 className="features-section__card-title">Competitive Edge</h4>
                            <p className="features-section__card-description">
                                Equip yourself with strategies and techniques that set you apart.
                            </p>
                        </div>
                    </div>
                    <div className="features-section__cards-column">
                        <div className="features-section__card">
                            <div className="features-section__card-icon">💡</div>
                            <h4 className="features-section__card-title">Innovative Techniques</h4>
                            <p className="features-section__card-description">
                                Stay ahead with the latest training methodologies and tech-enhanced sessions.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;