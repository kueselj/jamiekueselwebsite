import React from "react";
import "./Bio.scss"

import Profile from "../../../../Resources/Pictures/Profile.png"

import { Link } from "react-router-dom";

const Bio = () => {

    return (
        <div className="bio__wrapper">
            <Link to="/comingsoon" className="bio__picture__wrapper">
                <img src={Profile} className="bio__picture"></img>
            </Link>
            <div className="bio__content">
                Hi! My name is Jamie Kuesel. 
                I'm a fourth year Computer Science student at Northeastern University with a concentration in Artificial Intelligence.
                I'm also interested in Robotics, Computer Vision, Noise Generation, and Web Development.
            </div>
        </div>
    )
}

export default Bio;