import React from 'react'
import classes from './col-module.css'
export default function Col() {
    return (
        <div className={`${classes['col']} ${classes[props.ContClass]}`}>{props.Children}</div>
    )
}
