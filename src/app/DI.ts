// src/app/DI.ts
import 'reflect-metadata';
import { Container } from 'inversify';
import { TaskController } from './controllers/TaskController';
import { TaskService } from './services/TaskService';
import { TaskRepository } from '../domain/repositories/TaskRepository';
import { TaskMongoRepository } from '../infrastructure/repositories/TaskMongoRepository';

const TYPES = {
  TaskRepository: Symbol.for('TaskRepository'),
};

const container = new Container();

container.bind<TaskController>(TaskController).to(TaskController).inSingletonScope();
container.bind<TaskService>(TaskService).to(TaskService).inSingletonScope();
container.bind<TaskRepository>(TYPES.TaskRepository).to(TaskMongoRepository).inSingletonScope();

export { container, TYPES };

