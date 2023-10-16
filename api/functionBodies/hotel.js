
import HotelModel from "../SchemaModules/Hotel.js"
export const createhotel = async (req,res,next) => { 
    const newHotel = new HotelModel(req.body)//creating new object of the Schema
    try {
        const saveHotel = await newHotel.save()// saving the new object into database
        res.status(200).json(saveHotel)
    } catch (error) {
        next(error)
    }
}
// export keyword is on the top here.......
export const updatehotel = async (req,res,next) => { 
    try {
        const updateHotel = await HotelModel.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        res.status(200).json(updateHotel)
    } catch (error) {
        next(error)
    }
}
export const deletehotel = async (req,res,next) => { 
    try {
        await HotelModel.findByIdAndDelete(req.params.id)
       res.status(200).json("Deleted Sucessfully")
   } catch (error) {
      next(error)
   }
}
export const gethotel = async (req,res,next) => { 
    try {
        const specificHotel = await HotelModel.findById(req.params.id)
        res.status(200).json(specificHotel)
    } catch (error) {
        next(error);
    }
}
export const getallhotel = async (req, res, next) => {
    const { min, max, ...others } = req.query;
    try {
      const { featured, limit } = others;
      const query = {};
  
      if (featured) {
        query.featured = featured === 'true';
      }
  
      const allHotels = await HotelModel.find({
        ...query,
        cheapestPrice: { $gt: parseInt(min || 1), $lt: parseInt(max || 999) }
      }).limit(parseInt(limit, 10));
      
      res.status(200).json(allHotels);
    } catch (error) {
      next(error);
    }
  };
  
  
// export const getallhotel = async (req,res,next) => { 
//     const { min, max, ...others } = req.query;
//     try {
//     const allHotels = await HotelModel.find({
//         ...others,
//         cheapestPrice: {
//           $gt: min !== undefined ? parseInt(min) : 1,
//           $lt: max !== undefined ? parseInt(max) : 999,
//         },
//       }).limit(req.query.limit);
//       res.status(200).json(allHotels);
//     } catch (error) {
//        next(error)
//     }
// }
// export const getallhotel = async (req, res, next) => {
//     const { min, max, ...others } = req.query;
//     try {
//       const { featured, limit } = others;
//       const query = {};
  
//       if (featured) {
//         query.featured = featured === 'true';
//       }
  
//       const allHotels = await HotelModel.find({
//         ...others,
//         cheapestPrice: {
//           $gt: min !== undefined ? parseInt(min) : 1,
//           $lt: max !== undefined ? parseInt(max) : 999,
//         },
//       }).limit(parseInt(limit, 10));
//       res.status(200).json(allHotels);
//     } catch (error) {
//       next(error);
//     }
//   };
  
  
  
  
  
  
export const countByCity = async (req,res,next) => { 
    const cities = req.query.cities.split(",") // storing an array
    try {
        const list = await Promise.all(cities.map(city=>{
            return HotelModel.countDocuments({city:city})
        }))
        res.status(200).json(list)
    } catch (error) {
       next(error)
    }
}
export const countByType = async (req,res,next) => { 
    
    try {
        const hotelCounts= await HotelModel.countDocuments({type:"hotel"})
        const countApartment= await HotelModel.countDocuments({type:"apartment"})
        const countResort= await HotelModel.countDocuments({type:"resort"})
        const countVilla= await HotelModel.countDocuments({type:"villa"})
        const countCabin= await HotelModel.countDocuments({type:"cabin"})
        
        res.status(200).json([
            {type:"hotel",count:hotelCounts},
            {type:"apartment",count:countApartment},
            {type:"resort",count:countResort},
            {type:"villa",count:countVilla},
            {type:"cabin",count:countCabin}
        ]);
    } catch (error) {
       next(error)
    }
}