import "./Connect.scss"

import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons'

const Connect = () => {

    return (
        <div className="connect__wrapper">
            <div className="connect__icon__holder">
                <div className="connect__component">
                    <a href="https://github.com/kueselj" target="_blank">
                        <FontAwesomeIcon className="connect__icon" icon={faGithub} style={{'color': 'black'}}/>
                    </a>
                </div>
                <div className="connect__component">
                    <a href="https://www.linkedin.com/in/james-kuesel" target="_blank">
                        <FontAwesomeIcon className="connect__icon" icon={faLinkedin} style={{'color': '#0072b1'}}/>
                    </a>
                </div>
                <div className="connect__component">
                    <Link to="/comingsoon">
                        <FontAwesomeIcon className="connect__icon" icon={faYoutube} style={{'color': '#FF0000'}}/>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Connect;