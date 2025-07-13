import "./hero.css"
function Hero() {
    return ( 
        <>
            {/* Hero Section */}
            <section className="hero-section" id="Home">
                <div className="container">
                    <div className="hero-content">
                        {/* Left Text Column */}
                        <div className="hero-text">
                            <h3 className="hero-subtitle">Hello, It's Me</h3>
                            <h1 className="hero-title">
                                <span className="text-gradient">Supriyo Ghoshal</span>
                            </h1>
                            <h2 className="hero-description">
                                And I'm a <span className="text-gradient">Full-Stack Web Developer</span>
                            </h2>
                            <p className="hero-summary">
                                I'm an aspiring Full-Stack Web Developer, exploring HTML, CSS, JS, React.js, Java, and Spring Boot. Eager to build creative, high-performance websites.
                            </p>
                            
                            <div className="social-links">
                                <a href="#" className="social-icon"><i className="bx bxl-facebook-circle"></i></a>
                                <a href="#" className="social-icon"><i className="bx bxl-twitter"></i></a>
                                <a href="https://www.linkedin.com/in/supriyo-ghoshal-b5551028b/" className="social-icon"><i className="bx bxl-linkedin"></i></a>
                                <a href="https://instagram.com/supriyo_ghoshal_" className="social-icon"><i className="bx bxl-instagram"></i></a>
                            </div>
                            
                            <div className="hero-cta">
                                <a href="/home/My_Portfolio/about" className="btn-primary">
                                    More About Me
                                </a>
                                <a href="#Contact" className="btn-secondary">
                                    Contact Me
                                </a>
                            </div>
                        </div>
                        
                        {/* Right Image Column */}
                        <div className="hero-image">
                            <div className="image-wrapper">
                                <img 
                                    src="https://img.freepik.com/free-photo/medium-shot-man-with-paperwork_23-2150379175.jpg" 
                                    alt="Supriyo Ghoshal" 
                                    className="profile-image"
                                />
                                <div className="image-decoration"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="about-section" id="About">
                <div className="container">
                    <h2 className="section-title">
                        <span>About Me</span>
                    </h2>
                    
                    <div className="about-content">
                        {/* Left: Image */}
                        <div className="about-image">
                            <div className="image-frame">
                                <img 
                                    src="https://img.freepik.com/free-photo/business-man-front-office-building_23-2148018586.jpg" 
                                    alt="Supriyo Ghoshal" 
                                    className="about-profile"
                                />
                            </div>
                        </div>
                        
                        {/* Right: Text */}
                        <div className="about-text">
                            <h2 className="about-heading">
                                Hello! I'm <span className="text-gradient">Supriyo Ghoshal</span>
                            </h2>
                            <p className="about-paragraph">
                                I'm a passionate learner from the University of Kalyani, currently pursuing Information Technology. I'm focused on building beautiful, responsive, and high-performing web applications using technologies like HTML, CSS, JavaScript, React.js, Java, and SpringBoot.
                            </p>
                            <p className="about-paragraph">
                                I believe in learning by doing, and my goal is to become a full-stack developer who builds things that matter. I love solving problems, exploring new tools, and collaborating with creative minds.
                            </p>
                            
                            <div className="about-buttons">
                                <a href="" className="btn-primary" download>
                                    <i className="bx bx-download"></i>Download Resume
                                </a>
                                <a href="https://www.linkedin.com/in/supriyo-ghoshal-b5551028b/" className="btn-secondary">
                                    <i className="bx bx-link-external"></i>Let's Connect
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Hero;