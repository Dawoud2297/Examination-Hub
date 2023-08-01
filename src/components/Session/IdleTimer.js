class IdleTimer {
    constructor({ timeout, onTimeout,onExpired }) {
        this.timeout = timeout;
        this.onTimeout = onTimeout;
        this.eventHandler = this.updateExpiredTime.bind(this);
        const expiredTime = parseInt(localStorage.getItem("__expiredTime") || 0, 10);
        if(expiredTime > 0 && expiredTime < Date.now()){
            onExpired();
            return;
        }
        this.tracker();
        this.startInterval();
    }
    startInterval() {
        this.updateExpiredTime();
        this.interval = setInterval(() => {
            const expiredTime = parseInt(localStorage.getItem("__expiredTime") || 0, 10);
            if (expiredTime < Date.now()) {
                if (this.onTimeout) {
                    this.onTimeout();
                    this.cleanUp();
                }
            }
        }, 1000)
    }
    updateExpiredTime() {
        if (this.timeoutTracker) {
            clearTimeout(this.timeoutTracker);
        }
        this.timeoutTracker = setTimeout(() => {
            localStorage.setItem("__expiredTime", Date.now() + this.timeout * 1000);
        }, 300)
    }
    tracker() {
        window.addEventListener("mousemove", this.eventHandler);
        window.addEventListener("scroll", this.eventHandler);
        window.addEventListener("keydown", this.eventHandler);
    }
    cleanUp() {
        localStorage.removeItem("__expiredTime");
        clearInterval(this.interval);
        window.removeEventListener("mousemove", this.eventHandler);
        window.removeEventListener("scroll", this.eventHandler);
        window.removeEventListener("keydown", this.eventHandler);
    }
}
export default IdleTimer;