import { useState, type JSX } from "react";

const alphabetLetters = [
    "All", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
];

const stoneTypes = [
    "Precious Stones",
    "Semi Precious Stones",
    "Rudraksha and Mala",
    "Healing Crystals",
];

const colorFilters = [
    { name: "Color", bg: "bg-[#ff3939]" },
    { name: "Black", bg: "bg-black" },
    { name: "Blue", bg: "bg-[#39a2ff]" },
    { name: "Brown", bg: "bg-[#904343]" },
    { name: "Green", bg: "bg-[#4ed11f]" },
    { name: "Yellow", bg: "bg-[#ffde39]" },
    { name: "Grey", bg: "bg-[#bcbcbc]" },
    { name: "Puple", bg: "bg-[#e739ff]" },
    { name: "White", bg: "bg-white", border: "border border-[#CED4DA]" },
    { name: "Pink", bg: "bg-[#ff3961]" },
    { name: "BI Color", bg: "bg-[linear-gradient(180deg,rgba(229,82,255,1)_0%,rgba(58,202,255,1)_100%)]" },
    { name: "Multi", bg: "bg-[linear-gradient(180deg,rgba(252,255,58,1)_12%,rgba(39,243,253,1)_62%,rgba(39,178,253,1)_100%)]" },
    { name: "Orange", bg: "bg-[#FF8936]" },
];

export const ActiveFiltersSection = (): JSX.Element => {
    const [selectedLetter, setSelectedLetter] = useState<string>("All");
    const [selectedType, setSelectedType] = useState<string | null>(null);
    const [selectedColors, setSelectedColors] = useState<string[]>([]);

    const handleLetterClick = (letter: string) => {
        setSelectedLetter(letter);
    };

    const handleTypeClick = (type: string) => {
        setSelectedType(selectedType === type ? null : type);
    };

    const handleColorClick = (colorName: string) => {
        setSelectedColors((prev) =>
            prev.includes(colorName)
                ? prev.filter((c) => c !== colorName)
                : [...prev, colorName],
        );
    };

    return (
        <section className="flex items-stretch w-full border-b border-[#CED4DA]">
            {/* BY NAME SECTION */}
            <div className="flex flex-col flex-1 p-[40px] border-r border-[#CED4DA]">
                <header className="flex items-center gap-4 w-full mb-8">
                    <h2 className="font-['Open_Sans'] font-medium text-[#FF8936] text-[16px] leading-[24px] tracking-[0px] uppercase whitespace-nowrap">
                        BY NAME
                    </h2>
                    <div className="flex-1 h-px bg-[#FF8936]"></div>
                </header>

                <div className="flex flex-wrap gap-2.5 max-w-[400px]">
                    {alphabetLetters.map((letter) => {
                        const isSelected = selectedLetter === letter;

                        return (
                            <button
                                key={letter}
                                onClick={() => handleLetterClick(letter)}
                                className={`w-11 h-11 flex items-center justify-center transition-colors outline-none cursor-pointer ${isSelected
                                    ? "bg-[#FCF2EB] border border-[#FF8936] text-[#FF8936]"
                                    : "border border-[#CED4DA] text-[#6C757D] hover:border-[#FF8936]"
                                    }`}
                                aria-pressed={isSelected}
                            >
                                <span className="font-['Open_Sans'] font-medium text-[16px] leading-[24px] tracking-[0px]">
                                    {letter}
                                </span>
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* BY TYPE SECTION */}
            <div className="flex flex-col w-[320px] p-[40px] border-r border-[#CED4DA] shrink-0">
                <header className="flex items-center gap-4 w-full mb-8">
                    <h2 className="font-['Open_Sans'] font-medium text-[#FF8936] text-[16px] leading-[24px] tracking-[0px] uppercase whitespace-nowrap">
                        BY TYPE
                    </h2>
                    <div className="flex-1 h-px bg-[#FF8936]"></div>
                </header>

                <nav className="flex flex-col gap-3">
                    {stoneTypes.map((type) => {
                        const isSelected = selectedType === type;

                        return (
                            <button
                                key={type}
                                onClick={() => handleTypeClick(type)}
                                className={`flex items-center px-5 py-3 border outline-none cursor-pointer transition-colors ${isSelected
                                    ? "border-[#FF8936] bg-[#FCF2EB] text-[#FF8936]"
                                    : "border-[#CED4DA] text-[#6C757D] hover:border-[#FF8936]"
                                    }`}
                                aria-pressed={isSelected}
                            >
                                <span className="font-['Open_Sans'] font-medium text-[16px] leading-[24px] tracking-[0px] text-left">
                                    {type}
                                </span>
                            </button>
                        );
                    })}
                </nav>
            </div>

            {/* BY COLOR SECTION */}
            <div className="flex flex-col flex-1 p-[40px] pl-14">
                <header className="flex items-center gap-4 w-full mb-8">
                    <h2 className="font-['Open_Sans'] font-medium text-[#FF8936] text-[16px] leading-[24px] tracking-[0px] uppercase whitespace-nowrap">
                        BY COLOR
                    </h2>
                    <div className="flex-1 h-px bg-[#FF8936]"></div>
                </header>

                <div className="grid grid-cols-5 gap-y-6 gap-x-4 max-w-[400px]">
                    {colorFilters.map((color) => {
                        const isSelected = selectedColors.includes(color.name);

                        return (
                            <button
                                key={color.name}
                                onClick={() => handleColorClick(color.name)}
                                className="flex flex-col items-center gap-2 outline-none cursor-pointer group"
                                aria-pressed={isSelected}
                            >
                                <div
                                    className={`w-11 h-11 rounded-full border-2 transition-all flex items-center justify-center ${isSelected
                                        ? "border-[#FF8936] p-[2px]"
                                        : "border-transparent group-hover:border-[#CED4DA] p-[2px]"
                                        }`}
                                >
                                    <div className={`w-full h-full rounded-full ${color.bg} ${color.border || ''}`}></div>
                                </div>
                                <span className="font-['Open_Sans'] font-medium text-[#6C757D] text-[16px] leading-[24px] tracking-[0px]">
                                    {color.name}
                                </span>
                            </button>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
