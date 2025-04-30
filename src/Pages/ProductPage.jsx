import React, { useState } from "react"
import { useParams } from "react-router-dom"
import { useGetAllproductsQuery } from "../Redux/Slices/apiSlice.js"
import { useDispatch } from "react-redux"
import { AddToCart } from "../Redux/Slices/cartSlice.js"
import { toast } from "react-toastify"
import ReactStars from "react-stars"

const ProductPage = () => {
  const [ProductQuantity, setProductQuantity] = useState(1)
  const { data, isLoading, isError } = useGetAllproductsQuery()
  const dispatch = useDispatch()
  const { id } = useParams()

  if (isLoading) return <p className="text-center py-20 text-xl">Loading...</p>
  if (isError) return <p className="text-center py-20 text-red-500">There Was An Error</p>

  const Product = data.find((elem) => elem.id.toString() === id)
  if (!Product) return <p className="text-center py-20 text-gray-600">Product not found.</p>

  const { title, description, category, image, rating, price } = Product

  return (
    <div className="p-8 md:p-16 bg-white text-black min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="flex justify-center">
          <img
            src={image}
            alt={`Image of ${title}`}
            className="w-full max-w-[400px] h-auto object-contain rounded-xl shadow-md"
          />
        </div>
        <div className="space-y-5">
          <h2 className="text-4xl font-onmibold">{title}</h2>
          <p className="text-gray-500 text-sm uppercase">{category}</p>
          <p className="text-lg text-gray-700">{description}</p>
          <div className="flex items-center gap-2">
            <span className="text-lg font-semibold">Rating:</span>
            <ReactStars count={5} size={24} value={rating?.rate || 0} edit={false} color2="#ffd700" />
            <span className="text-sm text-gray-500">({rating?.count || 0} reviews)</span>
          </div>
          <p className="text-2xl font-bold text-green-600">${price?.toFixed(2)}</p>

          <div className="flex items-center space-x-4 mt-4">
            <button
              onClick={() => setProductQuantity(ProductQuantity - 1)}
              className="bg-slate-800 text-white w-9 h-9 rounded-full text-xl flex items-center justify-center"
              disabled={ProductQuantity === 1}
            >
              -
            </button>
            <span className="text-xl">{ProductQuantity}</span>
            <button
              onClick={() => setProductQuantity(ProductQuantity + 1)}
              className="bg-slate-800 text-white w-9 h-9 rounded-full text-xl flex items-center justify-center"
            >
              +
            </button>
          </div>

          <button
            onClick={() => {
              dispatch(AddToCart({ product: Product, quantity: ProductQuantity }))
              toast.success("Added To Cart")
            }}
            className="mt-6 bg-yellow-500 text-white px-6 py-3 cursor-pointer rounded-full hover:bg-yellow-600 transition-all shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductPage
