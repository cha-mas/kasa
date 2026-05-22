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
    className={isOpen ? styles.chevronOpen : styles.chevronClosed}
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
      <button
        className={styles.trigger}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className={styles.label}>{label}</span>
        <ChevronIcon isOpen={isOpen} />
      </button>

      {isOpen && (
        <div className={styles.content}>
          {children}
        </div>
      )}
    </div>
  );
}