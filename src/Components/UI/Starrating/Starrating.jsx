import React from 'react'
import './index.css'
export default function Starrating(props) {
    return (
        <div className='starrating'>
            <span style={{ width: `${props.rtVal}%` }}></span>
        </div>
    )
}
