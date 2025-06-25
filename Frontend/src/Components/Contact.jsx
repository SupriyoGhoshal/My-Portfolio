function Contact() {
    return (
        <>
            {/* Contact Section */}
            <section className="contact py-5 bg-light" id="Contact">
                <div className="container">
                    <h2 className="text-center mb-5">
                        <span className="display-5 fw-bold border-bottom border-3 border-primary pb-2">
                            <i className="bx bx-envelope me-2"></i>Contact Me
                        </span>
                    </h2>
                    
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <form className="contact-form">
                                <div className="row g-3 mb-4">
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input 
                                                type="text" 
                                                className="form-control" 
                                                id="fullName" 
                                                placeholder="Full Name"
                                                required
                                            />
                                            <label htmlFor="fullName">Full Name*</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input 
                                                type="email" 
                                                className="form-control" 
                                                id="email" 
                                                placeholder="Email Address"
                                                required
                                            />
                                            <label htmlFor="email">Email Address*</label>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="row g-3 mb-4">
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input 
                                                type="tel" 
                                                className="form-control" 
                                                id="phone" 
                                                placeholder="Mobile Number"
                                                required
                                            />
                                            <label htmlFor="phone">Mobile Number*</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input 
                                                type="text" 
                                                className="form-control" 
                                                id="subject" 
                                                placeholder="Email Subject"
                                            />
                                            <label htmlFor="subject">Email Subject</label>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="mb-4">
                                    <div className="form-floating">
                                        <textarea 
                                            className="form-control" 
                                            placeholder="Send message here" 
                                            id="message" 
                                            style={{height: '150px'}}
                                            required
                                        ></textarea>
                                        <label htmlFor="message">Your Message*</label>
                                    </div>
                                </div>
                                
                                <div className="text-center">
                                    <button type="submit" className="btn btn-primary btn-lg px-5">
                                        Send Message <i className="bx bx-send ms-2"></i>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    
                    {/* Additional Contact Info */}
                    <div className="row mt-5 pt-4">
                        <div className="col-md-4 mb-4 mb-md-0">
                            <div className="d-flex align-items-center justify-content-center">
                                <div className="bg-primary rounded-circle p-3 me-3">
                                    <i className="bx bx-phone text-white fs-4"></i>
                                </div>
                                <div>
                                    <h5 className="mb-1">Call Me</h5>
                                    <p className="mb-0">+91 6294769803</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-md-4 mb-4 mb-md-0">
                            <div className="d-flex align-items-center justify-content-center">
                                <div className="bg-primary rounded-circle p-3 me-3">
                                    <i className="bx bx-envelope text-white fs-4"></i>
                                </div>
                                <div>
                                    <h5 className="mb-1">Email Me</h5>
                                    <p className="mb-0">your.email@example.com</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-md-4">
                            <div className="d-flex align-items-center justify-content-center">
                                <div className="bg-primary rounded-circle p-3 me-3">
                                    <i className="bx bx-map text-white fs-4"></i>
                                </div>
                                <div>
                                    <h5 className="mb-1">Location</h5>
                                    <p className="mb-0">Central Park, Kalyani</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Contact;