import { useState, memo, useCallback, useMemo } from 'react';
import styles from './Carousel.module.scss';
import { ArrowIcon } from '../shared/ArrowIcon.jsx';

const Carousel = memo(function Carousel({ pictures }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const hasMultiple = pictures.length > 1;

    const goToPrevious = useCallback(() => {
        setCurrentIndex((prev) => (prev === 0 ? pictures.length - 1 : prev - 1));
    }, [pictures.length]);

    const goToNext = useCallback(() => {
        setCurrentIndex((prev) => (prev === pictures.length - 1 ? 0 : prev + 1));
    }, [pictures.length]);

    const translatePercentage = useMemo(() => {
        return (currentIndex / pictures.length) * 100;
    }, [currentIndex, pictures.length]);

    return (
        <div className={styles.container}>
            <div
                className={styles.slider}
                style={{
                    width: `${pictures.length * 100}%`,
                    transform: `translateX(-${translatePercentage}%)`
                }}
            >
                {pictures.map((picture, index) => (
                    <img
                        key={index}
                        src={picture}
                        alt={`Image ${index + 1}`}
                        className={styles.image}
                    />
                ))}
            </div>

            {hasMultiple && (
                <>
                    <button
                        className={`${styles.arrow} ${styles.prev}`}
                        onClick={goToPrevious}
                        aria-label="Image précédente"
                    >
                        <ArrowIcon />
                    </button>
                    <button
                        className={`${styles.arrow} ${styles.next}`}
                        onClick={goToNext}
                        aria-label="Image suivante"
                    >
                        <ArrowIcon />
                    </button>
                    <span className={styles.caption}>{currentIndex + 1}/{pictures.length}</span>
                </>
            )}
        </div>
    );
});

export { Carousel };