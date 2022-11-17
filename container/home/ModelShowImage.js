
import Modal from 'react-bootstrap/Modal';
import { Image, Button } from 'react-bootstrap';

export default function ModelShowImage({ show, image, handleClose }) {
    return <>
        <Modal
            className='show-img'
            size="lg"
            show={show}
            onHide={handleClose}
            aria-labelledby="example-modal-sizes-title-sm">
            {/* <Button className='bgclcolor' variant="danger" onClick={handleClose}>
                Close
            </Button> */}
            <Image src={image} alt="iodesign-slider-image" />
        </Modal>
    </>;
}