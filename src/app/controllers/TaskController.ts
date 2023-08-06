// src/app/controllers/TaskController.ts
import { Request, Response } from 'express';
import { injectable } from 'inversify';
import { Task } from '../../domain/entities/Task';
import { TaskService } from '../services/TaskService';
import { container } from '../ContainerConfig';


@injectable()
export class TaskController {
  constructor(private readonly taskService: TaskService) {}
  
  async createTask(req: Request, res: Response): Promise<void> {
    const task: Task = {
      id: req.body.id,
      title: req.body.title,
      description: req.body.description,
      completed: req.body.completed,
      labelId: req.body.labelId,
    };

    await this.taskService.createTask(task);
    res.sendStatus(201);
  }

  async getAllTasks(req: Request, res: Response): Promise<void> {
    const tasks = await this.taskService.getAllTasks();
    res.json(tasks);
  }

  async getTaskById(req: Request, res: Response): Promise<void> {
    const taskId = req.params.id;
    const task = await this.taskService.getTaskById(taskId);

    if (task) {
      res.json(task);
    } else {
      res.sendStatus(404);
    }
  }

  async updateTask(req: Request, res: Response): Promise<void> {
    const taskId = req.params.id;
    const task: Task = {
      id: taskId,
      title: req.body.title,
      description: req.body.description,
      completed: req.body.completed,
      labelId: req.body.labelId,
    };

    await this.taskService.updateTask(task);
    res.sendStatus(200);
  }

  async deleteTask(req: Request, res: Response): Promise<void> {
    const taskId = req.params.id;
    await this.taskService.deleteTask(taskId);
    res.sendStatus(204);
  }
}
