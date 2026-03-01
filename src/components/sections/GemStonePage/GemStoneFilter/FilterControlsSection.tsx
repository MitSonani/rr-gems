import { useState, type JSX } from "react";

export const FilterControlsSection = (): JSX.Element => {
    const [activeFilters, setActiveFilters] = useState([
        { id: 1, label: "Letter - All", type: "letter" },
    ]);

    const handleRemoveFilter = (filterId: number) => {
        setActiveFilters(activeFilters.filter((filter) => filter.id !== filterId));
    };

    if (activeFilters.length === 0) return <></>;

    return (
        <section className="flex items-center gap-6 px-[60px] py-[30px] w-full">
            <h2 className="font-display font-normal text-black text-[24px] tracking-wide whitespace-nowrap">
                Active Filters -
            </h2>

            <div className="flex flex-wrap gap-4">
                {activeFilters.map((filter) => (
                    <div
                        key={filter.id}
                        className="flex items-center gap-3 px-5 py-2.5 bg-[#FCF2EB] border border-[#FF8936]"
                        role="group"
                        aria-label={`Filter: ${filter.label}`}
                    >
                        <span className="font-['Open_Sans'] font-medium text-[#FF8936] text-[16px] leading-[24px] tracking-[0px]">
                            {filter.label}
                        </span>

                        <button
                            onClick={() => handleRemoveFilter(filter.id)}
                            aria-label={`Remove ${filter.label} filter`}
                            className="text-[#FF8936] hover:text-black transition-colors outline-none cursor-pointer"
                            type="button"
                        >
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L13 13M1 13L13 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
};
