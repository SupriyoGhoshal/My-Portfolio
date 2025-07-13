import "./skills.css";

function Skills() {
    const skills = [
        { name: "HTML", icon: "bxl-html5", percentage: 90, color: "danger" },
        { name: "CSS", icon: "bxl-css3", percentage: 85, color: "primary" },
        { name: "JavaScript", icon: "bxl-javascript", percentage: 75, color: "warning" },
        { name: "React.js", icon: "bxl-react", percentage: 80, color: "info" },
        { name: "Java", icon: "bxl-java", percentage: 80, color: "success" },
        { name: "Express.js", icon: "bx-code", percentage: 90, color: "success" },
        { name: "MongoDB", icon: "bx-data", percentage: 75, color: "success" },
        { name: "Bootstrap", icon: "bxl-bootstrap", percentage: 80, color: "purple" },
        { name: "Tailwind", icon: "bx-wind", percentage: 60, color: "teal" },
        { name: "Redux", icon: "bx-redux", percentage: 70, color: "violet" },
        { name: "Node.js", icon: "bxl-nodejs", percentage: 75, color: "success" },
        { name: "Git", icon: "bxl-git", percentage: 85, color: "orange" }
    ];

    const getProgressBarColor = (color) => {
        const colors = {
            danger: "bg-danger",
            primary: "bg-primary",
            warning: "bg-warning",
            info: "bg-info",
            success: "bg-success",
            purple: "bg-purple",
            teal: "bg-teal",
            violet: "bg-violet",
            orange: "bg-orange"
        };
        return colors[color] || "bg-primary";
    };

    return (
        <section className="skills-section" id="Skills">
            <div className="container">
                <h2 className="section-title">
                    <i className="bx bx-rocket"></i> My Skills
                </h2>
                
                <div className="skills-grid">
                    {skills.map((skill, index) => (
                        <div className="skill-card" key={index}>
                            <div className="skill-header">
                                <div className="skill-icon">
                                    <i className={`bx ${skill.icon} text-${skill.color}`}></i>
                                </div>
                                <div className="skill-info">
                                    <h3>{skill.name}</h3>
                                    <span>{skill.percentage}%</span>
                                </div>
                            </div>
                            <div className="progress-container">
                                <div 
                                    className={`progress-bar ${getProgressBarColor(skill.color)}`}
                                    style={{ width: `${skill.percentage}%` }}
                                    aria-valuenow={skill.percentage}
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                >
                                    <div className="progress-animation"></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;