import { FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa';
import './SocialLinks.css';

const SocialLinks = () => (
    <div className="about-socials">
        <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
        >
            <FaFacebookF />
        </a>
        <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
        >
            <FaInstagram />
        </a>
        <a
            href="https://www.tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
        >
            <FaTiktok />
        </a>
    </div>
);

export default SocialLinks;