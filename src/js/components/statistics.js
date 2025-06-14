class Statistics {
    constructor() {
        this.data = StorageService.get(CONSTANTS.STORAGE_KEYS.STATISTICS) || {
            daily: {},
            weekly: {},
            monthly: {}
        };
    }

    addSession(duration, type) {
        const date = new Date().toISOString().split('T')[0];
        if (!this.data.daily[date]) {
            this.data.daily[date] = {
                pomodoro: 0,
                shortBreak: 0,
                longBreak: 0
            };
        }
        this.data.daily[date][type] += duration;
        this.save();
    }

    save() {
        StorageService.save(CONSTANTS.STORAGE_KEYS.STATISTICS, this.data);
    }

    getDailyStats(date) {
        return this.data.daily[date] || null;
    }

    // Additional statistics methods will be implemented here
}
