class Pomodoro {
    constructor() {
        this.timerService = new TimerService();
        this.initializeElements();
        this.setupEventListeners();
        this.setupTimerCallbacks();
        
        // Initial display update
        this.updateDisplay(this.timerService.timeRemaining);
        this.updateControls(false);
    }

    /**
     * Initialize DOM elements
     */
    initializeElements() {
        this.minutesDisplay = document.getElementById('minutes');
        this.secondsDisplay = document.getElementById('seconds');
        this.startButton = document.getElementById('startTimer');
        this.pauseButton = document.getElementById('pauseTimer');
        this.resetButton = document.getElementById('resetTimer');
    }    /**
     * Setup event listeners for control buttons
     */
    setupEventListeners() {
        this.startButton.addEventListener('click', () => {
            this.timerService.start();
        });

        this.pauseButton.addEventListener('click', () => {
            this.timerService.pause();
        });

        this.resetButton.addEventListener('click', () => {
            this.timerService.reset();
            this.updateControls(false);
        });
    }

    /**
     * Setup timer service callbacks
     */
    setupTimerCallbacks() {
        this.timerService.setOnTick((timeRemaining) => {
            this.updateDisplay(timeRemaining);
        });

        this.timerService.setOnComplete(() => {
            this.updateControls(false);
        });

        this.timerService.setOnStateChange((isRunning) => {
            this.updateControls(isRunning);
        });
    }

    /**
     * Update the timer display
     * @param {number} timeRemaining - Time remaining in seconds
     */
    updateDisplay(timeRemaining) {
        const minutes = Math.floor(timeRemaining / 60);
        const seconds = timeRemaining % 60;
        
        this.minutesDisplay.textContent = String(minutes).padStart(2, '0');
        this.secondsDisplay.textContent = String(seconds).padStart(2, '0');
        
        // Update page title
        document.title = `${minutes}:${String(seconds).padStart(2, '0')} - FocusToDo`;
    }

    /**
     * Update control buttons state
     * @param {boolean} isRunning - Whether the timer is running
     */
    updateControls(isRunning) {
        this.startButton.disabled = isRunning;
        this.pauseButton.disabled = !isRunning;
        this.resetButton.disabled = !isRunning && 
            this.timerService.timeRemaining === this.timerService.initialTime;
    }
}

// Initialize the Pomodoro component when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new Pomodoro();
});
