// src/app/Application.ts
import express from 'express';
import { TaskController } from './controllers/TaskController';

export class Application {
  private readonly app: express.Application;

  constructor(private readonly taskController: TaskController) {
    this.app = express();
    this.setupRoutes();
  }

  private setupRoutes(): void {
    this.app.post('/api/tasks', (req, res) => this.taskController.createTask(req, res));
    this.app.get('/api/tasks', (req, res) => this.taskController.getAllTasks(req, res));
    this.app.get('/api/tasks/:id', (req, res) => this.taskController.getTaskById(req, res));
    this.app.put('/api/tasks/:id', (req, res) => this.taskController.updateTask(req, res));
    this.app.delete('/api/tasks/:id', (req, res) => this.taskController.deleteTask(req, res));
  }

  start(port: number): void {
    this.app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  }
}
