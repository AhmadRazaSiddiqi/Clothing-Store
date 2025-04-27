import React from "react"
import { FiSearch } from "react-icons/fi"

const Search = ({ searchTerm, setSearchTerm }) => {
  const handleSearch = (e) => {
    setSearchTerm(e.target.value)
  }

  return (
    <div className="w-full flex justify-center p-4">
      <div className="relative w-full max-w-md">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
          <FiSearch size={18} />
        </div>
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={handleSearch}
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>
    </div>
  )
}

export default Search