import React from 'react'
import classes from './cd.module.css'

export default function CardBody(props) {
    return (
        <div className={`${classes['card']} ${props.cdClass ? props.cdClass : ''}`}>
            <div className={`${classes['card-body']} ${props.cdpClass ? props.cdpClass : ''}`}>{props.children}</div>
        </div>
    )
}
