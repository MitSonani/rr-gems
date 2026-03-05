import gemImage from '/assets/GemCollection/gem-image.png';

export default function ProductCard() {
    return (
        <div className="flex flex-col border border-[#CED4DA] bg-white group hover:shadow-lg transition-shadow duration-300 w-full cursor-pointer h-full">
            {/* Image Container */}
            <div className="relative w-full h-[200px] sm:h-[220px] bg-[#FAF5F0] flex items-center justify-center p-6 border-b border-[#CED4DA] overflow-hidden">
                {/* Badge */}
                <div className="absolute top-0 left-0 bg-[#FFE0E5] px-[10px] py-[4px] z-10">
                    <span className="font-open-sans font-medium text-[11px] leading-none text-[#FF6384] uppercase tracking-wider">
                        OUR CHOICE
                    </span>
                </div>

                {/* Image */}
                <img
                    src={gemImage}
                    alt="Zambian Emerald"
                    className="w-full h-full object-contain filter drop-shadow-xl transition-transform duration-500 group-hover:scale-105"
                />
            </div>

            {/* Content Container */}
            <div className="flex flex-col flex-1 p-4">
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

                {/* Price Section */}
                <div className="mt-auto flex items-baseline gap-2">
                    <span className="font-open-sans font-semibold text-[18px] text-[#000000]">
                        ₹32600
                    </span>
                    <span className="font-open-sans font-normal text-[13px] text-[#A6A6A6] line-through">
                        ₹40000
                    </span>
                    <span className="font-open-sans font-medium text-[13px] text-[#FF8936] ml-auto">
                        19% off
                    </span>
                </div>
            </div>
        </div>
    );
}
