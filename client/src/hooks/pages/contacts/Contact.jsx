import React from 'react';
import './Contact.css'; // Import the external CSS file

const Contact = () => {
    return (
        <div className="contact-container">
            <h2>Contact Us</h2>

            <div className="contact-details">
                <div className="contact-item">
                    <h3>Phone</h3>
                    <p>
                        <a href="tel:+880123456789" className="contact-link">
                            +880 123 456 789
                        </a>
                    </p>
                </div>

                <div className="contact-item">
                    <h3>Email</h3>
                    <p>
                        <a href="mailto:support@ecommercebd.com" className="contact-link">
                            support@ecommercebd.com
                        </a>
                    </p>
                </div>
            </div>

            <div className="map-container">
                <h3>Our Location</h3>
                <iframe
                    title="Our Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.917065667253!2d90.38816221498178!3d23.750846984589465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b85b6641b83b%3A0x8b004e89c59d8a63!2sDhaka%2C%20Bangladesh!5e0!3m2!1sen!2sus!4v1622589044679!5m2!1sen!2sus"
                    width="100%"
                    height="400"
                    className="map"
                    allowFullScreen=""
                    loading="lazy"
                ></iframe>
            </div>
        </div>
    );
};

export default Contact;
