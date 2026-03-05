import { type JSX } from "react";

const TickIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        className="flex-shrink-0"
    >
        <circle cx="8" cy="8" r="8" fill="#FF8936" />
        <path
            d="M11.5 5.5L6.5 10.5L4.5 8.5"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

const AlertBox = ({ text, link }: { text: string; link?: string }) => (
    <div className="w-full px-5 py-4 border border-[#FFDAB9] bg-[#FFF9F5] flex flex-col gap-3">
        <div className="flex items-start gap-3">
            <div className="mt-0.5"><TickIcon /></div>
            <p className="font-open-sans text-[#FF8936] text-[15px] leading-snug tracking-tight">
                {text}
            </p>
        </div>
        {link && (
            <div className="flex justify-end w-full">
                <a href="#" className="group flex items-center gap-1.5 text-[#FF8936] text-[14px] font-medium border-b border-[#FF8936] pb-0.5">
                    {link}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="transition-transform group-hover:translate-x-1"
                    >
                        <path d="M5 12h14m-7-7 7 7-7 7" />
                    </svg>
                </a>
            </div>
        )}
    </div>
);

const steps = [
    {
        id: "purpose",
        number: "01",
        label: "PURPOSE",
        title: "Identify Your Purpose",
        description: "Decide why you're purchasing a gemstone — for jewellery, gifting, collection, astrology, or personal preference. This helps narrow down the right type, budget, and style for your needs.",
        tip: "Tip: Astrological stones carry a different weight than collectible gems.",
        image: "/assets/BuyingGuide/buying-guide-purpose.png",
    },
    {
        id: "type",
        number: "02",
        label: "TYPE",
        title: "Choose the Type",
        description: "Select from precious, semi-precious, or healing crystals based on your needs, budget, and preference.",
        tip: "Not sure what gemstone to choose. Book an consultation call with our astrologer.",
        link: "Book Consultation",
        image: "/assets/BuyingGuide/buying-guide-type.png",
    },
    {
        id: "certification",
        number: "03",
        label: "CERTIFICATION",
        title: "Check Certification",
        description: "Every RR Gems stone comes with government lab certification, ensuring transparency, natural origin, and peace of mind.",
        tip: "100% Pure, Natural, Certified gemstones",
        image: "/assets/BuyingGuide/buying-guide-certification.png",
    },
    {
        id: "quality",
        number: "04",
        label: "QUALITY",
        title: "Review Quality Factors",
        description: "Examine key aspects such as colour, clarity, cut, and carat weight — which influence both appearance and value.",
        tip: "Tip - The 4Cs: Colour, Clarity, Cut, Carat",
        image: "/assets/BuyingGuide/buying-guide-quality.png",
    },
    {
        id: "seller",
        number: "05",
        label: "SELLER",
        title: "Buy from Trusted Seller",
        description: "With certified authenticity, trusted sourcing, and a strong customer base, RR Gems ensures a safe and confident buying experience.",
        tip: "35+ years of trusted service since 1990",
        image: "/assets/BuyingGuide/buying-guide-seller.png",
    },
    {
        id: "care",
        number: "06",
        label: "CARE",
        title: "Care & Maintenance",
        description: "Use a soft cloth and mild soap with lukewarm water. Avoid harsh chemicals or ultrasonic cleaners unless recommended by experts.",
        tip: "Store separately to avoid scratches",
        image: "/assets/BuyingGuide/buying-guide-care.png",
    }
];

export default function BuyingGuide(): JSX.Element {
    return (
        <div className="w-full flex flex-col p-4 md:p-[60px]">
            {/* Header Section */}
            <div className="w-full bg-[#FFF9F5] p-6 md:p-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 md:gap-2 mb-8 md:mb-10">
                <div className="flex flex-col gap-4 max-w-full lg:max-w-[511px]">
                    <div className="flex items-center gap-4">
                        <span className="font-sans font-medium text-[#FF8936] text-[14px] tracking-[2px] uppercase whitespace-nowrap">
                            ✦ 6 - STEPS PROCESS
                        </span>
                        <div className="h-[1px] w-[80px] bg-[#FF8936]"></div>
                    </div>
                    <h2 className="font-display text-[32px] md:text-[48px] leading-tight flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-3">
                        <span className="text-black font-normal">Gemstone</span>
                        <span className="text-[#FF8936] italic font-normal">Buying Guide</span>
                    </h2>
                </div>
                <div className="max-w-[450px]">
                    <p className="font-open-sans text-[#6C757D] text-[18px] leading-[28px]">
                        From understanding your needs to selecting a certified, high-quality stone — we walk you through every step with confidence.
                    </p>
                </div>
            </div>

            {/* Grid Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10">
                {steps.map((step) => (
                    <div key={step.id} className="flex flex-col border border-[#CED4DA] bg-white w-full group overflow-hidden">
                        <div className="w-full h-[340px] overflow-hidden bg-[#F8F9FA]">
                            <img
                                src={step.image}
                                alt={step.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                        <div className="flex flex-col flex-1 p-6 md:p-10 gap-4 md:gap-6">
                            <div className="flex flex-col gap-2 md:gap-3">
                                <div className="flex items-center gap-4">
                                    <span className="font-sans font-medium text-[#FF8936] text-[13px] tracking-[2px] uppercase whitespace-nowrap">
                                        ✦ {step.number} / {step.label}
                                    </span>
                                    <div className="h-[1px] w-[50px] bg-[#CED4DA]"></div>
                                </div>
                                <h3 className="font-display font-normal text-[32px] text-[#FF8936] leading-tight">
                                    {step.title}
                                </h3>
                            </div>
                            <p className="font-open-sans text-[#6C757D] text-[16px] font-normal leading-[26px]">
                                {step.description}
                            </p>
                            <div className="mt-auto pt-2">
                                <AlertBox text={step.tip} link={step.link} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
