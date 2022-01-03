import React from "react";

import Bio from "./HomeComponents/Bio/Bio";
import Skills from "./HomeComponents/Skills/Skills";
import RecentProjects from "./HomeComponents/RecentProjects/RecentProjects";

import "./Home.scss"

const Home = () => {

    return (
        <div className="home__wrapper">
            <Bio/>
            <Skills/>
            <RecentProjects/>
        </div>
    )
}

export default Home;