import BGImage from "../assets/img/banners/2.jpg";
import styles from './About.module.scss'
import { Banner } from "../components/shared/Banner";
import { Collapsible } from '../components/shared/Collapsible'

export function About() {
    return (
        <>
            <Banner image={BGImage} />
            <section className={styles.collapsibles}>
                <Collapsible label="Fiabilité">
                    Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.
                </Collapsible>
                <Collapsible label="Respect">
                    La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.
                </Collapsible>
                <Collapsible label="Service">
                    La qualité du service est au cœur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance.
                </Collapsible>
                <Collapsible label="Sécurité">
                    La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.
                </Collapsible>
            </section></>
    )
}