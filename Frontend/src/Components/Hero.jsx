function Hero() {
    return ( 
        <>
            {/* Hero Section */}
            <section className="hero_section py-5 bg-light" id="Home">
                <div className="container">
                    <div className="row align-items-center">
                        {/* Left Text Column */}
                        <div className="col-lg-6 order-lg-1 order-2">
                            <div className="hero_text pe-lg-4">
                                <h3 className="text-muted mb-3">Hello, It's Me</h3>
                                <h1 className="display-4 fw-bold mb-3">
                                    <span className="text-primary">Supriyo Ghoshal</span>
                                </h1>
                                <h2 className="h3 mb-4">
                                    And I'm a <span className="text-primary">Full-Stack Web Developer</span>
                                </h2>
                                <p className="lead mb-4">
                                    I'm an aspiring Full-Stack Web Developer, exploring HTML, CSS, JS, React.js, Java, and Spring Boot. Eager to build creative, high-performance websites.
                                </p>
                                
                                <div className="hero_icons mb-4">
                                    <a href="#" className="text-dark me-3 fs-4"><i className="bx bxl-facebook-circle"></i></a>
                                    <a href="#" className="text-dark me-3 fs-4"><i className="bx bxl-twitter"></i></a>
                                    <a href="https://www.linkedin.com/in/supriyo-ghoshal-b5551028b/" className="text-dark me-3 fs-4"><i className="bx bxl-linkedin"></i></a>
                                    <a href="https://instagram.com/supriyo_ghoshal_" className="text-dark me-3 fs-4"><i className="bx bxl-instagram"></i></a>
                                </div>
                                
                                <div className="hero_button">
                                    <a href="/home/My_Portfolio/about" className="btn btn-primary btn-lg px-4 me-2">
                                        More About Me
                                    </a>
                                    <a href="#Contact" className="btn btn-outline-primary btn-lg px-4">
                                        Contact Me
                                    </a>
                                </div>
                            </div>
                        </div>
                        
                        {/* Right Image Column */}
                        <div className="col-lg-6 order-lg-2 order-1 mb-4 mb-lg-0">
                            <div className="hero_image text-center">
                                <img 
                                    src="https://img.freepik.com/free-photo/medium-shot-man-with-paperwork_23-2150379175.jpg" 
                                    alt="Supriyo Image" 
                                    className="img-fluid rounded-circle shadow-lg"
                                    style={{maxHeight: '500px', border: '5px solid #fff'}}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="about_me py-5" id="About">
                <div className="container">
                    <h2 className="section_title text-center mb-5">
                        <span className="border-bottom border-3 border-primary pb-2">About Me</span>
                    </h2>
                    
                    <div className="row align-items-center">
                        {/* Left: Image */}
                        <div className="col-lg-5 mb-4 mb-lg-0">
                            <div className="about_img text-center">
                                <img 
                                    src="https://img.freepik.com/free-photo/business-man-front-office-building_23-2148018586.jpg" 
                                    alt="Supriyo Ghoshal" 
                                    className="img-fluid rounded shadow-lg"
                                    style={{maxHeight: '500px'}}
                                />
                            </div>
                        </div>
                        
                        {/* Right: Text */}
                        <div className="col-lg-7">
                            <div className="about_content ps-lg-4">
                                <h2 className="h1 mb-4">
                                    Hello! I'm <span className="text-primary">Supriyo Ghoshal</span>
                                </h2>
                                <p className="lead mb-4">
                                    I'm a passionate learner from the University of Kalyani, currently pursuing Information Technology. I'm focused on building beautiful, responsive, and high-performing web applications using technologies like HTML, CSS, JavaScript, React.js, Java, and SpringBoot.
                                </p>
                                <p className="mb-4">
                                    I believe in learning by doing, and my goal is to become a full-stack developer who builds things that matter. I love solving problems, exploring new tools, and collaborating with creative minds.
                                </p>
                                
                                <div className="about_buttons mt-4">
                                    <a href="" className="btn btn-primary btn-lg px-4 me-3 mb-3 mb-sm-0" download>
                                        <i className="bx bx-download me-2"></i>Download Resume
                                    </a>
                                    <a href="https://www.linkedin.com/in/supriyo-ghoshal-b5551028b/" className="btn btn-outline-primary btn-lg px-4">
                                        <i className="bx bx-link-external me-2"></i>Let's Connect
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Hero;