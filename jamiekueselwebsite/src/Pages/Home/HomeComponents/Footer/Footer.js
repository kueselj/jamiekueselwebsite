import React from "react";
import "./Footer.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons'

import { Link } from "react-router-dom";



const Footer = () => {

    return (
        <div className="footer__wrapper">
            <div className="footer__icon__holder">
                <div className="footer__component">
                    <a href="https://github.com/kueselj" target="_blank">
                        <FontAwesomeIcon className="icon" icon={faGithub} />
                    </a>
                </div>
                <div className="footer__component">
                    <a href="https://www.linkedin.com/in/james-kuesel" target="_blank">
                        <FontAwesomeIcon className="icon" icon={faLinkedin} style={{'color': '#0072b1'}}/>
                    </a>
                </div>
                <div className="footer__component">
                    <Link to="/comingsoon">
                        <FontAwesomeIcon className="icon" icon={faYoutube} style={{'color': '#FF0000'}}/>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Footer;