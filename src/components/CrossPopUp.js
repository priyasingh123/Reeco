import { useState } from 'react'
import '../utils/styles/modal.css'
import { Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import appStore from '../utils/store';
import { changeStatus } from '../utils/StatusSlice';
import { useDispatch, useSelector } from 'react-redux';

const CrossPopUp = (props) => {
    const statusOfItems = useSelector ((appStore) => appStore.status.statusOfItems)
    const dispatch = useDispatch()

    const {id, show, close} = props
    const handleNo = () => {
        dispatch(changeStatus({...statusOfItems[id], status: 'Missing'}))
        close()
    }

    const handleYes = () => {
        dispatch(changeStatus({...statusOfItems[id], status: 'Missing - Urgent'}))
        close()
    }


    return (
        <Modal
            show={show}
            onHide={close}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">Missing product</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <label>Is '{statusOfItems[id]?.name?.substr(0,32)}'... urgent ?</label>
            </Modal.Body>
            <Modal.Footer>
                <button className="border border-0 bg-white fw-bold " onClick={handleNo}>No</button>
                <button className="border border-0 bg-white fw-bold " onClick={handleYes}>Yes</button>
            </Modal.Footer>
        </Modal>
    );
};

export default CrossPopUp;