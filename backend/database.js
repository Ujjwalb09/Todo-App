const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://ujjwalbhatt09:Bhatt_2021@cluster0.e1a378i.mongodb.net/todo_app")


const todoSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },

    description:{
        type: String
    },

    completed:{
        type:Boolean
    }
})


const Todo = mongoose.model('todos', todoSchema);

module.exports = {Todo}