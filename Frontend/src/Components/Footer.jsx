function Footer() {
    return ( 
        <>
            {/* Footer Section */}
            <footer className="bg-dark text-white pt-5 pb-4">
                <div className="container">
                    <div className="row">
                        {/* Footer Logo */}
                        <div className="col-md-3 mb-4 mb-md-0">
                            <div className="footer_logo d-flex flex-column align-items-center align-items-md-start">
                                <a href="#" className="text-decoration-none text-white">
                                    <img 
                                        src="https://img.freepik.com/free-photo/handsome-young-man-using-his-digital-tablet-isolated-white_1301-4938.jpg" 
                                        alt="Profile" 
                                        className="rounded-circle mb-3"
                                        style={{width: '100px', height: '100px', objectFit: 'cover'}}
                                    />
                                    <h2 className="h4 text-center text-md-start">
                                        <a href="/home/My_portfolio" className="text-decoration-none text-white">Passionate Supriyo</a>
                                    </h2>
                                </a>
                            </div>
                        </div>

                        {/* Useful Links */}
                        <div className="col-md-3 mb-4 mb-md-0">
                            <div className="useful_links">
                                <h3 className="h5 mb-3 border-bottom pb-2">Useful Links</h3>
                                <ul className="list-unstyled">
                                    <li className="mb-2"><a href="/home/My_portfolio/about" className="text-decoration-none text-white-50 hover-white">About</a></li>
                                    <li className="mb-2"><a href="/home/My_Portfolio/_skill" className="text-decoration-none text-white-50 hover-white">Skills</a></li>
                                    <li className="mb-2"><a href="/home/My_Portfolio/see_PROJECTS" className="text-decoration-none text-white-50 hover-white">Projects</a></li>
                                    <li><a href="/home/My_Portfolio/_Contact_ME" className="text-decoration-none text-white-50 hover-white">Contact Me</a></li>
                                </ul>
                            </div>
                        </div>

                        {/* Contact Me */}
                        <div className="col-md-3 mb-4 mb-md-0">
                            <div className="contact_me">
                                <h3 className="h5 mb-3 border-bottom pb-2">Contact Me</h3>
                                <ul className="list-unstyled">
                                    <li className="mb-3 d-flex align-items-center">
                                        <a href="/home/My_Portfolio/get-location" className="text-decoration-none text-white-50 hover-white d-flex align-items-center">
                                            <i className="bx bx-current-location me-2"></i>
                                            <span>Central Park, Kalyani</span>
                                        </a>
                                    </li>
                                    <li className="d-flex align-items-center">
                                        <i className="bx bx-phone-call me-2"></i>
                                        <span className="text-white-50">6294769803</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Follow Me */}
                        <div className="col-md-3">
                            <div className="follow_me">
                                <h3 className="h5 mb-3 border-bottom pb-2">Follow Me</h3>
                                <ul className="list-unstyled d-flex flex-wrap gap-3">
                                    <li>
                                        <a href="#" className="text-white fs-4">
                                            <i className="bx bxl-facebook-circle"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-white fs-4">
                                            <i className="bx bxl-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://instagram.com/supriyo_ghoshal_" className="text-white fs-4">
                                            <i className="bx bxl-instagram"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/in/supriyo-ghoshal-b5551028b/" className="text-white fs-4">
                                            <i className="bx bxl-linkedin"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Copyright */}
                    <div className="row mt-4">
                        <div className="col-12 text-center text-white-50">
                            <p className="mb-0">&copy; {new Date().getFullYear()} Passionate Supriyo. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;