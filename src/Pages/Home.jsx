import React, { useEffect, useState } from "react";
import {
  useGetAllproductsQuery,
  useGetCategoriesQuery,
} from "../Redux/Slices/apiSlice.js";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AddToCart } from "../Redux/Slices/cartSlice.js";
import LoadingComponent from "./LoadingComponent.jsx";
import Search from "../Components/Search.jsx";
import { toast } from "react-toastify";
import Pagination from "../Components/Pagination.jsx";
import { Slider } from "../Components/Slider.jsx";

const Home = () => {
  const dispatch = useDispatch();
  const { data } = useGetAllproductsQuery();
  const { data: categories } = useGetCategoriesQuery();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [toggle, setToggle] = useState(true);
  const [selectValue,setSelectvalue]=useState("")

  useEffect(() => {
    if (data) {
      setData(data);
    }
  }, [data]);

  const { isLoading, isError } = useGetAllproductsQuery();
  const [Data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(8);

  if (isLoading) return <LoadingComponent />;
  if (isError) return <p>Something Went Wrong</p>;

  let filteredItems = Data;
  if (selectedCategory !== "all") {
    filteredItems = Data.filter((item) => item.category === selectedCategory);
  }
  
  filteredItems = filteredItems.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const SortByprice = () => {
    filteredItems = [...filteredItems].sort((a, b) => a.price - b.price);
    setData(filteredItems);
    setToggle(false);
  };
  const SortBypricedesc = () => {
    filteredItems = [...filteredItems].sort((a, b) => b.price - a.price);
    setData(filteredItems);
    setToggle(true);
  };

  const totalItems = filteredItems.length;
  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const currentItems = filteredItems.slice(firstItemIndex, lastItemIndex);
 
  const handleSort=(e)=>{
    const value=e.target.value
    setSelectvalue(value)
    if(value==="Low") SortByprice()
      else if(value==="High") SortBypricedesc()
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <Slider />
      <div className="max-w-7xl mx-auto px-4">
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <carousel className="h-52 w-full" />

        <div className="flex flex-wrap justify-center gap-3 my-6">
          <button
            onClick={() => {
              setSelectedCategory("all");
              setCurrentPage(1);
            }}
            className={`px-4 py-2 rounded-full transition-all duration-300 cursor-pointer ${
              selectedCategory === "all"
                ? "bg-slate-800 text-white shadow-md cursor-pointer"
                : "bg-white text-slate-800 hover:bg-slate-100 border border-slate-200 cursor-pointer"
            }`}
          >
            All Products
          </button>
          {categories &&
            categories.map((category, index) => (
              <button
                key={index}
                onClick={() => {
                  setSelectedCategory(category);
                  setCurrentPage(1);
                }}
                className={`px-4 py-2 rounded-full transition-all duration-300 cursor-pointer ${
                  selectedCategory === category
                    ? "bg-slate-800 text-white shadow-md"
                    : "bg-white text-slate-800 hover:bg-slate-100 border border-slate-200"
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
  <select value={selectValue} onChange={handleSort} onSelect={handleSort} className="focus:outline-0 cursor-pointer">
    <option value="" selected disabled hidden>Sort By Price</option>
    <option value="High"  className="cursor-pointer">High To Low</option>
    <option value="Low"  className="cursor-pointer">Low To High</option>
  </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8">
          {currentItems.map((el, index) => {
            const { id, discription, image, price, title } = el;
            return (
              <div
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
                key={index}
              >
                <NavLink
                  className="block h-64 relative overflow-hidden group"
                  to={`/product/${id}`}
                >
                  <img
                    src={image}
                    className="w-full h-full object-contain p-4 transform transition-transform duration-300 group-hover:scale-105"
                    alt={title}
                  />
                </NavLink>
                <div className="p-5">
                  <h6 className="text-lg font-semibold text-slate-800 mb-2 overflow-hidden whitespace-nowrap text-ellipsis">
                    {title}
                  </h6>
                  <p className="text-slate-600 text-sm line-clamp-2 mb-4">
                    {discription}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-slate-800">
                      ${price.toFixed(2)}
                    </span>
                    <button
                      onClick={() => {
                        dispatch(AddToCart({ product: el, quantity: 1 }));
                        toast.success("Added To Cart");
                      }}
                      className="rounded-full bg-slate-800 py-2 px-6 text-white text-sm font-medium cursor-pointer transition-all duration-300 hover:bg-yellow-500 focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2"
                      type="button"
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold text-slate-600">
              No products found
            </h3>
            <p className="text-slate-500 mt-2">
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}

        <Pagination
          itemsPerPage={itemsPerPage}
          totalItems={totalItems}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default Home;
