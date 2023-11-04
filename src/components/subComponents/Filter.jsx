import React, { useState } from 'react'

const Filter = ({isDark,setFilterValue}) => {
    const [options, setOptions] = useState(false);
  const handleClick=(e)=>{
    setFilterValue(e.target.value);
  }
  return (
    <div className="relative inline-block text-left ml-6 ">
    <div>
      <button type='text' className={`inline-flex w-52 justify-between gap-x-1.5 rounded-md ${isDark? "bg-dark-blue very-light-gray":"bg-white text-black"} px-5 py-4 text-sm font-semibold  shadow-md md:text-lg items-center`}  onClick={()=>setOptions(!options)}>
        Filter by Region
        <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
        </svg>
      </button>
    </div>
  
   
    <div className={`${options ? "flex":"hidden"} ${isDark? "bg-dark-blue very-light-gray":"bg-white text-black"} absolute right-1  z-10 mt-1 w-52 origin-top-right rounded-md  shadow-lg  focus:outline-none left-0`}>
      <div className="py-1" role="none">
  
        <button onClick={handleClick} value={"Africa"} className="block px-4 py-2 text-sm md:text-lg active:scale-95 " role="menuitem" tabIndex="-1" id="menu-item-0">Africa</button>
        <button onClick={handleClick}  value={"Americas"} className=" block px-4 py-2 text-sm md:text-lg active:scale-95  " role="menuitem" tabIndex="-1" id="menu-item-1">America</button>
        <button onClick={handleClick} value={"Asia"} className="  block px-4 py-2 text-sm md:text-lg active:scale-95 " role="menuitem" tabIndex="-1" id="menu-item-2">Asia</button>
        <button onClick={handleClick}  value={"Europe"} className=" block px-4 py-2 text-sm md:text-lg active:scale-95 " role="menuitem" tabIndex="-1" id="menu-item-2">Europe</button>
        <button onClick={handleClick}  value={"Oceania"} className="  block px-4 py-2 text-sm md:text-lg active:scale-95 " role="menuitem" tabIndex="-1" id="menu-item-2">Oceania</button>
        
      </div>
    </div>
    </div>
  )
}

export default Filter