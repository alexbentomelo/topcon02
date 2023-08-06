// src/server.ts
import 'reflect-metadata';
import express from 'express';
import bodyParser from 'body-parser';
import { container } from './src/app/DI';
import { TaskController } from './src/app/controllers/TaskController';
import mongoose from 'mongoose';

const app = express();
const port = 3000;

app.use(bodyParser.json());

const taskController = container.get<TaskController>(TaskController);

app.post('/api/tasks', (req, res) => taskController.createTask(req, res));
app.get('/api/tasks', (req, res) => taskController.getAllTasks(req, res));
app.get('/api/tasks/:id', (req, res) => taskController.getTaskById(req, res));
app.put('/api/tasks/:id', (req, res) => taskController.updateTask(req, res));
app.delete('/api/tasks/:id', (req, res) => taskController.deleteTask(req, res));

// Connect to MongoDB and start the server
mongoose
  .connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/todo-app', {
  })
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(port, () => {
      console.log(`Server running at http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });