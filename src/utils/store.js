
import {configureStore} from '@reduxjs/toolkit'
import StatusSliceReducer from './StatusSlice'

const appStore = configureStore({
    reducer: {
        status: StatusSliceReducer
    } 
})

export default appStore;