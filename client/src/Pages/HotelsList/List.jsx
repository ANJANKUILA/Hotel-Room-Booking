import React from 'react'
import './List.css'
import Navbar from '../../Components/Navbar/Navbar'
import Header from '../../Components/Header/Header'
import SearchItem from '../../Components/SearchItem/SearchItem'
import { useLocation } from 'react-router-dom'
import format from 'date-fns/format';
import { DateRange } from 'react-date-range'
import { useState } from 'react'
import useFetch from '../../hooks/useFetch'
const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [opendate, setOpendate] = useState(false);
  const [option, setOption] = useState(location.state.option);
  const [min, setMin] = useState(undefined);
  const [max, setMax] = useState(undefined);

  const {data, loading , error , reFetch}= useFetch(`/hotels?city=${destination}&min=${min || 0}&max=${max || 999}`);
  const handleClick=()=>{
      reFetch();
  }

  return (
    <div>
      <Navbar />
      <Header type="list" />
      {/* prop */}
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label>Destination</label>
              <input type='text' 
              placeholder={destination}   

              />
            </div>
            <div className="lsItem">
              <label>Check-in-dates</label>
              <span onClick={() => setOpendate(!opendate)}>{`${format(date[0].startDate, 'MM/dd/yyyy')} to ${format(date[0].endDate,'MM/dd/yyyy')}`}</span>
              {opendate && (<DateRange onChange={(item) => setDate([item.selection])}minDate={new Date()}ranges={date}/>)}
            </div>
            {/* <div className="lsItem">
              <label>Cheak-in-dates</label>
              <span></span>
              { <span onClick={() => setOpendate(!opendate)}>{`${format(date[0].startDate, "mm/dd/yyyy")} to ${format(date[0].endDate, "mm/dd/yyyy")}`}</span>
              {opendate && (<DateRange onChange={(item) => setDate([item.selection])} minDate={new Date()} ranges={date}/>}) }
            </div> */}
            <div className="lsItem">
              <label>Options</label>
              <div className="lsOptions">
                <div className="lsOptionItem">
                  <span className="lsOptionText">Min price<small>per night</small></span>
                  <input type="text" onChange={e=>setMin(e.target.value)} className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Max price<small>per night</small></span>
                  <input type="text" onChange={e=>setMax(e.target.value)} className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Adult</span>
                  <input type="text" min={1} className="lsOptionInput" 
                   placeholder={option.adult} 

                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Children</span>
                  <input type="text" min={0} className="lsOptionInput" 
                   placeholder={option.children} 

                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Room</span>
                  <input type="text" min={1} className="lsOptionInput" 
                   placeholder={option.room} 

                  />
                </div>
              </div>
            </div>
            <button  onClick={handleClick} >Search</button>
          </div>
          <div className="listResult">
          {loading ?"Loading Please Wait " : <>
          {data.map(item=>(
            <SearchItem item={item} key={item._id}/>
          ))}
                
          </>}
            

          </div>
        </div>
      </div>

    </div>
  )
}

export default List
