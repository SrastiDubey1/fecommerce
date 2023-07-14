import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'
export default function Button(props) {
    return (

        props.buttonType ?
            <button type={props.bType} className={`btn ${props.BtnClass}`}>{props.lImage ? <img src={props.lImage} /> : ''}<span>{props.Text}</span>{props.RImage ? <img src={props.RImage} /> : ''}</button> :
            <Link to={props.LinkTo} className={`btn ${props.BlClass}`}>{props.lImage ? <img src={props.lImage} /> : ''}<span>{props.Text}</span>{props.RImage ? <img src={props.RImage} /> : ''}</Link>

    )
}
