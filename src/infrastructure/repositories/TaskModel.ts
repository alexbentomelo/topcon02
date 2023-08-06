// src/infrastructure/repositories/TaskModel.ts
import mongoose, { Document, Schema } from 'mongoose';

export interface TaskModel extends Document {
  title: string;
  description?: string;
  completed: boolean;
  labelId: string;
}

const taskSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, default: undefined },
  completed: { type: Boolean, default: false },
  labelId: { type: String, required: true },
});

export default mongoose.model<TaskModel>('Task', taskSchema);
