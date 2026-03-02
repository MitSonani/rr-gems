import StarIcon from "/assets/AboutGem/star.svg";
import CenterIcon from "/assets/AboutGem/centericon.png";

interface ReadMoreGemProps {
    onClose: () => void;
}

const DividerOrnament = () => (
    <svg width="215" height="15" viewBox="0 0 215 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="97.9336" y="0.689004" width="9.51983" height="9.51983" transform="rotate(45 97.9336 0.689004)" stroke="#FF8936" stroke-width="0.974399" />
        <rect x="116.953" y="0.782754" width="9.51983" height="9.51983" transform="rotate(45 116.953 0.782754)" stroke="#FF8936" stroke-width="0.974399" />
        <rect x="107.344" y="0.782754" width="9.51983" height="9.51983" transform="rotate(45 107.344 0.782754)" stroke="#FF8936" stroke-width="0.974399" />
        <rect x="122.652" y="6.5625" width="91.8245" height="1.31178" rx="0.655889" fill="url(#paint0_linear_954_18044)" />
        <rect width="91.8245" height="1.31178" rx="0.655889" transform="matrix(-1 0 0 1 91.8242 6.5625)" fill="url(#paint1_linear_954_18044)" />
        <defs>
            <linearGradient id="paint0_linear_954_18044" x1="214.477" y1="7.21844" x2="122.652" y2="7.21844" gradientUnits="userSpaceOnUse">
                <stop stop-color="#FF8936" stop-opacity="0" />
                <stop offset="1" stop-color="#FF8936" />
            </linearGradient>
            <linearGradient id="paint1_linear_954_18044" x1="91.8245" y1="0.655938" x2="0" y2="0.655938" gradientUnits="userSpaceOnUse">
                <stop stop-color="#FF8936" stop-opacity="0" />
                <stop offset="1" stop-color="#FF8936" />
            </linearGradient>
        </defs>
    </svg>
);

export default function ReadMoreGem({ onClose }: ReadMoreGemProps) {
    return (
        <div className="flex flex-col w-full px-[60px] pb-[60px] gap-8 mt-2">
            <div className="grid grid-cols-2 border border-[#CED4DA] bg-white">
                {/* Left col */}
                <div className="p-[40px] border-r border-[#CED4DA]">
                    <div className="flex items-center gap-2 mb-4">
                        <img src={StarIcon} alt="star" className="w-[12px] h-[12px]" />
                        <span className="font-['Open_Sans'] font-medium text-[#FF8936] text-[14px] tracking-[20%] uppercase">01 / HISTORY</span>
                        <div className="h-px bg-[#FF8936] w-12 ml-2 opacity-50"></div>
                    </div>
                    <h3 className="font-['Very_Vogue-Display',Helvetica] font-[401] text-[48px] leading-[1.2] mb-6 text-[#000000]">
                        Gemstone’s <span className="font-['Very_Vogue-Display_Italic',Helvetica] italic text-[#FF8936]">History</span>
                    </h3>
                    <p className="font-['Open_Sans'] text-[18px] font-medium text-[#6C757D] leading-[28px]">
                        Gemstones have been treasured by civilizations for centuries for their beauty and rarity. Formed deep within the earth over millions of years, each gemstone carries a rich natural history shaped by time and geological processes.
                    </p>
                </div>

                {/* Right col */}
                <div className="p-[40px]">
                    <div className="flex items-center gap-2 mb-4">
                        <img src={StarIcon} alt="star" className="w-[12px] h-[12px]" />
                        <span className="font-['Open_Sans'] text-[#FF8936] text-[14px] tracking-[20%] uppercase font-medium">02 / INVESTMENT</span>
                        <div className="h-px bg-[#FF8936] w-12 ml-2 opacity-50"></div>
                    </div>
                    <h3 className="font-['Very_Vogue-Display',Helvetica] font-[401] text-[42px] leading-[1.2] mb-4 text-[#000000]">
                        Value & <span className="font-['Very_Vogue-Display_Italic',Helvetica] italic text-[#FF8936]">Investment</span>
                    </h3>
                    <p className="font-['Open_Sans'] text-[18px] font-medium text-[#6C757D] leading-[28px]">
                        A gemstone is an investment in both style and legacy. Carefully selected and certified gemstones ensure that you are receiving a piece of the earth that is as authentic as it is beautiful. By prioritizing lab-certified stones, you secure lasting value.
                    </p>
                </div>
            </div>

            {/* Why Choose Us section */}
            <div className="flex flex-col border border-[#CED4DA] bg-white">
                {/* Banner */}
                <div className="bg-[#FFF8F4] py-[40px] px-[60px] flex items-center justify-between relative overflow-hidden w-full h-[168px] opacity-100">
                    <div className="z-10 w-1/3">
                        <div className="flex items-center gap-2 mb-2">
                            <img src={StarIcon} alt="star" className="w-[10px] h-[10px]" />
                            <span className="font-['Open_Sans'] text-[#FF8936] text-[14px] tracking-[20%] uppercase font-medium">THE STORY</span>
                            <div className="h-px bg-[#FF8936] w-12 ml-2 opacity-50"></div>
                        </div>
                        <h3 className="font-['Very_Vogue-Display',Helvetica] font-[401] text-[48px] leading-[100%] text-[#000000]">
                            Why <span className="font-['Very_Vogue-Display_Italic',Helvetica] font-[401] italic text-[#FF8936]">Choose Us</span>
                        </h3>
                    </div>

                    <div className="absolute left-1/2 -top-[10px] -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] opacity-[0.8] flex items-center justify-center pointer-events-none">
                        <img src={CenterIcon} alt="Zodiac Wheel Icon" className="w-full h-full object-contain" />
                    </div>

                    <div className="z-10 w-1/3 text-right">
                        <p className="font-['Open_Sans'] text-[18px] text-[#6C757D] font-medium leading-[28px]">
                            Three decades of trust, <br />expertise & certified excellence.
                        </p>
                    </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 border-t border-[#CED4DA]">
                    {/* Stat 1 */}
                    <div className="p-[40px] px-8 border-r border-[#CED4DA] flex flex-col items-center text-center">
                        <div className="font-['Very_Vogue-Display',Helvetica] text-[48px] font-normal text-[#FF8936] leading-[1.1]">35</div>
                        <div className="font-['Very_Vogue-Display_Italic',Helvetica] font-normal text-[#FF8936] text-[28px] mb-1 tracking-[0px]">Years of Legacy</div>
                        <div className="flex justify-center mb-4">
                            <DividerOrnament />
                        </div>
                        <p className="font-['Open_Sans'] text-[18px] leading-[28px] font-medium text-[#6C757D] max-w-[320px]">Bringing you decades of expertise in gemstones and jewels since 1990.</p>
                    </div>
                    {/* Stat 2 */}
                    <div className="p-[40px] px-8 border-r border-[#CED4DA] flex flex-col items-center text-center">
                        <div className="font-['Very_Vogue-Display',Helvetica] text-[48px] font-normal text-[#FF8936] leading-[1.1]">98%</div>
                        <div className="font-['Very_Vogue-Display_Italic',Helvetica] font-normal text-[#FF8936] text-[28px] mb-1 tracking-[0px] ">Happy Clients</div>
                        <div className="flex justify-center mb-4">
                            <DividerOrnament />
                        </div>
                        <p className="font-['Open_Sans'] text-[18px] leading-[28px] font-medium text-[#6C757D] max-w-[320px]">Our commitment to authenticity and customer satisfaction.</p>
                    </div>
                    {/* Stat 3 */}
                    <div className="p-[40px] px-8 flex flex-col items-center text-center">
                        <div className="font-['Very_Vogue-Display',Helvetica] text-[48px] font-normal text-[#FF8936] leading-[1.1]">100%</div>
                        <div className="font-['Very_Vogue-Display_Italic',Helvetica] font-normal text-[#FF8936] text-[28px] mb-1">Lab Certified</div>
                        <div className="flex justify-center mb-4">
                            <DividerOrnament />
                        </div>
                        <p className="font-['Open_Sans'] text-[18px] leading-[28px] font-medium text-[#6C757D] max-w-[320px]">Every stone is tested for your complete peace of mind.</p>
                    </div>
                </div>
            </div>

            {/* Read Less Button */}
            <div className="flex justify-start">
                <button
                    onClick={onClose}
                    className="inline-flex justify-center px-8 py-3.5 bg-[#ffe9da] hover:bg-[#ffd9c4] transition-colors focus:ring-2 focus:ring-[#FF8936]/50 outline-none cursor-pointer"
                    aria-label="Read less about gemstones"
                >
                    <span className="font-sans font-semibold text-[#FF8936] text-[15px] tracking-wide">
                        Read Less
                    </span>
                </button>
            </div>
        </div>
    )
}
