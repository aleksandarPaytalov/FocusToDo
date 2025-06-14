// Timer service for managing Pomodoro timing
class TimerService {
    constructor() {
        this.timeRemaining = 0;
        this.timerId = null;
        this.isRunning = false;
        this.onTick = null;
        this.onComplete = null;
    }

    /**
     * Start the timer
     * @param {number} duration - Duration in seconds
     * @param {Function} onTick - Callback for each second
     * @param {Function} onComplete - Callback when timer completes
     */
    start(duration, onTick, onComplete) {
        this.timeRemaining = duration;
        this.onTick = onTick;
        this.onComplete = onComplete;
        this.isRunning = true;

        this.timerId = setInterval(() => {
            this.timeRemaining--;
            if (this.onTick) {
                this.onTick(this.timeRemaining);
            }
            
            if (this.timeRemaining <= 0) {
                this.stop();
                if (this.onComplete) {
                    this.onComplete();
                }
            }
        }, 1000);
    }

    /**
     * Stop the timer
     */
    stop() {
        if (this.timerId) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
        this.isRunning = false;
    }

    /**
     * Pause the timer
     */
    pause() {
        this.stop();
    }

    /**
     * Resume the timer
     */
    resume() {
        if (!this.isRunning && this.timeRemaining > 0) {
            this.start(this.timeRemaining, this.onTick, this.onComplete);
        }
    }
}
