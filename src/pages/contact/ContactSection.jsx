import { FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';
import './ContactSection.scss';
import { useTranslation } from "react-i18next";

const ContactSection = () => {
    const location = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1900.7053084032038!2d24.75094581621364!3d59.43695528189764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4692930c485fa9c3%3A0xd0bb2a8d4e7688d3!2sP%C3%A4rnu%20mnt%2032%2C%2010141%20Tallinn%2C%20Estonia!5e0!3m2!1sen!2sus!4v1680000000000!5m2!1sen!2sus";
    const { t } = useTranslation();

    const highlightText = (text) => {
        return text
            .replace(/(X6 Pärnu mnt 43A)/g, '<strong>$1</strong>')
            .replace(/(SAKURA15)/g, '<strong>$1</strong>');
    };

    return (
        <section id="contact" className="contact-section">
            <div className="container">
                <div className="contact-header">
                    <div className="small-rectangle-features"></div>
                    <h4 className="features-subtitle">{t('contact.subtitle')}</h4>
                    <h2 className="features-title">{t('contact.heading')}</h2>
                    <p className="features-title">{t('contact.subheading')}</p>
                </div>

                <div className="contact-layout">
                    <div className="left-column">
                        <div className="contact-info">

                            <div className="info-item">
                                <div className="icon-container">
                                    <FaEnvelope className="info-icon" />
                                </div>
                                <div className="info-content">
                                    <h3>{t('contact.email.title')}</h3>
                                    <p>{t('contact.email.address')}</p>
                                </div>
                            </div>

                            <div className="info-item">
                                <div className="icon-container">
                                    <FaPhone className="info-icon" />
                                </div>
                                <div className="info-content">
                                    <h3>{t('contact.phone.title')}</h3>
                                    <p>{t('contact.phone.number')}</p>
                                </div>
                            </div>

                            <div className="info-item location-item">
                                <div className="icon-container">
                                    <FaMapMarkerAlt className="info-icon" />
                                </div>
                                <div className="info-content">
                                    <h3>{t('contact.location.title')}</h3>
                                    <p className="address-text">
                                        {t('contact.location.address')}
                                    </p>
                                    <div className="parking-details">
                                        <p dangerouslySetInnerHTML={{
                                            __html: highlightText(t('parking.description'))
                                        }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="map-integration">
                        <iframe
                            title="Restaurant Location"
                            src={location}
                            frameBorder="0"
                            allowFullScreen=""
                            aria-hidden="false"
                            tabIndex="0"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;