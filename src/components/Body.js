import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";

const Body = () => {
    return (
        <div className="d-flex justify-content-center">
            <div className="border border-2 col-10 p-2">
                <SearchBar/>
                <ProductTable/>
            </div>
        </div>
    )
}

export default Body;