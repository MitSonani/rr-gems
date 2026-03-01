import React from 'react'
import gemImage from '/assets/GemCollection/gem-image.png'
import RightArrowIcon from '/assets/GemCollection/rightarrow.svg'

export default function GemStoneCardProduct() {
    return (
        <div className="w-[300px] flex flex-col bg-white border border-[#CED4DA] overflow-hidden group hover:shadow-lg transition-shadow duration-300">
            {/* Top Image Section */}
            <div className="w-full h-[280px] bg-[#FAF5F0] relative flex items-center justify-center p-6 border-b border-[#CED4DA]">
                {/* Badge */}
                <div className="absolute top-[6px] left-[6px] bg-[#FFE0E5] px-4 py-1.5">
                    <span className="font-['Open_Sans'] font-medium text-[14px] leading-[20px] tracking-[0px] text-[#FF6384] uppercase">
                        HEALTH
                    </span>
                </div>

                {/* Product Image */}
                <div className="relative w-full h-full flex items-center justify-center">
                    <img
                        src={gemImage}
                        alt="Colombian Emerald"
                        className="w-[200px] h-auto object-contain transition-transform duration-500 group-hover:scale-110"
                    />
                </div>
            </div>

            {/* Bottom Content Section */}
            <div className="flex flex-col w-full p-6 pt-5 bg-white">
                <h3 className="font-['Very_Vogue-Display',Helvetica] font-[401] text-[24px] leading-[100%] tracking-[0px] text-[#000000] mb-2">
                    Colombian Emerald
                </h3>

                <p className="font-['Open_Sans'] font-medium text-[18px] text-[#6C757D] uppercase tracking-wide">
                    PANNA
                </p>

                {/* Orange Divider */}
                <div className="w-16 h-px bg-[#FF8936] mt-2 mb-6"></div>

                {/* Footer details */}
                <div className="flex items-center justify-between w-full mt-auto">
                    <span className="font-['Open_Sans'] font-normal text-[24px] leading-[100%] tracking-[0px] text-[#FF8936]">
                        पन्ना रत्न
                    </span>

                    <button className="flex items-center gap-2 font-['Open_Sans'] font-medium text-[16px] text-[#6C757D] hover:text-[#FF8936] transition-colors outline-none cursor-pointer">
                        View
                        <img src={RightArrowIcon} alt="Right Arrow" className='h-[20px] w-[20px]' />
                    </button>
                </div>
            </div>
        </div>
    )
}
