import React, { useEffect, useState } from 'react'
import IndexPage from "components/layouts/IndexPage"
import { Container, Modal, Button, Form, Image, InputGroup, Row, Col } from 'react-bootstrap'
import { FaEdit, FaPlus, FaTrash } from 'react-icons/fa'

export default function PromotionPage() {
    return (
        <>
            <Container fluid className="pt-4 px-4">
                <div className="bg-secondary text-center rounded shadow p-4">
                    <div className="d-flex align-items-center justify-content-between mb-4">
                        <h6 className="mb-0">รายการเข้าร่วม</h6>
                        <Button variant="success">
                            <FaPlus />
                        </Button>
                    </div>
                    <div className="table-responsive">
                        <table className="table text-start table-striped align-middle table-hover mb-0">
                            <thead>
                                <tr className="text-white">
                                    <th scope="col">รูปสินค้า</th>
                                    <th scope="col">ชื่อสินค้า</th>
                                    <th scope="col">โปรโมชั่น</th>
                                    <th scope="col">รายละเอียด</th>
                                    <th scope="col">ราคาเดิม</th>
                                    <th scope="col">ราคาโปรโมชั่น</th>
                                    <th scope="col">จัดการ</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <img className="rounded-circle flex-shrink-0" src={'images/user.jpg'} alt="" style={{ width: "40px", height: "40px" }} />
                                    </td>
                                    <td>บ้องแก้ว</td>
                                    <td>9.9</td>
                                    <td>ซื้อ 5 แถม 1</td>
                                    <td className='text-decoration-line-through'>2000 บาท</td>
                                    <td className='text-danger'>1000 บาท</td>
                                    <td>
                                        <a className="btn btn-sm btn-success me-2"><FaEdit /></a>
                                        <a className="btn btn-sm btn-danger me-2" href=""><FaTrash /></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <img className="rounded-circle flex-shrink-0" src={'images/user.jpg'} alt="" style={{ width: "40px", height: "40px" }} />
                                    </td>
                                    <td>บ้องขวดอิชิตัน</td>
                                    <td>420</td>
                                    <td>ซื้อ 1 แถม 20</td>
                                    <td className='text-decoration-line-through'>50 บาท</td>
                                    <td className='text-danger'>20 บาท</td>
                                    <td>
                                        <a className="btn btn-sm btn-success me-2"><FaEdit /></a>
                                        <a className="btn btn-sm btn-danger me-2" href=""><FaTrash /></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <img className="rounded-circle flex-shrink-0" src={'images/user.jpg'} alt="" style={{ width: "40px", height: "40px" }} />
                                    </td>
                                    <td>เซ็ตดูดจนลอย</td>
                                    <td>WeedDays</td>
                                    <td>ซื้อ 1 แถม 1</td>
                                    <td className='text-decoration-line-through'>5000 บาท</td>
                                    <td className='text-danger'>2000 บาท</td>
                                    <td>
                                        <a className="btn btn-sm btn-success me-2"><FaEdit /></a>
                                        <a className="btn btn-sm btn-danger me-2" href=""><FaTrash /></a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </Container>
        </>
    )
}
PromotionPage.layout = IndexPage