import React from "react";

import "./ProjectPosts.scss"

import ProjectCard from "../../../Pages/Home/HomeComponents/RecentProjects/ProjectCard/ProjectCard.js"

import { Link } from "react-router-dom";

import Profile from "../../../Resources/Pictures/Profile.png"
import Perlin from "../../../Resources/Pictures/Projects/1dnoisetest.png"
import Bench from "../../../Resources/Pictures/Projects/benchcalc.png"
import JamieKuesel from "../../../Resources/Pictures/Projects/JamieKuesel.png"



const ProjectPosts = () => {

    return (
        <div className="project__posts__holder">
            <ProjectCard title="JamieKuesel.com" description="description" image={JamieKuesel} link="/projects/this-site"/>
            <ProjectCard title="Exploring 3D Tik-Tac-Toe with MiniMax" description="description" image={Profile} />
            <ProjectCard title="1D Perlin Noise" description="description" image={Perlin} link="/projects/perlin-noise"/>
            <ProjectCard title="BenchCalculator.com" description="description" image={Bench} link="/projects/benchcalculator" />
        </div>
    )
}

export default ProjectPosts;