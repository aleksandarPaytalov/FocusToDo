class Pomodoro {
    constructor() {
        this.timerService = new TimerService();
        this.initializeElements();
        this.setupEventListeners();
        this.setupTimerCallbacks();
        this.initializeModes();
        this.setupModeEventListeners();
        
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
     */    setupTimerCallbacks() {
        this.timerService.setOnTick((timeRemaining) => {
            this.updateDisplay(timeRemaining);
        });

        this.timerService.setOnComplete(() => {
            this.updateControls(false);
            this.handleSessionComplete();
        });

        this.timerService.setOnStateChange((isRunning) => {
            this.updateControls(isRunning);
        });

        this.timerService.setOnModeChange((mode, label) => {
            this.updateModeUI(mode, label);
        });
    }

    /**
     * Initialize mode elements
     */
    initializeModes() {
        this.timerSection = document.querySelector('.timer-section');
        this.modeButtons = {
            pomodoro: document.getElementById('pomodoroMode'),
            shortBreak: document.getElementById('shortBreakMode'),
            longBreak: document.getElementById('longBreakMode')
        };
        this.sessionCount = document.getElementById('sessionCount');
        this.sessionStatus = document.getElementById('sessionStatus');
        
        // Set initial mode
        this.timerSection.dataset.mode = 'pomodoro';
        this.currentSession = 1;
        this.updateSessionInfo('pomodoro', 'Focus Time');
    }

    /**
     * Setup mode event listeners
     */
    setupModeEventListeners() {
        Object.entries(this.modeButtons).forEach(([mode, button]) => {
            button.addEventListener('click', () => {
                this.timerService.setMode(mode);
            });
        });
    }

    /**
     * Update mode-related UI elements
     * @param {string} mode - The current mode
     * @param {string} label - The mode label to display
     */
    updateModeUI(mode, label) {
        // Update active button
        Object.values(this.modeButtons).forEach(btn => btn.classList.remove('active'));
        this.modeButtons[mode].classList.add('active');

        // Update timer section data attribute for styling
        this.timerSection.dataset.mode = mode;

        // Update session info
        this.updateSessionInfo(mode, label);
    }

    /**
     * Update session information display
     * @param {string} mode - The current mode
     * @param {string} label - The mode label to display
     */
    updateSessionInfo(mode, label) {
        if (mode === 'pomodoro') {
            this.sessionCount.textContent = `#${this.currentSession}`;
        }
        this.sessionStatus.textContent = label;
    }

    /**
     * Handle session completion
     */
    handleSessionComplete() {
        const currentMode = this.timerService.getCurrentMode();
        
        if (currentMode.mode === 'pomodoro') {
            this.currentSession++;
            // Every 4 pomodoros, take a long break
            if (this.currentSession % 4 === 0) {
                this.timerService.setMode('longBreak');
            } else {
                this.timerService.setMode('shortBreak');
            }
        } else {
            this.timerService.setMode('pomodoro');
        }
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
