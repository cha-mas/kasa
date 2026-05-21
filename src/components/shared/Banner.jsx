import styles from './Banner.module.scss';

export function Banner({ image, children }) {
    return (
        <div className={styles.banner} style={{ backgroundImage: `url(${image})` }}>
            <div className={styles.backdrop}></div>
            <h1>{children}</h1>
        </div>
    )
}