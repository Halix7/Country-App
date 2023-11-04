import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Navigation from './components/Navigation';
import data from "./data.json";
import Details from './components/Details';


function App() {
  const [isDark, setIsDark] = useState(true);
  const dataInfo=JSON.parse(JSON.stringify(data));
  
  return (
    <div className={` ${
      isDark
        ? "bg-very-dark-blue very-light-gray dark"
        : "bg-very-light-gray very-dark-blue"
    }  md:h-[100vh] overflow-auto `}  >
      <Navigation isDark={isDark} setIsDark={setIsDark}/>
        <Routes>
        <Route exact path="/" element={<Home isDark={isDark} data={dataInfo}/>}/>
        <Route exact path="/details/:id" element={<Details isDark={isDark} data={dataInfo}/>}/>
      </Routes>
    </div>
  )
}

export default App
