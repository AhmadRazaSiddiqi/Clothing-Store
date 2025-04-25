import React, { useEffect, useState } from "react"
import { useGetAllproductsQuery } from "../Redux/Slices/apiSlice.js"
import { NavLink } from "react-router-dom"
import { useDispatch } from "react-redux"
import { AddToCart } from "../Redux/Slices/cartSlice.js"
import LoadingComponent from "./LoadingComponent.jsx"
import Search from "../Components/Search.jsx"
import { toast } from "react-toastify"
import Pagination from "../Components/Pagination.jsx"

const Home = () => {
  const dispatch = useDispatch()
  const { data } = useGetAllproductsQuery()
  useEffect(
    () => {
      if (data) {
        setData(data);
      }
    }, [data])

  const { isLoading, isError } = useGetAllproductsQuery()
  const [Data, setData] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(4);
  if (isLoading) return <LoadingComponent />
  if (isError) return <p>Something Went Wrong</p>
  let currentItems = Data.filter((el) => el.title.includes(searchTerm))
  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  currentItems = Data.slice(firstItemIndex, lastItemIndex);
  return (
    <>
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-4 place-items-center">
        {currentItems.map((el, index) => {
          const { id, discription, image, price, title } = el
          return (
            <div
              className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-72"
              key={index}
            >
              <NavLink
                className="relative h-56 m-2.5 overflow-hidden text-white rounded-md"
                to={`/product/${id}`}
              >
                <img
                  src={image}
                  className="ProductImg block mx-auto"
                  alt="card-image"
                />
              </NavLink>
              <div className="p-4">
                <h6 className="mb-2 text-slate-800 text-base font-semibold overflow-hidden whitespace-nowrap text-ellipsis px-2">
                  {title}
                </h6>
                <p className="text-slate-600 leading-normal font-light">
                  {discription}
                </p>
              </div>
              <div className="px-4 pb-4 pt-0 mt-2 flex justify-between items-center text-xl">
                <button
                  onClick={() => {
                    dispatch(AddToCart({ product: el, quantity: 1 }))
                    return toast.success('Added To Cart')
                  }
                  }
                  className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button"
                >
                  Add To Cart
                </button>
                ${price}
              </div>
            </div>
          )
        })}
      </div>
      <Pagination itemsPerPage={itemsPerPage} Data={Data} currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </>
  )
}

export default Home
