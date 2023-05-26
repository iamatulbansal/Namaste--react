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
        removeItem: (state = initialState, action) => {
            //Filter by id then remove menuitem
            state.items = state.items.filter(item => item.id !== action.payload.id)
        },
    }
})
export const { addItem, clearItems, removeItem } = cartSlice.actions
export default cartSlice.reducer
