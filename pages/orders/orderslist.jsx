import Head from 'next/head';
import { useState } from 'react';
import IndexPage from "components/layouts/IndexPage";
import { useRouter } from 'next/router';
import { Container, Image, Row, Modal, Button, Form, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { HiClipboardList, HiX, HiSearch } from "react-icons/hi";


export default function OrdersListPage() {
  const router = useRouter();
//   const [createModal, setCreateModal] = useState(false);
//   const [deleteModal, setDeleteModal] = useState(false);

//   const createClose = () => setCreateModal(false);
//   const createShow = () => setCreateModal(true);
//   const deleteClose = () => setDeleteModal(false);
//   const deleteShow = () => setDeleteModal(true);
  return (
    < >
      <Head>
        <title>HOME | รายการสั่งซื้อ</title>
        <meta
          name="description"
          content="I2AROBOT 2"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container fluid className=" pt-4 px-4">
      <div className="bg-secondary text-center rounded shadow p-4">
                    <div className="d-flex align-items-center justify-content-between mb-4">
                        <h5 className="mb-0">จัดการคำสั่งซื้อ</h5>
                    </div>

                    {/* Search Order List */}
                    <div className="d-flex align-items-center justify-content-between mb-4">
                        <h6 className="mb-0">ค้นหาสถานะการบริการ</h6>
                        <a href="">Show All</a>
                    </div>

                    <form className="d-none d-md-flex ms-4">
                        <input className="form-control bg-dark border-0" type="search" placeholder="Search" />
                    </form>

                    
                   {/* table start */}
                    <div className="table-responsive">
                        <table className="table text-start align-middle table-bordered table-hover mb-0">
                            <thead>
                                <tr className="text-white">
                                    <th scope="col"><input className="form-check-input" type="checkbox" /></th>
                                    <th scope="col">หมายเลขคำสั่งซื้อ</th>
                                    <th scope="col">ชื่อผู้สั่งซื้อ</th>
                                    <th scope="col">โทรศัพท์</th>
                                    <th scope="col">ที่อยู่</th>
                                    <th scope="col">ยอดรวม</th>
                                    <th scope="col">การชำระเงิน</th>
                                    <th scope="col">พนักงานขาย</th>
                                    <th>วันที่สั่ง</th>
                                    <th scope="col">รายละเอียด</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><input className="form-check-input" type="checkbox" /></td>
                                    <td>KC0001</td>
                                    <td>long long</td>
                                    <td>0990000000</td>
                                    <td>นครราชสีมา</td>
                                    <td>100</td>
                                    <td>จ่ายแล้ว</td>
                                    <td>พนักงาน1</td>
                                    <td>01 Jan 2045</td>
                                    <td>
                                        <a className="btn btn-sm btn-info"><HiClipboardList/></a>
                                        <i className="btn btn-sm btn-light"><HiSearch/></i>
                                        <i className="btn btn-sm btn-danger"><HiX/></i>
                                    </td>
                                    {/* <td> <Button variant="light" className='ms-2 w-m-max' onClick={createShow}>
                                    <HiMagnifyingGlass/>
                                    </Button></td> */}
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
      </Container>

       {/* <Modal show={createModal} onHide={createClose} centered className="bg-templant">
        <Modal.Header closeButton >
          <Modal.Title>รายละเอียดคำสั่งซื้อ</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>ชื่อโปรเจคการโอน</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>รายการโอนเงิน</Form.Label>
            <Form.Control type="file" />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          {/* <Button variant="secondary" onClick={createClose}>
            ยกเลิก
          </Button> 
          <Button variant="light" onClick={createClose}>
            ปิด
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={deleteModal} onHide={deleteClose} centered className="bg-templant">
        <Modal.Header closeButton >
          <Modal.Title>ต้องการลบโปรเจค .......</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Label>ยืนยันการลบข้อมูล</Form.Label>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={deleteClose}>
            ยกเลิก
          </Button>
          <Button variant="primary" onClick={deleteClose}>
            ยืนยัน
          </Button>
        </Modal.Footer>
      </Modal>  */}


    
    </ >
  );
}
OrdersListPage.layout = IndexPage;