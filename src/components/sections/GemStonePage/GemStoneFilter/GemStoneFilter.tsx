import type { JSX } from "react";
import { ActiveFiltersSection } from "./ActiveFiltersSection";
import { FilterControlsSection } from "./FilterControlsSection";
import { FilterOptionsSection } from "./FilterOptionsSection";

export default function GemStoneFilter(): JSX.Element {
    return (
        <div className="flex flex-col w-full max-w-[1280px] mx-auto border border-[#CED4DA] bg-white mt-12 mb-12">
            <FilterOptionsSection />
            <ActiveFiltersSection />
            <FilterControlsSection />
        </div>
    );
};
