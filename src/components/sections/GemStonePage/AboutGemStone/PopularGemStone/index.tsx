import { useState } from 'react';
import StarIcon from "/assets/PopularGem/atom-icon.svg";
import RedRing from "/assets/PopularGem/redring.png";
import RedRingVector from "/assets/PopularGem/redringbackvector.svg";
import GreenRing from "/assets/PopularGem/green-ring.png";
import GreenRingVector from "/assets/PopularGem/green-ring-back-vector.svg";
import YellowSaphire from "/assets/PopularGem/yellow-ring.png";
import YellowSaphireVector from "/assets/PopularGem/yellow-ring-back-vector.svg";
import BlueSaphire from "/assets/PopularGem/blue-ring.png";
import BlueSaphireVector from "/assets/PopularGem/blue-ring-vector.svg";
import CatEye from "/assets/PopularGem/cat-eyes.png";
import HoneyBrown from "/assets/PopularGem/Hessonite.png";
import HoneyBrownVector from "/assets/PopularGem/hessonite-vector.svg";
import RedCoral from "/assets/PopularGem/red-coral.png";
import RedCoralVector from "/assets/PopularGem/red-coral-ring-vector.svg";
import Pearl from "/assets/PopularGem/pearl-ring.png";
import PearlVector from "/assets/PopularGem/pearl-ring-vector.svg";

type GemItem = {
    englishName: string;
    hindiName: string;
    upperName: string;
    description: string;
    colorHex: string;
    colorName: string;
    planetIcon: string;
    planetName: string;
    image: string;
    vector: string;
    bgCircleHex: string;
};

const gemsData: GemItem[] = [
    {
        englishName: "Ruby",
        hindiName: "माणिक",
        upperName: "MANIK",
        description: "Leadership, self-confidence, fame, and achievement. The stone of the Sun — ignites passion, courage, and life force. Most prized among the Navaratna stones.",
        colorHex: "#EF4444",
        colorName: "Deep Red",
        planetIcon: StarIcon,
        planetName: "Sun (सूर्य)",
        image: RedRing,
        vector: RedRingVector,
        bgCircleHex: "#FFEBF0",
    },
    {
        englishName: "Emerald",
        hindiName: "पन्ना",
        upperName: "PANNA",
        description: "Intellect, creativity, speech, and memory. The gem of Mercury sharpens the mind and enhances communication, logic, and financial acumen.",
        colorHex: "#22C55E",
        colorName: "Green",
        planetIcon: StarIcon,
        planetName: "Mercury (बुध)",
        image: GreenRing,
        vector: GreenRingVector,
        bgCircleHex: "#E8FDF0",
    },
    {
        englishName: "Yellow Sapphire",
        hindiName: "पुखराज",
        upperName: "PUKHRAJ",
        description: "Prosperity, wisdom, marriage, and spiritual development. The stone of Jupiter — considered the most auspicious gem for blessings, fortune, and marital happiness.",
        colorHex: "#EDC447",
        colorName: "Golden Yellow",
        planetIcon: StarIcon,
        planetName: "Jupiter (बृहस्पति)",
        image: YellowSaphire,
        vector: YellowSaphireVector,
        bgCircleHex: "#EDC447",
    },
    {
        englishName: "Blue Sapphire",
        hindiName: "नीलम",
        upperName: "NEELAM",
        description: "Sudden wealth, mental clarity, and swift success. One of the most powerful and fast-acting astrological gems — to be worn only after careful consultation with an expert.",
        colorHex: "#1F87D2",
        colorName: "Blue",
        planetIcon: StarIcon,
        planetName: "Saturn (शनि)",
        image: BlueSaphire,
        vector: BlueSaphireVector,
        bgCircleHex: "#DCF1FF",
    },
    {
        englishName: "Cat's Eye",
        hindiName: "लहसुनिया",
        upperName: "LEHSUNIA",
        description: "Refuge from evil, spiritual realization, and healing. Known for its distinctive chatoyancy effect — its mysterious inner glow mirrors the eye of a cat.",
        colorHex: "#78B464",
        colorName: "Olive Green",
        planetIcon: StarIcon,
        planetName: "Ketu (केतु)",
        image: CatEye,
        vector: GreenRingVector,
        bgCircleHex: "#DCFFD1",
    },
    {
        englishName: "Hessonite",
        hindiName: "गोमेद",
        upperName: "GOMED",
        description: "Erases Rahu dosha, brings clarity, courtroom victory, and political success. A powerful stone for those in law, politics, media, or facing delays in life.",
        colorHex: "#78B464",
        colorName: "Honey Brown",
        planetIcon: StarIcon,
        planetName: "Rahu (राहु)",
        image: HoneyBrown,
        vector: HoneyBrownVector,
        bgCircleHex: "#FFF7E9",
    },
    {
        englishName: "Red Coral",
        hindiName: "मूंगा",
        upperName: "MUNGA",
        description: "Bravery, energy, strength, and triumph over foes. Governed by Mars, this stone fuels ambition, drives courage, and helps overcome obstacles with fierce determination.",
        colorHex: "#F04545",
        colorName: "Coral Red",
        planetIcon: StarIcon,
        planetName: "Mars (मंगल)",
        image: RedCoral,
        vector: RedCoralVector,
        bgCircleHex: "#FFDCE0",
    },
    {
        englishName: "Pearl",
        hindiName: "मोती",
        upperName: "MOTI",
        description: "Emotional poise, calmness, and harmony in relationships. Pearl is the gem of the Moon — soothes the mind, deepens intuition, and nurtures the heart's wisdom.",
        colorHex: "#F0E7D5",
        colorName: "Lustrous White",
        planetIcon: StarIcon,
        planetName: "Moon (चंद्र)",
        image: Pearl,
        vector: PearlVector,
        bgCircleHex: "#FFF7E9",
    }
];

export default function PopularGemstone() {
    return (
        <div className="flex flex-col w-full bg-white">
            {/* Header Banner */}
            <div className="bg-[#FFF8F4] py-6 md:py-10 px-4 md:px-[60px] flex flex-col md:flex-row items-start md:items-center justify-between border-y border-[#CED4DA] gap-4 md:gap-0">
                <div className="flex flex-col">
                    <div className="flex items-center gap-2 mb-2">
                        <img src={StarIcon} alt="star" className="w-[12px] h-[12px]" />
                        <span className="font-['Open_Sans'] text-[#FF8936] text-[12px] md:text-[14px] tracking-widest font-medium uppercase">THE COLLECTION</span>
                        <div className="h-px bg-[#FF8936] w-[100px] ml-2 opacity-50"></div>
                    </div>
                    <h2 className="font-['Very_Vogue-Display',Helvetica] font-[401] text-[36px] md:text-[48px] text-black leading-none mt-2">
                        Popular <span className="font-['Very_Vogue-Display_Italic',Helvetica] italic text-[#FF8936]">Gemstones</span>
                    </h2>
                </div>
                <p className="font-['Open_Sans'] text-[#6C757D] text-[16px] leading-[26px] font-medium max-w-[400px]">
                    Explore our most sought-after natural gemstones, carefully selected for their quality, authenticity, and timeless appeal.
                </p>
            </div>

            {/* Content list */}
            <div className="flex flex-col px-4 md:px-[60px] py-8 md:py-[60px] gap-10 lg:gap-0">
                <GemRow leftGem={gemsData[0]} rightGem={gemsData[1]} />
                <GemRow leftGem={gemsData[2]} rightGem={gemsData[3]} />
                <GemRow leftGem={gemsData[4]} rightGem={gemsData[5]} />
                <GemRow leftGem={gemsData[6]} rightGem={gemsData[7]} />
                {/* Users can add more GemRow components here later */}
            </div>
        </div>
    )
}

const GemRow = ({ leftGem, rightGem }: { leftGem: GemItem, rightGem: GemItem }) => {
    // 0 for left expanded, 1 for right expanded
    const [expandedIndex, setExpandedIndex] = useState(0);

    return (
        <div className="flex flex-col lg:flex-row w-full items-center justify-between h-auto lg:h-[305px] pb-6 lg:pb-10 mb-6 lg:mb-10 lg:last:border-0 lg:last:mb-0 lg:last:pb-0 gap-10 lg:gap-0">
            <GemCard
                gem={leftGem}
                isExpanded={expandedIndex === 0}
                onHover={() => setExpandedIndex(0)}
                isRightSide={false}
            />
            <GemCard
                gem={rightGem}
                isExpanded={expandedIndex === 1}
                onHover={() => setExpandedIndex(1)}
                isRightSide={true}
            />
        </div>
    );
};

const ColorGroup = ({ gem }: { gem: GemItem }) => (
    <div className="flex items-center gap-2">
        <div className="w-[14px] h-[14px] rounded-full" style={{ backgroundColor: gem.colorHex }}></div>
        <span className="font-['Open_Sans'] text-[15px] text-[#6C757D] font-medium">{gem.colorName}</span>
    </div>
);

const PlanetGroup = ({ gem }: { gem: GemItem }) => (
    <div className="flex items-center gap-2">
        <img src={gem.planetIcon} alt="planet" className="w-[16px] h-[16px]" style={{ filter: 'brightness(0) saturate(100%) invert(64%) sepia(35%) saturate(3065%) hue-rotate(338deg) brightness(101%) contrast(101%)' }} />
        <span className="font-['Open_Sans'] text-[15px] text-[#FF8936] font-medium">{gem.planetName}</span>
    </div>
);

const GemCard = ({ gem, isExpanded, onHover, isRightSide }: any) => {
    return (
        <div
            className={`flex flex-col lg:flex-row items-center flex-nowrap transition-all duration-800 ease-in-out cursor-pointer h-full relative
                ${isExpanded ? 'lg:flex-1' : 'w-full lg:w-[400px] shrink-0'}
                ${isRightSide ? 'lg:justify-end' : 'lg:justify-start'}
            `}
            onMouseEnter={onHover}
        >
            {/* Image Box */}
            <div className={`relative shrink-0 w-[280px] sm:w-[305px] h-[280px] sm:h-[305px] flex items-center justify-center z-10 order-1 ${isRightSide ? 'lg:order-2' : 'lg:order-1'} group`}>
                {/* Background Vector */}
                <img src={gem.vector} alt="vector" className={`absolute inset-0 w-full h-full object-contain pointer-events-none transition-transform duration-800 ease-in-out ${isExpanded ? 'rotate-45' : 'rotate-0'}`} />

                {/* Solid Colored Circle (Collapsed State ONLY) */}
                <div
                    className="absolute inset-0 rounded-full transition-all duration-600 ease-in-out lg:block hidden"
                    style={{
                        backgroundColor: gem.bgCircleHex,
                        opacity: isExpanded ? 0 : 1,
                        transform: isExpanded ? 'scale(0.8)' : 'scale(0.65)'
                    }}
                ></div>
                <div
                    className="absolute inset-0 rounded-full transition-all duration-600 ease-in-out lg:hidden block"
                    style={{
                        backgroundColor: gem.bgCircleHex,
                        opacity: 1,
                        transform: 'scale(0.65)'
                    }}
                ></div>

                {/* Ring Image */}
                <img
                    src={gem.image}
                    alt={gem.englishName}
                    className={`relative z-10 max-w-[180px] h-auto object-contain transition-transform duration-800 ease-in-out ${isExpanded ? 'scale-110 -translate-y-2' : 'scale-[0.85] translate-y-0'}`}
                />
            </div>

            {/* Text Box Wrapper */}
            <div
                className={`overflow-hidden transition-all duration-800 ease-in-out z-0 flex flex-col w-full lg:w-0 lg:opacity-0 ${isExpanded ? 'lg:!w-[480px] lg:!opacity-100' : ''} order-2 ${isRightSide ? 'lg:order-1' : 'lg:order-2'}`}
            >
                <div className={`w-full lg:w-[480px] flex flex-col justify-center items-center lg:items-stretch h-auto lg:h-[305px] ${isRightSide ? 'lg:items-end lg:text-right lg:pr-6 text-center' : 'lg:items-start lg:text-left lg:pl-6 text-center'} pt-4 lg:pt-0`}>

                    {/* Header */}
                    <div className="flex items-end justify-center lg:justify-start gap-[6px] lg:gap-[10px] mb-3 flex-wrap lg:whitespace-nowrap overflow-visible">
                        {isRightSide ? (
                            <>
                                <span className="hidden lg:inline font-sans font-medium text-[16px] text-[#6C757D] mb-1">{gem.hindiName}</span>
                                <span className="hidden lg:inline text-[#CED4DA] text-[18px] mb-1">•</span>
                                <span className="hidden lg:inline font-sans font-medium text-[16px] text-[#6C757D] uppercase tracking-widest mb-1">{gem.upperName}</span>
                                <span className="hidden lg:inline text-[#CED4DA] text-[18px] mb-1">•</span>
                                <h3 className="font-['Very_Vogue-Display',Helvetica] font-[401] text-[52px] leading-[0.8] text-[#FF8936] pb-1">{gem.englishName}</h3>
                                <span className="lg:hidden text-[#CED4DA] text-[18px] mb-1">•</span>
                                <span className="lg:hidden font-sans font-medium text-[16px] text-[#6C757D] mb-1">{gem.hindiName}</span>
                                <span className="lg:hidden text-[#CED4DA] text-[18px] mb-1">•</span>
                                <span className="lg:hidden font-sans font-medium text-[16px] text-[#6C757D] uppercase tracking-widest mb-1">{gem.upperName}</span>
                            </>
                        ) : (
                            <>
                                <h3 className="font-['Very_Vogue-Display',Helvetica] font-[401] text-[52px] leading-[0.8] text-[#FF8936] pb-1">{gem.englishName}</h3>
                                <span className="text-[#CED4DA] text-[18px] mb-1">•</span>
                                <span className="font-sans font-medium text-[16px] text-[#6C757D] mb-1">{gem.hindiName}</span>
                                <span className="text-[#CED4DA] text-[18px] mb-1">•</span>
                                <span className="font-sans font-medium text-[16px] text-[#6C757D] uppercase tracking-widest mb-1">{gem.upperName}</span>
                            </>
                        )}
                    </div>

                    {/* Divider above desc */}
                    <div className={`w-[200px] lg:w-[350px] h-px bg-[#CED4DA] mb-4 lg:mb-6 mt-1 shrink-0 opacity-60 mx-auto ${isRightSide ? 'lg:mr-0 lg:ml-auto' : 'lg:ml-0 lg:mr-auto'}`}></div>

                    {/* Description */}
                    <p className={`font-['Open_Sans'] text-[14px] lg:text-[15px] font-medium leading-[24px] lg:leading-[26px] text-[#6C757D] mb-6 lg:mb-8 whitespace-normal max-w-full lg:max-w-[350px] mx-auto text-center ${isRightSide ? 'lg:text-right lg:mr-0 lg:ml-auto' : 'lg:text-left lg:ml-0 lg:mr-auto'}`}>
                        {gem.description}
                    </p>

                    {/* Bottom Info */}
                    {isRightSide ? (
                        <div className="flex items-center gap-3 justify-center lg:justify-end whitespace-nowrap">
                            <div className="hidden lg:flex items-center gap-3">
                                <PlanetGroup gem={gem} />
                                <span className="text-[#CED4DA] text-[16px] px-1">•</span>
                                <ColorGroup gem={gem} />
                            </div>
                            <div className="flex lg:hidden items-center gap-3">
                                <ColorGroup gem={gem} />
                                <span className="text-[#CED4DA] text-[16px] px-1">•</span>
                                <PlanetGroup gem={gem} />
                            </div>
                        </div>
                    ) : (
                        <div className="flex items-center gap-3 justify-center lg:justify-start whitespace-nowrap">
                            <ColorGroup gem={gem} />
                            <span className="text-[#CED4DA] text-[16px] px-1">•</span>
                            <PlanetGroup gem={gem} />
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
