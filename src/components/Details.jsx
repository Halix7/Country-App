import React from "react";
import { Link, useParams } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

const Details = ({ data, isDark }) => {
  const { id } = useParams();
  const filteredData = data.filter((item) => item?.callingCodes[0] === id);

//   console.log(filteredData);
  return (
    <div className={`  px-6 py-5  md:mx-16 md:my-10`}>
      <button
        className={`${
          isDark ? "bg-dark-blue very-light-gray" : "bg-white text-black"
        } shadow-lg px-5 py-1 my-8`}
      >
        <Link to={`/`} className="flex items-center gap-2 text-md md:text-lg">
          <BiArrowBack />
          <h4>Back</h4>
        </Link>
      </button>
      <div className="md:grid md:grid-cols-3 md:gap-5">
        <img src={filteredData[0]?.flag} alt="flag" className=" h-[16rem] md:h-full row-span-2" />
        <div className="flex flex-col gap-3 my-8 md:mx-14 ">
          <h1 className="font-bold text-3xl my-4">{filteredData[0]?.name}</h1>
          <p className="font-semibold">
            Population: <span className=" font-normal">{filteredData[0]?.population.toLocaleString()}</span> 
          </p>
          <p  className="font-semibold">
            Region: <span className=" font-normal">{filteredData[0]?.region}</span> 
          </p>
          <p className="font-semibold">
            Sub Region: <span className=" font-normal">{filteredData[0]?.subregion}</span> 
          </p>
          <p className="font-semibold">
            Capital: <span className=" font-normal">{filteredData[0]?.capital}</span> 
          </p>
        </div>
        <div className="flex flex-col gap-3 my-8 md:my-28 ">
          <p className="font-semibold"> Top Level Domain: <span className=" font-normal">
                {filteredData[0]?.topLevelDomain?.map((domain)=>domain)}
            </span> 
            </p>
          <p className="font-semibold"> 
            Currencies: <span className=" font-normal">
            {filteredData[0]?.currencies?.map((currency)=>currency.code)}
            </span> 
            </p>
          <p className="font-semibold"> 
            Languages: <span className=" font-normal">
                {
                    filteredData[0]?.languages?.map((language)=>language.name).join(",")
                }
            </span> 
            </p>
        </div>
        <div className="flex col-span-2 flex-col md:flex-row md:items-center md:gap-3 md:mx-14 ">
            <h4 className="font-semibold text-xl text-left">Border Countries:</h4>
            <div className="flex gap-4 flex-wrap mt-5 md:mt-0 items-center ">
                { filteredData[0]?.borders ?
                    filteredData[0]?.borders?.map((country)=>(
                        <>
                        <button
                        className={`${
                          isDark ? "bg-dark-blue very-light-gray" : "bg-white text-black"
                        } shadow-lg px-5 py-1  `}
                      >
                        <p className="flex items-center gap-2 text-md md:text-lg">
                         {
                            country
                         }
                          
                        </p>
                      </button>
                        </>
                    )):(<h3 >No Border which connects it to any other country</h3>)
                }
           
            </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
