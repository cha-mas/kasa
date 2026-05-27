import { useState } from 'react';
import styles from './Carousel.module.scss';

export function Carousel({ pictures }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const hasMultiple = pictures.length > 1;

    const goToPrevious = () => {
        setCurrentIndex((prev) => (prev === 0 ? pictures.length - 1 : prev - 1));
    };

    const goToNext = () => {
        setCurrentIndex((prev) => (prev === pictures.length - 1 ? 0 : prev + 1));
    };

    const translatePercentage = (currentIndex / pictures.length) * 100;

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
                        <svg width="48" height="48" viewBox="0 0 96 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_514339_94)">
                                <path d="M70.04 15.4799L62.92 8.3999L23.36 47.9999L62.96 87.5999L70.04 80.5199L37.52 47.9999L70.04 15.4799Z" fill="white"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_514339_94">
                                    <rect width="96" height="119.64" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                    </button>
                    <button
                        className={`${styles.arrow} ${styles.next}`}
                        onClick={goToNext}
                        aria-label="Image suivante"
                    >
                        <svg width="48" height="48" viewBox="0 0 96 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_514339_94)">
                                <path d="M70.04 15.4799L62.92 8.3999L23.36 47.9999L62.96 87.5999L70.04 80.5199L37.52 47.9999L70.04 15.4799Z" fill="white"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_514339_94">
                                    <rect width="96" height="119.64" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                    </button>
                    <span className={styles.caption}>{currentIndex + 1}/{pictures.length}</span>
                </>
            )}
        </div>
    );
}
