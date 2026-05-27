import { useEffect, useState } from "react";

const BASE_URL = "/db.json";

export function useProperties() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function load() {
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
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function load() {
            setIsLoading(true);
            try {
                const property = await FETCH_PEROPERTY(id);
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

async function FETCH_ALL_PROPERTIES() {
    const res = await fetch(BASE_URL);
    if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
    }
    return res.json();
}

async function FETCH_PEROPERTY(id) {
    const res = await fetch(BASE_URL);
    if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
    }
    const json = await res.json();
    return json.find((item) => item.id === id) ?? null;
}