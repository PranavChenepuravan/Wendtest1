import express, { response } from 'express'
import User from '../models/user.js'
import Expense from '../models/expense.js'
const router=express.Router()

router.post('/register',async (req,res)=>{
    try{
        console.log(req.body)
        let newUser = new User(req.body)
        console.log(newUser, 'new User')
        let response=await newUser.save()
        res.json(response)
    }
    catch(e){
        res.json(e.message)
    }
} )

router.post('/login',async (req,res)=>{
    console.log(req.body);
    const{email,password}=req.body
    console.log(email,'dc')
    let user=await User.findOne({email:email,password:password})
    if(!user){
        return res.status(402).json('invalid username or password')
    }
    console.log(user);
    res.json(user)
})

router.post('/expens',async (req,res)=>{
    try{
        console.log(req.body)
        let newExpense = new Expense(req.body)
        const {amount}=req.body
        console.log(newExpense, 'new Expense')
        let response=await newExpense.save()
        res.json(response)
    }
    catch(e){
        res.json(e.message)
    }
} )

router.get('/trac/:id',async (req,res)=>{
    let id=req.params.id
    console.log(id);
    let response=await Expense.find({userid:id})
    console.log(response,'asdsa');
    res.json(response)
})


export default router

