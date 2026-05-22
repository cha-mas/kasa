import { useParams } from "react-router";

export function Details() {
    const params = useParams();

    return <>{params.id}</>
}