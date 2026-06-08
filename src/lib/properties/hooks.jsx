import { useEffect, useState } from "react";
import { propertiesService } from "./service";

/**
 * Hook to fetch and manage all properties.
 * Uses the PropertiesService singleton for caching and data fetching.
 * @returns {{ data: Array, isLoading: boolean }}
 */
export function useProperties() {
    const [data, setData] = useState(() => propertiesService.cache ?? []);
    const [isLoading, setIsLoading] = useState(() => propertiesService.cache === null);

    useEffect(() => {
        async function load() {
            setIsLoading(true);
            try {
                const json = await propertiesService.getAllProperties();
                setData(json);
            } catch {
                setData([]);
            } finally {
                setIsLoading(false);
            }
        }

        load();
    }, []);

    return { data, isLoading };
}

/**
 * Hook to fetch and manage a single property by ID.
 * Uses the PropertiesService singleton for caching and data fetching.
 * @param {string} id - The property ID to fetch
 * @returns {{ data: Object|null, isLoading: boolean }}
 * @throws {NotFoundError} When property with given ID is not found (caught by ErrorBoundary)
 */
export function useProperty(id) {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function load() {
            setIsLoading(true);
            setError(null);

            try {
                const property = await propertiesService.getPropertyById(id);
                setData(property);
            } catch (err) {
                setError(err);
            } finally {
                setIsLoading(false);
            }
        }

        load();
    }, [id]);

    // Re-throw error for ErrorBoundary to catch
    if (error) {
        throw error;
    }

    return { data, isLoading };
}
