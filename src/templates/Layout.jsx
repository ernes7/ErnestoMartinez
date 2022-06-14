import React from 'react'

export default function Layout({ title, children }) {
    return (
        <div className="bg-primary">
            <h1>{title}</h1>
            {children}
        </div>
    )
}
