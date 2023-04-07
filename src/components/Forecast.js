import React from 'react'
import { useLocation } from 'react-router-dom'
function Forecast() {
  const location = useLocation()
  const { temperature, wind, description, forecast } = location.state.value;
  // const umar = location.state.value
  // console.log(umar.forecast[0].temperature);
  // console.log(umar);
  // console.log(recData);
  return (<>
    <p className='text-2xl text-white my-6'>FORECAST REPORT</p>
    <div className='text-white flex flex-col space-y-5'>
      <p className='text-2xl flex mx-5'>Day 1</p>
      <div className='flex items-center justify-evenly'>
        <p>Wind : {JSON.stringify(forecast[0].wind,)}</p>
        <p>Temperature :{JSON.stringify(forecast[0].temperature)}</p>
      </div>
      <p className='text-2xl flex mx-5'>Day 2</p>
      <div className='flex items-center justify-evenly'>
        <p>Wind : {JSON.stringify(forecast[1].wind,)}</p>
        <p>Temperature :{JSON.stringify(forecast[1].temperature)}</p>
      </div>
      <p className='text-2xl flex mx-5'>Day 3</p>
      <div className='flex items-center justify-evenly'>
        <p>Wind : {JSON.stringify(forecast[2].wind,)}</p>
        <p>Temperature :{JSON.stringify(forecast[2].temperature)}</p>
      </div>
    </div>
  </>

  )
}

export default Forecast