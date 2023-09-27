const SearchBar = () => {
    return (
        <div className="d-flex">
            <div className="col-10 align-items-center p-3">
                <input className="border border border-2 col-5  ps-3 rounded-5" placeholder="Search..." />
                <i className="bi bi-search"></i>
            </div>
            <button className="col-1 btn btn-outline-success btn-sm rounded-5 fw-bold m-3">Add Item</button>
            <i className="bi bi-printer" style={{fontSize: '2rem'}}></i>

        </div>
    )
}

export default SearchBar;