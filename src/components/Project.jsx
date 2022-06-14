import React from 'react'
import './Project.scss'
import { Link } from 'react-router-dom'

export default function Project({ logo, name, description, url }) {
    const URLformatted = url.split('//').pop()

    return (
        <div className="projectBlock">
            <div className="projectImage">
                <Link to={{ pathname: url || null }} target="_blank">
                    {' '}
                    <img src={logo} alt={name} />
                </Link>
                {URLformatted.startsWith('git') ? (
                    <a href={url}>Git Repository</a>
                ) : (
                    <a href={url}>{URLformatted}</a>
                )}
            </div>
            <div className="projectDesc">
                <p>{description}</p>
            </div>
        </div>
    )
}
