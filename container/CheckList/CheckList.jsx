import React from "react";
import { Container, Navbar, Nav, NavDropdown, Offcanvas, Form, FormControl, Button, Image, Row, Col, NavbarBrand } from 'react-bootstrap';

export default function CheckList() {
    return (
        <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
            <div className="container h-100 py-5">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col">
                        <div className="card shopping-cart" style={{
                            borderRadius: "15px", borderRadius: "15px",
                            border: "10px solid #000000",
                            boxShadow: "-6px -6px 2px rgb(0 255 162), 6px 6px 1px #b224ef"
                        }}>
                            <div className="card-body text-black">
                                <div className="row">
                                    <div className="col-lg-6 px-5 py-4">
                                        <h3 className="mb-5 pt-2 text-center fw-bold text-uppercase" style={{ textShadow: "-2px -2px 2px rgb(0 255 162), 2px 2px 1px #b224ef" }}>Your products</h3>

                                        <div className="d-flex align-items-center mb-5">
                                            <div className="flex-shrink-0">

                                            </div>

                                            <div className="flex-grow-1 ms-3">
                                                <a href="#!" className="float-end text-black"><i className="fas fa-times"></i></a>
                                                <h5 className="text-primary" style={{ color: "#c021dd !important" }}>Samsung Galaxy M11 64GB</h5>
                                                <div className="d-flex align-items-center">
                                                    <p className="fw-bold mb-0 me-5 pe-3">799$</p>
                                                    <div className="def-number-input number-input safari_only">
                                                        <button
                                                            className="minus"></button>
                                                        <input className="quantity fw-bold text-black" min="0" name="quantity" value="1"
                                                            type="number" />
                                                        <button
                                                            className="plus"></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="d-flex align-items-center mb-5">
                                            <div className="flex-shrink-0">
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <a href="#!" className="float-end text-black"><i className="fas fa-times"></i></a>
                                                <h5 className="text-primary" style={{ color: "#c021dd !important" }}>Headphones Bose 35 II</h5>
                                                <div className="d-flex align-items-center">
                                                    <p className="fw-bold mb-0 me-5 pe-3">239$</p>
                                                    <div className="def-number-input number-input safari_only">
                                                        <button
                                                            className="minus"></button>
                                                        <input className="quantity fw-bold text-black" min="0" name="quantity" value="1"
                                                            type="number" />
                                                        <button
                                                            className="plus"></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="d-flex align-items-center mb-5">
                                            <div className="flex-shrink-0">

                                            </div>

                                            <div className="flex-grow-1 ms-3">
                                                <a href="#!" className="float-end text-black"><i className="fas fa-times"></i></a>
                                                <h5 className="text-primary" style={{ color: "#c021dd !important" }}>iPad 9.7 6-gen WiFi 32GB</h5>
                                                <div className="d-flex align-items-center">
                                                    <p className="fw-bold mb-0 me-5 pe-3">659$</p>
                                                    <div className="def-number-input number-input safari_only">
                                                        <button
                                                            className="minus"></button>
                                                        <input className="quantity fw-bold text-black" min="0" name="quantity" value="1"
                                                            type="number" />
                                                        <button
                                                            className="plus"></button>


                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                        <hr className="mb-4" style={{ height: "2px", backgroundColor: "#1266f1", opacity: "1" }}></hr>
                                        <div className="d-flex justify-content-between px-x">
                                            <p className="fw-bold">Discount:</p>
                                            <p className="fw-bold">95$</p>
                                        </div>
                                        <div className="d-flex justify-content-between p-2 mb-2" style={{ backgroundColor: "#e1f5fe" }}>
                                            <h5 className="fw-bold mb-0">Total:</h5>
                                            <h5 className="fw-bold mb-0">2261$</h5>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 px-5 py-4">

                                        <h3 className="mb-5 pt-2 text-center fw-bold text-uppercase " style={{
                                            textShadow: "-2px -2px 2px rgb(0 255 162), 2px 2px 1px #b224ef"
                                        }}>Payment</h3>

                                        <form className="mb-5">
                                            <div className="form-outline mb-5">
                                                <label className="form-label" style={{ color: "#c021dd" }} > Card Number</label>

                                                <input type="text" id="typeText" className="form-control form-control-lg" placeholder="Card Number" />
                                            </div>

                                            <div className="form-outline mb-5">
                                                <label className="form-label" style={{ color: "#c021dd" }}>Name on card</label>

                                                <input type="text" id="typeName" className="form-control form-control-lg"
                                                    placeholder="Name on card" />
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6 mb-5">
                                                    <div className="form-outline">
                                                        <label className="form-label" style={{ color: "#c021dd" }}>Expiration</label>

                                                        <input type="text" id="typeExp" className="form-control form-control-lg" placeholder="Expiration"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-6 mb-5">
                                                    <div className="form-outline">
                                                        <label className="form-label" style={{ color: "#c021dd" }}>Cvv</label>

                                                        <input type="password" id="typeText" maxLength={3} className="form-control form-control-lg"
                                                            size="1" placeholder="Cvv" />
                                                    </div>
                                                </div>
                                            </div>


                                            <button type="button" className="btn btn-primary btn-block btn-lg">Buy now</button>



                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}