import { useState } from 'react';
import styles from './Collapsible.module.scss';

// Placeholder Chevron SVG - Replace with exported SVG from Figma
const ChevronIcon = ({ isOpen }) => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={styles.chevron}
    style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
  >
    <path
      d="M8 12L16 20L24 12"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export function Collapsible({ label, defaultOpen = false, children }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className={styles.collapsible}>
      <div className={styles.header}>
        <div className={styles.label}>{label}</div>
        <button
          className={styles.trigger}
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label={isOpen ? 'Fermer' : 'Ouvrir'}
        >
          <ChevronIcon isOpen={isOpen} />
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