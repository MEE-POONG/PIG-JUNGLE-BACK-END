import React, { useState } from 'react'
import IndexPage from "components/layouts/IndexPage"
import { Container, Modal, Button, Form, Image, InputGroup, DropdownButton, Dropdown } from 'react-bootstrap'
import { FaEdit, FaPlus, FaTrash } from 'react-icons/fa'

export default function ProductPage() {

    const [showModalCreate, setShowModalCreate] = useState(false);
    const [showModalEdit, setShowModalEdit] = useState(false);


    const ShowModalCreate = () => setShowModalCreate(true);
    const ShowModalEdit = () => setShowModalEdit(true);

    const CloseModal = () => { setShowModalCreate(false) , setShowModalEdit(false) };

    return (
        <>
            <Container fluid className="pt-4 px-4">
                <div className="bg-secondary text-center rounded shadow p-4">
                    <div className="d-flex align-items-center justify-content-between mb-4">
                        <h6 className="mb-0">รายการสินค้า</h6>
                        <Button variant="success" onClick={ShowModalCreate}>
                            <FaPlus/>
                        </Button>
                    </div>
                    <div className="table-responsive">
                        <table className="table text-start align-middle table-bordered table-hover mb-0">
                            <thead>
                                <tr className="text-white">
                                    <th scope="col">รูปภาพ</th>
                                    <th scope="col">ชื่อสินค้า</th>
                                    <th scope="col">ประเภทสินค้า</th>
                                    <th scope="col">จำนวนคงเหลือ</th>
                                    <th scope="col">ราคา</th>
                                    <th scope="col">จัดการ</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <img className="rounded-circle flex-shrink-0" src={'images/user.jpg'} alt="" style={{ width: "40px", height: "40px" }} />
                                    </td>
                                    <td>บ้อง</td>
                                    <td>อุปกรณ์</td>
                                    <td>60 ชิ้น</td>
                                    <td>2000 บาท</td>
                                    <td>
                                        <a className="btn btn-sm btn-success me-2" onClick={ShowModalEdit}><FaEdit /></a>
                                        <a className="btn btn-sm btn-danger me-2" href=""><FaTrash /></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <img className="rounded-circle flex-shrink-0" src={'images/user.jpg'} alt="" style={{ width: "40px", height: "40px" }} />
                                    </td>
                                    <td>กัญกัญ</td>
                                    <td>กัญชา</td>
                                    <td>2500 กรัม</td>
                                    <td>200 บาท</td>
                                    <td>
                                        <a className="btn btn-sm btn-success me-2" onClick={ShowModalEdit}><FaEdit /></a>
                                        <a className="btn btn-sm btn-danger me-2" href=""><FaTrash /></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <img className="rounded-circle flex-shrink-0" src={'images/user.jpg'} alt="" style={{ width: "40px", height: "40px" }} />
                                    </td>
                                    <td>Product 3</td>
                                    <td>Jhon Doe</td>
                                    <td>40 ชื้น</td>
                                    <td>200 บาท</td>
                                    <td>
                                        <a className="btn btn-sm btn-success me-2" onClick={ShowModalEdit}><FaEdit /></a>
                                        <a className="btn btn-sm btn-danger me-2" href=""><FaTrash /></a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </Container>

            {/* Create */}
            <Modal show={showModalCreate} onHide={CloseModal} centered className="bg-templant">
                <Modal.Header closeButton >
                    <Modal.Title>รายละเอียดสินค้า</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>รูปสินค้า</Form.Label>
                        {/* <Image className="" src={'images/user.jpg'} alt="" /> */}
                        <Form.Control type="file" />
                    </Form.Group>
                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>รูปสินค้า เพิ่มเติม</Form.Label>
                        {/* <Image className="" src={'images/user.jpg'} alt="" /> */}
                        <Form.Control type="file" />
                    </Form.Group>
                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>ชื่อสินค้า</Form.Label>
                        <Form.Control type="text" defaultValue={""} />
                    </Form.Group>
                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>รายละเอียดสินค้า</Form.Label>
                        <Form.Control as="textarea" rows={3} defaultValue={""} />
                    </Form.Group>
                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>ประเภทสินค้า</Form.Label>
                        <Form.Select>
                            <option>ประเภทสินค้า</option>
                            <option value="1">อุปกรณ์</option>
                            <option value="2">กัญชา</option>
                            <option value="3">ของเสริม</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Label>จำนวนคงเหลือ</Form.Label>
                    <InputGroup className="mb-3" >
                        <Form.Control type="text" defaultValue={""} />
                        <Form.Select defaultValue="Choose...">
                            <option>หน่วยนับ</option>
                            <option>ชิ้น</option>
                            <option>กรัม</option>
                            <option>กิโลกรัม</option>
                        </Form.Select>
                    </InputGroup>
                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>ราคา</Form.Label>
                        <InputGroup className="mb-3">
                            <Form.Control type="text" defaultValue={""}/>
                            <InputGroup.Text>บาท</InputGroup.Text>
                        </InputGroup>
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={CloseModal}>
                        ยกเลิก
                    </Button>
                    <Button variant="success">
                        เพิ่ม
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* Edit */}
            <Modal show={showModalEdit} onHide={CloseModal} centered className="bg-templant">
                <Modal.Header closeButton >
                    <Modal.Title>รายละเอียดสินค้า</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>รูปสินค้า</Form.Label>
                        <Image className="" src={'images/user.jpg'} alt="" />
                        <Form.Control type="file" />
                    </Form.Group>
                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>รูปสินค้า เพิ่มเติม</Form.Label>
                        <Image className="" src={'images/user.jpg'} alt="" />
                        <Form.Control type="file" />
                    </Form.Group>
                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>ชื่อสินค้า</Form.Label>
                        <Form.Control type="text" defaultValue={"ชื่อสินค้า"} />
                    </Form.Group>
                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>รายละเอียดสินค้า</Form.Label>
                        <Form.Control as="textarea" rows={3} defaultValue={"รายละเอียดสินค้า"} />
                    </Form.Group>
                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>ประเภทสินค้า</Form.Label>
                        <Form.Select>
                            <option>ประเภทสินค้า</option>
                            <option value="1">อุปกรณ์</option>
                            <option value="2">กัญชา</option>
                            <option value="3">ของเสริม</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Label>จำนวนคงเหลือ</Form.Label>
                    <InputGroup className="mb-3" >
                        <Form.Control type="text" defaultValue={"250"} />
                        <Form.Select defaultValue="Choose...">
                            <option>หน่วยนับ</option>
                            <option>ชิ้น</option>
                            <option>กรัม</option>
                            <option>กิโลกรัม</option>
                        </Form.Select>
                    </InputGroup>
                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>ราคา</Form.Label>
                        <InputGroup className="mb-3">
                            <Form.Control type="text" defaultValue={"1250"}/>
                            <InputGroup.Text>บาท</InputGroup.Text>
                        </InputGroup>
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={CloseModal}>
                        ยกเลิก
                    </Button>
                    <Button variant="success">
                        บันทึก
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
ProductPage.layout = IndexPage