import React from 'react';
import './footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; Shawn Perez. All rights reserved.</p>
                <ul className="footer-links">
                    <li><a href="git hub link here" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                    <li><a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                    <li><a href="mailto:shawn.perez@example.com">Email</a></li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;