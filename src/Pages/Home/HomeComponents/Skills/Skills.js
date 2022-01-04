import React from "react";

import "./Skills.scss"

import TextTag from "../../../../Components/TextTag/TextTag";

import java from "../../../../Resources/Pictures/Logos/java.png"
import scala from "../../../../Resources/Pictures/Logos/scala.png"
import python from "../../../../Resources/Pictures/Logos/python.png"
import html from "../../../../Resources/Pictures/Logos/html.png"
import css from "../../../../Resources/Pictures/Logos/css.png"
import javascript from "../../../../Resources/Pictures/Logos/javascript.png"
import cplusplus from "../../../../Resources/Pictures/Logos/c++.png"
import c from "../../../../Resources/Pictures/Logos/c.png"

import react from "../../../../Resources/Pictures/Logos/react.png"
import opencv from "../../../../Resources/Pictures/Logos/opencv.png"

import git from "../../../../Resources/Pictures/Logos/git.png"
import autocad from "../../../../Resources/Pictures/Logos/autocad.png"
import solidworks from "../../../../Resources/Pictures/Logos/solidworks.png"

const Skills = () => {

    return (
        <div className="skills__wrapper">
            <div className="skills__title">
                Skills
            </div>
            <div className="skills__type__wrapper">
                Languages:
                <TextTag label="Java" img={java}/>
                <TextTag label="Scala" img={scala}/>
                <TextTag label="Python" img={python}/>
                <TextTag label="HTML" img={html}/>
                <TextTag label="CSS" img={css}/>
                <TextTag label="JavaScript" img={javascript}/>
                <TextTag label="C++" img={cplusplus}/>
                <TextTag label="C" img={c}/>
            </div>
            <div className="skills__type__wrapper">
                Frameworks:
                <TextTag label="ReactJS" img={react}/>
                <TextTag label="OpenCv" img={opencv}/>
            </div>
            <div className="skills__type__wrapper">
                Software:
                <TextTag label="Git" img={git}/>
                <TextTag label="AutoCad" img={autocad}/>
                <TextTag label="SolidWorks" img={solidworks}/>
            </div>
        </div>
    )
}

export default Skills;