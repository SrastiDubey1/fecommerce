import React from 'react'
import './index.css'
export default function Col(props) {
    return (
        <div className={`col ${props.ContClass ? props.ContClass : ''}`}>{props.children}</div>
    )
}
