import React from 'react'
import { useState,useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { Search, ChevronDown, Menu, X } from 'lucide-react';


const Searchpage = () => {

const [searchOpen, setsearchOpen] = useState(true)


  return (
    <div>
        <div className=" bg-white border-b border-gray-100 py-4 px-4">
    <div className="max-w-3xl mx-auto flex items-center">
      <Search className="h-5 w-5 text-gray-400 mr-3" />
      <input
        type="text"
        placeholder="Search recipes, ingredients, cuisines..."
        className="w-full py-2 outline-none text-gray-700 placeholder-gray-400"
      />
      <button 
        onClick={() => setsearchOpen(false)}
        className="ml-4 text-gray-500 hover:text-gray-700"
      >
        <X className="h-15 w-15" />
      </button>
    </div>
  </div>

</div>
  )
}

export default Searchpage