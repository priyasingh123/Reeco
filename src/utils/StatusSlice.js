import {createSlice} from '@reduxjs/toolkit'


const statusSlice = createSlice({
    name: "status",
    initialState: {
        statusOfItems: []
    },
    reducers: {
        changeStatus: (state, action) => {
            console.log ('payload', action.payload)
            state.statusOfItems[action.payload.id] = action.payload.status
        }
    }
})

export const {changeStatus} = statusSlice.actions;
export default statusSlice.reducer;