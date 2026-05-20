import styles from './Footer.module.scss';
import logo from '../../assets/img/logo.svg';

export function Footer() {
    return (
        <footer class={styles.footer}>
            <img src={logo} />
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}