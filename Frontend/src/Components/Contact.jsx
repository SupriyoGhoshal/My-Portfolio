import { useState } from "react"
import axios from "axios"
import "./contact.css"

function Contact() {
    const [submit, setSubmit] = useState(false);
    const [name , setName] = useState("");
    const [email , setEmail] = useState("");
    const [number , setNumber] = useState("");
    const [subject , setSubject] = useState("");
    const [message , setMessage] = useState("");

    const handleContact = async (e) => {
        e.preventDefault(); // prevent page reload

        try {
            const res = await axios.post("/send-message", {
                name,
                email,
                number,
                subject,
                message
            });

            console.log("Message sent:", res.data);
            setSubmit(true); // optional flag

            // Clear form
            setName("");
            setEmail("");
            setNumber("");
            setSubject("");
            setMessage("");

            alert("Message sent successfully!");
        } catch (err) {
            console.error("Error sending message:", err);
            alert("Something went wrong. Please try again.");
        }
    };
    
    return (
        <>
            {/* Contact Section */}
            <section className="contact-section" id="Contact">
                <div className="container">
                    <h2 className="contact-title">
                        <i className="bx bx-envelope"></i> Contact Me
                    </h2>
                    
                    <div className="contact-form-container">
                        <form onSubmit={handleContact} className="contact-form">
                            {/* Form fields remain the same as before */}
                            <div className="form-row">
                                <div className="form-group">
                                    <div className="floating-input">
                                        <input 
                                            type="text" 
                                            id="fullName" 
                                            placeholder="Full Name"
                                            required
                                        />
                                        <label htmlFor="fullName">Full Name*</label>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="floating-input">
                                        <input 
                                            type="email" 
                                            id="email" 
                                            placeholder="Email Address"
                                            required
                                        />
                                        <label htmlFor="email">Email Address*</label>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="form-row">
                                <div className="form-group">
                                    <div className="floating-input">
                                        <input 
                                            type="tel" 
                                            id="phone" 
                                            placeholder="Mobile Number"
                                            required
                                        />
                                        <label htmlFor="phone">Mobile Number*</label>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="floating-input">
                                        <input 
                                            type="text" 
                                            id="subject" 
                                            placeholder="Email Subject"
                                        />
                                        <label htmlFor="subject">Email Subject</label>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="form-group">
                                <div className="floating-input">
                                    <textarea 
                                        id="message" 
                                        placeholder="Your Message"
                                        required
                                    ></textarea>
                                    <label htmlFor="message">Your Message*</label>
                                </div>
                            </div>
                            
                            <div className="submit-button">
                                <button type="submit">
                                    Send Message <i className="bx bx-send"></i>
                                </button>
                            </div>
                        </form>
                    </div>
                    
                    {/* Contact Info with Map */}
                    <div className="contact-info-wrapper">
                        <div className="contact-info">
                            <div className="info-card">
                                <div className="info-icon">
                                    <i className="bx bx-phone"></i>
                                </div>
                                <div className="info-content">
                                    <h5>Call Me</h5>
                                    <p>+91 6294769803</p>
                                </div>
                            </div>
                            
                            <div className="info-card">
                                <div className="info-icon">
                                    <i className="bx bx-envelope"></i>
                                </div>
                                <div className="info-content">
                                    <h5>Email Me</h5>
                                    <p>your.email@example.com</p>
                                </div>
                            </div>
                            
                            <div className="info-card">
                                <div className="info-icon">
                                    <i className="bx bx-map"></i>
                                </div>
                                <div className="info-content">
                                    <h5>Location</h5>
                                    <p>Central Park, Kalyani, West Bengal</p>
                                </div>
                            </div>
                        </div>
                        
                        {/* Embedded Map */}
                        <div className="map-container">
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3661.622220783071!2d88.43274231543778!3d23.426596984753055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f91f3a6a8e4e3b%3A0x8a8a8a8a8a8a8a8a!2sCentral%20Park%2C%20Kalyani%2C%20West%20Bengal%2C%20India!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                                width="100%"
                                height="400"
                                style={{border:0}}
                                allowFullScreen=""
                                loading="lazy"
                                title="Central Park Kalyani Location"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Contact;