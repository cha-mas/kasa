import { useEffect, useState, useRef } from "react";

const BASE_URL = "/db.json";

// Module-scoped singleton cache for properties data
let propertiesCache = null;
let propertiesCachePromise = null;

async function FETCH_ALL_PROPERTIES() {
    // Return cached data if available
    if (propertiesCache !== null) {
        return propertiesCache;
    }
    
    // Return existing promise if fetch is in progress
    if (propertiesCachePromise !== null) {
        return propertiesCachePromise;
    }
    
    // Start new fetch
    propertiesCachePromise = (async () => {
        const res = await fetch(BASE_URL);
        if (!res.ok) {
            propertiesCachePromise = null;
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        const json = await res.json();
        propertiesCache = json;
        propertiesCachePromise = null;
        return json;
    })();
    
    return propertiesCachePromise;
}

async function FETCH_PROPERTY(id) {
    const properties = await FETCH_ALL_PROPERTIES();
    return properties.find((item) => item.id === id) ?? null;
}

export function useProperties() {
    const [data, setData] = useState(() => {
        // Initialize with cached data if available
        return propertiesCache ?? [];
    });
    const [isLoading, setIsLoading] = useState(() => {
        // Not loading if we already have cached data
        return propertiesCache === null;
    });

    useEffect(() => {
        async function load() {
            // Skip if already cached
            if (propertiesCache !== null) {
                setData(propertiesCache);
                setIsLoading(false);
                return;
            }
            
            setIsLoading(true);
            try {
                const json = await FETCH_ALL_PROPERTIES();
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

export function useProperty(id) {
    const [data, setData] = useState(() => {
        // Initialize with cached data if available
        if (propertiesCache !== null) {
            return propertiesCache.find((item) => item.id === id) ?? null;
        }
        return null;
    });
    const [isLoading, setIsLoading] = useState(() => {
        // Not loading if we already have cached data
        return propertiesCache === null;
    });

    useEffect(() => {
        async function load() {
            // Skip if already cached
            if (propertiesCache !== null) {
                setData(propertiesCache.find((item) => item.id === id) ?? null);
                setIsLoading(false);
                return;
            }
            
            setIsLoading(true);
            try {
                const property = await FETCH_PROPERTY(id);
                setData(property);
            } catch {
                setData(null);
            } finally {
                setIsLoading(false);
            }
        }

        load();
    }, [id]);

    return { data, isLoading };
}