import React from 'react'
import './index.css'
export default function Row(props) {
    return (
        <div className={`row ${props.ContClass ? props.ContClass : ''}`}>{props.children}</div>
    )
}
