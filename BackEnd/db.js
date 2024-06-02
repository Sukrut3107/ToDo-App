const mongoose = require("mongoose");
const { boolean } = require("zod");

mongoose.connect("mongodb+srv://sukrut515:$9284488012Sb@cluster0.pupu6jy.mongodb.net/")
const todoSchema = new mongoose.Schema({
    title:String,
    description:String,
    completed: Boolean
})

const todo = mongoose.model('todos',todoSchema);

module.exports = {
    todo
}


//mongodb+srv://sukrut515:$9284488012Sb@cluster0.pupu6jy.mongodb.net/ 