import React from 'react'

import starIcon from '/assets/ExpertGuidance/star.svg'
import lineIcon from '/assets/ExpertGuidance/line.svg'
import orangeRightArrow from '/assets/ExpertGuidance/orange-right-arrow.svg'
import blackRightArrow from '/assets/ExpertGuidance/blackright-arrow.svg'

import expertBackVector from '/assets/ExpertGuidance/expert-back-vector.svg'
import starNearVector from '/assets/ExpertGuidance/star-near-vector.svg'
import expertImage from '/assets/ExpertGuidance/expert-image.png'
import orangeCheckMark from '/assets/ExpertGuidance/orange-check-mark.svg'

export default function ExpertGuidance() {
    return (
        <section className="w-full relative overflow-hidden bg-[#FCE5D0] pt-[80px]">
            <div className="w-full max-w-[1280px] mx-auto flex justify-between px-[60px]">

                {/* Left Content Column */}
                <div className="flex flex-col justify-center flex-1 max-w-[600px] z-10 pb-[60px]">

                    {/* Header */}
                    <div className="flex items-center gap-3 mb-4">
                        <img src={starIcon} alt="Star" className="w-2.5 h-2.5" />
                        <span className="font-['Open_Sans'] font-medium text-[14px] leading-[100%] tracking-[0.2em] text-[#FF8936] uppercase">
                            EXPERT GUIDANCE
                        </span>
                        <img src={lineIcon} alt="Line" className="w-[100px]" />
                    </div>

                    {/* Title */}
                    <h2 className="font-['Very_Vogue-Text',Helvetica] font-normal text-[66px] leading-[65px] tracking-[0px] align-middle text-[#000000] mb-8">
                        Not Sure What <br />
                        <span className="font-['Very_Vogue-Text_Italic',Helvetica] font-normal italic text-[66px] leading-[65px] tracking-[0px] align-middle text-[#FF8936]">
                            Gemstone to Choose?
                        </span>
                    </h2>

                    {/* Bullet Points */}
                    <div className="flex flex-col gap-4 mb-10">
                        {[
                            "Get personalized gemstone recommendation",
                            "Recommendation based on your birth chart",
                            "Tips to wear & care for your gemstone"
                        ].map((text, idx) => (
                            <div key={idx} className="flex items-center gap-4 bg-[#FFDBBE]/50 py-3.5 px-5 w-fit rounded-sm">
                                {/* Checkmark Icon */}
                                <div className="flex items-center justify-center w-5 h-5 rounded-full bg-[#FF8936] shrink-0">
                                    <img src={orangeCheckMark} alt="Orange Check Mark" className="w-5 h-5" />
                                </div>
                                <span className="font-['Open_Sans'] font-medium text-[18px] leading-[28px] tracking-[0px] text-black">
                                    {text}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* Buttons */}
                    <div className="flex items-center gap-5">
                        <button className="flex items-center justify-center gap-3 border border-[#FF8936] bg-transparent text-[#FF8936] px-8 py-4 font-['Open_Sans'] font-medium text-[15px] hover:bg-[#FF8936]/10 transition-colors cursor-pointer outline-none">
                            Astrologer Consultation
                            <img src={orangeRightArrow} alt="Arrow Right" className="w-5 h-5" />
                        </button>

                        <button className="flex items-center justify-center gap-3 bg-white text-black px-8 py-4 font-['Open_Sans'] font-medium text-[15px] shadow-sm hover:shadow-md transition-shadow cursor-pointer outline-none">
                            AI Consultation (Free)
                            <img src={blackRightArrow} alt="Arrow Right" className="w-5 h-5" />
                        </button>
                    </div>

                </div>

                {/* Right Image/Vector Column */}
                <div className="relative w-1/2 flex justify-end items-end -mt-10 mr-[-50px]">
                    {/* Background SVG Vector (Zodiac Wheel) */}
                    <img
                        src={expertBackVector}
                        alt="Zodiac Back Vector"
                        className="absolute top-[-19px] right-[3px] w-[605px] object-contain px-4 z-0"
                    />

                    {/* Foreground Stars SVG */}
                    <img
                        src={starNearVector}
                        alt="Stars"
                        className="absolute bottom-10 left-[-20px] w-[80px] object-contain z-10"
                    />

                    {/* Expert Foreground Image */}
                    <img
                        src={expertImage}
                        alt="Expert Astrologer"
                        className="relative z-10 w-[550px] object-contain drop-shadow-xl"
                    />
                </div>

            </div>
        </section>
    )
}
