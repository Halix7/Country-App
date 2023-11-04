import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Card = ({dataInfo,isDark}) => {
  return (
    <div className={` rounded-xl `}>
    
    <div className={`max-w-md  ${isDark? "bg-dark-blue very-light-gray":"bg-white text-black"}  shadow-lg overflow-hidden  transform hover:scale-105 transition-transform duration-500 bg-inherit h-[100%] w-full rounded-xl`}>

    <NavLink to={`/details/${dataInfo?.callingCodes[0]}`}  >
      
      <img
        src={dataInfo.flag}
        alt="flag"
        className="w-full h-48 object-cover object-center flex  "
     
      />
      <div className="p-6">
        <h1 className="text-3xl font-bold  mb-4">{dataInfo.name}</h1>
        <p className="mb-2">
          Population: <span>{dataInfo.population}</span>
        </p>
        <p className=" mb-2">
        Region: <span>{dataInfo.region}</span>
        </p>
        <p className="">
        Capital: <span>{dataInfo.capital}</span>
        </p>
      </div>
    </NavLink>
  
    </div>
  </div>
  )
}

export default Card