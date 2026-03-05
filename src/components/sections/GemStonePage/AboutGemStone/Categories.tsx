import { type JSX } from "react";
import star1 from "/assets/AboutGem/star.svg";
import line103 from "/assets/AboutGem/line.svg";
import Type1Image from "/assets/TypesOfGemStone/types-gemstone-1.jpg";
import Type2Image from "/assets/TypesOfGemStone/types-gemstone-2.png";
import Type3Image from "/assets/TypesOfGemStone/types-gemstone-3.png";
import Type4Image from "/assets/TypesOfGemStone/types-gemstone-4.jpg";

const categories = [
    {
        id: "01",
        label: "PRECIOUS",
        title: "Precious Gemstones",
        description: "Valued for their rarity, durability, and exceptional quality. These stones are widely recognised for their long-term value and use in fine jewellery worldwide.",
        tags: ["Ruby", "Sapphire", "Emerald", "Diamond"],
        image: Type1Image,
    },
    {
        id: "02",
        label: "SEMI - PRECIOUS",
        title: "Semi - Precious Gemstones",
        description: "Offer a wide variety of colours, patterns, and natural formations. Admired for their beauty, versatility, and accessibility across all kinds of jewellery.",
        tags: ["Amethyst", "Topaz", "Garnet", "Aquamarine"],
        image: Type2Image,
    },
    {
        id: "03",
        label: "RUDRAKSHA",
        title: "Rudraksha and Mala",
        description: "Authentically sourced from the Nepal, our premium Rudraksha beads and hand-knotted Malas represent a timeless bond between nature and spirituality.",
        tags: ["1 Mukhi", "10 Mukhi", "11 Mukhi"],
        image: Type3Image,
    },
    {
        id: "04",
        label: "HEALING",
        title: "Healing Crystals",
        description: "Natural stones chosen for their calming presence and aesthetic appeal. Commonly used in wellness practices and mindful living.",
        tags: ["Rose Quartz", "Citrine", "Pearl", "Moon Stone"],
        image: Type4Image,
    }
];

export const Categories = (): JSX.Element => {
    return (
        <div className="flex flex-col w-full animate-in fade-in duration-500">
            {/* Top Banner Section */}
            <div className="px-4 md:px-[60px] pt-8 md:pt-[60px] pb-6 md:pb-10 w-full">
                <div className="w-full bg-[#FFF9F5] flex flex-col lg:flex-row items-start lg:items-center justify-between px-6 py-8 sm:px-16 sm:py-12 gap-6 lg:gap-0">
                    <div className="flex flex-col gap-4">
                        <div className="inline-flex items-center gap-3">
                            <img
                                className="w-2.5 h-2.5"
                                alt="star"
                                src={star1}
                                aria-hidden="true"
                            />
                            <span className="font-sans font-medium text-[#FF8936] text-[14px] tracking-[2.80px] uppercase">
                                THE COLLECTION
                            </span>
                            <img
                                className="w-[100px] h-px ml-2"
                                alt="line"
                                src={line103}
                                aria-hidden="true"
                            />
                        </div>

                        <h2 className="font-display font-normal text-[36px] sm:text-[46px] md:text-[50px] leading-tight">
                            <span className="text-black">Types of </span>
                            <span className="text-[#FF8936] italic">Gemstones</span>
                        </h2>
                    </div>

                    <div className="max-w-[400px]">
                        <p className="font-open-sans text-[#6C757D] text-[16px] font-medium leading-[26px]">
                            Gemstones are broadly classified based on their origin, composition, and formation.
                        </p>
                    </div>
                </div>
            </div>

            {/* Grid Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 px-4 md:px-[60px] pb-8 md:pb-[60px] w-full">
                {categories.map((category) => (
                    <div
                        key={category.id}
                        className="flex flex-col border border-[#CED4DA] bg-white group hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all duration-300"
                    >
                        <div className="w-full h-[320px] overflow-hidden">
                            <img
                                src={category.image}
                                alt={category.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>

                        <div className="flex flex-col p-6 md:p-10 flex-1 justify-between">
                            <div>
                                <div className="inline-flex items-center gap-3 mb-4">
                                    <img
                                        className="w-2.5 h-2.5"
                                        alt="star"
                                        src={star1}
                                        aria-hidden="true"
                                    />
                                    <span className="font-sans font-medium text-[#FF8936] text-[13px] tracking-[2.80px] uppercase">
                                        {category.id} / {category.label}
                                    </span>
                                    <img
                                        className="w-[100px] h-px ml-2"
                                        alt="line"
                                        src={line103}
                                        aria-hidden="true"
                                    />
                                </div>

                                <h3 className="font-display font-normal text-[36px] text-[#FF8936] leading-tight mb-5">
                                    {category.title}
                                </h3>

                                <p className="font-open-sans text-[#6C757D] text-[16px] font-medium leading-[26px]">
                                    {category.description}
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-4 mt-10">
                                {category.tags.map((tag, index) => (
                                    <span
                                        key={index}
                                        className="border border-[#FF8936]/30 text-[#FF8936] px-6 py-2.5 text-[15px] font-sans font-medium hover:bg-[#FFF9F5] transition-colors"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Categories;
