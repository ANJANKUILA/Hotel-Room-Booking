import signupUser from "../SchemaModules/User.js";
import bcrypt from "bcrypt";

import jwt from 'jsonwebtoken';
import {createError} from "../utils/error.js";





export const signup = async (req, res, next) => {
    try {
        //with post method
        // const newUser = new signupUser(req.body)
        //here we are creating object newUser which contain everything that signUp has
        // we can directly write req.body because both are same but we are gonna 
        // encrypt this password before save it to MongoDB for Security.......
        // so that's why we are doing this..............
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);
        // here newUser is a object of signUp blueprint but before assigning data into it
        // we are changing the data.........
        const newUser = new signupUser({
            username: req.body.username,
            email: req.body.email,
            password: hash,
        })
        //         req.body.username: This assumes that the username property exists in the req.body object and assigns its value to the username property of the newUser object.
        //         req.body.email: This assumes that the email property exists in the req.body object and assigns its value to the email property of the newUser object.
        //        hash: This variable likely contains the hashed password value, which is assigned to the password property of the newUser object.

        await newUser.save()
        res.status(200).send("Signup Successfully")

    } catch (error) {
        next(error)
    }
}
export const login = async (req, res, next) => {
    try {

        const user_name = await signupUser.findOne({ username: req.body.username })
        if (!user_name) return next(createError(404, "User not found"));

        const Password = bcrypt.compareSync(req.body.password, user_name.password);
        if (!Password) return next(createError(404, "Wrong password"));

        //if username and password is correct then generate the token.......
        const token = jwt.sign({id:user_name._id , isAdmin: user_name.isAdmin},process.env.secret_key);
        
        const {password,isAdmin, ...otherDetails} = user_name._doc
        res.cookie("access_token",token,{
            httpOnly: true,
        }).status(200).json({...otherDetails});

    } catch (error) {
        next(error)
    }
}

