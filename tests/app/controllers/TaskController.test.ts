// tests/app/controllers/TaskController.test.ts
import { TaskController } from '../../../src/app/controllers/TaskController';
import { TaskService } from '../../../src/app/services/TaskService';
import { Task } from '../../../src/domain/entities/Task';
import { Request, Response } from 'express';

describe('TaskController', () => {
  let taskController: TaskController;
  let taskService: TaskService;

  beforeEach(() => {
    // Mock the TaskService and other dependencies
    taskService = {
      createTask: jest.fn(),
      getAllTasks: jest.fn(),
      getTaskById: jest.fn(),
      updateTask: jest.fn(),
      deleteTask: jest.fn(),
    } as unknown as TaskService;

    taskController = new TaskController(taskService);
  });

  describe('createTask', () => {
    it('should call TaskService.createTask with the correct parameters and return 201', async () => {
      const req = { body: { title: 'Test Task', labelId: 'labelId123' } } as Request;
      const res = { status: jest.fn().mockReturnThis(), json: jest.fn() } as unknown as Response;

      await taskController.createTask(req, res);

      expect(taskService.createTask).toHaveBeenCalledWith('Test Task', 'labelId123');
      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.json).toHaveBeenCalled();
    });
  });

  // Add tests for other controller methods (getAllTasks, getTaskById, updateTask, deleteTask) similarly.
});
