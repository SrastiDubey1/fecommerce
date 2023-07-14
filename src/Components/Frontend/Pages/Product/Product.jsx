import React, { useState } from 'react'
import './index.css'
import CardBody from '../../../UI/CardBox/CardBody'
import Starrating from '../../../UI/Starrating/Starrating'
import Button from '../../../UI/Button/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

export default function Product(props) {
    const [addLike, setAddLike] = useState(false);
    const [addValue, setValue] = useState(0);
    const like = () => {
        setAddLike(true)
        setValue(addValue + 1);

    }
    const unLike = () => {
        setAddLike(false)
        setValue(addValue - 1);

    }
    return (
        <div className={props.cardItem}>
            <CardBody cdClass='productcard' >
                <div className='card-image'>
                    <img src={require(`../../../../assets/img/temp/${props.productImg}`)} alt={props.ProductAlt} />
                </div>
                <div className='wicard'>
                    {!addLike ?
                        <span className='wishlist' onClick={() => like()}><FontAwesomeIcon icon={faHeart} /></span>
                        :
                        <span className='addwishlist' onClick={() => unLike()}><FontAwesomeIcon icon={faHeart} /></span>

                    }
                </div>
                <div className='product-content'>
                    <Starrating rtVal={props.rtVal} />
                    <h4>{props.titelName}</h4>
                    <div className='price'>
                        <span className='main-price'>{props.Price}</span>
                        <span>{props.mainPrice}</span>
                    </div>
                    <div className='btnbox'>
                        <Button BlClass='btn-cart' LinkTo={props.productlinks} Text='Add To Cart' />
                    </div>
                </div>
            </CardBody>
        </div >
    )
}
