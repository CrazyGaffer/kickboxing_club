import React from 'react';
import './PricingPage.scss';

const PricingPage = () => {
    const pricingPlans = [
        {
            id: 1,
            name: 'Beginner',
            price: '$29/month',
            features: [
                'Kickboxing Introduction',
                'Basic Techniques',
                'Access to Online Tutorials',
            ],
        },
        {
            id: 2,
            name: 'Intermediate',
            price: '$49/month',
            features: [
                'All Beginner Features',
                'Advanced Kickboxing Drills',
                'Personalized Coaching',
            ],
        },
        {
            id: 3,
            name: 'Advanced',
            price: '$69/month',
            features: [
                'All Intermediate Features',
                'One-on-One Sessions',
                'Access to Exclusive Events',
            ],
        },
    ];

    return (
        <div className="pricing-page">
            <h1>Our Pricing Plans</h1>
            <div className="pricing-cards">
                {pricingPlans.map((plan) => (
                    <div key={plan.id} className="pricing-card">
                        <h2>{plan.name}</h2>
                        <p className="price">{plan.price}</p>
                        <ul>
                            {plan.features.map((feature, index) => (
                                <li key={index}>{feature}</li>
                            ))}
                        </ul>
                        <button className="contact-btn">Contact Us</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PricingPage;