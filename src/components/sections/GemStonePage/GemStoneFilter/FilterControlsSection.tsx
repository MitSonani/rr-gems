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
        <section className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6 px-4 md:px-[60px] py-4 md:py-[30px] w-full ">
            <h2 className="font-display font-normal text-black text-[18px] md:text-[24px] tracking-wide whitespace-nowrap">
                Active Filters -
            </h2>

            <div className="flex flex-wrap gap-4">
                {activeFilters.map((filter) => (
                    <div
                        key={filter.id}
                        className="flex items-center gap-2 md:gap-3 px-3 md:px-5 py-1.5 md:py-2.5 bg-[#FCF2EB] border border-[#FF8936] shrink-0"
                        role="group"
                        aria-label={`Filter: ${filter.label}`}
                    >
                        <span className="font-open-sans font-medium text-[#FF8936] text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] tracking-[0px] whitespace-nowrap">
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
