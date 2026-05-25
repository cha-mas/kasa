import { useEffect, useState } from "react";

const BASE_URL = "/db.json";

export function useProperties() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const controller = new AbortController();

        async function fetchProperties() {
            setIsLoading(true);
            try {
                const res = await fetch(BASE_URL, { signal: controller.signal });
                const json = await res.json();
                setData(json);
            } catch {
                // Error handled by ErrorBoundary
            } finally {
                setIsLoading(false);
            }
        }

        fetchProperties();

        return () => controller.abort();
    }, []);

    return { data, isLoading };
}

export function useProperty(id) {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const controller = new AbortController();

        async function fetchProperty() {
            setIsLoading(true);
            try {
                const res = await fetch(BASE_URL, { signal: controller.signal });
                const json = await res.json();
                const property = json.find((item) => item.id === id);
                setData(property ?? null);
            } catch {
                // Error handled by ErrorBoundary
            } finally {
                setIsLoading(false);
            }
        }

        if (id) {
            fetchProperty();
        }

        return () => controller.abort();
    }, [id]);

    return { data, isLoading };
}