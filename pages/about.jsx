import Head from 'next/head';
import { useState } from 'react';
import IndexPage from "components/layouts/IndexPage";
import { useRouter } from 'next/router';
import { Container, Table, Button, Form, OverlayTrigger, Badge,Modal,Row } from 'react-bootstrap';
import {FaReply,FaPlus,FaEdit,FaTrash } from 'react-icons/fa';

export default function AboutPage() {

  const [createModal, setCreateModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [editModal, setEditModal] = useState(false);

const createClose = () => setCreateModal(false);
const createShow = () => setCreateModal(true);

const editClose = () => setEditModal(false);
const editShow = () => setEditModal(true);

const deleteClose = () => setDeleteModal(false);
const deleteShow = () => setDeleteModal(true);

  const router = useRouter();
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
                <Row className=" g-4">
          
                        <div className="bg-secondary rounded p-4">
                          
                            <h6 className="mb-4"> ข้อมูลร้าน </h6>
                            <form>
                                <div className="mb-3">
                                    <label for="Inputname" className="form-label">รูปภาพของร้าน</label>
                                    <input type="file" className="form-control" id="#" placeholder='' />
                                    <div className="mb-3">
                                        <label for="Inputphone" className="form-label">รายละเอียดร้าน</label>
                                        <textarea  rows={3}  className="form-control"  id="# "placeholder='' />
                                    </div>
                                </div>
                              
                                <button type="submit" className="btn btn-success"  >ยืนยัน</button>
                            </form>
                        </div>
          
                        <div className="bg-secondary rounded p-4">
                            <h6 className="mb-4"> ข้อมูลเจ้าของร้าน </h6>
                            <form>
                                <div className="mb-3">
                                    <label for="Inputname" className="form-label">รูปภาพเจ้าของร้าน</label>
                                    <input type="file" className="form-control" id="#" placeholder='' />
                                    <div className="mb-3">
                                        <label for="Inputphone" className="form-label">รายละเอียดเจ้าของร้าน</label>
                                        <textarea  rows={3}  className="form-control"  id="# "placeholder='' />
                                    </div>
                                </div>
                              
                                <button type="submit" className="btn btn-success"  >ยืนยัน</button>
                            </form>
                        </div>
                </Row>

         
            </Container>
    </ >
  );
}
AboutPage.layout = IndexPage;