import React from "react";
import { Container, Navbar, Nav, NavDropdown, Offcanvas, Form, FormControl, Button, Image, Row, Col, NavbarBrand } from 'react-bootstrap';


export default function ProductList() {
    return (
        // style={{backgroundColor: "#fdccbc"}}
        <section className="vh-100"  >
            <div className="container h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col" >
                        <p><span className="h2">ตะกร้าสิน </span><span className="h4">(รายการที่สั่ง)</span></p>
                        <div className="card mb-4">
                            <div className="card-body p-4">
                                <div className="row align-items-center">
                                    <div className="col-md-2">
                                    <Image  src={"images/product/product4.jpg"} style={{width: "120px"}}/>
                                    </div>
                                    <div className="col-md-2 d-flex justify-content-center">
                                        <div>
                                            <p className="small text-muted mb-4 pb-2">ชื่อสินค้า</p>
                                            <p className="lead fw-normal mb-0">กัญชาอันก้อน</p>

                                        </div>
                                    </div>
                                    <div className="col-md-2 d-flex justify-content-center">
                                        <div>
                                            <p className="small text-muted mb-4 pb-2">จำนวนสินค้า</p>
                                            <p className="lead fw-normal mb-0"> - 1 +</p>
                                        </div>
                                    </div>
                                    <div className="col-md-2 d-flex justify-content-center">
                                        <div>
                                            <p className="small text-muted mb-4 pb-2">ราคาสินค้า</p>
                                            <p className="lead fw-normal mb-0">799 บาท</p>
                                        </div>
                                    </div>
                                    <div className="col-md-2 d-flex justify-content-center">
                                        <div>
                                            <p className="small text-muted mb-4 pb-2">ราคารวมทั้งหมด</p>
                                            <p className="lead fw-normal mb-0">799 บาท</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card mb-5">
          <div className="card-body p-4">

            <div className="float-end">
              <p className="mb-0 me-5 d-flex align-items-center">
                <span className="small text-muted me-5">ยอดสั้งซื้อทั้งหมด:</span> <span
                  className="lead fw-normal">799 บาท</span>
              </p>
            </div>

          </div>

        </div>
        <div className="d-flex justify-content-end">
          <button type="button" className="btn btn-light btn-lg me-2">ย้อนกลับ</button>
          <button type="button" className="btn btn-primary btn-lg">ยืนยัน</button>
        </div>
                    </div>

                </div>
            </div>
        </section>

    )
}