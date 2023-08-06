"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// tests/infrastructure/repositories/TaskMongoRepository.test.ts
const mongoose_1 = __importDefault(require("mongoose"));
const TaskMongoRepository_1 = require("../../../src/domain/repositories/TaskMongoRepository");
const Task_1 = require("../../../src/domain/entities/Task");
const TaskModel_1 = __importDefault(require("../../../src/domain/repositories/TaskModel"));
describe('TaskMongoRepository', () => {
    let taskMongoRepository;
    beforeAll(async () => {
        // Connect to a test database before running the tests
        await mongoose_1.default.connect('mongodb://localhost/todo_test_db', {});
        taskMongoRepository = new TaskMongoRepository_1.TaskMongoRepository();
    });
    afterAll(async () => {
        // Close the connection and clean up after running the tests
        await mongoose_1.default.connection.close();
    });
    describe('save', () => {
        it('should save a new task to the database', async () => {
            const task = new Task_1.Task('Test Task', 'labelId123');
            await taskMongoRepository.save(task);
            const savedTask = await TaskModel_1.default.findOne({ title: 'Test Task' });
            expect(savedTask).toBeTruthy();
        });
    });
    // Add tests for other repository methods (findById, findAll, update, delete) similarly.
});
