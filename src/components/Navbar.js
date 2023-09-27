const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-success ps-4">
            <div className="container-fluid">
                <a className="navbar-brand text-white bold" href="#">Reeco</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active text-white" aria-current="page" href="#">Store</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#">Orders</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#">Analytics</a>
                        </li>
                    </ul>
                    <i className="bi bi-cart"></i>
                        <a className="nav-link dropdown-toggle text-white" href="#" role="button"  aria-expanded="false">
                            Hello, James
                        </a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;