const routes = require('express').Router();

let todoList = [];

routes.get('/', (req, res) => {
  res.send('Hi');
});

routes.post('/add/todo', async (req, res) => {
  const { todo } = req.body;
  if (!todo) {
    res.status(401).send({ message: 'todo is required' });
    return;
  }

  todoList = [...todoList, todo];
  res.status(200).send(todo);
});

routes.get('/fetch/todos', async (req, res) => {
  res.send(todoList);
});

routes.delete('/delete/todo/:id', async (req, res) => {
  const { id } = req.params;
  if (!id) {
    res.status(401).send({ message: 'todo id is required' });
    return;
  }

  const updatedTodoList = todoList.filter((todo) => {
    return todo.id !== id;
  });

  todoList = [...updatedTodoList];

  res.status(204).send();
});

module.exports = routes;
