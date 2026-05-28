import { memo } from "react";

const ArrowIcon = memo(function ArrowIcon({ className }) {
    return (
        <svg 
            width="48" 
            height="48" 
            viewBox="0 0 96 120" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            aria-hidden="true"
        >
            <g clipPath="url(#clip0_514339_94)">
                <path d="M70.04 15.4799L62.92 8.3999L23.36 47.9999L62.96 87.5999L70.04 80.5199L37.52 47.9999L70.04 15.4799Z" fill="white"/>
            </g>
            <defs>
                <clipPath id="clip0_514339_94">
                    <rect width="96" height="119.64" fill="white"/>
                </clipPath>
            </defs>
        </svg>
    );
});

export { ArrowIcon };