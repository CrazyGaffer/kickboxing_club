import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import './Header.css';

const Header = () => {
    const { t } = useTranslation();
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);

    const navItems = [
        { id: 'hero', label: t('navbar.home') },
        { id: 'about', label: t('navbar.about') },
        { id: 'pricing-page', label: t('navbar.pricing') },
        { id: 'contact-section', label: t('navbar.contact') },
    ];

    const toggleMenu = () => setMenuOpen((prev) => !prev);
    const closeMenu = () => setMenuOpen(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : 'auto';
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [menuOpen]);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 1024) {
                setIsMobile(true);
            } else {
                setIsMobile(false);
                setMenuOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <header
            className={`navbar ${scrolled ? 'scrolled' : ''} ${menuOpen ? 'menu-active' : ''}`}
        >
            <div className="navbar-container">
                <div
                    className="navbar-title"
                    onClick={() => scroll.scrollToTop({ duration: 300 })}
                >
                    Kickboxing Club
                </div>
                {isMobile ? (
                    <>
                        <nav className={`nav-menu ${menuOpen ? 'active' : ''}`}>
                            <ul>
                                {navItems.map((item) => (
                                    <li key={item.id}>
                                        <ScrollLink
                                            to={item.id}
                                            smooth={true}
                                            duration={150}
                                            onClick={closeMenu}
                                        >
                                            {item.label}
                                        </ScrollLink>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                        <div
                            className={`hamburger ${menuOpen ? 'active' : ''}`}
                            onClick={toggleMenu}
                        >
                            <span className="bar"></span>
                            <span className="bar"></span>
                            <span className="bar"></span>
                        </div>
                    </>
                ) : (
                    <nav className="nav-menu">
                        <ul>
                            {navItems.map((item) => (
                                <li key={item.id}>
                                    <ScrollLink
                                        to={item.id}
                                        smooth={true}
                                        duration={150}
                                    >
                                        {item.label}
                                    </ScrollLink>
                                </li>
                            ))}
                        </ul>
                    </nav>
                )}
            </div>
        </header>
    );
};

export default Header;