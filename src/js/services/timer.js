// Timer service for managing Pomodoro timing
class TimerService {
    constructor() {
        this.timeRemaining = 25 * 60; // Default to 25 minutes
        this.initialTime = this.timeRemaining;
        this.timerId = null;
        this.isRunning = false;
        this.onTick = null;
        this.onComplete = null;
        this.onStateChange = null;
    }    /**
     * Start or resume the timer
     */
    start() {
        if (this.isRunning) return;

        this.isRunning = true;
        this.timerId = setInterval(() => {
            this.timeRemaining--;
            
            if (this.onTick) {
                this.onTick(this.timeRemaining);
            }
            
            if (this.timeRemaining <= 0) {
                this.pause();
                if (this.onComplete) {
                    this.onComplete();
                }
            }
        }, 1000);

        if (this.onStateChange) {
            this.onStateChange(this.isRunning);
        }
    }

    /**
     * Pause the timer
     */
    pause() {
        if (this.timerId) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
        this.isRunning = false;
        
        if (this.onStateChange) {
            this.onStateChange(this.isRunning);
        }
    }

    /**
     * Reset the timer to initial state
     */
    reset() {
        this.pause();
        this.timeRemaining = this.initialTime;
        
        if (this.onTick) {
            this.onTick(this.timeRemaining);
        }
    }

    /**
     * Set the callback for timer tick events
     * @param {Function} callback - Function to call on each tick
     */
    setOnTick(callback) {
        this.onTick = callback;
    }

    /**
     * Set the callback for timer completion
     * @param {Function} callback - Function to call when timer completes
     */
    setOnComplete(callback) {
        this.onComplete = callback;
    }

    /**
     * Set the callback for timer state changes
     * @param {Function} callback - Function to call when timer state changes
     */
    setOnStateChange(callback) {
        this.onStateChange = callback;
    }

    /**
     * Timer modes configuration
     */
    #modes = {
        pomodoro: {
            duration: 25 * 60,
            label: 'Focus Time'
        },
        shortBreak: {
            duration: 5 * 60,
            label: 'Short Break'
        },
        longBreak: {
            duration: 15 * 60,
            label: 'Long Break'
        }
    };

    /**
     * Change timer mode
     * @param {string} mode - The mode to switch to ('pomodoro', 'shortBreak', 'longBreak')
     */
    setMode(mode) {
        if (!this.#modes[mode]) return;
        
        const wasRunning = this.isRunning;
        this.pause();

        this.currentMode = mode;
        this.timeRemaining = this.#modes[mode].duration;
        this.initialTime = this.timeRemaining;

        if (this.onTick) {
            this.onTick(this.timeRemaining);
        }

        if (this.onModeChange) {
            this.onModeChange(mode, this.#modes[mode].label);
        }

        if (wasRunning && this.autoStart) {
            this.start();
        }
    }

    /**
     * Get the current mode configuration
     * @returns {Object} The current mode configuration
     */
    getCurrentMode() {
        return {
            mode: this.currentMode,
            label: this.#modes[this.currentMode].label
        };
    }

    /**
     * Set callback for mode changes
     * @param {Function} callback - Function to call when mode changes
     */
    setOnModeChange(callback) {
        this.onModeChange = callback;
    }
}
