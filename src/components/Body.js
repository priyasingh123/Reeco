import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";
import { Provider, useSelector } from 'react-redux';
import appStore from '../utils/store'
import CrossPopUp from "./CrossPopUp";
import {useState} from 'react';
import EditPopUp from "./EditPopUp";

const Body = () => {
    const [showLogin, setShowLogin] = useState(false);
    const [showEdit, setShowEdit] = useState(false);
    const [id, setId] = useState();
    // const openModal = useSelector((appStore) => appStore?.crossPopUp?.openModal)
    return (
        <>
        
        <div className="d-flex justify-content-center">
            <div className="border border-2 col-10 p-2">
                <SearchBar/>
                <ProductTable setShowLogin={setShowLogin} setShowEdit={setShowEdit} setId={setId}/>
                <CrossPopUp show={showLogin} close={() => setShowLogin(false)} id={id}/>
                <EditPopUp show={showEdit} close={() => setShowEdit(false)} id={id}/>
            </div>
        </div>
        
        </>
    )
}

export default Body;