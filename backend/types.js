const zod = require("zod");

const createTodo = zod.object({
    title: zod.string(),
    description: zod.string()
})

const updateTodo = zod.object({
    id: zod.string()
});

module.exports = {
    createTodo: createTodo,
    updateTodo: updateTodo
}

/*
input validation for create todo request
{
   title: string,
   description: string
},

for mark as done request
{
    id: string (user will send an id of todo he wants to mark as complete)
}
*/
