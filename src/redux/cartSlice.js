import { createSlice } from '@reduxjs/toolkit'


const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        addItem: (state = initialState, action) => {

            state.push(action.payload)
        },
        removeItem: () => { },
    }
})
export const { addItem, removeItem } = cartSlice.actions
export default cartSlice.reducer
