import { type JSX } from "react";
import star1 from "/assets/AboutGem/star.svg";
import line103 from "/assets/AboutGem/line.svg";
import CertificationRightImage from "/assets/Certification/certification-right-image.png";
import CertificationPartners from "../../CertificationPartners";

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

            <CertificationPartners />
        </div>
    );
};

export default Certification;
