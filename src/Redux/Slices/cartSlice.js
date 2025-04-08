import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  value: JSON.parse(localStorage.getItem("cart")) || []
}

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const { id} = action.payload
      const found = state.value.find((p) => p.id === id)
      if (found) {
        found.quantity += 1
      } else {
        state.value.push({ ...action.payload, quantity: 1 })
      }
      localStorage.setItem("cart", state.value)
    },
    removeItem: (state, action) => {
      const { id } = action.payload
      const found = state.value.find((p) => p.id === id)
      if (found) {
        found.quantity -= 1
        if (found.quantity <= 0) {
          state.value = state.value.filter((i) => i.id !== id)
        }
      }
      localStorage.setItem("cart", JSON.stringify( state.value))
    },
    AddToCart: (state, action) => {
      const { product, quantity } = action.payload
      const found = state.value.find((p) => p.id === product.id)
      if (found) {
        found.quantity += quantity
      } else {
        state.value.push({ ...product, quantity })
      }
      localStorage.setItem("cart",JSON.stringify(state.value))
    },
  },
})
export const { addItem, removeItem, AddToCart } = cartSlice.actions
export default cartSlice.reducer
