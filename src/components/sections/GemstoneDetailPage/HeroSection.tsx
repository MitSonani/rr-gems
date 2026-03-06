import { motion } from 'framer-motion';
import Star from "/assets/ExpertGuidance/star.svg";
import Line from "/assets/ExpertGuidance/line.svg";
import GemBackVector from "/assets/GemDetail/hero-gem-vector.svg";
import GemStoneImage from "/assets/GemCollection/gem-image.png";

export default function HeroSection() {
    return (
        <div className="px-4 pb-10 bg-white pt-6">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="flex flex-col lg:flex-row items-center border border-[#CED4DA] rounded-sm bg-white overflow-hidden p-6 md:p-12 gap-10"
            >

                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="flex flex-col flex-1 pl-4 md:pl-8 border-l-4 border-[#FF8936]"
                >
                    <div className="flex items-center gap-2 mb-2 w-full">
                        <img src={Star} alt="Star" />
                        <span className="font-open-sans text-[#FF8936] text-[12px] md:text-[14px] tracking-[20%] font-medium uppercase shrink-0">PRECIOUS</span>
                        <img src={Line} alt="Line" />
                    </div>

                    <div className="flex items-center gap-4 mb-6 flex-wrap pb-[16px] border-b border-[#FF8936] max-w-[400px]">
                        <h1 className="font-[Very_Vogue] font-[401] text-[32px] md:text-[40px] text-[#FF8936] leading-[100%] tracking-[2%]">
                            Emerald
                        </h1>
                        <div className="flex items-center gap-3">
                            <span className="rounded-full h-[6px] w-[6px] bg-[#6C757D]"></span>
                            <span className="font-open-sans font-normal text-[14px] md:text-[18px] text-[#6C757D] leading-[28px]">पन्ना</span>
                            <span className="rounded-full h-[6px] w-[6px] bg-[#6C757D]"></span>
                            <span className="font-open-sans font-normal text-[14px] md:text-[18px] text-[#6C757D] tracking-widest leading-[28px] uppercase">PANNA</span>
                        </div>
                    </div>

                    <p className="font-open-sans text-[#6C757D] text-[15px] md:text-[16px] leading-[26px] md:leading-[24px] max-w-[720px] mb-4!">
                        Emerald Gemstone, commonly known as Panna stone in Hindi, is a green colored precious
                        astrological gemstone associated with Planet Mercury (Budh). Emerald (Panna) Gemstone has
                        immeasurable benefits including financial, educational and medical success along with
                        eloquence. Choose and buy Emerald / Panna stone online from the best collection of Top Quality
                        Columbian and Zambian Emeralds
                    </p>

                    <div className="flex flex-wrap gap-2 md:gap-4 max-w-[720px]">
                        <div className="border-2 bg-[#FCF2EB] border-[#FF8936] px-3 py-1.5 md:px-4 md:py-2 font-open-sans text-[13px] md:text-[16px] leading-[20px] md:leading-[24px] font-medium text-[#FF8936]">
                            Growth in business
                        </div>
                        <div className="border-2 bg-[#FCF2EB] border-[#FF8936] px-3 py-1.5 md:px-4 md:py-2 font-open-sans text-[13px] md:text-[16px] leading-[20px] md:leading-[24px] font-medium text-[#FF8936]">
                            Eloquence & Charisma
                        </div>
                        <div className="border-2 bg-[#FCF2EB] border-[#FF8936] px-3 py-1.5 md:px-4 md:py-2 font-open-sans text-[13px] md:text-[16px] leading-[20px] md:leading-[24px] font-medium text-[#FF8936]">
                            Sharper Intellect & Memory
                        </div>
                        <div className="border-2 bg-[#FCF2EB] border-[#FF8936] px-3 py-1.5 md:px-4 md:py-2 font-open-sans text-[13px] md:text-[16px] leading-[20px] md:leading-[24px] font-medium text-[#FF8936]">
                            Growth In Speculation
                        </div>
                    </div>
                </motion.div>

                {/* Right Image Content */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                    className="relative w-full lg:w-[450px] h-[300px] md:h-[350px] lg:h-[450px] flex items-center justify-center shrink-0"
                >
                    <motion.img
                        animate={{ rotate: 360 }}
                        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                        src={GemBackVector}
                        alt="zodiac background"
                        className="absolute w-full h-full object-contain opacity-80 pointer-events-none"
                    />
                    <div className="absolute w-[200px] h-[200px] md:w-[256px] md:h-[256px] rounded-full bg-[#FFDCE0] opacity-80" />
                    <motion.img
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        src={GemStoneImage}
                        alt="Emerald Gemstone"
                        className="relative z-10 w-[160px] md:w-[200px] lg:w-[240px] h-auto object-contain filter drop-shadow-xl"
                    />
                </motion.div>
            </motion.div>
        </div>
    );
}
