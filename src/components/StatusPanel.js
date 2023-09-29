import { useDispatch, useSelector } from 'react-redux'
import { changeStatus } from '../utils/StatusSlice'
import StatusButton from './StatusButton'
import '../utils/styles/modal.css'

const StatusPanel = ({ product, setShowLogin, setShowEdit, setId }) => {
    const dispatch = useDispatch()
    const statusOfItems = useSelector((appStore) => appStore.status.statusOfItems)
    // console.log ('store ',statusOfItems)
    const handleCheck = () => {
        dispatch(changeStatus({ ...product, status: "Approved" }))
    }
    
    const handleCross = (id) => {
        //dispatch(changeStatus({ ...product, status: "" }))
        setId(id)
        setShowLogin(true)
    }

    const handleEdit = (id) => {
        //dispatch(changeStatus({ ...product, status: "" }))
        setId(id)
        setShowEdit(true)
    }

    const mapStatus = (status) => {
        let type;
        switch (status) {
            case "Approved":
                type = 'success'
                break;
            case "Price Updated":
                type = 'success'
                break;
            case "Quantity Updated":
                type = 'success'
                break;
            case "Quantity and Price Updated":
                type = 'success'
                break;
            case "Missing":
                type = 'danger'
                break;
            case "Missing - Urgent":
                type = 'warning'
                break;
            default:
                type = ''
        }
        return type;
    }

    return (
        <div className="d-flex justify-content-end">
            {statusOfItems[product.id]?.status && <StatusButton status={statusOfItems[product.id]?.status}/>}
            <i className={`bi bi-check-lg text-secondary p-2 fs-2 pe-auto text-${mapStatus(statusOfItems[product.id]?.status == "Approved" | "Price Updated" | "Quantity Updated" | "Quantity and Price Updated" ? statusOfItems[product.id]?.status: '')}`} onClick={handleCheck}></i>
            <i className={`bi bi-x-lg text-secondary p-2 cursor-pointer pe-auto fs-2 text-${mapStatus(statusOfItems[product.id]?.status !== "Approved" ? statusOfItems[product.id]?.status: '')}`} onClick={() => handleCross(product.id)}></i>
            <label className="text-secondary p-2 mt-2 fs-5" onClick={()=>handleEdit(product.id)}>Edit</label>            
        </div>
    )
}

export default StatusPanel