import React, { useState } from "react"
import { useParams } from "react-router-dom"
import { useGetAllproductsQuery } from "../Redux/Slices/apiSlice.js"
import { useSelector, useDispatch } from "react-redux"
import {AddToCart} from "../Redux/Slices/cartSlice.js"
const ProductPage = () => {
  const [ProductQuantity, setProductQuantity] = useState(1)
  const { data, isLoading, isError } = useGetAllproductsQuery()
  const dispatch = useDispatch()
  const params = useParams()
  const { id } = params
  if (isLoading) return <p>Loading...</p>
  if (isError) return <p>There Was An Error</p>
  const Product = data.find((elem) => elem.id.toString() === id)
  const { title,description, category, image } = Product
  return (
    <div className="p-9 overflow-y-hidden">
      <div className="grid md:grid-cols-2">
        <img
          src={image}
          alt="product Image"
          className="w-[450px] h-[450px] object-contain"
        />
        <div>
          <h2 className="text-3xl">{title}</h2>
          <h4 className="text-lg">{description}</h4>
          <div className="flex flex-col">
            <div className="block mx-auto my-5">
              <button
                onClick={() => setProductQuantity(ProductQuantity - 1)}
                className="bg-slate-900 w-8 h-8 cursor-pointer rounded text-white"
                disabled={ProductQuantity === 1}
              >
                -
              </button>
              <span className="text-gray-950 mx-1 text-xl">
                {ProductQuantity}
              </span>
              <button
                onClick={() => setProductQuantity(ProductQuantity + 1)}
                className="bg-slate-900 w-8 h-8 cursor-pointer rounded text-white"
              >
                +
              </button>
            </div>
            <button
              onClick={() =>
                dispatch(
                  AddToCart({ product: Product, quantity: ProductQuantity })
                )
              }
              className="bg-slate-900 rounded h-10 cursor-pointer text-white px-5 w-52 block mx-auto hover:shadow-2xl"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductPage