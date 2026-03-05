import { type JSX } from "react";
import star1 from "/assets/AboutGem/star.svg";
import line103 from "/assets/AboutGem/line.svg";
import GIAImage from "/assets/Certification/GIA-image.png";
import GSIImage from "/assets/Certification/GSI-Image.png";
import VGTLImage from "/assets/Certification/GTA-we.jpg";
import CertificationRightImage from "/assets/Certification/certification-right-image.png";
import IIGJLogo from "/assets/Certification/iigj-logo.png";

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

export const Certification = (): JSX.Element => {
    return (
        <div className="flex flex-col w-full animate-in fade-in duration-500">
            {/* Top Section */}
            <main className="flex w-full p-4 md:p-[60px]">
                <article className="flex flex-col lg:flex-row w-full items-center justify-between gap-8 md:gap-[60px]">
                    <div className="flex flex-col flex-1 max-w-full lg:max-w-[550px] items-start gap-6 md:gap-8">
                        <header className="flex flex-col items-start gap-4">
                            <div className="inline-flex items-center gap-3">
                                <img
                                    className="w-2.5 h-2.5"
                                    alt="star"
                                    src={star1}
                                    aria-hidden="true"
                                />
                                <span className="font-sans font-medium text-[#FF8936] text-[14px] tracking-[2.80px] uppercase">
                                    WORLD CLASS LAB
                                </span>
                                <img
                                    className="w-[100px] h-px ml-2"
                                    alt="line"
                                    src={line103}
                                    aria-hidden="true"
                                />
                            </div>

                            <h1 className="font-display font-normal text-[36px] md:text-[48px] leading-tight">
                                <span className="text-black">Gemstone </span>
                                <span className="text-[#FF8936] italic">Certification</span>
                            </h1>
                        </header>

                        <div className="flex flex-col gap-6">
                            <p className="font-open-sans text-[#6C757D] text-[16px] font-medium leading-[24px]">
                                Every stone we sell is independently verified and certified by globally
                                recognized gemological institutions.
                            </p>
                            <p className="font-open-sans text-[#6C757D] text-[16px] font-medium leading-[24px]">
                                At RR Gems and Jewels, we believe that true beauty is rooted in
                                transparency. Every gemstone in our collection is accompanied by a
                                comprehensive certificate from world-renowned gemological laboratories
                                — giving you complete confidence in your purchase.
                            </p>
                        </div>
                    </div>

                    <img
                        className="w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:w-[450px] md:h-[450px] object-cover shrink-0"
                        alt="Gemstone Certification Ring"
                        src={CertificationRightImage}
                    />
                </article>
            </main>

            {/* Bottom Section - Partners */}
            <section className="flex flex-col w-full pb-[60px]">
                {/* Banner */}
                <div className="w-full relative py-[48px] bg-[#FFFBF9] flex flex-col items-center justify-center border-t border-b border-[#F0E6DD] overflow-hidden mb-[60px]">
                    {/* SVG Pattern Background to match design */}
                    <div
                        className="absolute inset-0 opacity-[0.06] pointer-events-none"
                        style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg width='240' height='240' viewBox='0 0 240 240' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='120' cy='120' r='80' stroke='%23FF8936' stroke-width='1.5' fill='none'/%3E%3Ccircle cx='120' cy='120' r='110' stroke='%23FF8936' stroke-width='1' stroke-dasharray='4 4' fill='none'/%3E%3Cline x1='10' y1='120' x2='230' y2='120' stroke='%23FF8936' stroke-width='1'/%3E%3Cline x1='120' y1='10' x2='120' y2='230' stroke='%23FF8936' stroke-width='1'/%3E%3Cline x1='42.22' y1='42.22' x2='197.78' y2='197.78' stroke='%23FF8936' stroke-width='1'/%3E%3Cline x1='42.22' y1='197.78' x2='197.78' y2='42.22' stroke='%23FF8936' stroke-width='1'/%3E%3C/svg%3E")`,
                            backgroundSize: '240px 240px',
                            backgroundPosition: 'center center'
                        }}
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
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 md:px-[60px] w-full">
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
        </div>
    );
};

export default Certification;
