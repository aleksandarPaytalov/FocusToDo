class NotificationManager {
    constructor() {
        this.checkPermission();
    }

    async checkPermission() {
        if (!("Notification" in window)) {
            console.log("This browser does not support notifications");
            return;
        }

        if (Notification.permission !== "granted") {
            await Notification.requestPermission();
        }
    }

    notify(title, options = {}) {
        if (Notification.permission === "granted") {
            new Notification(title, options);
        }
    }
}
