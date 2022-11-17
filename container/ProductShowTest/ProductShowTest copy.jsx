import React, { useState } from 'react'
import { Image, Container, Row, Col, Card } from 'react-bootstrap'
import CardHeader from 'react-bootstrap/esm/CardHeader'
import { FaMinus, FaPlus, FaShoppingBag, FaShoppingCart } from 'react-icons/fa'

export default function ProductShowTest() {

    let priceDefult = 150
    const [count, setCount] = useState(1)
    const [price, setPrice] = useState(priceDefult)

    const countIncreat = ()=>{
        if (count >= 1) {
            setCount((count) => count + 1)
            setPrice((price) => price + priceDefult)
        }
    }

    const countDecreat = ()=>{
        if (count > 1) {
        setCount((count) => count - 1)
        setPrice((price) => price - priceDefult)
        }
    }

  return (
    <>
    <Container>
        <Row>
            <Col xs={12} md={12} lg={6}>
                <div className='product-test'>
                    <div className="product-card">
                        <div className="left">
                            <Image src={'images/product/marijuana_01.png'} className='img-product' alt="imgProduct"/>
                        </div>
                        <div className="right">
                            <div className="product-info">
                                <div className="product-name">
                                    <h1>PigJungle</h1>
                                </div>
                                <div className="details">
                                    <h3>ประเภท</h3>
                                    <h2>ชื่อสินค้า</h2>
                                    <h5>รายละเอียดสินค้า</h5>
                                    <h4><p>ราคา {price.toLocaleString("en-US")} บาท</p></h4>
                                </div>
                                <ul>
                                    <li>จำนวน</li>

                                    <li className="bg" 
                                        onClick={()=> countIncreat()}>
                                        <FaPlus/></li>

                                    <li>{count}</li>

                                    <li className="bg" 
                                        onClick={()=> countDecreat()}>
                                        <FaMinus/></li>

                                    <li>กรัม</li>
                                </ul>
                                <span className="foot"><FaShoppingBag className='icon'/>Buy Now</span>
                                <span className="foot"><FaShoppingCart className='icon'/>Add TO Cart</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Col>
            <Col lg={3}>
                <Card>
                    <Card.Header bsPrefix="product-name">
                            <h1>PigJungle</h1>
                    </Card.Header>
                </Card>
            </Col>
        </Row>
    </Container>
    </>
  )
}
