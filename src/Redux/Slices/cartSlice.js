import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  cartItems: JSON.parse(localStorage.getItem("cart")) || []
}

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const { id } = action.payload
      const found = state.cartItems.find((p) => p.id === id)
      if (found) {
        found.quantity += 1
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 })
      }
      localStorage.setItem("cart", JSON.stringify(state.cartItems))
    },
    removeItem: (state, action) => {
      const { id } = action.payload
      const found = state.cartItems.find((p) => p.id === id)
      if (found) {
        found.quantity -= 1
        if (found.quantity <= 0) {
          state.cartItems = state.cartItems.filter((i) => i.id !== id)
        }
      }
      localStorage.setItem("cart", JSON.stringify(state.cartItems))
    },
    AddToCart: (state, action) => {
      const { product, quantity } = action.payload
      const found = state.cartItems.find((p) => p.id === product.id)
      if (found) {
        found.quantity += quantity
      } else {
        state.cartItems.push({ ...product, quantity })
      }
      localStorage.setItem("cart", JSON.stringify(state.cartItems))
    },
  },
})
export const { addItem, removeItem, AddToCart } = cartSlice.actions
export default cartSlice.reducer