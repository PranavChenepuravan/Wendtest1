import mongoose from "mongoose";
import User from "./user.js";

let expenseSchema = mongoose.Schema({
    userid:{
        type:mongoose.Types.ObjectId,
        ref:User
    },
    total:{
        type:Number
    },
    amount1:{
        type:Number
    },
    amount2:{
        type:Number
    },
    amount3:{
        type:Number
    },
    amount4:{
        type:Number
    },
    person1:{
        type:String
    },
    person2:{
        type:String
    },
    person3:{
        type:String
    },
    person4:{
        type:String
    },
    wholein:{
        type:Number
    },
    remaining:{
        type:Number
    }

})

let Expense=mongoose.model('expense',expenseSchema)

export default Expense