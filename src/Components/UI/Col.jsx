import React from 'react'

export default function Col() {
    return (
        <div className={`${classes['col']} ${classes[props.ContClass]}`}>{props.Children}</div>
    )
}
