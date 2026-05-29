import { useState, memo, useCallback } from 'react';
import styles from './Collapsible.module.scss';
import { ChevronIcon } from '../../icons';

function CollapsibleComponent({ label, defaultOpen = false, children }) {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    const toggle = useCallback(() => {
        setIsOpen(prev => !prev);
    }, []);

    return (
        <div className={styles.collapsible}>
            <div className={styles.header}>
                <div className={styles.label}>{label}</div>
                <button
                    className={styles.trigger}
                    onClick={toggle}
                    aria-expanded={isOpen}
                    aria-label={isOpen ? 'Fermer' : 'Ouvrir'}
                >
                    <ChevronIcon isOpen={isOpen} className={styles.chevron} />
                </button>
            </div>

            <div className={isOpen ? styles.panelOpen : styles.panelClosed}>
                <div className={styles.content}>
                    {children}
                </div>
            </div>
        </div>
    );
}

export const Collapsible = memo(CollapsibleComponent);