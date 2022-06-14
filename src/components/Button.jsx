import React from 'react'
import PropTypes from 'prop-types'

function Button({ title, children }) {
    return (
        <button className={'px-4 py-2 rounded'}>
            {title}
            {children}
        </button>
    )
}

Button.propTypes = {
    title: PropTypes.string,
}

export default Button
