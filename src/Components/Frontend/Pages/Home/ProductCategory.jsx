import React, { useContext } from 'react'
import Container from '../../../UI/Container/Container'
import Row from '../../../UI/Row/Row'
import Col from '../../../UI/Col/Col'
import Product from '../Product/Product'
import { AuthContext } from '../../../context/context';

export default function ProductCategory() {
    const { data } = useContext(AuthContext)
    return (
        <>
            <Container>
                <Row>
                    {data?.map((val, index) => {
                        return (
                            <Col key={index}>
                                <Product
                                    cardItem='productItems'
                                    productImg={val.URL}
                                    rtVal={(100 / 5) * val.Review}
                                    titelName={val.DressName}
                                    Price={val.discount}
                                    mainPrice={val.price}
                                    productlinks='/'
                                />
                            </Col>
                        )
                    })}
                </Row>
            </Container>
        </>
    )
}
