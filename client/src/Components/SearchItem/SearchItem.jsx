import React from 'react'
import './SearchItem.css'
import { Link } from 'react-router-dom'
const SearchItem = ({item}) => {
  return (
    <div className='searchItem'>
      <img src={item.photos[0]} alt="room" className="siImg" />
      <div className="sidesc">
        <h1 className='siTitle'>{item.name}</h1>
        <span className="siDistance">{item.distance}</span>
        <span className="siTaxiOp">Free airport Taxi</span>
        <span className="siSubtitle">Studio Apartment with AC</span>
        <span className="siFeatures">{item.desc}</span>
        <span className="siCancelOp">Free Cancelation</span>
        <span className="siCencelOpSubtitle">You can Cencel later so book this today..</span>
      </div>
      <div className="siDetails">
        {item.rating && <div className="siRating">
            <span>Excellent</span>
            <button>{item.rating}</button>
        </div>}
        <div className="siDetailTaxts">
            <div className="siPrice">${item.cheapestPrice}</div>
            <div className="siTaxOp">Include Taxes and Fees</div>
            <Link to={`/hotels/${item._id}`}>
            <button className='siCheckButton'>see avalibality</button>
            </Link>
        </div>
      </div>
    </div>
  )
}

export default SearchItem
