import React from "react";



import { Outlet, Link} from "react-router-dom";

import "./BenchCalculator.scss"

import benchcalc from "../../../../Resources/Pictures/Projects/benchcalc.png"

const BenchCalculator = () => {

    return (
        <div className="bench__calculator__wrapper">
            <div className="title">
                <a className="title" href="https://www.benchcalculator.com/" target="_blank">BenchCalculator.com</a>
            </div>
            <div className="content">
            
                This site originally started out as a passion project but helped me hone my React and CSS skills.
                The purpose of the site is to aid weight-lifters, specifically those performing the Bench Press, to be able
                to determine their One Rep Max. This means the maximum ammount of weight they can do for a single rep.
                They are able to enter a previous lift the've done (weight lifted and reps performed) and the website will 
                then calculate their One Rep Max. It is calculated using the Epley formula. It is simply (weight * (1 + reps/30))
                Soon, I will compound more formulas to get a more diversified answer. 
                I also included an Advanced Calculator in which a user can figure out how much weight they can lift for a number of reps other than a single one.
                I am also releasing a similar website for calculating Squat and Deadlift One Rep Maxes soon.
                Check out the site here!
                
                <a className="link" href="https://www.benchcalculator.com/" target="_blank">
                <img className = "image" src={benchcalc} />
                    BenchCalculator.com
                    </a>
                
            </div>
        </div>
    )
}

export default BenchCalculator;