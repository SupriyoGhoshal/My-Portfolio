import "./project.css";

function Projects() {
    const projects = [
        {
            title: "Airbnb Clone",
            image: "https://appticz.com/admin/images/ogImage/ogImage1684132921447.png",
            description: "Full-stack clone with booking functionality and interactive maps",
            link: "#",
            bgColor: "bg-dark",
            textColor: "text-light"
        },
        {
            title: "Portfolio",
            image: "https://images.template.net/120192/3d-modeling-portfolio-presentation-template-dgpnc.jpg",
            description: "Elegant personal showcase with smooth animations",
            link: "#",
            bgColor: "bg-gradient-dark",
            textColor: "text-light"
        },
        {
            title: "Coffee Site",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpYZ342fZ1IsofnFvpQ_u0W44BwS0SZL24KQ&s",
            description: "Minimalist e-commerce with product customization",
            link: "#",
            bgColor: "bg-gold",
            textColor: "text-dark"
        },
        {
            title: "My Clock",
            image: "https://media.istockphoto.com/id/852513436/photo/clock-on-brick-wall.jpg?s=612x612&w=0&k=20&c=0NYz9_8BDBNKAkOwdKnWDr1vqvbQTXAQJcGIR3Vj084=",
            description: "Interactive timepiece with multiple timezone support",
            link: "#",
            bgColor: "bg-slate",
            textColor: "text-light"
        },
        {
            title: "Simon Says",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAYC5ELcypMSxCl_0Z72QTMnhJz7rwMcol9Q&s",
            description: "Game with progressive difficulty and score tracking",
            link: "#",
            bgColor: "bg-burgundy",
            textColor: "text-light"
        },
        {
            title: "Coming Soon",
            image: null,
            description: "Your idea could be my next premium project",
            link: "#Contact",
            bgColor: "bg-gradient-dark",
            textColor: "text-light",
            isPlaceholder: true
        }
    ];

    return (
        <section className="projects py-5" id="Projects">
            <div className="container">
                <h2 className="text-center mb-5">
                    <span className="display-4 fw-bold text-gradient">
                        <i className="bx bx-diamond me-3"></i>Premium Projects
                        <i className="bx bx-diamond ms-3"></i>
                    </span>
                </h2>
                
                <div className="row g-4">
                    {projects.map((project, index) => (
                        <div key={index} className="col-md-6 col-lg-4">
                            <div className="flip-card h-100">
                                <div className="flip-inner h-100">
                                    <div className="flip-front card h-100 border-0 shadow-lg overflow-hidden">
                                        {project.isPlaceholder ? (
                                            <div className="card-body d-flex flex-column align-items-center justify-content-center p-5">
                                                <i className="bx bx-plus-circle display-3 text-light mb-4"></i>
                                                <h3 className="card-title text-light">{project.title}</h3>
                                            </div>
                                        ) : (
                                            <>
                                                <div className="image-container">
                                                    <img 
                                                        src={project.image} 
                                                        className="card-img-top" 
                                                        alt={project.title}
                                                    />
                                                    <div className="overlay"></div>
                                                </div>
                                                <div className="card-body">
                                                    <h3 className="card-title text-center fw-bold">{project.title}</h3>
                                                </div>
                                            </>
                                        )}
                                    </div>
                                    <div className={`flip-back card ${project.bgColor} ${project.textColor} h-100 border-0`}>
                                        <div className="card-body d-flex flex-column justify-content-center p-4">
                                            <h4 className="card-title text-center mb-3">{project.title}</h4>
                                            <p className="card-text text-center mb-4">{project.description}</p>
                                            <a 
                                                href={project.link} 
                                                className={`btn ${project.textColor === 'text-dark' ? 'btn-dark' : 'btn-outline-light'} align-self-center mt-auto`}
                                            >
                                                {project.isPlaceholder ? 'Suggest Idea' : 'View Details'}
                                                <i className="bx bx-chevron-right ms-2"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;