import Head from 'next/head';
import { useState } from 'react';
import IndexPage from "components/layouts/IndexPage";
import { useRouter } from 'next/router';
import { Container, Image, Row } from 'react-bootstrap';
import { FaReply, FaPlus, FaEdit, FaTrash } from 'react-icons/fa';
import { Table, Button, Form, OverlayTrigger, Badge, Modal } from 'react-bootstrap';
export default function KnowledgePage() {
  const router = useRouter();
  const [createModal, setCreateModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [editModal, setEditModal] = useState(false);

  const createClose = () => setCreateModal(false);
  const createShow = () => setCreateModal(true);

  const editClose = () => setEditModal(false);
  const editShow = () => setEditModal(true);

  const deleteClose = () => setDeleteModal(false);
  const deleteShow = () => setDeleteModal(true);
  return (
    < >
    <Container fluid className=" pt-4 px-4">
                <Row className=" g-4">
          
                        <div className="bg-secondary rounded p-4">
                          
                            <h6 className="mb-4"> เกร็ดความรู้ </h6>
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="Inputname" className="form-label">หัวข้อ</label>
                                    <input type="text" className="form-control" style={{ width: "500px" }} id="#" placeholder='' />

                                    <div className="mb-3">
                                        <label htmlFor="Inputphone" className="form-label">เนื้อหา</label>
                                        <textarea  rows={3}  className="form-control"  id="# "placeholder='' />
                                    </div>
                                    
                                    

                                    

                                    
                                </div>
                              
                                <button type="submit" className="btn btn-success" style={{ magin: "50px" }} >ยืนยัน</button>
                            </form>
                        </div>
                </Row>

         
            </Container>



    </ >
  );
}
KnowledgePage.layout = IndexPage;