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
    }
];

export default function PopularGemstone() {
    return (
        <div className="flex flex-col w-full bg-white">
            {/* Header Banner */}
            <div className="bg-[#FFF8F4] py-10 px-[60px] flex items-center justify-between border-y border-[#CED4DA]">
                <div className="flex flex-col">
                    <div className="flex items-center gap-2 mb-2">
                        <img src={StarIcon} alt="star" className="w-[12px] h-[12px]" />
                        <span className="font-['Open_Sans'] text-[#FF8936] text-[14px] tracking-widest font-medium uppercase">THE COLLECTION</span>
                        <div className="h-px bg-[#FF8936] w-[100px] ml-2 opacity-50"></div>
                    </div>
                    <h2 className="font-['Very_Vogue-Display',Helvetica] font-[401] text-[48px] text-black leading-none mt-2">
                        Popular <span className="font-['Very_Vogue-Display_Italic',Helvetica] italic text-[#FF8936]">Gemstones</span>
                    </h2>
                </div>
                <p className="font-['Open_Sans'] text-[#6C757D] text-[16px] leading-[26px] font-medium max-w-[400px]">
                    Explore our most sought-after natural gemstones, carefully selected for their quality, authenticity, and timeless appeal.
                </p>
            </div>

            {/* Content list */}
            <div className="flex flex-col px-[60px] py-[60px]">
                <GemRow leftGem={gemsData[0]} rightGem={gemsData[1]} />
                <GemRow leftGem={gemsData[2]} rightGem={gemsData[3]} />
                {/* Users can add more GemRow components here later */}
            </div>
        </div>
    )
}

const GemRow = ({ leftGem, rightGem }: { leftGem: GemItem, rightGem: GemItem }) => {
    // 0 for left expanded, 1 for right expanded
    const [expandedIndex, setExpandedIndex] = useState(0);

    return (
        <div className="flex w-full items-center justify-between h-[305px]  pb-10 mb-10 last:border-0 last:mb-0 last:pb-0">
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
            className={`flex items-center flex-nowrap transition-all duration-800 ease-in-out cursor-pointer h-full relative
                ${isExpanded ? 'flex-1' : 'w-[400px] shrink-0'}
                ${isRightSide ? 'justify-end' : 'justify-start'}
            `}
            onMouseEnter={onHover}
        >
            {/* Image Box */}
            <div className={`relative shrink-0 w-[305px] h-[305px] flex items-center justify-center z-10 ${isRightSide ? 'order-2' : 'order-1'} group`}>
                {/* Background Vector */}
                <img src={gem.vector} alt="vector" className={`absolute inset-0 w-full h-full object-contain pointer-events-none transition-transform duration-800 ease-in-out ${isExpanded ? 'rotate-45' : 'rotate-0'}`} />

                {/* Solid Colored Circle (Collapsed State ONLY) */}
                <div
                    className={`absolute inset-0 rounded-full transition-all duration-600 ease-in-out`}
                    style={{
                        backgroundColor: gem.bgCircleHex,
                        opacity: isExpanded ? 0 : 1,
                        transform: isExpanded ? 'scale(0.8)' : 'scale(0.65)'
                    }}
                ></div>

                {/* Ring Image */}
                <img
                    src={gem.image}
                    alt={gem.englishName}
                    className={`relative z-10 max-w-[210px] h-auto object-contain transition-transform duration-800 ease-in-out ${isExpanded ? 'scale-110 -translate-y-2' : 'scale-[0.85] translate-y-0'}`}
                />
            </div>

            {/* Text Box Wrapper */}
            <div
                className={`overflow-hidden transition-all duration-800 ease-in-out z-0 ${isRightSide ? 'order-1' : 'order-2'}`}
                style={{
                    width: isExpanded ? '480px' : '0px',
                    opacity: isExpanded ? 1 : 0
                }}
            >
                <div className={`w-[480px] flex flex-col justify-center h-[305px] ${isRightSide ? 'items-end text-right pr-6' : 'items-start text-left pl-6'}`}>

                    {/* Header */}
                    <div className="flex items-end gap-[10px] mb-3 flex-wrap whitespace-nowrap overflow-visible">
                        {isRightSide ? (
                            <>
                                <span className="font-sans font-medium text-[16px] text-[#6C757D] mb-1">{gem.hindiName}</span>
                                <span className="text-[#CED4DA] text-[18px] mb-1">•</span>
                                <span className="font-sans font-medium text-[16px] text-[#6C757D] uppercase tracking-widest mb-1">{gem.upperName}</span>
                                <span className="text-[#CED4DA] text-[18px] mb-1">•</span>
                                <h3 className="font-['Very_Vogue-Display',Helvetica] font-[401] text-[52px] leading-[0.8] text-[#FF8936] pb-1">{gem.englishName}</h3>
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
                    <div className={`w-[350px] h-px bg-[#CED4DA] mb-6 mt-1 shrink-0 opacity-60 ${isRightSide ? 'ml-auto' : 'mr-auto'}`}></div>

                    {/* Description */}
                    <p className={`font-['Open_Sans'] text-[15px] font-medium leading-[26px] text-[#6C757D] mb-8 whitespace-normal max-w-[350px] ${isRightSide ? 'ml-auto' : 'mr-auto'}`}>
                        {gem.description}
                    </p>

                    {/* Bottom Info */}
                    {isRightSide ? (
                        <div className="flex items-center gap-3 justify-end whitespace-nowrap">
                            <PlanetGroup gem={gem} />
                            <span className="text-[#CED4DA] text-[16px] px-1">•</span>
                            <ColorGroup gem={gem} />
                        </div>
                    ) : (
                        <div className="flex items-center gap-3 justify-start whitespace-nowrap">
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
