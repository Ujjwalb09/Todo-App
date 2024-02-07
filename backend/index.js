//basic express boilerplate code
const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { Todo } = require("./database");
const app = express();
const port = 3000;

//middleware to parse json
app.use(express.json());

app.post("/createTodo", async (request, res) => {
  const todoBody = request.body;
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

  return res.json(savedTodo);
});

app.get("/getTodos", async (requesst, response) => {
  return response.json(await Todo.find());
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
