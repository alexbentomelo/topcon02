
import { TaskService } from '../../../src/app/services/TaskService';
import { Task } from '../../../src/domain/entities/Task';
import { TaskRepository } from '../../../src/domain/repositories/TaskRepository';

describe('TaskService', () => {
  let taskService: TaskService;
  let taskRepository: TaskRepository;

  beforeEach(() => {
    // Mock the TaskRepository and other dependencies
    taskRepository = {
      save: jest.fn(),
      findAll: jest.fn(),
      findById: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
    } as unknown as TaskRepository;

    taskService = new TaskService(taskRepository);
  });

  describe('createTask', () => {
    it('should call TaskRepository.save with the correct parameters', async () => {
      const title = 'Test Task';
      const labelId = 'labelId123';

      await taskService.createTask(title, labelId);

      expect(taskRepository.save).toHaveBeenCalledWith(expect.any(Task));
    });
  });

  // Add tests for other service methods (getAllTasks, getTaskById, updateTask, deleteTask) similarly.
});
