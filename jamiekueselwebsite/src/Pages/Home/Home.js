import React from "react";

import Navbar from "./HomeComponents/Navbar/Navbar";
import Bio from "./HomeComponents/Bio/Bio";
import RecentProjects from "./HomeComponents/RecentProjects/RecentProjects";
import Footer from "./HomeComponents/Footer/Footer";

import "./Home.css"


const Home = () => {

    return (
        <div className="home__wrapper">
            <Bio/>
            <RecentProjects/>
        </div>
    )
}

export default Home;