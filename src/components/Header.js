const Header = () => {
    return (
        <>
        <div className="shadow-lg ">
            <label className="ps-5">Orders &gt; <a href='#' className="text-secondary">Order 32457ABC</a></label>
            <div className="row align-items-center ">
                <h5 className="col-6 ps-5">Order 32457ABC</h5>
                <div className="col-6 d-flex justify-content-end pe-5">
                    <button type="button" className="btn btn-outline-success btn-sm justify-content-end rounded-pill">Back</button>
                    <button type="button" className="btn btn-success btn-sm justify-content-end rounded-pill">Approve Order</button>
                </div>
                
            </div>
        </div>
        
        </>
    )
}

export default Header;