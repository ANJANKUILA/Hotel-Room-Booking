import express from "express";
import { updateUser,deleteUser, getUser, getallUser } from "../functionBodies/user.js";
import { verifyToken, verifyLoginUser, verifyAdmin } from "../utils/verifyToken.js";
const router = express.Router();

// router.get("/checkcookies",verifyToken,(req,res,next)=>{
//     res.send("Hello user you are successfully loged in");
// });
// router.get("/checkuser/:id",verifyLoginUser,(req,res,next)=>{
//     res.send("successfully loged in now book a hotel room");
// });
// router.get("/checkadmin/:id",verifyAdmin,(req,res,next)=>{
//     res.send("successfully loged in and you are admin hotel service provider");
// });

router.put("/:id",verifyLoginUser,updateUser)
router.delete("/:id",verifyLoginUser,deleteUser)
router.get("/:id",verifyLoginUser,getUser)
router.get("/",verifyAdmin,getallUser)

export default router

