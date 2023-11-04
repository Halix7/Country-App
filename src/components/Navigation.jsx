import React from 'react'
import {BsFillMoonFill,BsMoon} from "react-icons/bs"
const Navigation = ({isDark,setIsDark}) => {
  return (
    <div className={`w-full z-50 nuinto-sans shadow-md flex text-[1rem] md:text-lg justify-between px-2 py-5 md:px-10  ${isDark? "bg-dark-blue very-light-gray":"bg-white text-black"} `}>
        <h1 className='font-bold'>Where in the world? </h1>
        <button onClick={()=>setIsDark(!isDark)} className='flex items-center gap-1'>
            {
                isDark ? <BsFillMoonFill/>:<BsMoon/>
            }
            <span>Dark Mode</span>
        </button>
    </div>
  )
}

export default Navigation