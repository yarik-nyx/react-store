import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    totalPrice: 0,
    items:[]
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const foundItem = state.items.find(obj => obj.id === action.payload.id)
      if(foundItem){
        foundItem.count++
      } else {
        state.items.push({
          ...action.payload,
          count:1
        })
      }
      state.totalPrice += action.payload.price
    },
    removeItem: (state, action) => {
      const foundItem = state.items.find(obj => obj.id === action.payload)
      if(foundItem && foundItem.count > 1){
        foundItem.count -= 1
        state.totalPrice -= foundItem.price
      } else {
        state.items.filter(obj => obj.id !== action.payload)
      }
        
    },
    removeItems: (state, action) => {
      const foundItem = state.items.find(obj => obj.id === action.payload)
      state.totalPrice -= foundItem.price * foundItem.count
      state.items = state.items.filter(obj => obj.id !== action.payload)
    },
    clearItems: (state) => {
        state.items = []
        state.totalPrice = 0
    }
  },
})

export const {addItem, removeItem, clearItems, removeItems} = cartSlice.actions

export default cartSlice.reducer