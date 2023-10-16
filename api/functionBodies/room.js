import roomModel from "../SchemaModules/Room.js";

import HotelModel from "../SchemaModules/Hotel.js";

export const createRoom = async (req,res,next)=>{
    
    const hotelId = req.params.hotelId;
    const newRoom = new roomModel(req.body);

    try {
        const saveRoom = await newRoom.save();
        try {
            await HotelModel.findByIdAndUpdate(hotelId,{$push:{rooms:saveRoom._id}})
        } catch (error) {
            next(error)
        }
        res.status(200).json(saveRoom);
    } catch (error) {
        next(error)
    }

}
export const updateRoom = async (req,res,next) => { 
    try {
        const updateRoom = await roomModel.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        res.status(200).json(updateRoom)
    } catch (error) {
        next(error)
    }
}
export const deleteRoom = async (req,res,next) => { 
    const hotelId = req.params.hotelId;
    try {
        await roomModel.findByIdAndDelete(req.params.id)
        try {
            await HotelModel.findByIdAndUpdate(hotelId,{$pull:{rooms:req.params.id}})
        } catch (error) {
            next(error)
        }
       res.status(200).json("Room Deleted Sucessfully")
   } catch (error) {
      next(error)
   }
}
export const getRoom = async (req,res,next) => { 
    try {
        const specificRoom = await roomModel.findById(req.params.id)
        res.status(200).json(specificRoom)
    } catch (error) {
        next(error);
    }
}
export const getallRooms = async (req,res,next) => { 
    try {
        const allRooms = await roomModel.find()
        res.status(200).json(allRooms)
    } catch (error) {
       next(error)
    }
}