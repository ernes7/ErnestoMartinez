import React from 'react'
import { Link } from 'react-router-dom'
import './CareerHighlights.scss'
import eliPicture from '../assets/images/ELI-2019-intern-networking.jpg'

export default function CareerHighlights() {
    const quote =
        "I was fortunate enough to be Ernesto's mentor through the Emerging Leaders Mentoring program. He is ambitious, passionate, and always eager to grow as a Software Engineer. He is able to take on many challenges, and manage ambiguity to craft intentional solutions. It was inspiring to see him develop and achieve his goals."
    const quoteAuthor = 'Francisco Juarez, ELI Mentor'

    return (
        <div className={'careerHighlightsContainer'}>
            <h2>Career Highlights</h2>
            <div className="highlightContainer">
                <div className="highlight">
                    <div className="highlightName">Emerging Leaders Program</div>
                    <Link
                        to={{ pathname: 'https://www.emergingleaderspdx.org/' || null }}
                        target="_blank"
                    >
                        {' '}
                        <img src={eliPicture} alt={'ELI 2019 Interns Networking'} />
                    </Link>
                    <div className="quoteBlock">
                        <q className="quote">{quote}</q>

                        <cite className="quote"> --{quoteAuthor}</cite>
                    </div>
                </div>
            </div>
        </div>
    )
}
