const router = require("express").Router();
const { getAllTodos, getTodoById, addTodo, updateTodo, deleteTodo } = require("../controllers/Todo");

router.get("/all", getAllTodos);
router.get("/todo/:todoId", getTodoById);
router.post("/add", addTodo);
router.put("/update/:todoId", updateTodo);
router.delete("/delete/:todoId", deleteTodo);

module.exports = router;