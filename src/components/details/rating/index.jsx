import { memo } from 'react';
import styles from './Rating.module.scss';
import { StarIcon } from '../../icons';

const STARS = [1, 2, 3, 4, 5];

function RatingComponent({ value }) {
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
}

export const Rating = memo(RatingComponent);