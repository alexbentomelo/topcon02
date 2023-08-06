// src/domain/entities/Task.ts
export class Task {
    id: string;
    title: string;
    description?: string;
    completed: boolean;
    labelId: string;
  
    constructor(title: string, labelId: string) {
      this.id = ''; // Initialize with a generated ID
      this.title = title;
      this.completed = false;
      this.labelId = labelId;
    }
  }
  