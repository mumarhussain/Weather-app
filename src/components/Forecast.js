import React from 'react'
import { useLocation } from 'react-router-dom'
function Forecast() {
  const location = useLocation()
  const { temperature, wind, description, forecast } = location.state.value;

  return (<>
    <p className='text-2xl text-white my-6'>FORECAST<span className='text-white'> REPORT</span></p>
    <div className='text-white flex flex-col space-y-5'>
      <h3 className='text-2xl flex mx-5 text-white '>Day 1</h3>
      <div className='flex items-center justify-evenly'>
        <p>Wind : {JSON.stringify(forecast[0].wind,)}</p>
        <h4>Temperature :{JSON.stringify(forecast[0].temperature)}</h4>
      </div>
      <h3 className='text-2xl flex mx-5 text-white '>Day 3</h3>
      <div className='flex items-center justify-evenly'>
        <p>Wind : {JSON.stringify(forecast[1].wind,)}</p>
        <h4>Temperature :{JSON.stringify(forecast[1].temperature)}</h4>
      </div>
      <h3 className='text-2xl flex mx-5 text-white '>Day 3</h3>
      <div className='flex items-center justify-evenly'>
        <p>Wind : {JSON.stringify(forecast[2].wind,)}</p>
        <h4>Temperature :{JSON.stringify(forecast[2].temperature)}</h4>
      </div>
    </div>
  </>

  )
}

export default Forecast