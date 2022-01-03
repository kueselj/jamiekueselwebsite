import React from "react";

import "./TextTag.scss"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const TextTag = (props) => {
    return (
        <div className="tag__wrapper">
            <img className="tag__icon" src={props.img}/>
            {props.label}     
        </div>
    )
}

export default TextTag;