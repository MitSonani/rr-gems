import Star from "/assets/AboutGem/star.svg";
import line from "/assets/AboutGem/line.svg";
import Image1 from "/assets/GemDetail/CleaningCare.png";
import Image2 from "/assets/GemDetail/CleaningCare2.png";
import Image3 from "/assets/GemDetail/CleaningCare3.png";
import Image4 from "/assets/GemDetail/CleaningCare4.png";

export default function CleaningCareTab() {
    const cards = [
        {
            image: Image1,
            title: "Gentle Cleaning Routine",
            description: "Gemstones are delicate and must be treated with care. Clean your stone using lukewarm water, a mild soap, and a very soft brush. Gently wipe away dirt without applying pressure. Avoid ultrasonic or steam cleaners, as they can damage the stone or displace its internal fractures."
        },
        {
            image: Image2,
            title: "Safe Storage Tips",
            description: "Store your gemstone separately in a soft cloth or padded box to avoid scratching or abrasion from harder gemstones. Keep it away from extreme temperatures, direct sunlight, or overly dry environments, which may dry out the natural oils within the stone."
        },
        {
            image: Image3,
            title: "Handling and Wearing Tips",
            description: "Gemstone are sensitive to impact. Remove your gemstone jewellery before exercising, cooking, cleaning, or using chemicals. Regularly check for any looseness in the setting or surface cracks, especially in rings, which endure more daily wear and tear."
        },
        {
            image: Image4,
            title: "Re-oiling Maintenance",
            description: "Gemstones are often oiled to enhance their clarity and appearance. Over time, this oil can fade. Occasional re-oiling by a professional jeweler helps restore the gem's luster and maintain its natural beauty, ensuring long-lasting brilliance."
        }
    ];

    return (
        <div className="animate-fade-in p-6 md:p-12 md:pl-16">
            <div className="flex items-center gap-2 mb-4">
                <img src={Star} alt="star" />
                <span className="font-open-sans text-[#FF8936] text-[14px] tracking-[20%] font-medium uppercase">MAINTENANCE</span>
                <img src={line} alt="line" />
            </div>

            <h2 className="font-['Very_Vogue-Display',Helvetica] font-[401] text-[40px] md:text-[48px] text-black leading-none mb-6">
                Cleaning & Care
            </h2>

            <p className="font-open-sans text-[#6C757D] text-[15px] md:text-[18px] font-normal leading-[28px] max-w-[1160px] mb-10!">
                To maintain the beauty and shine of your Emerald, regular and careful maintenance is essential.
            </p>

            <div className="flex flex-col gap-6 max-w-[1160px]">
                {cards.map((card, index) => (
                    <div key={index} className="flex flex-col md:flex-row border border-[#CED4DA] bg-white group overflow-hidden">
                        <div className="w-full md:w-[340px] shrink-0 h-[300px] md:h-auto overflow-hidden">
                            <img
                                src={card.image}
                                alt={card.title}
                                className="w-full h-full min-h-[300px] object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>
                        <div className="p-6 md:p-10 flex flex-col justify-center">
                            <h3 className="font-['Very_Vogue-Display',Helvetica] font-[401] text-[#FF8936] text-[24px] md:text-[32px] leading-[100%] mb-2">
                                {card.title}
                            </h3>
                            <p className="font-open-sans text-[#6C757D] text-[15px] md:text-[18px] font-normal leading-[28px] max-w-[740px]">
                                {card.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
