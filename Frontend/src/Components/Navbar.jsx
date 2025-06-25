function Navbar() {
    return ( 
        <>
            <header className="header sticky-top" id="head">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container">
                        <div className="nav_logo navbar-brand d-flex align-items-center">
                            <a href="#" className="d-flex align-items-center text-decoration-none">
                                <img 
                                    src="https://tse2.mm.bing.net/th?id=OIP.riKUyhffLze9ijYrYV4cBgHaHa&pid=Api&P=0&h=180" 
                                    alt="Logo" 
                                    className="rounded-circle me-2"
                                    style={{width: '40px', height: '40px'}}
                                />
                                <h2 className="m-0 text-white">Portfolio</h2>
                            </a>
                        </div>
                        
                        <button 
                            className="navbar-toggler" 
                            type="button" 
                            data-bs-toggle="collapse" 
                            data-bs-target="#navbarNav"
                            aria-controls="navbarNav" 
                            aria-expanded="false" 
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/home/My_Portfolio">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/home/My_Portfolio/about">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/home/My_Portfolio/_skill">Skills</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/home/My_Portfolio/see_PROJECTS">Projects</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link btn btn-primary text-white ms-lg-2 mt-2 mt-lg-0" 
                                       href="/home/My_Portfolio/_Contact_ME">Contact Me</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
     );
}

export default Navbar;