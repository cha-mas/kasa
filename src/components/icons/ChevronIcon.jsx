import { memo } from "react";

function ChevronIconComponent({ isOpen, className }) {
    return (
        <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
            aria-hidden="true"
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
}

export const ChevronIcon = memo(ChevronIconComponent);