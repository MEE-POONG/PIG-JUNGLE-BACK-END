import Head from 'next/head';
import { useState } from 'react';
import IndexPage from "components/layouts/IndexPage";
import { useRouter } from 'next/router';
import { Container, Image, Row, Modal, Button, Form, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { FaTimes, FaEye, FaEdit, FaClipboardList } from 'react-icons/fa';
import Link from 'next/link';

export default function OrdersListPage() {
  const router = useRouter();
  // modal
  const [showModalCreate, setShowModalCreate] = useState(false);
  const [showModalEdit, setShowModalEdit] = useState(false);
  const ShowModalCreate = () => setShowModalCreate(true);
  const ShowModalEdit = () => setShowModalEdit(true);
  const CloseModal = () => { setShowModalCreate(false), setShowModalEdit(false) };

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
                        <a className="btn btn-sm btn-primary" href="">รายงาน</a>
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
                                    <div className='manager'>
                                        <OverlayTrigger
                                          placement="bottom" delay={{ show: 250, hide: 400 }} overlay={<Tooltip id="button-tooltip" >ดูรายละเอียด</Tooltip>} >
                                            <Button className="btn btn-sm btn-info mx-1" onClick={ShowModalEdit}>
                                              <FaClipboardList />
                                            </Button>
                                        </OverlayTrigger>
                                        <OverlayTrigger
                                          placement="bottom" delay={{ show: 250, hide: 400 }} overlay={<Tooltip id="button-tooltip" >ลบใบสั่งซืื้อ</Tooltip>} >
                                          <Button className="btn btn-sm btn-danger mx-1" onClick={ShowModalEdit}>
                                            <FaTimes />
                                          </Button>
                                        </OverlayTrigger>
                                      </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
      </Container>

      {/* Edit */}
      <Modal show={showModalEdit} onHide={CloseModal} centered className="bg-templant">
                <Modal.Header closeButton >
                    <Modal.Title>รายละเอียดการสั่งสินค้า</Modal.Title>
                </Modal.Header>
                <Modal.Body>
               
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="light" onClick={CloseModal}>
                        ปิด
                    </Button>
                </Modal.Footer>
            </Modal>
    
    
    </ >
  );
}
OrdersListPage.layout = IndexPage;