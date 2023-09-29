import {Modal} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import avacado from '../utils/img/AvocadoHass.jpg'
import {useState, useEffect} from 'react'
import ProductDetail from './ProductDetail';
import { changeStatus } from '../utils/StatusSlice';

const EditPopUp = (props) => {
    const statusOfItems = useSelector ((appStore) => appStore.status.statusOfItems)
    const {id, show, close} = props    

    const dispatch = useDispatch()

    // const handleSend = () => {
    //     if (statusOfItems[id].price == )
    //     dispatch(changeStatus({...statusOfItems[id], }))
    // }

    return (
        <Modal
            show={show}
            onHide={close}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">{statusOfItems[id]?.name?.substr(0,32)}...</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className='d-flex'>
                    <img src={avacado} style={{height: "100px", weight: "100px"}}alt="product-avacado"/>
                    <ProductDetail id={id}/>

                </div>
            </Modal.Body>
            <Modal.Footer>
                <button type="button" className="btn text-success fw-bold  btn-sm justify-content-end rounded-pill" onClick={close}>Cancel</button>
                <button type="button" className="btn btn-success fw-bold btn-sm justify-content-end rounded-pill pe-2 ps-2" onClick={close}>Send</button>
            </Modal.Footer>
        </Modal>
    )
}

export default EditPopUp