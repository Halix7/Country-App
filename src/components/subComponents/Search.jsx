import React from 'react'
import {AiOutlineSearch} from "react-icons/ai";
const Search = ({isDark , setSearchValue,searchValue}) => {
  const handleChange=(e)=>{
setSearchValue(e.target.value);
  }
  return (
    <div className={`inline-flex  gap-4 pl-6 py-5 rounded-md ${isDark? "bg-dark-blue very-light-gray":"bg-white text-black"} mx-6 px-3 text-sm font-semibold  shadow-md`} >
        <button className='text-lg'>
            <AiOutlineSearch/>
        </button>
        <input type="text" placeholder='Search for a country...' className={`focus:outline-none md:text-lg flex w-[20rem] ${isDark? "bg-dark-blue very-light-gray":"bg-white  text-black "}`} value={searchValue} onChange={handleChange}/>
    </div>
  )
}
export default Search