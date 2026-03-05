import StarIcon from "/assets/AboutGem/star.svg"
import TitleBelowLine from "/assets/GemCollection/titlebelowLine.svg"
import GemStoneCardProduct from './GemStoneCardProduct'

export default function GemStoneCollections() {
    return (
        <div className='w-full flex bg-[#ffffff] pt-[60px] pb-[60px]'>
            <div className='w-full max-w-[1280px] mx-auto flex flex-col items-center gap-[40px]'>
                <div className='inline-flex items-center justify-center gap-[8px] bg-[#FCF2EB] py-[8px] px-[24px]'>
                    <img src={StarIcon} alt="Star Icon" className='h-[12px] w-[12px]' />
                    <p className="font-open-sans font-medium text-[14px] leading-[20px] tracking-[0.1em] text-[#FF8936] uppercase">
                        PURE, NATURAL, LAB CERTIFIED
                    </p>
                    <img src={StarIcon} alt="Star Icon" className='h-[12px] w-[12px]' />
                </div>
                <div className='flex flex-col items-center gap-[16px]'>
                    <p className="font-['Very_Vogue-Display',Helvetica] font-[401] text-[36px] sm:text-[46px] md:text-[68px] leading-[100%] tracking-[0.02em] text-center text-[#000000]">
                        Gemstones <span className="font-['Very_Vogue-Display_Italic',Helvetica] italic text-[#FF8936]">Collection</span>
                    </p>
                    <div className="flex justify-center w-full">
                        <img src={TitleBelowLine} alt="Title Below Line" />
                    </div>
                </div>
                <div className='flex flex-wrap justify-center gap-[20px] px-4 xl:px-0'>
                    {
                        Array.from({ length: 12 }).map((_, index) => (
                            <GemStoneCardProduct key={index} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
