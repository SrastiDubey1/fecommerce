import React from 'react'
import './index.css'

export default function CardBody(props) {
    return (
        <div className={`card ${props.cdClass ? props.cdClass : ''}`}>
            <div className={`card-body ${props.cdpClass ? props.cdpClass : ''}`}>{props.children}</div>
        </div>
    )
}
