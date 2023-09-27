import { useDispatch, useSelector } from 'react-redux'
import { changeStatus } from '../utils/StatusSlice' 
import { openModal } from '../utils/ModalSlice'
import StatusButton from './StatusButton'

const StatusPanel = ({product, setOpenModal}) => {
    const dispatch = useDispatch()
    const statusOfItems = useSelector((appStore) => appStore.status.statusOfItems)

    const handleCheck = () => {
        dispatch(changeStatus({id: product.id, status:"Approved"}))
    }

    const handleCross = () => {
        console.log ('show modal')
        setOpenModal(true)
    }

    return (
        <>
        <div className="d-flex justify-content-end">
            {statusOfItems[product.id] && <StatusButton/>}
            <i className={`bi bi-check-lg text-secondary p-2 text-success} fs-2` }  onClick={handleCheck}></i>
            <i className="bi bi-x-lg text-secondary p-2" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={handleCross}></i>
            <label className="text-secondary p-2 ">Edit</label>
        </div>
        </>
    )
}

export default StatusPanel