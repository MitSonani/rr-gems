import Star from "/assets/AboutGem/star.svg";
import line from "/assets/AboutGem/line.svg";

const tabs = [
    "About", "How to wear", "Who should wear", "Benefits", "Cleaning & Care", "Buyer Beware", "FAQs"
];

export default function TabsSection() {
    return (
        <div className="px-4 md:px-[60px] pb-20 bg-white">
            <div className="border border-[#CED4DA] bg-white">

                {/* Tabs Header */}
                <div className="flex items-center overflow-x-auto border-b border-[#CED4DA] hide-scrollbar px-10">
                    {tabs.map((tab, idx) => (
                        <div
                            key={idx}
                            className={`min-w-max px-6 py-3 cursor-pointer font-open-sans text-[15px] md:text-[16px] font-medium leading-[24px] border-b-[3px] transition-colors ${idx === 0 ? 'text-[#FF8936] border-[#FF8936]' : 'text-[#6C757D] border-transparent hover:text-[#FF8936]'
                                }`}
                        >
                            {tab}
                        </div>
                    ))}
                </div>

                {/* Tab Content (About) */}
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

                    <button className="bg-[#FCF2EB] text-[#FF8936] font-open-sans text-[16px] leading-[24px] font-medium px-6 py-2.5 mt-10 rounded hover:bg-[#FFE5D4] transition-colors">
                        Read More
                    </button>
                </div>
            </div>
        </div>
    );
}
