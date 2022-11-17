import { SLIDER_SETTING } from '@/utils/slider-setting';
import React, { useState } from 'react';
import { Image } from 'react-bootstrap';
import Slider from "react-slick";
import ModelShowImage from '../../components/Home/ModelShowImage'



export default function GallerySlide({ list }) {

    const [show, setShow] = useState(false);
    const [imageShow, setImageShow] = useState(false);

    const handleClose = () => { setShow(false); setImageShow("") };

    return (
        <>

            <div className="container-fluid pt-5">
                <div className="row">
                    <div className="col-lg-12">
                        <Slider {...SLIDER_SETTING}>
                            {list?.map(image => showImageInSlide(image))}
                        </Slider>
                    </div>
                </div>
            </div>
            <ModelShowImage show={show} image={imageShow} handleClose={handleClose} />

        </>
    );


    function showImageInSlide(image) {

        return (
            <>
                <div className="item profile" onClick={() => { setShow(true); setImageShow(image) }}>
                    <div className="thumb">
                        <Image src={image} alt="" />
                    </div>
                </div>
            </>
        );
    }
}
