// src/app/ContainerConfig.ts
import 'reflect-metadata';
import { Container } from 'inversify';
// import { Application } from './Application';
import { TaskService } from './services/TaskService';
import { TaskController } from './controllers/TaskController';
import { TaskRepository } from '../domain/repositories/TaskRepository';
import { TaskMongoRepository } from '../infrastructure/repositories/TaskMongoRepository';
import { TYPES  } from './DI';

const container = new Container();
// container.bind<Application>(Application).toSelf().inSingletonScope();
container.bind<TaskController>(TaskController).toSelf().inSingletonScope();
container.bind<TaskService>(TaskService).toSelf().inSingletonScope();
container.bind<TaskRepository>(TYPES.TaskRepository).to(TaskMongoRepository).inSingletonScope();

export { container };

