import React from 'react'
import { GrFacebookOption, GrGoogle, } from "react-icons/gr";
import { RiLineFill } from "react-icons/ri";
import { FaHome, FaPhoneAlt } from "react-icons/fa";

// components
import { Container, Navbar, Nav, NavDropdown, Offcanvas, Form, FormControl, Button, Image, Row, Col, NavbarBrand } from 'react-bootstrap';
import IndexLayout from '@/components/layouts/IndexLayout';

export default function Contactshow() {
    return (
        <div className='contact-show'>

            {/* -------title----------- */}
            <div className='title-header mx-auto'>
                <div className="active">ช่องทางติดต่อ</div>
                <div className="n-active">ช่องทางติดต่อ</div>
            </div>
     
            {/* ------------sub title---------- */}

            <div className="provide">
                <h3> Pig Jungle Kuncha </h3>
                <p>—My Contact—</p>
            </div>
            {/*--------------- icon --------------*/}
            <div className='text-icon'>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6 ">
                            <div className="icon" >

                                <Nav className="flex-column">
                                    <Nav.Link href="/#">
                                        <Row>
                                            <Col className='icon-svg'>
                                                <FaHome width={"5rem"} />
                                            </Col>
                                            <Col>
                                                <p>
                                                    Mittraphap, Pak Chong, Thailand, Nakhon Ratchasima
                                                </p>
                                            </Col>
                                        </Row>
                                    </Nav.Link>
                                    <Nav.Link href="https://www.facebook.com/profile.php?id=100084921099285">
                                        <Row>
                                            <Col className='icon-svg'>
                                                <GrFacebookOption width={"5rem"} />
                                            </Col>
                                            <Col>
                                                <p>
                                                    Pig Jungle
                                                </p>
                                            </Col>
                                        </Row>
                                    </Nav.Link>
                                    <Nav.Link href="https://account.line.biz/login?redirectUri=https%3A%2F%2Fmanager.line.biz%2F">
                                        <Row>
                                            <Col className='icon-svg'>
                                                <GrGoogle width={"1rem"} />
                                            </Col>
                                            <Col>
                                                <p>
                                                    Pig Jungle@gmail.com
                                                </p>
                                            </Col>
                                        </Row>
                                    </Nav.Link>

                                    <Nav.Link href="#">
                                        <Row>
                                            <Col className='icon-svg'>
                                                <FaPhoneAlt width={"1rem"} />
                                            </Col>
                                            <Col>
                                                <p>
                                                    065-065-8538
                                                </p>
                                            </Col>
                                        </Row>
                                    </Nav.Link>
                                </Nav>
                            </div>

                        </div>

                        {/*--------------- map -----------------*/}
                        <div className="col-md-6">
                            <div className="map">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3859.2298070344245!2d101.40634931445456!3d14.699592178584794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311c2bb5aa80c05d%3A0xf0d75169f3e8a461!2sPetrol!5e0!3m2!1sen!2sth!4v1668056782458!5m2!1sen!2sth"
                                    width="700"
                                    height="450"
                                    frameBorder="0"
                                    style={{ border: 1 }}
                                    allowFullScreen=""
                                    aria-hidden="false"
                                    tabIndex="0"
                                />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* -----------------letter------------------ */}
            <div className='letter'>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6">
                            <p> Sign up for our fresh news Pig Jungle Kuncha </p>
                            <h3 className='text-letter '> Sign up for newsletter.. </h3>
                        </div>
                        <br />
                        <br />
                        {/*--------------- map -----------------*/}
                        <div className="col-md-6">
                            <br />
                            <p>
                                <br />
                                <input className="input-email" type="email" name="E-mail" placeholder="Enter Your Email" id="#" />
                                <input type="submit" value="Sing up" className="input-submit" />
                                <link rel="stylesheet" href="COntacta.jsx" />
                            </p>
                            <br />
                        </div>
                    </div>
                </div>
            </div>

            {/* footer */}
            <div>
                <footer className='footer p'>
                    <p> </p>
                </footer>
            </div>
        </div>













    )
}

