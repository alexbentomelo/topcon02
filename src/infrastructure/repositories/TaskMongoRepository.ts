// src/infrastructure/repositories/TaskMongoRepository.ts
import { injectable } from 'inversify';
import { Task } from '../../domain/entities/Task';
import { TaskRepository } from '../../domain/repositories/TaskRepository';
import TaskModel_, { TaskModel } from './TaskModel'; // Assuming TaskModel is correctly exported

@injectable()
export class TaskMongoRepository implements TaskRepository {
  async save(task: Task): Promise<void> {
    const taskData = new TaskModel_({
      title: task.title,
      description: task.description,
      completed: task.completed,
      labelId: task.labelId,
    });

    await taskData.save();
  }

  async findAll(): Promise<Task[]> {
    const tasks = await TaskModel_.find();
    return tasks.map(this.mapToTask);
  }

  async findById(taskId: string): Promise<Task | null> {
    const task = await TaskModel_.findById(taskId);
    return task ? this.mapToTask(task) : null;
  }

  async update(task: Task): Promise<void> {
    await TaskModel_.findByIdAndUpdate(task.id, {
      title: task.title,
      description: task.description,
      completed: task.completed,
      labelId: task.labelId,
    });
  }

  async delete(taskId: string): Promise<void> {
    await TaskModel_.findByIdAndDelete(taskId);
  }

  // Helper function to convert MongoDB document to Task entity
  private mapToTask(taskModel: TaskModel): Task {
    return {
      id: taskModel._id.toString(),
      title: taskModel.title,
      description: taskModel.description ?? '',
      completed: taskModel.completed ?? false,
      labelId: taskModel.labelId ?? '',
    };
  }
}



