import styles from './Error.module.scss';
import { Link } from "react-router";

export function Error() {
    return (
        <div className={styles.errorContainer}>
            <b>404</b>
            <h1>Oups! La page que vous demandez n'existe pas.</h1>
            <Link to='/'>Retourner sur la page d'accueil</Link>
        </div>
    )
}