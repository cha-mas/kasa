import { memo } from 'react';
import styles from './Header.module.scss';
import logo from '../../../assets/img/logo.svg';
import { NavLink } from 'react-router';

function HeaderComponent() {
    return <header className={styles.header}>
        <img src={logo} alt="Kasa logo" />
        <nav>
            <NavLink to="/">Accueil</NavLink>
            <NavLink to="/about">À Propos</NavLink>
        </nav>
    </header>
}

export const Header = memo(HeaderComponent);