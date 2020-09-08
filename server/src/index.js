// Express App Setup
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Express route handlers

let todoList = [];

app.get('/', (req, res) => {
  res.send('Hi');
});

app.post('/add/todo', async (req, res) => {
  const { todo } = req.body;
  if (!todo) {
    res.status(401).send({ message: 'todo is required' });
    return;
  }

  todoList = [...todoList, todo];
  res.status(200).send(todo);
});

app.get('/fetch/todos', async (req, res) => {
  res.send(todoList);
});

app.delete('/delete/todo/:id', async (req, res) => {
  const { id } = req.params;
  if (!id) {
    res.status(401).send({ message: 'todo is required' });
    return;
  }

  const updatedTodoList = todoList.filter((todo) => {
    return todo.id !== id;
  });

  todoList = [...updatedTodoList];

  res.send({ message: 'todo deleted successfully' });
});

app.listen(5000, (err) => {
  console.log('Listening');
});
