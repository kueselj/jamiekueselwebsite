import React from "react";

import "./Skills.scss"

import TextTag from "../../../../Components/TextTag/TextTag";

const Skills = () => {

    return (
        <div className="skills__wrapper">
            <div className="skills__title">
                Skills
            </div>
            <div className="skills__type__wrapper">
                Languages:
                <TextTag label="Java"/>
                <TextTag label="Scala"/>
                <TextTag label="Python"/>
                <TextTag label="HTML"/>
                <TextTag label="CSS"/>
                <TextTag label="JavaScript"/>
                <TextTag label="C++"/>
                <TextTag label="C"/>
            </div>
            <div className="skills__type__wrapper">
                Frameworks:
                <TextTag label="ReactJS"/>
                <TextTag label="OpenCv"/>
                <TextTag label="Cats"/>
                <TextTag label="Akka"/>

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