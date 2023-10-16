import jwt from 'jsonwebtoken';
import { createError } from './error.js';

export const verifyToken = (req,res,next)=>{
    const token = req.cookies.access_token;
    if(!token){
        return next(createError(401,"you are not authenticated"));
        //if cookies and token are not there means unsuccessful login..
    }
    // nothing the verify function only extract payload value and assign it ti information var
    // which we will assigh to request object.............
    jwt.verify(token, process.env.secret_key,(err,information)=>{
        if(err) return next(createError(404,"invalid token"));
        req.information = information;//the non-sensitive value of user which we sign() to jwt
        next()
    })
}
// after successfull login we are gonna check the user is admin or not.......

export const verifyLoginUser = (req,res,next)=>{
    verifyToken(req,res,next,()=>{
        if(req.information.id=== req.params.id || req.information.isAdmin){
            next()
        }else{
            if(err) return next(createError(404,"you are not authenticated"));
        }
    })
};
export const verifyAdmin = (req,res,next)=>{
    verifyToken(req,res,next,()=>{
        if(req.information.isAdmin){
            next();
        }else{
            if(err) return next(createError(404,"you are not admin"));
        }
    })
}