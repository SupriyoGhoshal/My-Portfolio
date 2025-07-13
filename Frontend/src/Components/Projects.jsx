import "./project.css"
import wonderlustImg from "../assets/wonderlust.png";


function Projects() {
  const projects = [
    {
      title: "Wonderlust",
      image: wonderlustImg,
      description: "This is a Full-Stack Project",
      link: "#",
      actionText: "View Project"
    },
    {
      title: "Portfolio",
      image: "https://images.template.net/120192/3d-modeling-portfolio-presentation-template-dgpnc.jpg",
      description: "A personal portfolio website showcasing my skills and work.",
      link: "#",
      actionText: "See Here"
    },
    {
      title: "Coffee Site",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpYZ342fZ1IsofnFvpQ_u0W44BwS0SZL24KQ&s",
      description: "A modern landing page for a fictional coffee brand.",
      link: "https://rainbow-capybara-88483c.netlify.app/",
      actionText: "Explore it"
    },
    {
      title: "Weather Predictor",
      image: "https://jumpgrowth.com/wp-content/uploads/2020/05/The-Best-Weather-Forecast-App.jpg",
      description: "Live Weather condition of a place.",
      link: "#",
      actionText: "See Weather condition"
    },
    {
      title: "Simon Says",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAYC5ELcypMSxCl_0Z72QTMnhJz7rwMcol9Q&s",
      description: "Classic memory game using HTML, CSS, and JavaScript.",
      link: "https://68590441579051c0a2a29f8e--monumental-nougat-8af938.netlify.app/ ",
      actionText: "Play now"
    }
  ];

  return (
    <section className="project" id="Projects">
      <h2>✨ My Creative Projects ✨</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div className="flip-card" key={index}>
            <div className="flip-inner">
              <div className="flip-front">
                <img src={project.image} alt={`${project.title} Project`} />
                <h3>{project.title}</h3>
              </div>
              <div className="flip-back">
                <p>{project.description}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  {project.actionText}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;