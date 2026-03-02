import { useState, type JSX } from "react";
import { motion, AnimatePresence } from "framer-motion";
import line103 from "/assets/AboutGem/line.svg";
import rectangle3464296 from "/assets/AboutGem/AboutemImage.png";
import star1 from "/assets/AboutGem/star.svg";
import ReadMoreGem from "./ReadMoreGem";
import PopularGemstone from "./PopularGemStone";
import Certification from "./Certification";
import Categories from "./Categories";

export const AboutGemStone = (): JSX.Element => {
    const [activeTab, setActiveTab] = useState("About");
    const [isReadMoreOpen, setIsReadMoreOpen] = useState(false);

    const navigationTabs = [
        { id: "about", label: "About" },
        { id: "popular-gemstones", label: "Popular Gemstones" },
        { id: "certification", label: "Certification" },
        { id: "categories", label: "Categories" },
        { id: "buying-guide", label: "Buying Guide" },
    ];

    return (
        <div className="flex flex-col w-full mx-auto relative bg-white py-[60px]">
            <div className="flex flex-col relative w-full max-w-[1280px] mx-auto border border-[#CED4DA]">
                <nav
                    className="flex gap-10 px-[60px] w-full border-b border-[#CED4DA] items-center"
                    role="navigation"
                    aria-label="Main navigation"
                >
                    {navigationTabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.label)}
                            className={`py-5 border-b-2 -mb-[1px] transition-colors outline-none cursor-pointer ${activeTab === tab.label
                                ? "border-[#FF8936]"
                                : "border-transparent hover:border-[#CED4DA]"
                                }`}
                            aria-current={activeTab === tab.label ? "page" : undefined}
                        >
                            <span
                                className={`font-['Open_Sans'] text-[16px] font-medium leading-[24px] tracking-[0px] ${activeTab === tab.label
                                    ? "text-[#FF8936]"
                                    : "text-[#6C757D]"
                                    }`}
                            >
                                {tab.label}
                            </span>
                        </button>
                    ))}
                </nav>

                {activeTab === "About" && (
                    <>
                        <main className="flex w-full p-[60px]">
                            <article className="flex w-full items-center justify-between gap-[60px]">
                                <div className="flex flex-col flex-1 max-w-[550px] items-start gap-8">
                                    <header className="flex flex-col items-start gap-4">
                                        <div className="inline-flex items-center gap-3">
                                            <img
                                                className="w-2.5 h-2.5"
                                                alt=""
                                                src={star1}
                                                aria-hidden="true"
                                            />
                                            <span className="font-sans font-medium text-[#FF8936] text-sm tracking-[2.80px] uppercase">
                                                THE STORY
                                            </span>
                                            <img
                                                className="w-[100px] h-px ml-2"
                                                alt=""
                                                src={line103}
                                                aria-hidden="true"
                                            />
                                        </div>

                                        <h1 className="font-display font-normal text-[56px] leading-tight">
                                            <span className="text-black">About </span>
                                            <span className="text-[#FF8936] italic">Gemstone</span>
                                        </h1>
                                    </header>

                                    <p className="font-['Open_Sans'] text-[#6C757D] text-[16px] font-medium leading-[24px] tracking-[0px]">
                                        Gemstones are more than just exquisite ornaments; they are
                                        naturally formed minerals prized for their breathtaking beauty,
                                        extreme rarity, and lifelong durability.
                                    </p>

                                    {!isReadMoreOpen && (
                                        <button
                                            onClick={() => setIsReadMoreOpen(true)}
                                            className="inline-flex justify-center mt-2 px-8 py-3.5 bg-[#ffe9da] hover:bg-[#ffd9c4] transition-colors focus:ring-2 focus:ring-[#FF8936]/50 outline-none cursor-pointer"
                                            aria-label="Read more about gemstones"
                                        >
                                            <span className="font-sans font-semibold text-[#FF8936] text-[15px] tracking-wide">
                                                Read More
                                            </span>
                                        </button>
                                    )}
                                </div>

                                <img
                                    className="w-[450px] h-[450px] object-cover flex-shrink-0"
                                    alt="Close-up of a hand wearing an elegant gemstone ring"
                                    src={rectangle3464296}
                                />
                            </article>
                        </main>

                        <AnimatePresence>
                            {isReadMoreOpen && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.5, ease: "easeInOut" }}
                                    className="overflow-hidden w-full flex"
                                >
                                    <ReadMoreGem onClose={() => setIsReadMoreOpen(false)} />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </>
                )}

                {activeTab === "Popular Gemstones" && (
                    <PopularGemstone />
                )}

                {activeTab === "Certification" && (
                    <Certification />
                )}

                {activeTab === "Categories" && (
                    <Categories />
                )}
            </div>
        </div>
    );
};
