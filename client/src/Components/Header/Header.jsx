// import React, { useState } from 'react'
// import './Header.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faBed, faCalendarDays, faCar, faPerson, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons'
// import { DateRange } from 'react-date-range'
// import 'react-date-range/dist/styles.css'; // main css file
// import 'react-date-range/dist/theme/default.css'; // theme css file
// import format from 'date-fns/format'
// import { useNavigate } from 'react-router-dom'
// const Header = ({ type }) => {
//   const [destination, setDestination] = useState("");
//   const [openDate, setopenDate] = useState(false);

//   const [date, setDate] = useState([
//     {
//       startDate: new Date(),
//       endDate: new Date(),
//       key: 'selection'
//     }
//   ]);
//   const [openOptions, setopenOption] = useState(false);
//   const [option, setOption] = useState({
//     adult: 1,
//     children: 0,
//     room: 1
//   });

//   const navigate = useNavigate();
//   const handleOption = (name, operation) => {
//     setOption(pre => {
//       return {
//         ...pre, [name]: operation === "i" ? option[name] + 1 : option[name] - 1,
//       }
//     })
//   }
//   const handleSearch = () => {
//     navigate("/hotels", { state: { destination, date, option } });
//   }
//   return (
//     <div className='header'>
//       <div className={type === "list" ? 'headerContainer listMode' : 'headerContainer'}>
//         <div className='headerList'>
//           <div className='headerListItem active'>
//             <FontAwesomeIcon icon={faBed} />
//             <span>Stay</span>
//           </div>
//           <div className='headerListItem'>
//             <FontAwesomeIcon icon={faPlane} />
//             <span>Flight</span>
//           </div>
//           <div className='headerListItem'>
//             <FontAwesomeIcon icon={faCar} />
//             <span>Car Rental</span>
//           </div>
//           <div className='headerListItem'>
//             <FontAwesomeIcon icon={faBed} />
//             <span>Attractions</span>
//           </div>
//           <div className='headerListItem'>
//             <FontAwesomeIcon icon={faTaxi} />
//             <span>Airport Taxis</span>
//           </div>
//         </div>
//         {type !== "list" && <>
//           <h1 className='headerTitle'>A lifetime of discounts? It's Genius</h1>
//           <p className='headerDesc'>Get reward for your Travels</p>
//           <button className='headerBtn'>Sign-in/Register</button>
//           <div className='headerSearch'>
//             <div className='headerSeacrchItem'>
//               <FontAwesomeIcon icon={faBed} className='headerIcon' />
//               <input type='text' placeholder='Where are you going?' className='headersearchInputs' onChange={e => setDestination(e.target.value)}></input>
//             </div>
//             <div className='headerSeacrchItem'>
//               <FontAwesomeIcon icon={faCalendarDays} className='headerIcon' />
//               <span onClick={() => setopenDate(!openDate)} className='headerSearchText'>{`${format(date[0].startDate, "mm/dd/yyyy")} to ${format(date[0].endDate, "mm/dd/yyyy")}`}</span>
//               {openDate && <DateRange
//                 editableDateInputs={true}
//                 onChange={item => setDate([item.selection])}
//                 moveRangeOnFirstSelection={false}
//                 ranges={date}
//                 className='date'
//                 minDate={new date()}
//               />}
//             </div>
//             <div className='headerSeacrchItem'>
//               <FontAwesomeIcon icon={faPerson} className='headerIcon' />
//               <span onClick={() => setopenOption(!openOptions)} className='headerSearchText'>{`${option.adult} adult . ${option.children} children . ${option.room} room`}</span>
//               {openOptions && <div className='options'>
//                 <div className='optionItem'>
//                   <span className='optionText'>Adult</span>
//                   <div className='optionCounter'>
//                     <button className='optionCounterButton' onClick={() => handleOption("adult", "d")} disabled={option.adult <= 1}>-</button>
//                     <span className='optionCounterNumber'>{option.adult}</span>
//                     <button className='optionCounterButton' onClick={() => handleOption("adult", "i")}>+</button>
//                   </div>
//                 </div>
//                 <div className='optionItem'>
//                   <span className='optionText'>children</span>
//                   <div className='optionCounter'>
//                     <button className='optionCounterButton' onClick={() => handleOption("children", "d")} disabled={option.children <= 0}>-</button>
//                     <span className='optionCounterNumber'>{option.children}</span>
//                     <button className='optionCounterButton' onClick={() => handleOption("children", "i")}>+</button>
//                   </div>
//                 </div>
//                 <div className='optionItem'>
//                   <span className='optionText'>room</span>
//                   <div className='optionCounter'>
//                     <button className='optionCounterButton' onClick={() => handleOption("room", "d")} disabled={option.room <= 1}>-</button>
//                     <span className='optionCounterNumber'>{option.room}</span>
//                     <button className='optionCounterButton' onClick={() => handleOption("room", "i")}>+</button>
//                   </div>
//                 </div>

//               </div>}
//             </div>
//             <div className='headerSeacrchItem'>
//               <button className='headerBtn' onClick={handleSearch}>Search</button>
//             </div>
//           </div></>}
//       </div>
//     </div>
//   )
// }

// export default Header
import React, { useState } from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faCalendarDays, faCar, faPerson, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from 'date-fns'; // Corrected import statement
import { useNavigate } from 'react-router-dom';

const Header = ({ type }) => {
  const [destination, setDestination] = useState("");
  const [openDate, setOpenDate] = useState(false); // Corrected state variable name
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);
  const [openOptions, setOpenOptions] = useState(false); // Corrected state variable name
  const [option, setOption] = useState({
    adult: 1,
    children: 0,
    room: 1
  });

  const navigate = useNavigate();
  
  const handleOption = (name, operation) => {
    setOption(prevState => ({
      ...prevState,
      [name]: operation === "i" ? prevState[name] + 1 : prevState[name] - 1,
    }));
  };

  const handleSearch = () => {
    navigate("/hotels", { state: { destination, date, option } });
  };

  return (
    <div className='header'>
      <div className={type === "list" ? 'headerContainer listMode' : 'headerContainer'}>
        <div className='headerList'>
          <div className='headerListItem active'>
            <FontAwesomeIcon icon={faBed} />
            <span>Stay</span>
          </div>
          <div className='headerListItem'>
            <FontAwesomeIcon icon={faPlane} />
            <span>Flight</span>
          </div>
          <div className='headerListItem'>
            <FontAwesomeIcon icon={faCar} />
            <span>Car Rental</span>
          </div>
          <div className='headerListItem'>
            <FontAwesomeIcon icon={faBed} />
            <span>Attractions</span>
          </div>
          <div className='headerListItem'>
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport Taxis</span>
          </div>
        </div>
        {type !== "list" && (
          <>
            <h1 className='headerTitle'>A lifetime of discounts? It's Genius</h1>
            <p className='headerDesc'>Get reward for your Travels</p>
            <button className='headerBtn'>Sign-in/Register</button>
            <div className='headerSearch'>
              <div className='headerSeacrchItem'>
                <FontAwesomeIcon icon={faBed} className='headerIcon' />
                <input type='text' placeholder='Where are you going?' className='headersearchInputs' onChange={e => setDestination(e.target.value)} />
              </div>
              <div className='headerSeacrchItem'>
                <FontAwesomeIcon icon={faCalendarDays} className='headerIcon' />
                <span onClick={() => setOpenDate(!openDate)} className='headerSearchText'>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
                {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={item => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className='date'
                    minDate={new Date()}
                  />
                )}
              </div>
              <div className='headerSeacrchItem'>
                <FontAwesomeIcon icon={faPerson} className='headerIcon' />
                <span onClick={() => setOpenOptions(!openOptions)} className='headerSearchText'>{`${option.adult} adult . ${option.children} children . ${option.room} room`}</span>
                {openOptions && (
                  <div className='options'>
                    <div className='optionItem'>
                      <span className='optionText'>Adult</span>
                      <div className='optionCounter'>
                        <button className='optionCounterButton' onClick={() => handleOption("adult", "d")} disabled={option.adult <= 1}>-</button>
                        <span className='optionCounterNumber'>{option.adult}</span>
                        <button className='optionCounterButton' onClick={() => handleOption("adult", "i")}>+</button>
                      </div>
                    </div>
                    <div className='optionItem'>
                      <span className='optionText'>Children</span>
                      <div className='optionCounter'>
                        <button className='optionCounterButton' onClick={() => handleOption("children", "d")} disabled={option.children <= 0}>-</button>
                        <span className='optionCounterNumber'>{option.children}</span>
                        <button className='optionCounterButton' onClick={() => handleOption("children", "i")}>+</button>
                      </div>
                    </div>
                    <div className='optionItem'>
                      <span className='optionText'>Room</span>
                      <div className='optionCounter'>
                        <button className='optionCounterButton' onClick={() => handleOption("room", "d")} disabled={option.room <= 1}>-</button>
                        <span className='optionCounterNumber'>{option.room}</span>
                        <button className='optionCounterButton' onClick={() => handleOption("room", "i")}>+</button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className='headerSeacrchItem'>
                <button className='headerBtn' onClick={handleSearch}>Search</button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
