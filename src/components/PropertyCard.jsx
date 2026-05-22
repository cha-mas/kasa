import styles from "./PropertyCard.module.scss";
import { Link } from "react-router";

export function PropertyCard({ data }) {
    return (
        <Link to={`/details/${data.id}`}>
            <article className={styles.propertyCard}>
                <img src={data.cover} alt={data.title} />
                <div className={styles.backdrop}></div>
                <h3>{data.title}</h3>
            </article>
        </Link>
    )
}