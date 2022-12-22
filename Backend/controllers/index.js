const User = require('../models/user')
const bcrypt = require('bcrypt')


const getUsers = async(req,res) =>{
    try{
        const users = await User.find()
        return res.status(200).json({users})
    }catch(error){
        return res.status(500).send(error.message)
    }
}


const createUser = async (req,res) =>{
    const {name,email,password:plainTextPassword}=req.body;
    const password = await bcrypt.hash(plainTextPassword,10);
    try{
        const user =  new User({
            name:name,
            email:email,
            password:password
        })
     await user.save()
     return res.status(201).json({
        user,
     })
    }catch(error){
     return res.status(500).json({error: error.message})
    }

}

const deleteUser = async (req,res) =>{
    try{
        const {id} = req.params
        const deleted = await User.findByIdAndDelete(id)
        if(deleted){
            return res.status(200).send("User deleted")
        }
        throw new Error("User not found")
    }catch(error){
        return res.status(500).send(error.message)
    }
}

const login = async (req,res) =>{
    const user = await User.findOne({email:req.body.email})
    if(!user){
        return res.status(400).send("User not found")
    }
    try{
        if(await bcrypt.compare(req.body.password, user.password)){
            return res.status(200).json({user})
        }else{
            return res.status(404).send('User not found')
        }
    }catch(error){
        return res.status(500).send(error.message)
    }
  
    
}

module.exports = {
createUser,
getUsers,
deleteUser,
login
}