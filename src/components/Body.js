import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";
import { Provider, useSelector } from 'react-redux';
import appStore from '../utils/store'
import CrossPopUp from './CrossPopUp';

const Body = ({setOpenModal}) => {
    // const openModal = useSelector((appStore) => appStore?.crossPopUp?.openModal)
    return (
        <>
        
        <div className="d-flex justify-content-center">
            <div className="border border-2 col-10 p-2">
                <SearchBar/>
                <ProductTable setOpenModal={setOpenModal}/>
            </div>
        </div>
        
        </>
    )
}

export default Body;