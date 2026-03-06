import Star from "/assets/AboutGem/star.svg";
import line from "/assets/AboutGem/line.svg";

export default function HowToWearTab() {
    const cards = [
        {
            number: "01",
            title: "Best Day & Time",
            description: "Wear on Wednesday between 6:15 AM – 9:00 AM or 4:40 PM – 6:00 PM. These hours carry Mercury's strongest influence."
        },
        {
            number: "02",
            title: "Right Metal",
            description: "Wear in gold or silver. A combination of silver with a gold cap is also suitable — both metals amplify Mercury's vibrations."
        },
        {
            number: "03",
            title: "Ideal Weight",
            description: "Wear 1 carat per 15–18 kg of body weight. For most adults, 5–7 carats is recommended. Consult an astrologer for precision."
        },
        {
            number: "04",
            title: "Finger Placement",
            description: "Wear on the little finger (small finger) of your working hand. The stone must touch your skin directly to pass its energies."
        },
        {
            number: "05",
            title: "Purification",
            description: "Dip the ring in raw milk, honey, Gangajal and Tulsi leaves for 10–15 minutes before wearing to cleanse absorbed energies."
        },
        {
            number: "06",
            title: "Mantra Activation",
            description: "After wearing, chant \"ॐ बुधाय नमः\" (Om Budhaya Namah) 108 times to activate the stone and invite Mercury's blessings."
        }
    ];

    return (
        <div className="animate-fade-in p-4 sm:p-6 md:p-12 md:pl-16">
            <div className="flex items-center gap-2 mb-4 w-full">
                <img src={Star} alt="star" />
                <span className="font-open-sans text-[#FF8936] text-[12px] md:text-[14px] tracking-[20%] font-medium uppercase shrink-0">WEARING GUIDE</span>
                <img src={line} alt="line" />
            </div>

            <h2 className="font-['Very_Vogue-Display',Helvetica] font-[401] text-[32px] md:text-[48px] text-black leading-none mb-6 md:mb-10">
                How to Wear <span className="font-['Very_Vogue-Display_Italic',Helvetica] font-[401] text-[32px] md:text-[48px] italic text-[#FF8936]">Emerald</span>
            </h2>

            <p className="font-open-sans text-[#6C757D] text-[15px] md:text-[18px] font-normal leading-[26px] md:leading-[28px] max-w-[1160px] mb-6 md:mb-10!">
                Wearing a Panna Stone correctly is essential to receive its full astrological benefits. This gemstone is linked to Mercury (बुध), so it must be worn with proper rituals and timing.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-x-10 md:gap-y-10 max-w-[1160px]">
                {cards.map((card, index) => (
                    <div key={index} className="bg-[#FAF6F3] p-8 md:p-10 flex flex-col items-start h-full">
                        <span className="font-open-sans text-[#FF8936] text-[20px] font-medium leading-[100%] mb-4! block">
                            {card.number}
                        </span>
                        <h3 className="font-['Very_Vogue-Display',Helvetica] font-[401] text-[#FF8936] text-[28px] md:text-[32px] leading-[100%] mb-4">
                            {card.title}
                        </h3>
                        <p className="font-open-sans text-[#6C757D] text-[15px] md:text-[18px] font-normal leading-[28px]">
                            {card.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
