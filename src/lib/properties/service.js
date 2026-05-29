import { NotFoundError } from "../../components/details/NotFoundError";

const BASE_URL = "/db.json";

class PropertiesService {
    #cache = null;
    #fetchPromise = null;

    /**
     * Gets the current cache value (for initialization purposes)
     * @returns {Array|null} The cached properties array or null if not cached
     */
    get cache() {
        return this.#cache;
    }

    /**
     * Fetches all properties from the data source.
     * Implements caching and request deduplication.
     * @returns {Promise<Array>} Array of property objects
     */
    async getAllProperties() {
        // Return cached data if available
        if (this.#cache !== null) {
            return this.#cache;
        }

        // Return existing promise if fetch is in progress
        if (this.#fetchPromise !== null) {
            return this.#fetchPromise;
        }

        // Start new fetch
        this.#fetchPromise = this.#fetchAll();
        return this.#fetchPromise;
    }

    /**
     * Gets a single property by its ID.
     * @param {string} id - The property ID to look up
     * @returns {Promise<Object>} The property object
     * @throws {NotFoundError} If property with given ID is not found
     */
    async getPropertyById(id) {
        const properties = await this.getAllProperties();
        const property = properties.find((item) => item.id === id);

        if (!property) {
            throw new NotFoundError(`Property with id '${id}' not found`);
        }

        return property;
    }

    /**
     * Internal method that performs the actual fetch operation.
     * @private
     * @returns {Promise<Array>} Array of property objects
     */
    async #fetchAll() {
        try {
            const res = await fetch(BASE_URL);
            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }
            const json = await res.json();
            this.#cache = json;
            return json;
        } finally {
            this.#fetchPromise = null;
        }
    }
}

// Singleton instance - shared cache across all hooks
export const propertiesService = new PropertiesService();
