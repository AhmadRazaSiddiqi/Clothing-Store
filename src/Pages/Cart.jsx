import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { NavLink,useNavigate } from "react-router-dom"
import { AddToCart, deleteItem, emptyCart, removeItem } from "../Redux/Slices/cartSlice"
import { toast } from "react-toastify"
import { FaTrashCan } from "react-icons/fa6"

const Cart = () => {
  const navigate=useNavigate()
  const dispatch = useDispatch()
  const cart = useSelector((state) => state?.cart?.cartItems) || []
  
  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0)

  if (!cart || cart.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">Your cart is empty</h2>
          <p className="text-slate-600 mb-6">Looks like you haven't added anything to your cart yet</p>
          <NavLink
            to="/"
            className="inline-block bg-slate-800 text-white px-6 py-3 rounded-full hover:bg-yellow-500 transition-colors duration-300"
          >
            Continue Shopping
          </NavLink>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-slate-800 mb-8">Shopping Cart</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex gap-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-24 h-24 object-contain"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-slate-800 mb-2">{item.title}</h3>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center border rounded-full overflow-hidden bg-gray-50">
                          <button
                            className="px-3 py-1 hover:bg-gray-100 text-slate-600 transition-colors"
                            onClick={() => dispatch(removeItem(item))}
                          >
                            -
                          </button>
                          <span className="px-4 py-1 font-medium text-slate-800">
                            {item.quantity}
                          </span>
                          <button
                            className="px-3 py-1 hover:bg-gray-100 text-slate-600 transition-colors"
                            onClick={() => dispatch(AddToCart({ product: item, quantity: 1 }))}
                          >
                            +
                          </button>    
                        </div>
                        <button className="hover:text-red-700 pl-96 transition-all duration-500">
                          <FaTrashCan className="cursor-pointer" onClick={()=>dispatch(deleteItem(item))} />
                        </button>
                      </div>
                      <span className="font-bold text-slate-800">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-bold text-slate-800 mb-6">Order Summary</h2>
            <div className="space-y-4">
              <div className="flex justify-between py-2">
                <span className="text-slate-600">Subtotal</span>
                <span className="font-semibold">${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between py-2 border-t border-gray-100">
                <span className="text-slate-600">Shipping</span>
                <span className="font-semibold">Free</span>
              </div>
              <div className="flex justify-between py-2 border-t border-gray-100">
                <span className="text-slate-600">Tax</span>
                <span className="font-semibold">${(totalPrice * 0.1).toFixed(2)}</span>
              </div>
              <div className="flex justify-between py-4 border-t border-gray-100">
                <span className="font-bold text-lg">Total</span>
                <span className="font-bold text-lg">
                  ${(totalPrice * 1.1).toFixed(2)}
                </span>
              </div>

              <button className="w-full bg-slate-800 cursor-pointer text-white py-3 rounded-full font-semibold hover:bg-yellow-500 transition-colors duration-300 focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2" onClick={()=> navigate('/checkout')
              }>
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart