import React from 'react'
import classes from './ps.module.css'
import CardBody from '../../../UI/CardBox/CardBody'
import Starrating from '../../../UI/Starrating/Starrating'
import Button from '../../../UI/Button/Button'
export default function Product(props) {
    return (
        <div className={classes[props.cardItem]}>
            <CardBody cdClass={classes['productcard']} >
                <div className={classes['card-image']}>
                    <img src={require(`../../../../assets/img/temp/${props.productImg}`)} alt={props.ProductAlt} />
                </div>
                <div className=''>
                </div>
                <div className={classes['product-content']}>
                    <Starrating rtVal={props.rtVal} />
                    <h4>{props.titelName}</h4>
                    <div className={classes['price']}>
                        <span className={classes['main-price']}>{props.Price}</span>
                        <span>{props.mainPrice}</span>
                    </div>
                    <div className={classes['btnbox']}>
                        <Button BlClass='btn-cart' LinkTo={props.productlinks} Text='Add To Cart' />
                    </div>
                </div>
            </CardBody>
        </div >
    )
}
