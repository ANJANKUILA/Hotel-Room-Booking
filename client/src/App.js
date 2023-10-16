import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Hotelpage1 from "./Pages/Hotelpage1/Hotelpage1";
import List from "./Pages/HotelsList/List";
function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
           <Route exact path='/' element={<Home/>}></Route>
           <Route exact path='/hotels' element={<List/>}></Route>
           <Route exact path='/hotels/:id' element={<Hotelpage1/>}></Route>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
