import { useParams } from "react-router";
import { Carousel } from '../components/details/Carousel';
import { useProperty } from '../hooks/properties'
import { Collapsible } from '../components/shared/Collapsible'
import { Rating } from '../components/details/Rating'
import { NotFoundError } from '../errors/NotFoundError'
import styles from './Details.module.scss';

export function Details() {
    const params = useParams();

    const { data, isLoading } = useProperty(params.id);

    if (!isLoading && !data) {
        throw new NotFoundError(`Property with id '${params.id}' not found`);
    }

    if (isLoading || !data) {
        return <>...</>;
    }

    return (
        <>
            <div className={styles.carousselContainer}>
                <Carousel pictures={data.pictures} />
            </div>
            <section className={styles.information}>
                <div>
                    <h1>{data.title}</h1>
                    <p>{data.location}</p>
                    <ul className={styles.tags}>
                        {data.tags.map(tag => (<li key={tag}>{tag}</li>))}
                    </ul>
                </div>
                <div>
                    <figure className={styles.host}>
                        <img src={data.host.picture} alt={data.host.name} />
                        <figcaption>{data.host.name}</figcaption>
                    </figure>
                    <Rating value={data.rating} />
                </div>
            </section>
            <section className={styles.details}>
                <Collapsible label="Description">{data.description}</Collapsible>
                <Collapsible label="Équipements">
                    <ul>
                        {data.equipments.map(item => (<li key={item}>{item}</li>))}
                    </ul>
                </Collapsible>
            </section>
        </>
    )
}
