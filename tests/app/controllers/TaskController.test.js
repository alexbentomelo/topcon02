"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// tests/app/controllers/TaskController.test.ts
const TaskController_1 = require("../../../src/app/controllers/TaskController");
describe('TaskController', () => {
    let taskController;
    let taskService;
    beforeEach(() => {
        // Mock the TaskService and other dependencies
        taskService = {
            createTask: jest.fn(),
            getAllTasks: jest.fn(),
            getTaskById: jest.fn(),
            updateTask: jest.fn(),
            deleteTask: jest.fn(),
        };
        taskController = new TaskController_1.TaskController(taskService);
    });
    describe('createTask', () => {
        it('should call TaskService.createTask with the correct parameters and return 201', async () => {
            const req = { body: { title: 'Test Task', labelId: 'labelId123' } };
            const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
            await taskController.createTask(req, res);
            expect(taskService.createTask).toHaveBeenCalledWith('Test Task', 'labelId123');
            expect(res.status).toHaveBeenCalledWith(201);
            expect(res.json).toHaveBeenCalled();
        });
    });
    // Add tests for other controller methods (getAllTasks, getTaskById, updateTask, deleteTask) similarly.
});
