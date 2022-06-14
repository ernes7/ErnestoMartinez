import React from 'react'
import './CompaniesSection.scss'
import '../App.css'
import lithicLogo from '../assets/companies/lithiclogo3k.png'
import dmssLogo from '../assets/companies/DMSS-Logo.png'
import thesisLogo from '../assets/companies/thesis.png'
import htmlLogo from '../assets/logos/html5.svg'
import cssLogo from '../assets/logos/css-5.svg'
import psLogo from '../assets/logos/photoshop-cc.svg'
import firebaseLogo from '../assets/logos/firebase-1.svg'
import reactLogo from '../assets/logos/react-2.svg'
import nodeLogo from '../assets/logos/nodejs-icon.svg'
import sketchLogo from '../assets/logos/sketch-2.svg'
import gatsbyLogo from '../assets/logos/gatsby.svg'
import rubyLogo from '../assets/logos/ruby.svg'
import sassLogo from '../assets/logos/sass-1.svg'
import pythonLogo from '../assets/logos/python-5.svg'
import salesforceLogo from '../assets/logos/salesforce-2.svg'
import graphqlLogo from '../assets/logos/graphql.svg'
import dockerLogo from '../assets/logos/docker.svg'
import Company from '../components/Company'

export default function CompaniesSection() {
    return (
        <div className={'companiesSectionContainer'}>
            <h2>Experience</h2>
            <div className="companiesContainer">
                {companies.map(comp => {
                    return (
                        <Company
                            tools={comp.tools}
                            logo={comp.logo}
                            linkedIn={comp.linkedIn}
                            name={comp.name}
                            duration={comp.time}
                            jobTitle={comp.position}
                            description={comp.description}
                        />
                    )
                })}
            </div>
        </div>
    )
}

const companies = [
    {
        name: 'Lithic Tech',
        logo: lithicLogo,
        position: 'Software Engineer',
        tools: [
            { logo: reactLogo, alt: 'react logo' },
            { logo: nodeLogo, alt: 'node js logo' },
            { logo: gatsbyLogo, alt: 'gatsby js logo' },
            { logo: sassLogo, alt: 'sass logo' },
            { logo: rubyLogo, alt: 'ruby logo' },
            { logo: pythonLogo, alt: 'python logo' },
            { logo: salesforceLogo, alt: 'salesforce logo' },
            { logo: graphqlLogo, alt: 'Graph QL Logo' },
            { logo: dockerLogo, alt: 'Docker Logo' },
        ],
        quote: null,
        time: 'June 2020 - Present',
        linkedIn: 'https://www.linkedin.com/company/lithictech/',
    },
    {
        name: 'Thesis Agency',
        logo: thesisLogo,
        position: 'Software Engineer',
        tools: [
            { logo: reactLogo, alt: 'react logo' },
            { logo: nodeLogo, alt: 'node js logo' },
            { logo: firebaseLogo, alt: 'firebase logo' },
            { logo: sketchLogo, alt: 'sketch logo' },
        ],
        quote: "It was a joy working with Ernesto while he was interning at Thesis. He always asked the good questions and would execute on any given project. He also played a huge part in helping with the launch of the new Thesis website. For someone who hadn't had much Front End Development experience, he caught on really quick and the team really wished we could have kept him on longer!",
        quoteAuthor: 'Cemal Richards, Senior Software Engineer.',
        time: 'June 2019 - August 2019',
        linkedIn: 'https://www.linkedin.com/company/thesis-agency/',
    },
    {
        name: 'Diversity & Multicultural Student Services',
        logo: dmssLogo,
        position: 'Web Developer',
        tools: [
            { logo: htmlLogo, alt: 'html logo' },
            { logo: cssLogo, alt: 'css logo' },
            { logo: psLogo, alt: 'ps logo' },
        ],
        quote: 'Ernesto is a creative, hard-working, innovative professional. He is responsible and detail oriented. He designed some fantastic pieces for us and kept our social media on track. I enjoyed working with him and having him as a part of our team!',
        time: 'September 2015 - June 2020',
        quoteAuthor: 'CeCe Ridder, Director of DMSS.',
        linkedIn: 'https://www.facebook.com/PSU.DMSS',
    },
]
