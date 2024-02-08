//basic express boilerplate code
const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { Todo } = require("./database");
const app = express();
const cors = require("cors");
const port = 3000;

//middleware to parse json
app.use(express.json());
app.use(cors({
  origin: "http://localhost:5173"
}));

app.post("/createTodo", async (request, res) => {
  const todoBody = request.body;
  console.log(todoBody);
  const response = createTodo.safeParse(todoBody);

  if (!response.success) {
    return res.status(411).json({
      message: "Invalid input",
    });
  }

  //put todo in database
  //  const todo = new Todo({
  //     title: todoBody.title,
  //     description: todoBody.description,
  //     completed: todoBody.completed
  //  })

  const savedTodo = await Todo.create({
    title: todoBody.title,
    description: todoBody.description,
    completed: false,
  });

  return res.json({
    message: "Todo Created"
  });
});

app.get("/getTodos", async (requesst, response) => {
  const todos = await Todo.find();

  return response.json({
    todos
  });

});

app.put("/markAsDone", async (request, res) => {
  const idObject = request.body;
  const response = updateTodo.safeParse(idObject);

  if (!response.success) {
    return res.status(411).json({
      message: "Invalid inputs",
    });
  }

  await Todo.updateOne(
    {
      _id: request.body.id,
    },
    {
       completed: true
    }
  );

  return res.status(200).json({ message: "Todo updated" });
});

app.listen(port);
