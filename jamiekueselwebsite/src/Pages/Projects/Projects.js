import React from "react";

import "./Projects.scss"

import { Outlet, Link} from "react-router-dom";

const Projects = () => {

    return (
        <div className="projects__wrapper">
            <Link to="/projects" className="link">
                Projects
            </Link>
            <div className="content">
                <Outlet/>
            </div>
            
        </div>
    )
}

export default Projects;