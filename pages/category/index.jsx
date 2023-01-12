import React, { useEffect, useState } from 'react'
import IndexPage from "components/layouts/IndexPage"
import { Container, Modal, Button, Form, Image, InputGroup, Row, Col } from 'react-bootstrap'
import { FaEdit, FaPlus, FaTrash } from 'react-icons/fa'
import useAxios from 'axios-hooks'
import FormData from 'form-data'

export default function CategoryPage () {

    const [{ data: categoryData }, getCatagories] = useAxios({ url: '/api/category' })
    const [{ data: postData, error: errorMessage, loading: categoryLoading }, executeCategory] = useAxios({ url: '/api/category', method: 'POST' }, { manual: true });
    const [{ loading: updateCategoryLoading, error: updateCategoryError }, executeCategoryPut] = useAxios({}, { manual: true })
    const [{ loading: deleteCategoryLoading, error: deleteCategoryError }, executeCategoryDelete] = useAxios({}, { manual: true })

    const [name, setName] = useState('');


    // Modal
    const [showModalCreate, setShowModalCreate] = useState(false);
    const [showModalEdit, setShowModalEdit] = useState(false);
    const ShowModalCreate = () => setShowModalCreate(true);
    const ShowModalEdit = async (id) => {
        await getProductById({ url: '/api/products/' + id, method: 'GET' });
        setShowModalEdit(true);
    }
    const CloseModal = () => { setShowModalCreate(false), setShowModalEdit(false) };

    if (categoryLoading || updateCategoryLoading || deleteCategoryLoading) return <p>Loading...</p>
    if (updateCategoryError || deleteCategoryError) return <p>Error!!</p>
    return (
        <>
           <Container fluid className="pt-4 px-4">
           <div className="bg-secondary text-center rounded shadow p-4">
                    <div className="d-flex align-items-center justify-content-between mb-4">
                        <h6 className="mb-0">รายการประเภทสินค้า</h6>
                        <Button variant="success" onClick={ShowModalCreate}>
                            <FaPlus />
                        </Button>
                    </div>
                    <div className="table-responsive">
                        <table className="table text-start table-striped align-middle table-hover mb-0">
                            <thead>
                                <tr className="text-white">
                                    <th scope="col">ชื่อประเภทสินค้า</th>
                                    <th scope="col">จำนวนสินค้า</th>
                                    <th scope="col">จัดการ</th>
                                </tr>
                            </thead>
                            <tbody>
                                {categoryData?.map((category, index) => (
                                    <tr key={index}>
                                        
                                        <td>{category?.name}</td>
                                        <td>{category?.name}</td>
                                        <td>
                                            <a className="btn btn-sm btn-success me-2" onClick={() => ShowModalEdit(category.id)}><FaEdit /></a>
                                            <a className="btn btn-sm btn-danger me-2"
                                                onClick={() => executeCategoryDelete({
                                                    url: '/api/category/' + category.id,
                                                    method: 'DELETE'
                                                })}
                                            ><FaTrash /></a>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
           </Container>

           {/* Create */}
            <Modal show={showModalCreate} onHide={CloseModal} centered className="bg-templant">
                <Modal.Header closeButton >
                    <Modal.Title>เพิ่มประเภทสินค้า</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>ชื่อประเภทสินค้า</Form.Label>
                        <Form.Control type="text" value={name} onChange={event => setName(event.target.value)} />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={CloseModal}>
                        ยกเลิก
                    </Button>
                    <Button variant="success" onClick={async event => {

                        await executeCategory({
                            data: {
                                name: name,
                            }
                        }).then(() => {
                            Promise.all([
                                setName(''),
                                getCatagories(),
                            ]).then(() => {
                                CloseModal()
                            })
                        })
                    }}>
                        เพิ่ม
                    </Button>
                </Modal.Footer>
            </Modal>
            

        </>
    )
}
CategoryPage.layout = IndexPage