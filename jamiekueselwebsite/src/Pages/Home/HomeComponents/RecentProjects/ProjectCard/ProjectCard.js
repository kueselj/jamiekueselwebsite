import React from "react";
import "./ProjectCard.scss"

import { Link } from "react-router-dom";


const ProjectCard = (props) => {

    const styleObj = {
        
    }


    return (

        <a className="card__wrapper" href={props.link}>
            <div className = "card__picture__wrapper" style={{ backgroundColor : props.color}}>
                <img className="card__image" src={props.image}/>  
            </div>
            <div className = "card__content">
                <div className = "card__title">
                    {props.title}
                </div>
                {/* <div className = "card__description">
                    {props.description}
                </div> */}
            </div>
        </a>
    );
}

export default ProjectCard