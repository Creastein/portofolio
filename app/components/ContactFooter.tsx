"use client";

export default function ContactFooter() {
    return (
        <footer id="contact" className="footer">
            <div className="container">
                <div className="contact-content">
                    <h2>Let's work together on your next project</h2>
                    <a href="mailto:well0711200@gmail.com" className="email-link">well0711200@gmail.com</a>
                </div>
                <div className="footer-social">
                    <a href="https://wa.me/085161507114" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><i className="fab fa-whatsapp"></i></a>
                    <a href="https://www.linkedin.com/in/welli-" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
                    <a href="https://www.instagram.com/_well07/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
                    <a href="https://github.com/Creastein" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><i className="fab fa-github"></i></a>
                </div>
                <div className="copyright">
                    <p>&copy; 2025 WELLI. All rights reserved. | Powered by Creativity.</p>
                </div>
            </div>
        </footer>
    );
}
