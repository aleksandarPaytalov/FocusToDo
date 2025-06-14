// Storage service for managing local data
class StorageService {
    /**
     * Save data to localStorage
     * @param {string} key - Storage key
     * @param {any} data - Data to store
     */
    static save(key, data) {
        localStorage.setItem(key, JSON.stringify(data));
    }

    /**
     * Get data from localStorage
     * @param {string} key - Storage key
     * @returns {any} Stored data or null if not found
     */
    static get(key) {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : null;
    }

    /**
     * Remove data from localStorage
     * @param {string} key - Storage key
     */
    static remove(key) {
        localStorage.removeItem(key);
    }
}
