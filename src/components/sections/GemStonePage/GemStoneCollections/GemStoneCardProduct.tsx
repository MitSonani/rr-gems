import gemImage from '/assets/GemCollection/gem-image.png'
import gemstoneHoveredImage from '/assets/GemCollection/gemstonehoveredimage.png'
import RightArrowIcon from '/assets/GemCollection/rightarrow.svg'

export default function GemStoneCardProduct() {
    return (
        <div className="w-[300px] flex flex-col bg-white border border-[#CED4DA] overflow-hidden group hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-shadow duration-300 relative cursor-pointer">
            {/* Top Image Section */}
            <div className="w-full h-[280px] relative border-b border-[#CED4DA] overflow-hidden bg-[#FAF5F0]">
                {/* Badge */}
                <div className="absolute top-[6px] left-[6px] bg-[#FFE0E5] px-4 py-1.5 z-3">
                    <span className="font-['Open_Sans'] font-medium text-[14px] leading-[20px] tracking-[0px] text-[#FF6384] uppercase">
                        HEALTH
                    </span>
                </div>

                {/* Product Image - Normal */}
                <div className="absolute inset-0 flex items-center justify-center p-6 transition-opacity duration-300 ease-in-out group-hover:opacity-0 z-1">
                    <img
                        src={gemImage}
                        alt="Colombian Emerald"
                        className="w-[200px] h-auto object-contain transition-transform duration-500 group-hover:scale-110"
                    />
                </div>

                {/* Product Image - Hover */}
                <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100 z-2">
                    <img
                        src={gemstoneHoveredImage}
                        alt="Colombian Emerald Hover"
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                </div>
            </div>

            {/* Bottom Content Section */}
            <div className="flex flex-col w-full relative pb-6 bg-white overflow-hidden">
                <div className="pt-5 px-6">
                    <h3 className="font-['Very_Vogue-Display',Helvetica] font-[401] text-[24px] leading-[100%] tracking-[0px] text-[#000000] mb-2">
                        Colombian Emerald
                    </h3>

                    <p className="font-['Open_Sans'] font-medium text-[18px] text-[#6C757D] uppercase tracking-wide">
                        PANNA
                    </p>

                    {/* Orange Divider */}
                    <div className="w-16 h-px bg-[#FF8936] mt-2 mb-6 transition-all duration-300 group-hover:mb-4"></div>
                </div>

                {/* Footer details */}
                <div className="flex items-center justify-between w-full mt-auto px-6 transition-opacity duration-300 ease-in-out group-hover:opacity-0">
                    <span className="font-['Open_Sans'] font-normal text-[24px] leading-[100%] tracking-[0px] text-[#FF8936]">
                        पन्ना रत्न
                    </span>

                    <button className="flex items-center gap-2 font-['Open_Sans'] font-medium text-[16px] text-[#6C757D] hover:text-[#FF8936] transition-colors outline-none cursor-pointer border-none bg-transparent p-0">
                        View
                        <img src={RightArrowIcon} alt="Right Arrow" className='h-[20px] w-[20px]' />
                    </button>
                </div>

                {/* Quick View Button for Hover */}
                <div className="absolute left-0 bottom-0 w-full h-[56px] bg-[#FF8936] flex items-center justify-center translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0 z-10">
                    <span className="font-['Open_Sans'] font-medium text-[16px] text-[#FFFFFF] uppercase tracking-wider">
                        QUICK VIEW
                    </span>
                </div>
            </div>
        </div>
    )
}
