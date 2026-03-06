import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gemImage from '/assets/GemCollection/gem-image.png';
import gemHoverImage from '/assets/GemCollection/gemstonehoveredimage.png';

export default function ProductCard() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            className="flex flex-col border border-[#CED4DA] bg-white w-full cursor-pointer h-full relative overflow-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            animate={{ boxShadow: isHovered ? "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)" : "0 0px 0px 0px rgba(0,0,0,0)" }}
            transition={{ duration: 0.3 }}
        >
            {/* Image Container */}
            <div className="relative w-full h-[200px] sm:h-[220px] bg-[#FAF5F0] flex items-center justify-center border-b border-[#CED4DA] overflow-hidden">

                {/* Hover Image */}
                <motion.img
                    src={gemHoverImage}
                    alt="Zambian Emerald Hover"
                    className="absolute inset-0 w-full h-full object-cover z-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isHovered ? 1 : 0 }}
                    transition={{ duration: 0.4 }}
                />

                {/* Default Image */}
                <motion.img
                    src={gemImage}
                    alt="Zambian Emerald"
                    className="relative w-[80%] h-[80%] object-contain filter drop-shadow-xl z-0"
                    initial={{ opacity: 1, scale: 1 }}
                    animate={{ opacity: isHovered ? 0 : 1, scale: isHovered ? 1.05 : 1 }}
                    transition={{ duration: 0.4 }}
                />

                {/* Badge */}
                <div className="absolute top-[10px] left-[10px] bg-[#FFE0E5] px-[12px] py-[6px] z-10">
                    <span className="font-open-sans font-medium text-[11px] leading-none text-[#FF6384] uppercase tracking-wider">
                        OUR CHOICE
                    </span>
                </div>

                {/* Heart Icon on Hover */}
                <AnimatePresence>
                    {isHovered && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.5 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-[10px] right-[10px] bg-white rounded-full w-[36px] h-[36px] flex items-center justify-center z-10 shadow-sm"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FF6384" strokeWidth="1.5">
                                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                            </svg>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Content Container */}
            <div className="flex flex-col flex-1 p-4 pb-[54px] relative bg-white z-10">
                <h3 className="font-['Very_Vogue-Display',Helvetica] font-[401] text-[18px] md:text-[20px] leading-[1.3] text-[#000000] mb-3">
                    Zambian Emerald - 2.47 Carat
                    <br />
                    Limited Quality
                </h3>

                {/* Carat Tag */}
                <div className="mb-4 mt-1">
                    <span className="inline-block bg-[#FFE0E5] px-[10px] py-[4px] font-open-sans font-medium text-[11px] leading-none text-[#FF6384]">
                        2.47 Carat
                    </span>
                </div>

                <div className="w-full h-px bg-[#CED4DA] opacity-50 mb-4 mt-auto"></div>

                {/* Wrapping Price & Quick View to be absolute positioned at bottom */}
                <div className="absolute bottom-0 left-0 w-full h-[50px] overflow-hidden">
                    {/* Price Section */}
                    <motion.div
                        className="absolute inset-0 flex items-center px-4 gap-2 bg-white"
                        initial={{ y: 0 }}
                        animate={{ y: isHovered ? "-100%" : 0 }}
                        transition={{ type: "tween", duration: 0.3 }}
                    >
                        <span className="font-open-sans font-semibold text-[18px] text-[#000000]">
                            ₹32600
                        </span>
                        <span className="font-open-sans font-normal text-[13px] text-[#A6A6A6] line-through">
                            ₹40000
                        </span>
                        <span className="font-open-sans font-medium text-[13px] text-[#FF8936] ml-auto">
                            19% off
                        </span>
                    </motion.div>

                    {/* Quick View Button */}
                    <motion.div
                        className="absolute inset-0 flex items-center justify-center bg-[#FF8936]"
                        initial={{ y: "100%" }}
                        animate={{ y: isHovered ? 0 : "100%" }}
                        transition={{ type: "tween", duration: 0.3 }}
                    >
                        <span className="font-open-sans font-medium text-[13px] text-white uppercase tracking-wider">
                            QUICK VIEW
                        </span>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
}
