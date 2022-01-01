import React from "react";

import { Outlet, Link } from "react-router-dom";

import "./ThisSite.scss"

import JamieKuesel from "../../../../Resources/Pictures/Projects/JamieKuesel.png"

const ThisSite = () => {

    return (
        <div className="bench__calculator__wrapper">
            <div className="title">
                <a className="title" href="http://www.jamiekuesel.com/" target="_blank">JamieKuesel.com</a>
            </div>
            <div className="content">
            Oh the joy that is this site. This site has, embarrassingly, taken a very long time to develop and I have gone through many iterations. I may have bit off more than I could chew when initially developing it. I had too many ideas and too many things I wanted to do before I even had solid experience with HTML and CSS. This resulted in many messy, gross looking prototypes. Unfortunately there is still a little bit of that here. However, I’ve learned to really dissect a site as much as possible. Keeping as many components separate helps with organization greatly. There is still much to do, but I have a very solid foundation for adding new projects to show off, and any new features I wish to explore. Luckily, I can now focus on doing some projects in some other spaces. I hope you enjoy the site! This site is built on ReactJS with SCSS style sheets. 
                <a className="link" href="https://github.com/kueselj/jamiekueselwebsite" target="_blank">
                    <img className="image" src={JamieKuesel} />
                    View Source
                </a>

            </div>
        </div>
    )
}

export default ThisSite;