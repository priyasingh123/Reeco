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

    const [price, setPrice] = useState(statusOfItems[id]?.price)
    const [quantity, setQuantity] = useState(statusOfItems[id]?.quantity)

    useEffect(() => {
        setPrice(statusOfItems[id]?.price);
        setQuantity(statusOfItems[id]?.quantity);
      }, [statusOfItems[id]?.price], [statusOfItems[id]?.quantity]);

    const handleSend = () => {
        if (statusOfItems[id].price !== price && statusOfItems[id].quantity !== quantity) {
            dispatch(changeStatus({...statusOfItems[id], price: price, quantity: quantity, status: 'Quantity and Price Updated'}))
        }
        else if (statusOfItems[id].price !== price) {
            dispatch(changeStatus({...statusOfItems[id], price: price, status: 'Price Updated'}))
        }
        else if (statusOfItems[id].quantity !== quantity) {
            dispatch(changeStatus({...statusOfItems[id], quantity: price, status: 'Quantity Updated'}))
        }
        else {
            //no update
        }
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
                <Modal.Title id="contained-modal-title-vcenter">{statusOfItems[id]?.name?.substr(0,32)}...</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className='d-flex'>
                    <img src={avacado} style={{height: "100px", weight: "100px"}}alt="product-avacado"/>
                    <ProductDetail id={id} price={price} quantity={quantity} setPrice={setPrice} setQuantity={setQuantity}/>

                </div>
            </Modal.Body>
            <Modal.Footer>
                <button type="button" className="btn text-success fw-bold  btn-sm justify-content-end rounded-pill" onClick={close}>Cancel</button>
                <button type="button" className="btn btn-success fw-bold btn-sm justify-content-end rounded-pill pe-2 ps-2" onClick={handleSend}>Send</button>
            </Modal.Footer>
        </Modal>
    )
}

export default EditPopUp