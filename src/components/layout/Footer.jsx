import styles from './Footer.module.scss';
import logo from '../../assets/img/logo.svg';

export function Footer() {
    return (
        <footer className={styles.footer}>
            <img src={logo} />
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}