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
}
