import { memo } from 'react';
import styles from './Banner.module.scss';

const Banner = memo(function Banner({ image, children }) {
    return (
        <div className={styles.banner} style={{ backgroundImage: `url(${image})` }}>
            <div className={styles.backdrop}></div>
            {children && <h1>{children}</h1>}
        </div>
    )
});

export { Banner };