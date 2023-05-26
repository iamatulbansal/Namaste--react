import { createSlice } from '@reduxjs/toolkit'


const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state = initialState, action) => {

            state.items.push(action.payload)
        },
        clearItems: (state = initialState, action) => {
            state.items = []
        },
    }
})
export const { addItem, clearItems } = cartSlice.actions
export default cartSlice.reducer
