import React from 'react'
import classes from './cl.module.css'
export default function Col(props) {
    return (
        <div className={`${classes['col']} ${props.ContClass ? props.ContClass : ''}`}>{props.children}</div>
    )
}
