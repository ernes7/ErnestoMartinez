import React from 'react'
import './Company.scss'
import { Link } from 'react-router-dom'

export default function Company({ logo, jobTitle, duration, tools, linkedIn, name }) {
    return (
        <div className="companyBlock">
            <div className="companyImage">
                <Link to={{ pathname: linkedIn || null }} target="_blank">
                    {' '}
                    <img src={logo} alt={name} />
                </Link>
            </div>
            <div className="companyDesc">
                <p className="companyRole">
                    {jobTitle} / {duration}
                </p>
                <p>Tools:</p>
                <div className="toolsContainer">
                    {tools.map(tool => {
                        return (
                            <div key={tool.alt}>
                                <img className="logoImage" src={tool.logo} alt={tool.alt} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
