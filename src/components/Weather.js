import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaStreetView } from 'react-icons/fa'
function Weather() {
    const [city, setCity] = useState("");
    const [search, setSearch] = useState("Faisalabad");
    const navigate = useNavigate();
  
    useEffect(() => {
      const fetchApi = async () => {
        try {
          const URL = `https://goweather.herokuapp.com/weather/${search}`;
          const response = await fetch(URL);
          if (response.ok) {
            const resJson = await response.json();
            setCity(resJson);
          } else {
            // alert("api no fetch")
          }
        } catch (error) {
          console.error(error ,"error in fetchApi");
       
        }
      };
      fetchApi();
    }, [search]);
  
    const handleClick = () => {
      const value = city;
      navigate('/forecast', { state: { value } });
    };       
    
    return (
      <>
        <div className=' md:bg-white md:border-white md:w-[430px] md:rounded-md md:flex md:flex-col md:justify-center md:mx-auto md:items-center  md:min-h-[80vh] md:my-auto'>
          <div className='box  my-4 items-center justify-center'>
            <div className='inputField'>
              <h2 className=' text-transparent bg-clip-text bg-gradient-to-r from-[#0575E6] to-[#fff] md:text-transparent md:bg-clip-text md:bg-gradient-to-r md:from-[#0575E6] md:to-[#680b85] text-3xl my-4 font-sans font-bold'>Weather App</h2>
              <input className='outline-none shadow-lg py-2 px-5 mx-auto mb-12 mt-8 rounded-full bg-blend-color-burn' placeholder='Search Location' type='search' onChange={(event) => { setSearch(event.target.value) }} />
            </div>
          </div>
  
          <div className='flex flex-col justify-center items-center'>
            <div className='flex items-center text-4xl space-x-3' >
              <FaStreetView className='icon text-white md:text-[#021B79] ' />
              <h2 className='text-transparent bg-clip-text bg-gradient-to-r from-[#0575E6] to-[#fff] md:text-transparent md:bg-clip-text md:bg-gradient-to-r md:from-[#0575E6] md:to-[#680b85]'>{search}</h2>
            </div>
            <div className='text-3xl my-4 text-transparent bg-clip-text bg-gradient-to-r from-[#0575E6] to-[#fff] md:text-transparent md:bg-clip-text md:bg-gradient-to-r md:from-[#0575E6] md:to-[#680b85]'>
              <h2>{city && city.temperature}</h2>
            </div>
  
            <div className='flex space-x-4 '>
              <div className='text-blue-500 md:text-transparent md:bg-clip-text md:bg-gradient-to-r md:from-[#0575E6] md:to-[#680b85]'>
                <h1>{city && city.wind}</h1>
              </div>
              <p className=' text-white'>|</p>
              <div className='text-white'>
                <h1>{city && city.description}</h1>
              </div>
            </div>
          </div>
          <div>
            <button className='my-8' onClick={handleClick}> Forecast Report</button>
          </div>
        </div>
      </>
    );
  }
  

export default Weather