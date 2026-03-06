import Star from "/assets/AboutGem/star.svg";
import line from "/assets/AboutGem/line.svg";
import Image1 from "/assets/GemDetail/BuyerBeware.png";
import Image2 from "/assets/GemDetail/BuyerBeware1.png";
import CertificationPartners from "../CertificationPartners";

export default function BuyerBewareTab() {
    const sections = [
        {
            title: "Check for Certification",
            description: "Always buy emerald gemstone which is certified from recognized gemological laboratories such as GIA, IGI, or GRS. Certification ensures the stone's authenticity, natural origin, and clarity on treatments like oiling."
        },
        {
            title: "Beware of Synthetic Stones",
            description: "With advanced technology, lab-created emeralds closely mimic natural ones, often fooling unsuspecting buyers. These synthetic stones lack the astrological and investment value of genuine gems."
        },
        {
            title: "Assess the Colour",
            description: "Colour is a critical indicator of emerald quality. Always buy emerald gemstone which displays a rich, deep green with slight bluish undertones. Stones that appear too dark, too bright, or washed out may be low-grade, overly treated, or synthetic. Colour consistency and saturation are essential for both beauty and value."
        },
        {
            title: "Quality Assurance",
            description: "Only buy emerald online from reputable, established jewelers who offer full transparency on the gem's origin, treatment history, and return policy. Reputable sellers will willingly provide certification, allow professional inspection, and issue a detailed invoice."
        }
    ];

    return (
        <div className="animate-fade-in p-6 md:p-12 md:pl-16">
            <div className="flex items-center gap-2 mb-4">
                <img src={Star} alt="star" />
                <span className="font-open-sans text-[#FF8936] text-[14px] tracking-[20%] font-medium uppercase">BUYER'S GUIDE</span>
                <img src={line} alt="line" />
            </div>

            <h2 className="font-['Very_Vogue-Display',Helvetica] font-[401] text-[40px] md:text-[48px] text-black leading-[100%] mb-6">
                Buyer <span className="font-['Very_Vogue-Display_Italic',Helvetica] font-[401] text-[40px] md:text-[48px] italic text-[#FF8936]">Beware</span>
            </h2>

            <p className="font-open-sans text-[#6C757D] text-[15px] md:text-[16px] font-normal leading-[26px] max-w-[1160px] mb-10!">
                When you buy panna stone, caution is key. Always verify certification, watch for synthetic imitations, and examine colour quality closely. Purchasing from reputable sellers ensures authenticity, transparency, and long-term value protecting you from costly mistakes and misleading gemstone deals.
            </p>

            <div className="flex flex-col gap-10 max-w-[1160px] mb-12">
                {sections.map((section, index) => (
                    <div key={index} className="flex flex-col gap-2">
                        <h3 className="font-['Very_Vogue-Display',Helvetica] font-[401] text-[24px] md:text-[28px] text-black leading-[100%]">
                            {section.title}
                        </h3>
                        <p className="font-open-sans text-[#6C757D] text-[15px] md:text-[16px] font-normal leading-[26px]">
                            {section.description}
                        </p>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[1160px] mb-10">
                <img
                    src={Image1}
                    alt="Certification Example 1"
                    className="w-full h-auto object-contain border border-[#CED4DA]"
                />
                <img
                    src={Image2}
                    alt="Certification Example 2"
                    className="w-full h-auto object-contain border border-[#CED4DA]"
                />
            </div>
            <CertificationPartners isContainer={true} />
        </div>
    );
}
