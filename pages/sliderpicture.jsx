import Head from 'next/head';
import { useState } from 'react';
import IndexPage from "components/layouts/IndexPage";
import { useRouter } from 'next/router';
import { Container, Table, Button, Form, OverlayTrigger, Badge,Modal } from 'react-bootstrap';
import {FaReply,FaPlus,FaEdit,FaTrash } from 'react-icons/fa';
export default function SliderpicturePage() {
  

  const [deleteModal, setDeleteModal] = useState(false);
  const [editModal, setEditModal] = useState(false);

  const editClose = () => setEditModal(false);
  const editShow = () => setEditModal(true);

  const deleteClose = () => setDeleteModal(false);
  const deleteShow = () => setDeleteModal(true);

  return (
    < >
      <Head>
        <title>Pig Jungle</title>
        <meta
          name="description"
          content="I2AROBOT 2"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container fluid className=" pt-4 px-4">
        <div className="bg-secondary rounded p-4">
          <div className="d-flex align-items-center justify-content-between mb-4">
            <h5 className="mb-0 w-m-max me-2">ชื่อผู้ใช้</h5>
          </div>

          <div className="d-flex align-items-center border-bottom py-2">
            <div className="table-responsive w-100">
              <Table className="table table-striped text-start align-middle  align-items-center table-hover ">

                <thead>
                  <tr>
                    <th>id</th>
                    <th>หัวข้อ</th>
                    <th>เนื้อหา</th>
                    <th>รูปภาพ</th>
                    <th>คำอธิบายรูปภาพ</th>
                    <th>จัดการ</th>

                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>1</th>
                    <td>หัวข้อ1</td>
                    <td>เนื้อหา1</td>
                    <td><img className="img-fluid mx-auto mb-4" src="images/testimonial-1.jpg" style={{ width: "60px", height: "60px" }} /></td>
                    <td>อธิบายรูปภาพ1</td>
                    <td>
                      <Button className="btn btn-sm btn-success me-2" onClick={editShow}><FaEdit /></Button>
                      <Button className="btn btn-sm btn-danger me-2" onClick={deleteShow}><FaTrash /></Button>
                    </td>
                  </tr>
                  <tr>
                    <th>2</th>
                    <td>หัวข้อ2</td>
                    <td>เนื้อหา2</td>
                    <td><img className="img-fluid  mx-auto mb-4" src="images/testimonial-1.jpg" style={{ width: "60px", height: "60px" }} /></td>
                    <td>อธิบายรูปภาพ2</td>
                    <td>
                      <Button className="btn btn-sm btn-success me-2" onClick={editShow}><FaEdit /></Button>
                      <Button className="btn btn-sm btn-danger me-2" onClick={deleteShow}><FaTrash /></Button>
                    </td>
                  </tr>
                  <tr>
                    <th>3</th>
                    <td>หัวข้อ3</td>
                    <td>เนื้อหา3</td>
                    <td><img className="img-fluid  mx-auto mb-4" src="images/testimonial-1.jpg" style={{ width: "60px", height: "60px" }} /></td>
                    <td>อธิบายรูปภาพ3</td>
                    <td>
                      <Button className="btn btn-sm btn-success me-2" onClick={editShow}><FaEdit /></Button>
                      <Button className="btn btn-sm btn-danger me-2" onClick={deleteShow}><FaTrash /></Button>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </Container>

      <Modal show={editModal} onHide={editClose} centered className="bg-templant">
        <Modal.Header closeButton >
          <Modal.Title>แก้ไขข้อมูล</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>หัวข้อ</Form.Label>
            <Form.Control type="text" defaultValue='' />
          </Form.Group>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>เนื้อหา</Form.Label>
            <Form.Control type="text" defaultValue='' />
          </Form.Group>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>รูปภาพ</Form.Label>
            <Form.Control type="file" />
          </Form.Group>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>คำอธิบายรูปภาพ</Form.Label>
            <Form.Control type="text" defaultValue='' />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={editClose}>
            ยกเลิก
          </Button>
          <Button variant="success" onClick={editClose}>
            ยืนยัน
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={deleteModal} onHide={deleteClose} centered className="bg-templant">
        <Modal.Header closeButton >
          <Modal.Title>ต้องการลบข้อมูล</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Label>ยืนยันการลบ</Form.Label>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={deleteClose}>
            ยกเลิก
          </Button>
          <Button variant="success" onClick={deleteClose}>
            ยืนยัน
          </Button>
        </Modal.Footer>
      </Modal>

    </ >
  );
}
SliderpicturePage.layout = IndexPage;