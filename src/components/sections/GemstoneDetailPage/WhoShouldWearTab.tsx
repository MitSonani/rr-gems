import Star from "/assets/AboutGem/star.svg";
import line from "/assets/AboutGem/line.svg";

const greenCheck = (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" fill="#28C76F" />
        <path d="M7 12.5L10.5 16L17 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const orangeWarning = (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" fill="#FF8936" />
        <path d="M12 7V13" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <circle cx="12" cy="16.5" r="1.5" fill="white" />
    </svg>
);

export default function WhoShouldWearTab() {
    const idealCandidates = [
        {
            title: "Gemini & Virgo Sun Signs (Vedic Astrology)",
            description: "Governed by Mercury, Gemini, and Virgo natives experience enhanced clarity, communication skills, and decision-making when wearing emeralds. The stone harmonizes Mercury's energy, bringing balance, focus, and mental agility."
        },
        {
            title: "Business Professionals",
            description: "For entrepreneurs, executives, and public figures, emeralds offer sharp intellect, persuasive speech, and strategic thinking. This gemstone attracts prosperity, boosts confidence in negotiations, and supports success in competitive, fast-paced business environments."
        },
        {
            title: "Individuals with a Weak Mercury in Their Horoscope",
            description: "When Mercury is afflicted, it can cause anxiety, indecision, and cognitive blocks. Emerald helps strengthen Mercury's influence, enhancing memory, speech, and emotional balance while supporting mental clarity."
        },
        {
            title: "Students & Academicians",
            description: "Emerald supports intellectual growth by improving concentration, analytical ability, and memory retention. It's especially beneficial for students, researchers, and academics preparing for exams or deep study, helping them absorb knowledge and perform with confidence."
        }
    ];

    const avoidCandidates = [
        "Individuals with Mercury as a malefic planet in their chart especially if it's placed in the 6th, 8th, or 12th house.",
        "People with Aries, Cancer, Leo, Scorpio, Sagittarius, or Pisces ascendants, unless advised by a qualified astrologer.",
        "Those experiencing strong Mercury Mahadasha or Antardasha complications may worsen with emerald's energy.",
        "Anyone wearing conflicting gemstones, such as red coral (Mars) or pearl (Moon), without astrological compatibility."
    ];

    return (
        <div className="animate-fade-in p-6 md:p-12 md:pl-16">
            <div className="flex items-center gap-2 mb-4">
                <img src={Star} alt="star" />
                <span className="font-open-sans text-[#FF8936] text-[14px] tracking-[20%] font-medium uppercase">ASTROLOGICAL GUIDANCE</span>
                <img src={line} alt="line" />
            </div>

            <h2 className="font-['Very_Vogue-Display',Helvetica] font-[401] text-[40px] md:text-[48px] text-black leading-none mb-6">
                Who Should Wear <span className="font-['Very_Vogue-Display_Italic',Helvetica] font-[401] text-[40px] md:text-[48px] italic text-[#FF8936]">Emerald</span>
            </h2>

            <p className="font-open-sans text-[#6C757D] text-[15px] md:text-[18px] font-normal leading-[28px] max-w-[1160px] mb-10!">
                Emerald stone in Hindi is known as panna stone, the gemstone of intellect, is ideal for those seeking clarity, creativity, and success.
                Especially powerful for zodiacs like Gemini, Virgo, and Mercury-ruled individuals, it enhances communication, sharpens focus, and attracts prosperity.
            </p>

            <div className="flex flex-col gap-6 max-w-[1160px] mb-12">
                {idealCandidates.map((item, index) => (
                    <div key={index} className="bg-[#F4FCF7] p-6 md:p-8 flex items-start gap-4">
                        <div className="shrink-0 mt-1">
                            {greenCheck}
                        </div>
                        <div>
                            <h3 className="font-['Very_Vogue-Display',Helvetica] font-[401] text-[20px] md:text-[28px] text-black mb-2">
                                {item.title}
                            </h3>
                            <p className="font-open-sans text-[#6C757D] text-[15px] md:text-[18px] font-normal leading-[28px]">
                                {item.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="max-w-[1160px]">
                <h3 className="font-['Very_Vogue-Display',Helvetica] font-[401] text-[28px] md:text-[32px] text-black leading-none mb-4">
                    Who Should Avoid Emerald Stone?
                </h3>
                <p className="font-open-sans text-[#6C757D] text-[15px] md:text-[18px] font-normal leading-[28px] mb-10!">
                    Emerald (Panna) is powerful, but not universally suitable. It should be avoided by:
                </p>

                <div className="flex flex-col gap-4">
                    {avoidCandidates.map((text, index) => (
                        <div key={index} className="bg-[#FDF5F2] p-5 md:py-6 md:px-8 flex items-start md:items-center gap-4">
                            <div className="shrink-0 mt-0.5 md:mt-0">
                                {orangeWarning}
                            </div>
                            <p className="font-open-sans text-[#6C757D] text-[15px] md:text-[18px] font-normal leading-[28px]">
                                {text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
