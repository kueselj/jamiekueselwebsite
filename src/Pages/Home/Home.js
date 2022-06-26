import React from "react";

import Bio from "./HomeComponents/Bio/Bio";
import Skills from "./HomeComponents/Skills/Skills";
import UnderConstruction from "./HomeComponents/UnderConstruction/UnderConstruction";
import RecentProjects from "./HomeComponents/RecentProjects/RecentProjects";

import "./Home.scss"


const Home = () => {

    return (
        <div className="home__wrapper">
            <UnderConstruction/>
            <Bio/>
            <Skills/>
            <RecentProjects/>
        </div>
    )
}

export default Home;