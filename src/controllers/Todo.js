const Todo = require("../models/Todo");

const getAllTodos = (req, res) => {
    Todo.find().exec((err, todos) => {
        if(err){
            res.status(404);
            res.write("Error occured while fetching data");
            console.log(err);
        }else if(!todos){
            res.status(400);
            res.write("No Todos yet");
        }else{
            res.status(200);
            res.json(todos);
        }
        res.end();
    })
}

const getTodoById = async(req, res) => {
    const todoId = req.params.todoId;
    await Todo.findById(todoId).exec((err,todo) => {
        if(err){
            res.status(404);
            res.write("Error occured while fetching data");
            console.log(err);
        }else if(!todo){
            res.status(400);
            res.write("No such task in list");
        }else{
            res.status(200);
            res.json(todo);
        }
        res.end();
    })
}

const addTodo = async(req, res) => {
    const todo = new Todo(req.body);
    await todo.save((err, task)=>{
        if(err || !task){
            console.log(err);
            res.status(404);
            res.write("Error occured while adding the task");
        }else{
            res.status(200);
            res.json(todo);
        }
    })
}

const updateTodo = (req, res) => {
    const todoId = req.params.todoId;
    Todo.findByIdAndUpdate(todoId, req.body, (err, task) => {
        if(err || !task){
            console.log(err);
            res.status(404);
            res.write("Error occured while updating the task");
        }else{
            res.status(200).json({
                msg: "updated successfully",
                updatedUser: task 
            });
        }
    })

}

const deleteTodo = (req, res) => {
    const todoId = req.params.todoId;
    Todo.findByIdAndRemove(todoId, (err, task) => {
        if(err || !task){
            return res.status(400).json({
                error: "Error, while deleting Todo"
            })
        }else{
            res.status(200).json({
                msg: "Deleted successfully"
            })
        }
    })
}

module.exports = { getAllTodos, getTodoById, addTodo, updateTodo, deleteTodo };