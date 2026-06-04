const mongoose = require('mongoose')

const transactionSchema = new mongoose.Schema({
    fromAccount:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'account',
        required:[true,"transaction must be associated with from a account"],
        index:true
    },
    toAccount:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"account",
        required:[true,"transaction must be associated with to a account"],
        index:true
    },
    status:{
        type:String,
        enum:{
            values:["PENDING","COMPLETED","FAILED","REVERSED"],
            message:"transaction can be either pending, completed, failed or reversed"
        },
        required:[true,"transaction status is required"],
        default:"PENDING"
    },
    amount:{
        type:Number,
        required:[true,"Amount is required for creating a transaction"],
        min:[0,"Transaction amount cannot be negative"]
    },
    idempotencyKey:{
        type:String,
        required:[true,"idempotency key is required for creating a account"],
        index:true,
        unique:true
    },
},{
    timestamps:true
})

const transactionModel = mongoose.model("transaction",transactionSchema)

module.exports = transactionModel;
