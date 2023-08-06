
import { Task } from '../../domain/entities/Task';
import { TaskRepository } from '../../domain/repositories/TaskRepository';
import { InjectRepository} from '@nestjs/typeorm';
import { inject, injectable } from 'inversify';
import { TYPES } from '../DI';

@injectable()
export class TaskService {
  constructor(@InjectRepository(TaskRepository) private readonly taskRepository: TaskRepository) {}

  async createTask(recTask: Task): Promise<void> {
    const task = new Task(recTask.title, recTask.labelId);
    await this.taskRepository.save(task);
  }

  async getAllTasks(): Promise<Task[]> {
    return this.taskRepository.findAll();
  }

  async getTaskById(id: string): Promise<Task | null> {
    return this.taskRepository.findById(id);
  }

  async updateTask(task: Task): Promise<void> {
    await this.taskRepository.update(task);
  }

  async deleteTask(id: string): Promise<void> {
    await this.taskRepository.delete(id);
  }
}

