"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

const TaskService_1 = require("../../../src/domain/services/TaskService");
const Task_1 = require("../../../src/domain/entities/Task");
describe('TaskService', () => {
    let taskService;
    let taskRepository;
    beforeEach(() => {
        // Mock the TaskRepository and other dependencies
        taskRepository = {
            save: jest.fn(),
            findAll: jest.fn(),
            findById: jest.fn(),
            update: jest.fn(),
            delete: jest.fn(),
        };
        taskService = new TaskService_1.TaskService(taskRepository);
    });
    describe('createTask', () => {
        it('should call TaskRepository.save with the correct parameters', async () => {
            const title = 'Test Task';
            const labelId = 'labelId123';
            await taskService.createTask(title, labelId);
            expect(taskRepository.save).toHaveBeenCalledWith(expect.any(Task_1.Task));
        });
    });
    // Add tests for other service methods (getAllTasks, getTaskById, updateTask, deleteTask) similarly.
});
