import styles from "./PropertyCard.module.scss";
import { Link } from "react-router";

export function PropertyCard({ data }) {
    return (
        <Link to="/">
            <article className={styles.propertyCard}>{data.id}</article>
        </Link>
    )
}