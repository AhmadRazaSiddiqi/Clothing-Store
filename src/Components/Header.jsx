import React from "react"
import { NavLink } from "react-router-dom"
import { useSelector } from "react-redux"
import { FiShoppingCart } from "react-icons/fi"

const Header = () => {
  const cartItems = useSelector((state) => state?.cart?.cartItems ?? [])

  return (
    <header className="bg-slate-800 text-white sticky top-0 z-50 shadow-lg">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo/Brand with enhanced styling */}
          <NavLink 
            to="/" 
            className="text-2xl font-bold flex items-center gap-2 transition-transform hover:scale-105"
          >
            <span className="text-yellow-400">Shop</span>
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Hub</span>
          </NavLink>

          {/* Navigation Links with improved hover effects */}
          <div className="flex items-center gap-8">
        

            <NavLink 
              to="/cart" 
              className={({ isActive }) =>
                `flex items-center gap-2 hover:text-yellow-400 transition-all duration-300 ease-in-out transform hover:-translate-y-0.5 ${
                  isActive ? "text-yellow-400" : ""
                }`
              }
            >
              <div className="relative">
                <FiShoppingCart size={20} className="transition-transform group-hover:scale-110" />
                {cartItems.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-yellow-400 text-slate-800 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold shadow-md transform transition-transform hover:scale-110">
                    {cartItems.length}
                  </span>
                )}
              </div>
              <span className="font-medium">Cart</span>
            </NavLink>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header