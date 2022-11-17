import React from "react";
import { Container, Navbar, Nav, NavDropdown, Offcanvas, Form, FormControl, Button, Image, Row, Col, NavbarBrand } from 'react-bootstrap';

export default function About() {
    return (
        <>

            <header>
                <div className="sc_layouts_title_caption">
                    <h1 >About 1</h1>
                    <p>HOME / ABOUT</p>
                </div>
            </header>
            <Container>
                <Row>
                    <Col md={12} lg={6} sm={6}>
                        <div className="products">
                            <h3>
                            ความรู้เกี่ยวกับกัญชา
                            </h3>
                            <p>—รอบรู้เรื่องกัญชา—</p>
                        </div>
                        <p className="work">กัญชา เป็นพืชสกุล Cannabis อยู่ในวงศ์ Cannabaceae มี 3 สายพันธุ์ที่พบบ่อย ได้แก่ สายพันธุ์ซาติวา (Cannabis sativa) สายพันธุ์อินดิกา (Cannabis indica) และสายพันธุ์รูเดอราลิส (Cannabis ruderalis) ส่วนคำว่ามาลีฮวนน่า (Marijuana) เป็นคำแสลงที่ใช้ส่วนดอกของต้นกัญชานำมาสูบ
 </p>

                        <p className="work">
                        </p>
                        <div className="col-xl-9 mx-auto">
                            <a href="#"
                                className="mm">MORE ABOUT US</a>
                        </div>
                    </Col>
                    <Col md={12} lg={6} sm={6}>
                        <header className="will">
                            <div className="numder">
                                <Image className="logo" style={{ borderRadius: "10px" }} src={"images/product/product4.jpg"} />
                            </div>

                        </header>
                    </Col>
                </Row>
            </Container>
            <section className="call-to-action text-white text-center">
                <dvi className="container">
                    <div className="row">
                        <div className="col-xl-9 mx-auto">
                            <h2 className="shop">สินค้าพร้อมให้บริการ</h2>
                            <a href="#" className="button-shop">SHOP NOW</a>
                        </div>
                    </div>

                </dvi>
            </section>









            {/* <div className="view">
                <div className="background-text">
                    <div className="text">

                        <div className="titel">—Our company—</div>
                        <div className="script">Enjoy Our Products</div>
                        <a href="#" className="grown">MORE ABOUT US</a>
                    </div>


                </div>
                <Image className="lgo" src={"images/product/product12.jpg"} />

            </div> */}






        </>

    )
}