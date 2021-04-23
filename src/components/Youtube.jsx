import React from 'react';
import PropTypes from "prop-types";
import "./Youtube.scss";

export default function Youtube({embedID}) {
    return (
        <div className={"video-responsive"}>
            <iframe
                title="Project Video"
                width="375"
                height="300"
                frameBorder="0"
                src={`https://www.youtube.com/embed/${embedID}?controls=0&rel=0&amp&showinfo=0`}
                allowFullScreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; loop"
            />
        </div>
    )
}

Youtube.propTypes = {
    embedID: PropTypes.string.isRequired
}
