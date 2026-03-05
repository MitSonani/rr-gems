import { type JSX } from "react";

export const FilterOptionsSection = (): JSX.Element => {
    const handleClearAll = () => {
        // clear logic will go here
    };

    return (
        <header className="flex items-center justify-between px-4 md:px-[60px] py-4 md:py-[30px] w-full bg-[#FFDCE0] border-b border-[#CED4DA]">
            <h1 className="font-display font-normal text-black text-[20px] md:text-[32px] leading-none">
                Filter Gemstone
            </h1>

            <button
                type="button"
                onClick={handleClearAll}
                className="inline-flex items-center justify-center border-b border-black bg-transparent cursor-pointer transition-opacity hover:opacity-70 outline-none pb-0.5"
                aria-label="Clear all filters"
            >
                <span className="font-open-sans font-medium text-black text-[12px] md:text-[16px] leading-[18px] md:leading-[24px] tracking-[0px] uppercase">
                    CLEAR ALL
                </span>
            </button>
        </header>
    );
};
