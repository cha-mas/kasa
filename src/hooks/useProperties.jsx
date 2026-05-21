import { useEffect, useState } from "react";

export function useProperties() {
    const [data, setData] = useState([]);
    const [error, setError] = useState(undefined)

    useEffect(() => { reload() }, []);

    async function reload() {
        const res = await fetch("/db.json");

        if (!res.ok) {
            setError(res.statusText)
            setData([])
            return
        }

        const json = await res.json();

        if (!json.length) {
            setError("Server returned 0 properties")
            setData([])
            return
        }

        if (json !== data) setData(json)
    }

    return { data, error, reload }
}