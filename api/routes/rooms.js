import express from "express";
import { verifyAdmin } from "../utils/verifyToken.js";
import { createRoom, deleteRoom, getRoom, getallRooms, updateRoom  } from "../functionBodies/room.js";

const router = express.Router();

router.post("/:hotelId",verifyAdmin,createRoom)
router.put("/:id",verifyAdmin,updateRoom)
router.delete("/:id/:hotelId",verifyAdmin,deleteRoom)
router.get("/:id",getRoom)
router.get("/",getallRooms)


export default router