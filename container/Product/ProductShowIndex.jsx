import React from 'react'
import {Row, Col, Container, Image} from 'react-bootstrap'

export default function Product_ShowIndex() {
  return (
    <>
        <div >
                <h1 className='text-center pt-5'>
                    สินค้าขายดี
                </h1>
            <Container>
                <Row>
                    <Col xs={12} sm={6} md={4} lg={3}>
                        <div className="card">
                            <Image className="img" src={'images/product/product.jpg'} alt="product1" width={'100px'}/>
                            <div className="card-body">
                                <h5 className="card-title">สินค้า1</h5>
                                <p className="card-text">อธิบายสินค้า.</p>
                                <a href="#" className="btn btn">ใส่ตะกร้า</a>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} sm={6} md={4} lg={3}>
                        <div className="card">
                            <Image className="img" src={'images/product/product2.jpg'} alt="product2" width={'100px'}/>
                            <div className="card-body">
                                <h5 className="card-title">สินค้า2</h5>
                                <p className="card-text">อธิบายสินค้า.</p>
                                <a href="#" className="btn btn">ใส่ตะกร้า</a>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} sm={6} md={4} lg={3}>
                        <div className="card">
                        <Image className="img" src={'images/product/product3.jpg'} alt="product3" width={'100px'}/>
                            <div className="card-body">
                                <h5 className="card-title">สินค้า3</h5>
                                <p className="card-text">อธิบายสินค้า.</p>
                                <a href="#" className="btn btn">ใส่ตะกร้า</a>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} sm={6} md={4} lg={3}>
                        <div className="card">
                        <Image className="img" src={'images/product/product3.jpg'} alt="product3" width={'100px'}/>
                            <div className="card-body">
                                <h5 className="card-title">สินค้า4</h5>
                                <p className="card-text">อธิบายสินค้า.</p>
                                <a href="#" className="btn btn">ใส่ตะกร้า</a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    </>
  )
}
