import Star from "/assets/AboutGem/star.svg";
import line from "/assets/AboutGem/line.svg";
import Benefit1 from "/assets/GemDetail/BenifitsOfEmerald.jpg";
import Benefit2 from "/assets/GemDetail/BenifitsOfEmerald2.jpg";
import Benefit3 from "/assets/GemDetail/BenifitsOfEmerald3.jpg";
import Benefit4 from "/assets/GemDetail/BenifitsOfEmerald4.jpg";

export default function BenefitsTab() {
    const cards = [
        {
            image: Benefit1,
            title: "Enhanced Intellectual Capabilities",
            description: (
                <>
                    Emerald stone in Hindi is also known as <u className="underline underline-offset-2">zamrud stone</u> which is renowned for stimulating the brain and enhancing intellectual power. It improves concentration, mental clarity, and memory retention, making it especially beneficial for students, scholars, and professionals in analytical fields.
                </>
            )
        },
        {
            image: Benefit2,
            title: "Business Success",
            description: "Known as the \"Merchant's Stone,\" Emerald promotes commercial success and financial growth. It sharpens strategic decision-making and helps in navigating high-stakes situations with calm precision."
        },
        {
            image: Benefit3,
            title: "Improves Communication Skills",
            description: "Ruled by Mercury, the planet of communication emerald green helps improve verbal expression, eloquence, and persuasive ability. The stone enhances both listening and speaking skills, making conversations more effective, meaningful, and aligned with one's intentions and purpose."
        },
        {
            image: Benefit4,
            title: "Emotional Healing",
            description: "Panna stone benefits carries a calming vibration that helps release emotional blockages, soothe anxiety, and restore mental peace. Emerald gem supports emotional resilience and promotes a feeling of inner security, making it a gentle healer for the heart and mind."
        }
    ];

    return (
        <div className="animate-fade-in p-6 md:p-12 md:pl-16">
            <div className="flex items-center gap-2 mb-4">
                <img src={Star} alt="star" />
                <span className="font-open-sans text-[#FF8936] text-[14px] tracking-[20%] font-medium uppercase">REASONS</span>
                <img src={line} alt="line" />
            </div>

            <h2 className="font-['Very_Vogue-Display',Helvetica] font-[401] text-[40px] md:text-[48px] text-black leading-none mb-6">
                Benefits of <span className="font-['Very_Vogue-Display_Italic',Helvetica] font-[401] text-[40px] md:text-[48px] italic text-[#FF8936]">Emerald</span>
            </h2>

            <p className="font-open-sans text-[#6C757D] text-[15px] md:text-[16px] font-normal leading-[26px] max-w-[1160px] mb-12">
                Emerald is deeply valued for its powerful effects on the mind, heart, and spirit. Associated with Mercury, this stone is believed to enhance communication, sharpen intellect, and bring emotional peace.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1160px]">
                {cards.map((card, index) => (
                    <div key={index} className="flex flex-col border border-[#CED4DA] bg-white h-full group overflow-hidden">
                        <div className="w-full h-[240px] md:h-[280px] overflow-hidden">
                            <img
                                src={card.image}
                                alt={card.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>
                        <div className="p-6 md:p-8 flex flex-col flex-1">
                            <h3 className="font-['Very_Vogue-Display',Helvetica] font-[401] text-[#FF8936] text-[24px] md:text-[28px] leading-[100%] mb-4">
                                {card.title}
                            </h3>
                            <p className="font-open-sans text-[#6C757D] text-[15px] md:text-[16px] font-normal leading-[26px]">
                                {card.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
