// tests/infrastructure/repositories/TaskMongoRepository.test.ts
import mongoose from 'mongoose';
import { TaskMongoRepository } from  '../../../src/infrastructure/repositories/TaskMongoRepository';
import { Task } from '../../../src/domain/entities/Task';
import TaskModel from '../../../src/infrastructure/repositories/TaskModel';


describe('TaskMongoRepository', () => {
  let taskMongoRepository: TaskMongoRepository;

  beforeAll(async () => {
    // Connect to a test database before running the tests
    await mongoose.connect('mongodb://localhost/todo_test_db', {
    });

    taskMongoRepository = new TaskMongoRepository();
  });

  afterAll(async () => {
    // Close the connection and clean up after running the tests
    await mongoose.connection.close();
  });

  describe('save', () => {
    it('should save a new task to the database', async () => {
      const task = new Task('Test Task', 'labelId123');

      await taskMongoRepository.save(task);

      const savedTask = await TaskModel.findOne({ title: 'Test Task' });
      expect(savedTask).toBeTruthy();
    });
  });

  // Add tests for other repository methods (findById, findAll, update, delete) similarly.
});
