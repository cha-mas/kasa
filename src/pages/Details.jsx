import { useParams } from "react-router";
import { useProperty } from '../hooks/properties'

export function Details() {
    const params = useParams();

    const { data } = useProperty(params.id)

    return (
        <>
            <pre>{JSON.stringify(data, undefined, 4)}</pre>
        </>
    )
}