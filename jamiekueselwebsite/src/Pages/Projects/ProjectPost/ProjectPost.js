import React , {useEffect} from "react";
import { useParams } from "react-router";

import "./ProjectPost.scss"


const ProjectPost = () => {

    let { projectSlug } = useParams();

    useEffect(() => {
        // Fetch post using the postSlug
    }, [projectSlug]);

    return (
        <div className="home__wrapper">
            ProjectPost {projectSlug}
        </div>
    )
}

export default ProjectPost;