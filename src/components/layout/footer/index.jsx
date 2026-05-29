import { memo } from 'react';
import styles from './Footer.module.scss';
import logo from '../../../assets/img/logo.svg';

function FooterComponent() {
    return (
        <footer className={styles.footer}>
            <img src={logo} alt="Kasa logo" />
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export const Footer = memo(FooterComponent);