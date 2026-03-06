import { type JSX } from "react";
import star1 from "/assets/AboutGem/star.svg";
import GIAImage from "/assets/Certification/GIA-image.png";
import GSIImage from "/assets/Certification/GSI-Image.png";
import VGTLImage from "/assets/Certification/GTA-we.jpg";
import IIGJLogo from "/assets/Certification/iigj-logo.png";
import CertificationsVector from "/assets/Certification/OurCertificationsVector.png";

const partners = [
    {
        icon: GSIImage,
        abbreviation: "GSI",
        fullName: "Gemological Science\nInternational",
    },
    {
        icon: GIAImage,
        abbreviation: "GIA",
        fullName: "Gemological Institute of\nAmerica",
    },
    {
        icon: VGTLImage,
        abbreviation: "VGTL",
        fullName: "Vishwas Gems Testing Lab\nAnd Institute",
    },
    {
        icon: IIGJLogo,
        abbreviation: "IIGJ",
        fullName: "Indian Institute of Gems\n& Jewellery",
    }
];

export const CertificationPartners = ({ isContainer }: { isContainer?: boolean }): JSX.Element => {
    return (
        <section className="flex flex-col w-full pb-[60px]">
            {/* Banner */}
            <div className="w-full relative py-[48px] bg-[#FFFBF9] flex flex-col items-center justify-center border-t border-b border-[#F0E6DD] overflow-hidden mb-[60px]">
                {/* Vector Backgrounds to match design */}
                <img
                    src={CertificationsVector}
                    alt="vector background left"
                    className="absolute left-[-100px] top-0 h-full object-contain pointer-events-none scale-[213%]"
                    aria-hidden="true"
                />
                <img
                    src={CertificationsVector}
                    alt="vector background right"
                    className="absolute right-[-100px] top-0 h-full object-contain pointer-events-none transform scale-x-[-1] scale-[213%]"
                    aria-hidden="true"
                />

                <div className="inline-flex items-center gap-3 relative z-10 mb-3">
                    <img className="w-2.5 h-2.5" alt="star" src={star1} aria-hidden="true" />
                    <span className="font-sans font-medium text-[#FF8936] text-[14px] tracking-[2.80px] uppercase">
                        CERTIFICATION
                    </span>
                    <img className="w-2.5 h-2.5" alt="star" src={star1} aria-hidden="true" />
                </div>
                <h2 className="font-display font-normal text-[36px] md:text-[50px] leading-tight relative z-10 text-center">
                    <span className="text-black">Our </span>
                    <span className="text-[#FF8936] italic">Certification Partners</span>
                </h2>
            </div>

            {/* Cards Grid */}
            <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6  ${isContainer ? "" : "px-4 md:px-[60px]"} w-full`}>
                {partners.map((partner, index) => (
                    <div key={index} className="flex flex-col border border-[#CED4DA] bg-white group hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all duration-300">
                        <div className="h-[180px] flex items-center justify-center p-8 bg-white overflow-hidden relative">
                            <img
                                src={partner.icon}
                                alt={partner.abbreviation}
                                className="max-w-[140px] max-h-[100px] object-contain transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>
                        <div className="border-t border-[#CED4DA] flex flex-col items-center text-center p-6 min-h-[135px] justify-center">
                            <h3 className="font-display font-normal text-[32px] text-[#FF8936] mb-2 leading-none">
                                {partner.abbreviation}
                            </h3>
                            <p className="font-open-sans text-[#6C757D] text-[15px] font-medium leading-[22px] whitespace-pre-line">
                                {partner.fullName}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CertificationPartners;
