import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import styles from 'assets/css/ImageSlider.module.css'

export default function ImageSider({ show, image, handleClose }) {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item style={{ height:'30rem'}}>
          <img
            className="d-block img-fluid w-100"
            src="https://media.cnn.com/api/v1/images/stellar/prod/220827155916-marijuana-polling-tobacco-cigarettes-trump-search.jpg?c=original"
            alt="First slide"
          />
          <Carousel.Caption>
            <div className={styles.bgCaption}>
                <h1>รูป 1</h1>
                <p>รายละเอียดรูป 1</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ height:'30rem'}}>
          <img
            className="d-block img-fluid w-100"
            src="https://gray-kptv-prod.cdn.arcpublishing.com/resizer/lM2_r1s4lA9iTnoMQ5iH9mpwo2g=/1200x675/smart/filters:quality(85)/cloudfront-us-east-1.images.arcpublishing.com/gray/GHYFGWKYW5CMRHTINQDDFCN7CI.jpg"
            alt="Second slide"
          />
  
          <Carousel.Caption>
            <div className={styles.bgCaption}>
                <h1>รูป 2</h1>
                <p>รายละเอียดรูป 2</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ height:'30rem'}}>
          <img
            className="d-block img-fluid w-100"
            src="https://hips.hearstapps.com/amv-prod-gp.s3.amazonaws.com/gearpatrol/wp-content/uploads/2020/04/Weed-Terms-Gear-Patrol-Lead-Full.jpg"
            alt="Third slide"
          />
  
          <Carousel.Caption>
            <div className={styles.bgCaption}>
                <h1>รูป 3</h1>
                <p>รายละเอียดรูป 3</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
}