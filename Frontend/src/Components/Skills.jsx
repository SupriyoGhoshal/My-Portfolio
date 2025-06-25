import "./skills.css"

function Skills() {
    return ( 
        <>
            {/* Skills Section */}
            <section className="skills py-5 bg-light" id="Skills">
                <div className="container">
                    <h2 className="text-center mb-5">
                        <span className="display-5 fw-bold">
                            <i className="bx bx-rocket me-2"></i>My Skills
                        </span>
                    </h2>
                    
                    <div className="row g-4">
                        {/* HTML Skill */}
                        <div className="col-md-6 col-lg-4">
                            <div className="skill-card p-4 bg-white rounded shadow-sm">
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                    <h3 className="mb-0">
                                        <i className="bx bxl-html5 text-danger me-2"></i>HTML
                                    </h3>
                                    <span className="fw-bold">90%</span>
                                </div>
                                <div className="progress" style={{height: '10px'}}>
                                    <div 
                                        className="progress-bar bg-danger" 
                                        role="progressbar" 
                                        style={{width: '90%'}}
                                        aria-valuenow="90" 
                                        aria-valuemin="0" 
                                        aria-valuemax="100"
                                    ></div>
                                </div>
                            </div>
                        </div>
                        
                        {/* CSS Skill */}
                        <div className="col-md-6 col-lg-4">
                            <div className="skill-card p-4 bg-white rounded shadow-sm">
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                    <h3 className="mb-0">
                                        <i className="bx bxl-css3 text-primary me-2"></i>CSS
                                    </h3>
                                    <span className="fw-bold">85%</span>
                                </div>
                                <div className="progress" style={{height: '10px'}}>
                                    <div 
                                        className="progress-bar bg-primary" 
                                        role="progressbar" 
                                        style={{width: '85%'}}
                                        aria-valuenow="85" 
                                        aria-valuemin="0" 
                                        aria-valuemax="100"
                                    ></div>
                                </div>
                            </div>
                        </div>
                        
                        {/* JavaScript Skill */}
                        <div className="col-md-6 col-lg-4">
                            <div className="skill-card p-4 bg-white rounded shadow-sm">
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                    <h3 className="mb-0">
                                        <i className="bx bxl-javascript text-warning me-2"></i>JavaScript
                                    </h3>
                                    <span className="fw-bold">75%</span>
                                </div>
                                <div className="progress" style={{height: '10px'}}>
                                    <div 
                                        className="progress-bar bg-warning" 
                                        role="progressbar" 
                                        style={{width: '75%'}}
                                        aria-valuenow="75" 
                                        aria-valuemin="0" 
                                        aria-valuemax="100"
                                    ></div>
                                </div>
                            </div>
                        </div>
                        
                        {/* React.js Skill */}
                        <div className="col-md-6 col-lg-4">
                            <div className="skill-card p-4 bg-white rounded shadow-sm">
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                    <h3 className="mb-0">
                                        <i className="bx bxl-react text-info me-2"></i>React.js
                                    </h3>
                                    <span className="fw-bold">70%</span>
                                </div>
                                <div className="progress" style={{height: '10px'}}>
                                    <div 
                                        className="progress-bar bg-info" 
                                        role="progressbar" 
                                        style={{width: '70%'}}
                                        aria-valuenow="70" 
                                        aria-valuemin="0" 
                                        aria-valuemax="100"
                                    ></div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Java Skill */}
                        <div className="col-md-6 col-lg-4">
                            <div className="skill-card p-4 bg-white rounded shadow-sm">
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                    <h3 className="mb-0">
                                        <i className="bx bxl-java text-success me-2"></i>Java
                                    </h3>
                                    <span className="fw-bold">80%</span>
                                </div>
                                <div className="progress" style={{height: '10px'}}>
                                    <div 
                                        className="progress-bar bg-success" 
                                        role="progressbar" 
                                        style={{width: '80%'}}
                                        aria-valuenow="80" 
                                        aria-valuemin="0" 
                                        aria-valuemax="100"
                                    ></div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Spring Boot Skill */}
                        <div className="col-md-6 col-lg-4">
                            <div className="skill-card p-4 bg-white rounded shadow-sm">
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                    <h3 className="mb-0">
                                        <i className="bx bxl-spring-boot text-success me-2"></i>Spring Boot
                                    </h3>
                                    <span className="fw-bold">60%</span>
                                </div>
                                <div className="progress" style={{height: '10px'}}>
                                    <div 
                                        className="progress-bar bg-success" 
                                        role="progressbar" 
                                        style={{width: '60%'}}
                                        aria-valuenow="60" 
                                        aria-valuemin="0" 
                                        aria-valuemax="100"
                                    ></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Skills;