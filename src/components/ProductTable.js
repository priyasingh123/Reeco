import {products} from '../utils/product'
import avacado from '../utils/img/AvocadoHass.jpg'
import StatusPanel from './StatusPanel'


const ProductTable = ({setShowLogin, setId, setShowEdit}) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col" className="col-1"></th>
                    <th scope="col" className="col-2 fw-normal text-secondary">Product Name</th>
                    <th scope="col" className="col-1 fw-normal text-secondary">Brand</th>
                    <th scope="col" className="col-1 fw-normal text-secondary">Price</th>
                    <th scope="col" className="col-1 fw-normal text-secondary">Quantity</th>
                    <th scope="col" className="col-1 fw-normal text-secondary">Total</th>
                    <th scope="col" className="col-3 fw-normal text-secondary">Status</th>
                </tr>
            </thead>
            <tbody>
                {products?.map ((product) => {
                    return (
                        <tr key={product.id}>
                            <th scope="row"><img className="img-fluid " src={avacado} alt="avacado"></img></th>
                            <td>{product.name}</td>
                            <td>{product.brand}</td>
                            <td>${product.price}/6*1LB</td>
                            <td><label className="fw-bold" style={{width: "20px"}}>{product.quantity}</label>{product.specific_quantity}</td>
                            <td>{product.total}</td>
                            <td className='bg-light'>{<StatusPanel product={product} setShowLogin={setShowLogin} setShowEdit={setShowEdit} setId={setId}/>}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default ProductTable