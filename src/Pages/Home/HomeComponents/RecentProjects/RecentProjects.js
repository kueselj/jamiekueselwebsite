import React from "react";
import "./RecentProjects.scss"
import ProjectCard from "./ProjectCard/ProjectCard";
import Profile from "../../../../Resources/Pictures/Profile.png"
import Perlin from "../../../../Resources/Pictures/Projects/1dnoisetest.png"
import Bench from "../../../../Resources/Pictures/Projects/benchcalc.png"

import { Link } from "react-router-dom";

const RecentProjects = () => {

    return (
        <div className="recent__projects__wrapper">
            <div className = "recent__projects__title">
                Recent Projects
            </div>
            <div className="recent__projects__holder"> 
                <ProjectCard title="Exploring 3D Tik-Tac-Toe with MiniMax" description="description" image={Profile}/>
                <ProjectCard title="1D Perlin Noise" description="description" image={Perlin} link ="/projects/perlin-noise"/>
                <ProjectCard title="BenchCalculator.com" description="description" image={Bench} link ="/projects/benchcalculator"/>
            </div>
            <Link to="/projects">
                View All Projects
            </Link>
        </div>
    )
}

export default RecentProjects;