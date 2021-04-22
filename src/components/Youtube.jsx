import React from 'react';
import PropTypes from "prop-types";
import "./Youtube.scss";

export default function Youtube({embedID}) {
    return (
        <div className={"video-responsive"}>
            <iframe
                title="Project Video"
                width="350"
                height="200"
                frameBorder="0"
                src={`https://www.youtube.com/embed/${embedID}`}
                allowFullScreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            />
        </div>
    )
}

Youtube.propTypes = {
    embedID: PropTypes.string.isRequired
}
