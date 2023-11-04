import React, { useState } from "react";
import Filter from "./subComponents/Filter";
import Search from "./subComponents/Search";
import Card from "./subComponents/Card";

const Home = ({ isDark, data }) => {
  const [searchValue, setSearchValue] = useState("");
  const [filterValue, setFilterValue] = useState("Asia");

  const filteredValue = data?.filter((item) => {
    if(searchValue){

      return item.name.toLowerCase().includes(searchValue.toLowerCase()) ;
     
    } else{
     return  item.region === filterValue;
    }
  });
  // console.log(filteredValue);
  return (
    <main
      className={`${
        isDark
          ? "bg-very-dark-blue very-light-gray"
          : "bg-very-light-gray very-dark-blue"
      }`}
    >
      <div
        className={`${
          isDark
            ? "bg-very-dark-blue very-light-gray"
            : "bg-very-light-gray very-dark-blue"
        } flex flex-col  md:flex-row pt-4 gap-3 md:items-center md:justify-between md:px-12`}
      >
        <Search
          isDark={isDark}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />

        <Filter isDark={isDark} setFilterValue={setFilterValue} />
      </div>
      <div className="grid gap-12 mx-12 md:mx-20 py-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-3">
        {filteredValue !== undefined ? (
          filteredValue?.map((item, index) => (
            <Card key={index} dataInfo={item} isDark={isDark} />
          ))
        ) : (
          <div className="text-center">
            <h1 className="font-bold text-lg">Cautious.</h1>
            <p className="text-sm">
              Here we have some problem related to you current information. Try
              using region and search carefully.
            </p>
          </div>
        )}
      </div>
    </main>
  );
};

export default Home;
