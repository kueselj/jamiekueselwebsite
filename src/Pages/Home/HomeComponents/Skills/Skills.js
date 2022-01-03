import React from "react";

import "./Skills.scss"

import TextTag from "../../../../Components/TextTag/TextTag";

import java from "../../../../Resources/Pictures/Logos/java.png"
import scala from "../../../../Resources/Pictures/Logos/scala.png"
import python from "../../../../Resources/Pictures/Logos/python.png"
import html from "../../../../Resources/Pictures/Logos/html.png"


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
                <TextTag label="CSS"/>
                <TextTag label="JavaScript"/>
                <TextTag label="C++"/>
                <TextTag label="C"/>
            </div>
            <div className="skills__type__wrapper">
                Frameworks:
                <TextTag label="ReactJS"/>
                <TextTag label="OpenCv"/>
            </div>
            <div className="skills__type__wrapper">
                Software:
                <TextTag label="Git"/>
                <TextTag label="AutoCad"/>
                <TextTag label="SolidWorks"/>
            </div>
        </div>
    )
}

export default Skills;