
import { useId } from 'react';

const LabcerificationLine = ({ className = "text-[#FF8936]" }: { className?: string }) => {
    const id = useId().replace(/:/g, "-");
    const gradient0Id = `paint0_linear_${id}`;
    const gradient1Id = `paint1_linear_${id}`;

    return (
        <svg width="327" height="23" viewBox="0 0 327 23" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${className} transition-all duration-300`}>
            <rect x="149.314" y="1.05049" width="14.5144" height="14.5144" transform="rotate(45 149.314 1.05049)" stroke="currentColor" strokeWidth="1.48562" />
            <rect x="178.314" y="1.19697" width="14.5144" height="14.5144" transform="rotate(45 178.314 1.19697)" stroke="currentColor" strokeWidth="1.48562" />
            <rect x="163.658" y="1.19697" width="14.5144" height="14.5144" transform="rotate(45 163.658 1.19697)" stroke="currentColor" strokeWidth="1.48562" />
            <rect x="187" y="10" width="140" height="2" rx="1" fill={`url(#${gradient0Id})`} />
            <rect width="140" height="2" rx="1" transform="matrix(-1 0 0 1 140 10)" fill={`url(#${gradient1Id})`} />
            <defs>
                <linearGradient id={gradient0Id} x1="327" y1="11.0001" x2="187" y2="11.0001" gradientUnits="userSpaceOnUse">
                    <stop stopColor="currentColor" stopOpacity="0" />
                    <stop offset="1" stopColor="currentColor" />
                </linearGradient>
                <linearGradient id={gradient1Id} x1="140" y1="1.00007" x2="0" y2="1.00007" gradientUnits="userSpaceOnUse">
                    <stop stopColor="currentColor" stopOpacity="0" />
                    <stop offset="1" stopColor="currentColor" />
                </linearGradient>
            </defs>
        </svg>
    );
};

export default LabcerificationLine;
