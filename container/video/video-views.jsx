import React, { useState } from 'react';
import { Image, Nav, Tab, Row, Col, Modal } from 'react-bootstrap';


export default function VideoViews({ }) {
    const [viewVideo, setViewVideo] = useState({ show: false, video: "", fourthtopic: "", contentfour: "" })
    return (
        <>
            <div id="video" className="our-videos section">
                <div className="videos-left-dec">
                    <Image src="./images/videos-left-dec.png" alt="" />
                </div>
                <div className="videos-right-dec">
                    <Image src="./images/videos-right-dec.png" alt="" />
                </div>
                <div className="container d-lg-block d-none">
                    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                        <div className="naccs">
                            <div className="grid ">
                                <Row>
                                    <Col lg="8" md="9">
                                        <Tab.Content className="nacc">
                                            <Tab.Pane eventKey="first">
                                                <div className="thumb">
                                                    <iframe width="100%" height="auto" src="https://www.youtube.com/embed/5ioJMT6nsbc" title="ศักยภาพในการตัดหญ้า" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                                    <div className="overlay-effect">
                                                        <a href="#"><h4>Potential</h4></a>
                                                        <span>ศักยภาพในการตัดหญ้า</span>
                                                    </div>
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="second">
                                                <div className="thumb">
                                                    <iframe width="100%" height="auto" src="https://www.youtube.com/embed/Q6LyqP4j7_o" title="ความแข็งแรงทนทานในการใช้งาน" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                                    <div className="overlay-effect">
                                                        <a href="#"><h4>Strong</h4></a>
                                                        <span>ความแข็งแรงทนทานในการใช้งาน</span>
                                                    </div>
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="third">
                                                <div className="thumb">
                                                    <iframe width="100%" height="auto" src="https://www.youtube.com/embed/V9EILNde0cg" title="ง่ายต่อการควมคุม" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                                    <div className="overlay-effect">
                                                        <a href="#"><h4>Control</h4></a>
                                                        <span>ง่ายต่อการควมคุม</span>
                                                    </div>
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="fourth">
                                                <div className="thumb">
                                                    <iframe width="100%" height="auto" src="https://www.youtube.com/embed/dJl9LG-4FV0" title="สเปคเบื้องต้นรถตัดหญ้าบังคับวิทยุ" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                                    <div className="overlay-effect">
                                                        <a href="#"><h4>Spec</h4></a>
                                                        <span>สเปคเบื้องต้นรถตัดหญ้าบังคับวิทยุ</span>
                                                    </div>
                                                </div>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Col>
                                    <Col lg="4" md="3">
                                        <div className="menu">
                                            <Nav variant="pills" className="flex-column">
                                                <Nav.Item >
                                                    <Nav.Link eventKey="first" className='thumb p-0'>
                                                        <Image src="./images/video-thumb-07.png" alt="" />
                                                        <div className="inner-content">
                                                            <h4>Potential</h4>
                                                            <span>ศักยภาพในการตัดหญ้า</span>
                                                        </div>
                                                    </Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item >
                                                    <Nav.Link eventKey="second" className='thumb p-0'>
                                                        <Image src="./images/video-thumb-01.png" alt="" />
                                                        <div className="inner-content">
                                                            <h4>Strong</h4>
                                                            <span>ความแข็งแรงทนทานในการใช้งาน</span>
                                                        </div>
                                                    </Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="third" className='thumb p-0'>
                                                        <Image src="./images/video-thumb-02.png" alt="Marketing" />
                                                        <div className="inner-content">
                                                            <h4>Control</h4>
                                                            <span>ง่ายต่อการควมคุม</span>
                                                        </div>
                                                    </Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="fourth" className='thumb p-0'>
                                                        <Image src="./images/video-thumb-08.png" alt="SEO Work" />
                                                        <div className="inner-content">
                                                            <h4>Spec</h4>
                                                            <span>สเปคเบื้องต้นรถตัดหญ้าบังคับวิทยุ</span>
                                                        </div>
                                                    </Nav.Link>
                                                </Nav.Item>
                                            </Nav>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </Tab.Container>
                </div>
                <div className="container d-md-block d-lg-none">
                    <Tab.Container id="left-tabs-example" defaultActiveKey="first">

                        <div className="naccs">
                            <div className="menu">
                                <Row>
                                    <Col md={6}>
                                        <Nav.Item >
                                            <Nav.Link eventKey="first" className='thumb p-0' onClick={() => setViewVideo({ ...viewVideo, show: true, video: "https://www.youtube.com/embed/5ioJMT6nsbc", fourthtopic: "Potential", contentfour: "ศักยภาพในการตัดหญ้า" })}>
                                                <Image src="./images/video-thumb-07.png" alt="" />
                                                <div className="inner-content">
                                                    <h4>Potential</h4>
                                                    <span>ศักยภาพในการตัดหญ้า</span>
                                                </div>
                                            </Nav.Link>
                                        </Nav.Item>
                                    </Col>
                                    <Col md={6}>
                                        <Nav.Item >
                                            <Nav.Link eventKey="first" className='thumb p-0' onClick={() => setViewVideo({ ...viewVideo, show: true, video: "https://www.youtube.com/embed/Q6LyqP4j7_o", fourthtopic: "Strong", contentfour: "ความแข็งแรงทนทานในการใช้งาน" })}>
                                                <Image src="./images/video-thumb-01.png" alt="" />
                                                <div className="inner-content">
                                                    <h4>Strong</h4>
                                                    <span>ความแข็งแรงทนทานในการใช้งาน</span>
                                                </div>
                                            </Nav.Link>
                                        </Nav.Item>
                                    </Col>
                                    <Col md={6}>
                                        <Nav.Item >
                                            <Nav.Link eventKey="first" className='thumb p-0' onClick={() => setViewVideo({ ...viewVideo, show: true, video: "https://www.youtube.com/embed/V9EILNde0cg", fourthtopic: "Control", contentfour: "ง่ายต่อการควมคุม" })}>
                                                <Image src="./images/video-thumb-02.png" alt="" />
                                                <div className="inner-content">
                                                    <h4>Control</h4>
                                                    <span>ง่ายต่อการควมคุม</span>
                                                </div>
                                            </Nav.Link>
                                        </Nav.Item>
                                    </Col>
                                    <Col md={6}>
                                        <Nav.Item >
                                            <Nav.Link eventKey="first" className='thumb p-0' onClick={() => setViewVideo({ ...viewVideo, show: true, video: "https://www.youtube.com/embed/dJl9LG-4FV0", fourthtopic: "Spec", contentfour: "สเปคเบื้องต้นรถตัดหญ้าบังคับวิทยุ" })}>
                                                <Image src="./images/video-thumb-08.png" alt="" />
                                                <div className="inner-content">
                                                    <h4>Spec</h4>
                                                    <span>สเปคเบื้องต้นรถตัดหญ้าบังคับวิทยุ</span>
                                                </div>
                                            </Nav.Link>
                                        </Nav.Item>
                                    </Col>
                                </Row>

                            </div>
                        </div>
                        <Modal
                            size="md"
                            fullscreen={true}
                            centered
                            show={viewVideo.show}
                            onHide={() => setViewVideo({ ...viewVideo, show: false, video: "" })}
                            aria-labelledby="example-modal-sizes-title-sm"
                        >
                            <Modal.Header closeButton>
                                <Modal.Title id="example-custom-modal-styling-title">
                                    <h4>{viewVideo.fourthtopic}</h4>


                                    <span>{viewVideo.contentfour}</span>

                                </Modal.Title>
                            </Modal.Header>
                            <iframe
                                style={{ height: "inherit" }}
                                src={viewVideo.video} title="รถตัดหญ้าบังคับวิทยุ" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </Modal>
                    </Tab.Container>

                </div>
            </div >



        </>
    );


}
