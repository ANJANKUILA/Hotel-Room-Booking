import UserModel from "../SchemaModules/User.js"
// export const createUser = async (req,res,next) => { 
//     const newUser = new UserModel(req.body)//creating new object of the Schema
//     try {
//         const saveUser = await newUser.save()// saving the new object into database
//         res.status(200).json(saveUser)
//     } catch (error) {
//         next(error)
//     }
// }
// export keyword is on the top here.......
export const updateUser = async (req,res,next) => { 
    try {
        const updateUser = await UserModel.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        res.status(200).json(updateUser)
    } catch (error) {
        next(error)
    }
}
export const deleteUser = async (req,res,next) => { 
    try {
        await UserModel.findByIdAndDelete(req.params.id)
       res.status(200).json("Deleted Sucessfully")
   } catch (error) {
      next(error)
   }
}
export const getUser = async (req,res,next) => { 
    try {
        const specificUser = await UserModel.findById(req.params.id)
        res.status(200).json(specificUser)
    } catch (error) {
        next(error);
    }
}
export const getallUser = async (req,res,next) => { 
    try {
        const allUsers = await UserModel.find()
        res.status(200).json(allUsers)
    } catch (error) {
       next(error)
    }
}