import React from "react";
import { useDispatch } from "react-redux";
import { emptyCart } from "../Redux/Slices/cartSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify"
const Checkout = () => {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const checkout=()=>{
    setTimeout(() => {
      
      navigate('/cart')
      dispatch(emptyCart())
    }, 1500);

  }
  return (
    <div className="min-h-screen w-full grid grid-cols-2 bg-gray-200 gap-5 py-9  ">
      <div className="p-9 bg-white">
        <h1 className="font-semibold text-xl">Delievery Information</h1>
        <form action="#" className="grid grid-cols-2  gap-y-5 text-sm pt-9">
          <div>
            <label htmlFor="" className=" text-gray-600">First Name</label> <br />
            <input
              type="text"
              name="firstName"
              placeholder="Enter Your First Name"
              className=" outline-1 outline-gray-400  p-2 w-[80%]"
            />
          </div>
          <div>
            <label htmlFor="" className=" text-gray-600">Last Name</label> <br />
            <input
              type="text"
              name="lastName"
              placeholder="Enter Your Last Name"
              className=" outline-1 outline-gray-400  p-2 w-[80%]"
            />
          </div>
          <div>
            <label htmlFor="" className=" text-gray-600">Enter Your Phone Number</label> <br />
            <input
              type="text"
              name="phone"
              placeholder="Enter Your Phone Number"
              className=" outlinne-none  outline-1 outline-gray-400 p-2 w-[80%]"
            />
          </div>
          <div>
            <label htmlFor="" className=" text-gray-600">Province</label> <br />
            <select
              name="Province"
              className=" outlinne-none  outline-1 outline-gray-400 p-2 w-[80%]"
            >
              <option
                value=""
                disabled
                selected
                hidden
                className=" text-gray-400"
              >
                Choose your province
              </option>
              <option value="">Punjab</option>
              <option value="">Sindh</option>
              <option value="">Balochistan</option>
              <option value="">KP</option>
            </select>
          </div>
          <div>
            <label htmlFor="" className=" text-gray-600">Area</label> <br />
            <input
              type="text"
              name="address"
              placeholder="Please Enter Your Area"
              className=" outlinne-none  outline-1 outline-gray-400 p-2 w-[80%]"
            />
          </div>
          <div>
            <label htmlFor="" className=" text-gray-600">City</label> <br />
            <select
              type="text"
              name="address"
              placeholder="Please Select Your City"
              className=" outlinne-none  outline-1 outline-gray-400 p-2 w-[80%]"
            >
              <option value="">Lahore</option>
              <option value="">Karachi</option>
              <option value="">Faislabad</option>
              <option value="">Multan</option>
            </select>
          </div>
        </form>
      </div>
      <div className="bg-white h-[90%] w-[80%] p-10">
        <h1 className="font-bold text-2xl text-center">Order Summary</h1>
        <div className="h-[80%] w-full  flex flex-col items-center justify-evenly py-6">
          <h2 className="px-0">Subtotal <span>(1 items)</span></h2>
          <h2>Total Price <span>$45.67</span></h2>
          <button className="w-[80%] bg-slate-800 text-white py-3 rounded-full font-semibold hover:bg-yellow-500 transition-colors duration-300 focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2" onClick={()=>{
            toast.success("Checkout Successful")
            return checkout()
          }}>
            CheckOut
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
