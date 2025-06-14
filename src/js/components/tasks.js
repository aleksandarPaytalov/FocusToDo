class TaskManager {
    constructor() {
        this.tasks = StorageService.get(CONSTANTS.STORAGE_KEYS.TASKS) || [];
    }

    addTask(title, description = '') {
        const task = {
            id: helpers.generateId(),
            title,
            description,
            created: new Date().toISOString(),
            completed: false,
            pomodorosEstimated: 1,
            pomodorosCompleted: 0
        };

        this.tasks.push(task);
        this.save();
        return task;
    }

    updateTask(id, updates) {
        const index = this.tasks.findIndex(task => task.id === id);
        if (index !== -1) {
            this.tasks[index] = { ...this.tasks[index], ...updates };
            this.save();
            return this.tasks[index];
        }
        return null;
    }

    deleteTask(id) {
        this.tasks = this.tasks.filter(task => task.id !== id);
        this.save();
    }

    save() {
        StorageService.save(CONSTANTS.STORAGE_KEYS.TASKS, this.tasks);
    }
}
