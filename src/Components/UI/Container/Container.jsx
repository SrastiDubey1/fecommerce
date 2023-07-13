import React from 'react'
import classes from '../../assets/css/fc.module.css'
export default function Container(props) {
    return (
        <div className={`${classes['container']} ${classes[props.ContClass]}`}>{props.Children}</div>
    )
}
