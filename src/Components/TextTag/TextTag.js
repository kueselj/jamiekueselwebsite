import React from "react";

import "./TextTag.scss"

const TextTag = (props) => {
    return (
        <div className="tag__wrapper"> 
            {props.label}     
        </div>
    )
}

export default TextTag;