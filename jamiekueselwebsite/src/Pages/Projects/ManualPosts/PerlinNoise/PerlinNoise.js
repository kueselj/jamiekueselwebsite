import React from "react";

import { Outlet, Link} from "react-router-dom";


import perlin from "../../../../Resources/Pictures/Projects/1dnoisetest.png"

const PerlinNoise = () => {

    return (
        <div className="bench__calculator__wrapper">
            <div className="title">
                Exploring 1-D Perlin Noise
            </div>
            <div className="content">
                Content Coming Soon!
                <a className="link" href="https://github.com/kueselj" target="_blank">
                <img className = "image" src={perlin}  style={{"backgroundColor": "white"}}/>
                Source Code Availible Soon!
                </a>   
            </div>
        </div>
    )
}

export default PerlinNoise;