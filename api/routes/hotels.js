import express from "express";

import { countByCity, countByType, createhotel, deletehotel, getallhotel, gethotel, updatehotel } from "../functionBodies/hotel.js";
import { verifyAdmin } from "../utils/verifyToken.js";
const router = express.Router();
router.post("/",verifyAdmin,
    // just moving the body to another folder
    createhotel
    // const newHotel = new HotelModel(req.body)//creating new object of the Schema
    // try {
    //     const saveHotel = await newHotel.save()// saving the new object into database
    //     res.status(200).json(saveHotel)
    // } catch (error) {
    //     res.status(500).json(error)
    // }
)
router.put("/:id",verifyAdmin,updatehotel)
router.delete("/:id",verifyAdmin,deletehotel)
router.get("/find/:id",gethotel)
router.get("/",getallhotel)


router.get("/countByCity",countByCity)
router.get("/countByType",countByType)

export default router