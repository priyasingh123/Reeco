import appStore from '../utils/store'
import { useSelector } from 'react-redux'
import {useState} from 'react'

const ProductDetail = ({id, price, quantity, setPrice, setQuantity}) => {

    const statusOfItems = useSelector ((appStore) => appStore.status.statusOfItems)
    console.log ('price ',price)
    return (
        <div className="container">
            <div className="row mb-2">
                <label className="col-6 ">{`Price ($)`}</label>
                <div className="col-6">
                    <label className="text-secondary"><input className="col-4 rounded-2 border border-normal" value={price} onChange={(e)=> setPrice(e.target.value)}/> / 6 * 1LB</label>
                </div>
            </div>
            <div className="row mb-2">
                <label className="col-5 ">{`Quantity`}</label>
                <div className="col-7">
                    <label className="text-secondary">
                        <button className="btn btn-sm btn-success me-2" disabled={quantity <= 0} onClick={() => setQuantity(quantity-1)}>-</button>
                        <input className="col-2 rounded-2 border border-normal" value={quantity} onChange={(e) => setQuantity(e.target.value)}/> 
                        <button className="btn btn-sm ms-2 me-2 btn-success" onClick={() => setQuantity(quantity+1)}>+</button>
                        X 6 * 1LB
                    </label>
                </div>
            </div>
            <div className="row">
                <label className="col-6 ">{`Total`}</label>
                <div className="col-6">
                    <label className="text-secondary">{statusOfItems[id].total}</label>
                </div>
            </div>

        </div>
    )
}

export default ProductDetail