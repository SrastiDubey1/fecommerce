import React from 'react'
import classes from './rw.module.css'
export default function Row(props) {
    return (
        <div className={`${classes['row']} ${props.ContClass ? classes[props.ContClass] : ''}`}>{props.children}</div>
    )
}
