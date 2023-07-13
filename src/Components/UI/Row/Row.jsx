import React from 'react'

export default function Row() {
    return (
        <div className={`${classes['row']} ${classes[props.ContClass]}`}>{props.Children}</div>
    )
}
