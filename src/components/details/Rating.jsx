import { memo } from 'react';
import styles from './Rating.module.scss';
import { StarIcon } from '../shared/StarIcon.jsx';

const STARS = [1, 2, 3, 4, 5];

const Rating = memo(function Rating({ value }) {
    const rating = parseInt(value, 10);

    return (
        <div className={styles.rating}>
            {STARS.map((star) => (
                <StarIcon
                    key={star}
                    className={star <= rating ? styles.filled : styles.empty}
                />
            ))}
        </div>
    );
});

export { Rating };