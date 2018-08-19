import React from 'react'
import './style.css'

export default ({id, config: {displayText}, onClick}) => (
    <button
        className={`button button--${id}`}
        style={{gridArea: `${id}`}}
        onClick={onClick}>{displayText}</button>
)
