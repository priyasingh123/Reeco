import { useDispatch, useSelector } from 'react-redux'
import { changeStatus } from '../utils/StatusSlice'
import StatusButton from './StatusButton'
import '../utils/styles/modal.css'

const StatusPanel = ({ product, setShowLogin, setId }) => {
    const dispatch = useDispatch()
    const statusOfItems = useSelector((appStore) => appStore.status.statusOfItems)
    console.log ('store ',statusOfItems)
    const handleCheck = () => {
        dispatch(changeStatus({ ...product, status: "Approved" }))
    }
    
    const handleCross = (id) => {
        dispatch(changeStatus({ ...product, status: "" }))
        setId(id)
        setShowLogin(true)
    }

    return (
        <div className="d-flex justify-content-end">
            {statusOfItems[product.id]?.status && <StatusButton status={statusOfItems[product.id]?.status}/>}
            <i className={`bi bi-check-lg text-secondary p-2 text-success} fs-2`} onClick={handleCheck}></i>
            <i className="bi bi-x-lg text-secondary p-2" onClick={() => handleCross(product.id)}></i>
            <label className="text-secondary p-2 ">Edit</label>            
        </div>
    )
}

export default StatusPanel