import React from 'react'
import classes from './str.module.css'
export default function Starrating(props) {
    return (
        <div className={classes['starrating']}>
            <span style={{ width: `${props.rtVal}%` }}></span>
        </div>
    )
}
