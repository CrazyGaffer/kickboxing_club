import React from 'react';
import { FaCheck, FaStar, FaFire, FaCrown } from 'react-icons/fa';
import './PricingPage.scss';

const PricingPage = () => {
    const pricingPlans = [
        {
            id: 1,
            name: 'Starter',
            price: '€29',
            features: [
                'Basic Kickboxing Techniques',
                '3 Weekly Group Sessions',
                'Online Tutorial Access',
                'Progress Tracking',
                'Email Support'
            ],
            popular: false,
            icon: <FaStar className="plan-icon" />
        },
        {
            id: 2,
            name: 'Pro',
            price: '€49',
            features: [
                'All Starter Features',
                'Unlimited Group Sessions',
                '1 Private Session/Week',
                'Personalized Training Plan',
                'Priority Support'
            ],
            popular: true,
            icon: <FaFire className="plan-icon" />
        },
        {
            id: 3,
            name: 'Elite',
            price: '€69',
            features: [
                'All Pro Features',
                'Unlimited Private Sessions',
                'Nutrition Planning',
                'Exclusive Workshop Access',
                '24/7 VIP Support'
            ],
            popular: false,
            icon: <FaCrown className="plan-icon" />
        },
    ];

    return (
        <div className="pricing-page">
            <div className="header-section">
                <h1 className="page-title">Choose Your Plan</h1>
                <p className="page-subtitle">Transform your training with our flexible pricing options</p>
            </div>

            <div className="pricing-container">
                {pricingPlans.map((plan) => (
                    <div key={plan.id} className={`pricing-card ${plan.popular ? 'popular' : ''}`}>
                        {plan.popular && <div className="popular-badge">Most Popular</div>}
                        <div className="plan-header">
                            {plan.icon}
                            <h3 className="plan-name">{plan.name}</h3>
                            <div className="plan-price">
                                <span className="price">{plan.price}</span>
                                <span className="billing-cycle">/month</span>
                            </div>
                        </div>

                        <ul className="plan-features">
                            {plan.features.map((feature, index) => (
                                <li key={index} className="feature-item">
                                    <FaCheck className="feature-icon" />
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>

                        <button className="cta-button">
                            Contact Us
                            <span className="hover-effect"></span>
                        </button>
                    </div>
                ))}
            </div>

            <div className="disclaimer">
                * All plans include a 7-day free trial. Cancel anytime.
            </div>
        </div>
    );
};

export default PricingPage;