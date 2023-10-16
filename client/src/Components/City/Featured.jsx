import React from 'react'
import './Featured.css'
import useFetch from '../../hooks/useFetch'
const Featured = () => {

  const {data,loading,error} = useFetch("/hotels/countByCity?cities=kolkata,Delhi,Bangaluru");
  // useFetch(api end point)
 

  return (
    <div className='featured'>
    { loading ? "Loading please wait" ://if loading is false the entire code will be exicuted
    <><div className='featuredItem'>
      <img src='Images/Delhi.jpg' alt='Delhi' className='featuredImg'/>
      <div className='featuredTitles'>
          <h1>Delhi</h1>
          <h2>{data[0]} properties</h2>
      </div>
    </div>
    <div className='featuredItem'>
      <img src='Images/Kolkata.jpg' alt='Kolkata' className='featuredImg'/>
      <div className='featuredTitles'>
          <h1>Kolkata</h1>
          <h2>{data[1]} properties</h2>
      </div>
    </div>
    <div className='featuredItem'>
      <img src='Images/Bangaluru.jpg' alt='Bangaluru' className='featuredImg'/>
      <div className='featuredTitles'>
          <h1>Bangaluru</h1>
          <h2>{data[2]} properties</h2>
      </div>
    </div></>}
    </div>
  )
}

export default Featured
