import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { addItem, removeItem } from "../Redux/Slices/cartSlice.js"

const Cart = () => {
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart.value)
  if (!cart) return <p>Loading...</p>

  // Calculate the total price of all items in the cart
  const totalPrice = cart.reduce((acc, el) => {
    const { price, quantity } = el
    return acc + price * quantity
  }, 0)


  return (
    <div className=" overflow-x-hidden">
      {cart.length === 0
        ? "Cart Is Empty"
        : cart.map((el, index) => {
            const {image, price, title, quantity } =
              el
            return (
              <div
                className="w-[50vw] h-[20vh] my-9 mx-auto flex"
                key={index}
              >
                <img
                  src={image}
                  alt=""
                  className="h-full w-[20%] object-contain mr-3.5"
                />
                <div className="h-full content-center font-semibold">
                  <p>{title}</p>
                  <div className="mt-5">
                    <button
                      className="bg-slate-900 w-8 h-8 cursor-pointer rounded text-white mr-1"
                      onClick={() => {
                        dispatch(removeItem(el))
                      }}
                    >
                      -
                    </button>
                    <span>{quantity}</span>
                    <button
                      className="bg-slate-900 w-8 h-8 cursor-pointer rounded text-white ml-1"
                      onClick={() => {
                        dispatch(addItem(el))
                      }}
                    >
                      +
                    </button>
                    <span className="ml-20 font-bold">${price * quantity}</span>
                  </div>
                </div>
              </div>
            )
          })}
      <div className="block text-center w-screen">
        <p className="text-xl font-bold">Total: ${totalPrice}</p>
      </div>
    </div>
  )
}

export default Cart
