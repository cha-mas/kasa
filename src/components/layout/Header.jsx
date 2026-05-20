import styles from './Header.module.scss';
import logo from '../../assets/img/logo.svg';
import { NavLink } from 'react-router';

export function Header() {
    return <header className={styles.header}>
        <img src={logo} />
        <nav>
            <NavLink to="/">Accueil</NavLink>
            <NavLink to="/about">À Propos</NavLink>
        </nav>
    </header>
}