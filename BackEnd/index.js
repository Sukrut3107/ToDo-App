const express = require("express");
const { createTodo, updateTodo } = require("./type");
const {todo} = require("./db");
const app = express();
const cors = require('cors');
app.use(cors({
    origin:"http://localhost:5174"
}))
app.use(express.json());



// ********** GET ***************
app.get("/todos",async (req,res)=>{
    const todos = await todo.find({
        // title:todos.title,
        // description:todos.description,
        // completed:todos.completed
    })
    res.json({
        todos
    });
})

//******************POST ***********************/
app.post("/todo",async (req,res)=>{
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);

    if(!parsedPayload.success){
        res.status(411).json({
            msg:"You sent the wrong inputs",
        })
        return;
    }
    //in mongo Db
    await todo.create({
        title:createPayload.title,
        description:createPayload.description,
        completed:false
    })
    res.json({
        msg:"Todo created"
    })

})


//*************PUT ******************* */
app.put("/completed",async (req,res)=>{
    const updatedPayload = req.body;
    const parsedUpdatedPayload = updateTodo.safeParse(updatedPayload);

    if(!parsedUpdatedPayload.success){
        res.status(411).json({
            msg :"Something is wrong with input"
        })
        return;
    }
    await todo.update({
        _id: req.body.id,},{
        completed: true
    })
    res.json({
        msg:"Todo Mark Completed"
    })
})


app.listen(3000);