import User from "../models/UserData.js"

export const getAllRecords = async (req,res) =>{
    try {
        const response = await User.find()
        console.log("data fetched");
        res.status(200).json(response)
    } catch (error) {
        console.log(error);
        res.status(500).json({error:"Internal server error"})
    }
}

export const createRecord = async (req,res)=>{
    try {
        const data = req.body
        const newUser = new User(data)
        const response = await newUser.save()
        console.log("data saved");
        res.status(200).json(response)
    } catch (error) {
        console.log(error);
        res.status(500).json({error:"Internal server error"})
    }
}