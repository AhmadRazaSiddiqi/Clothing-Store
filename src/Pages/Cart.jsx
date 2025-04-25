import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { addItem, removeItem } from "../Redux/Slices/cartSlice.js"

const Cart = () => {
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart.value)
  if (!cart) return <p>Loading...</p>

  const totalPrice = cart.reduce((acc, el) => {
    const { price, quantity } = el
    return acc + price * quantity
  }, 0)


  return (
  <div className="grid grid-cols-2">
    <div className=" overflow-x-hidden overflow-y-scroll">
      {cart.length === 0
        ? "Cart Is Empty"
        : cart.map((el, index) => {
            const {image, price, title, quantity } =
              el
            return (
              <div
                className="w-[50vw] h-[20vh] my-9 mx-auto flex border-y border-slate-300 py-2.5"
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
                      className="border-[1px] border-slate-900 hover:bg-slate-900 focus:bg-slate-900 w-6 h-6 cursor-pointer rounded hover:text-white ml-1 text-center pb-3 mr-1"
                      onClick={() => {
                        dispatch(removeItem(el))
                      }}
                    >
                      -
                    </button>
                    <span>{quantity}</span>
                    <button
                      className=" border-[1px] border-slate-900 hover:bg-slate-900 focus:bg-slate-900 w-6 h-6 cursor-pointer rounded hover:text-white ml-1 text-center pb-3"
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
 
    </div>
    <div className="">
        <p className="text-2xl text-center font-semibold border-b border-slate-500 mb-[30vh] ">Order Summary</p>
        <div className="flex justify-between px-4">
        <p className="font-bold text-lg">Parchased Items</p>
        <span className="font-semibold text-lg">$342</span>
        </div>
        <div className="flex justify-between w-full p-3">
        <p className="font-bold text-lg">Sales Tax</p>
        <span className="font-semibold text-lg">$2</span>
        </div>
        <div className="flex justify-between border-t-slate-400 border-t">
          <span className="font-bold ">Grand Total</span>
        <span className="text-xl font-semibold"> ${344}</span>
        </div>
    <div className=" text-center">
      </div>
      <div className="flex justify-center gap-2 mb-4"><input type="text" className="bg-white border border-slate-300 py-1 rounded w-52 " />
      <button className="bg-slate-800 text-white p-1 rounded">Apply Cuppon</button></div>
        <button className="rounded-md border-slate-800 block mx-auto py-2 px-4 border w-52  text-center text-sm  transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none hover:text-white hover:border-transparent focus:text-white font-bold disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" >Check Out</button>
    </div>
    </div>
  )
}

export default Cart
