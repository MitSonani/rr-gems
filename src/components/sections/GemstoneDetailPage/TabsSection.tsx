import { useState } from 'react';
import Star from "/assets/AboutGem/star.svg";
import line from "/assets/AboutGem/line.svg";
import Image1 from "/assets/GemDetail/GemDetailPage.png";
import Image2 from "/assets/GemDetail/GemDetailPage2.png";
import Image3 from "/assets/GemDetail/GemDetailPage3.png";
import HowToWearTab from "./HowToWearTab";
import WhoShouldWearTab from "./WhoShouldWearTab";
import BenefitsTab from "./BenefitsTab";
import CleaningCareTab from "./CleaningCareTab";
import BuyerBewareTab from "./BuyerBewareTab";

const tabs = [
    "About", "How to wear", "Who should wear", "Benefits", "Cleaning & Care", "Buyer Beware", "FAQs"
];

export default function TabsSection() {
    const [isExpanded, setIsExpanded] = useState(false);
    const [activeTab, setActiveTab] = useState("About");

    return (
        <div className="px-4 pb-20 bg-white">
            <div className="border border-[#CED4DA] bg-white">

                {/* Tabs Header */}
                <div className="flex items-center overflow-x-auto border-b border-[#CED4DA] hide-scrollbar px-10">
                    {tabs.map((tab, idx) => (
                        <div
                            key={idx}
                            onClick={() => setActiveTab(tab)}
                            className={`min-w-max px-6 py-3 cursor-pointer font-open-sans text-[15px] md:text-[16px] font-medium leading-[24px] border-b-[3px] transition-colors ${activeTab === tab ? 'text-[#FF8936] border-[#FF8936]' : 'text-[#6C757D] border-transparent hover:text-[#FF8936]'
                                }`}
                        >
                            {tab}
                        </div>
                    ))}
                </div>

                {/* Tab Content */}
                {activeTab === "About" && (
                    <div className="p-6 md:p-12 md:pl-16">
                        <div className="flex items-center gap-2 mb-4">
                            <img src={Star} alt="star" />
                            <span className="font-open-sans text-[#FF8936] text-[14px] tracking-[20%] font-medium uppercase">THE STORY</span>
                            <img src={line} alt="line" />
                        </div>

                        <h2 className="font-['Very_Vogue-Display',Helvetica] font-[401] text-[40px] md:text-[48px] text-black leading-none mb-6">
                            About <span className="font-['Very_Vogue-Display_Italic',Helvetica] font-[401]  text-[40px] md:text-[48px] italic text-[#FF8936]">Emerald</span>
                        </h2>

                        <p className="font-open-sans text-[#6C757D] text-[15px] md:text-[18px] font-normal leading-[28px] max-w-[1160px] mb-6">
                            Emerald is a precious gem known for its rich green color and timeless charm. Belonging to the beryl family, it gets its vibrant hue from
                            traces of chromium or vanadium. In Vedic astrology, emerald is called Panna and represents the planet Mercury (Budh), the symbol of
                            wisdom, intellect, and communication. It's believed to bring mental clarity, creativity, prosperity, and emotional balance to those it suits.
                        </p>

                        {isExpanded && (
                            <div className="max-w-[1160px] animate-fade-in mt-14 mb-4">
                                {/* Images Grid */}
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 mb-14">
                                    <img src={Image1} alt="Emerald Ring" className="w-full object-contain" />
                                    <img src={Image2} alt="Loose Emerald" className="w-full object-contain" />
                                    <img src={Image3} alt="Emerald Necklace" className="w-full object-contain" />
                                </div>

                                {/* Origin */}
                                <div className="mb-10">
                                    <h3 className="font-['Very_Vogue-Display',Helvetica] font-[401] text-[28px] md:text-[32px] text-black leading-[100%] mb-4">
                                        Origin
                                    </h3>
                                    <p className="font-open-sans text-[#6C757D] text-[15px] md:text-[16px] font-normal leading-[26px]">
                                        The earliest known emerald gemstones were mined in Egypt around 1500 BCE, especially from the famed Cleopatra Mines. Today, major sources include Colombia (renowned for producing the finest quality emeralds), Zambia, Brazil, and Afghanistan.
                                    </p>
                                </div>

                                {/* Cultural Significance */}
                                <div>
                                    <h3 className="font-['Very_Vogue-Display',Helvetica] font-[401] text-[28px] md:text-[32px] text-black leading-[100%] mb-4">
                                        Cultural Significance
                                    </h3>
                                    <p className="font-open-sans text-[#6C757D] text-[15px] md:text-[16px] font-normal leading-[26px] mb-2">
                                        Emeralds have held deep cultural and spiritual meaning across civilizations:
                                    </p>
                                    <ul className="list-none font-open-sans text-[#6C757D] text-[15px] md:text-[16px] font-normal leading-[26px] space-y-2">
                                        <li className="flex items-start">
                                            <span className="mr-2">&bull;</span>
                                            <span>Ancient Egypt: Regarded as symbols of fertility and rebirth, emeralds were beloved by Cleopatra herself, who adorned her palace and personal adornments with them.</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="mr-2">&bull;</span>
                                            <span>Ancient Rome and Greece: Panna stones were believed to symbolize Venus, the goddess of love, and were thought to soothe the eyes and enhance foresight.</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="mr-2">&bull;</span>
                                            <span>Middle Ages: Used by alchemists and mystics, emeralds were thought to hold the power to predict the future and protect against evil spirits.</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        )}

                        <button
                            onClick={() => setIsExpanded(!isExpanded)}
                            className="bg-[#FCF2EB] text-[#FF8936] font-open-sans text-[16px] leading-[24px] font-medium px-6 py-2.5 mt-10 rounded hover:bg-[#FFE5D4] transition-colors"
                        >
                            {isExpanded ? 'Read Less' : 'Read More'}
                        </button>
                    </div>
                )}

                {activeTab === "How to wear" && <HowToWearTab />}
                {activeTab === "Who should wear" && <WhoShouldWearTab />}
                {activeTab === "Benefits" && <BenefitsTab />}
                {activeTab === "Cleaning & Care" && <CleaningCareTab />}
                {activeTab === "Buyer Beware" && <BuyerBewareTab />}
            </div>
        </div>
    );
}
