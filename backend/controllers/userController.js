const User = require('../model/user')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()

const userRegister = async (req, res, next) => {
    try{
        const {name, email, password, confirmPassword} = req.body
        const user = await User.findOne({email})
        if(user){
            return res.status(400).json({msg: "User Already Exists"})
        }
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)
        const newUser = new User({
            name,
            email,
            password: hashedPassword
        })
        await newUser.save()
        return res.status(200).json(newUser)
    }
    catch(err){
        return next(err)
    }
}

const userLogin = async (req, res, next) => {
    try{
        const {email, password} = req.body
        
        const user = await User.findOne({email})
        if(!user){
            return res.status(400).json({msg: 'User doesnot exists'})
        }
        
        const passMatch = await bcrypt.compare(password, user.password)
        if(!passMatch){
            return res.status(400).json({msg: 'Password is Incorrect'})
        }

        const user_Id = user._id
        const name = user.name
        const token = jwt.sign({user_Id: user._id}, process.env.JWT_SECRET)
        
        return res.status(200).json({msg: 'User got LoggedIn', token, user_Id, name, email})
    }
    catch(err){
        return next(err)
    }
}

const getAllUsers = async (req, res, next) => {
    try{
        const user = await User.findById(req.user_Id)
        if(!user) {
            return res.status(400).json({msg: 'User Not Found'})
        }
        const users = await User.find()
        return res.status(200).json({users}) 
    }
    catch(err){
        return next(err)
    }
}

module.exports = {userRegister, userLogin, getAllUsers}