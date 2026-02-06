import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import LabcerificationLine from '../../assets/common/labcerificationLine';

// Images (using local assets)
import originImg from '../../assets/journey/origin.png';
import transformationImg from '../../assets/journey/transformation.png';
import artistryImg from '../../assets/journey/artistry.png';
import validationImg from '../../assets/journey/validation.png';
import OrangeProgress from '../../assets/common/orangeProgress';
import PinkProgress from '../../assets/common/pinkProgress';

const journeySteps = [
    {
        id: 1,
        title: "The Origin",
        description: "The journey begins deep within the earth. We source our rough gemstones directly from renowned mines. By sourcing directly, we ensure that every gemstone is 100% natural and ethically obtained, preserving the integrity of the earth's rarest treasures.",
        image: originImg,
        color: "#FF8936",
        backgroundColor: "#FFF5F0", // Light peach
        progress: <OrangeProgress />
    },
    {
        id: 2,
        title: "The Transformation",
        description: "A gemstone's 'fire' is unlocked by the human hand. Our master cutters analyze the internal structure of each rough stone, carefully planning every facet to maximize light reflection and color depth. This delicate process balances mathematical precision with artistic intuition.",
        image: transformationImg,
        color: "#FD969A",
        backgroundColor: "#FFF0F1", // Light pink
        progress: <PinkProgress />
    },
    {
        id: 3,
        title: "The Artistry",
        description: "Our jewelry is where heritage meets modern design. Using a blend of traditional hand-forging and advanced 3D modeling, our artisans create custom gold and silver settings tailored to each stone's unique dimensions.",
        image: artistryImg,
        color: "#FF8936",
        backgroundColor: "#FFF5F0", // Light peach
        progress: <OrangeProgress />
    },
    {
        id: 4,
        title: "The Validation",
        description: "Before any piece enters our collection, it undergoes a final evaluation at prestigious, independent gemological laboratories. They use advanced tools to issue a Certificate of Authenticity, verifying the stone is 100% natural, untreated, and earth-mined.",
        image: validationImg,
        color: "#FD969A",
        backgroundColor: "#FFF0F1", // Light pink
        progress: <PinkProgress />
    }
];

const JourneyCard = ({ step, index, total, progress }: { step: typeof journeySteps[0], index: number, total: number, progress: any }) => {
    // Calculate scale and opacity based on scroll progress
    const targetScale = 1 - ((total - index) * 0.05);
    const range = [index * 0.25, (index + 1) * 0.25];

    const scale = useTransform(progress, [range[1], range[1] + 0.1], [1, targetScale]);
    const opacity = useTransform(progress, [range[1], range[1] + 0.1], [1, 0.8]);

    return (
        <div className="sticky top-32 flex items-center justify-center mb-12">
            <motion.div
                style={{ scale, opacity, backgroundColor: step.backgroundColor }}
                className="w-full flex max-w-[1200px] overflow-hidden border border-[#1A1A1A]/5 gap-0"
            >
                {/* Left Side: Content */}
                <div className="p-8 md:p-16 flex flex-col justify-center">
                    <div className="flex gap-8 items-center">
                        {/* Vertical Timeline Column */}``
                        <div className="flex flex-col items-center">
                            {step.progress}

                        </div>

                        <div className="flex flex-col">
                            <h3
                                className="text-3xl font-very-vouge-display mb-6"
                                style={{ color: step.color }}
                            >
                                {step.title}
                            </h3>
                            <p className="text-[#666666] leading-relaxed text-lg max-w-sm">
                                {step.description}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right Side: Image */}
                <div className="md:w-[550px] md:h-[500px] overflow-hidden ml-auto">
                    <motion.img
                        src={step.image}
                        alt={step.title}
                        width={550}
                        height={500}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/5 pointer-events-none" />
                </div>
            </motion.div>
        </div >
    );
};

const Journey: React.FC = () => {
    const containerRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end end']
    });

    return (
        <section ref={containerRef} className="relative py-24 bg-white">
            <div className="container mx-auto px-4 max-w-6xl">
                {/* Header */}
                <motion.div
                    className="text-center mb-20 h-[50vh] flex flex-col justify-center items-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="mb-4 inline-block px-4 py-1.5 border border-[#1A1A1A]/20 rounded-lg">
                        <span className="text-[12px] text-[#4A4A4A] font-medium tracking-wide">
                            From Earth to Elegance
                        </span>
                    </div>
                    <h2 className="text-[52px] leading-tight mb-4 text-black">
                        The Journey of an <span className="text-[#FF8936] italic">RR Masterpiece</span>
                    </h2>
                    <div className="flex justify-center">
                        <LabcerificationLine />
                    </div>
                </motion.div>

                {/* Journey Steps - Sticky Stack */}
                <div className="relative pb-[50vh]">
                    {journeySteps.map((step, index) => (
                        <JourneyCard
                            key={step.id}
                            step={step}
                            index={index}
                            total={journeySteps.length}
                            progress={scrollYProgress}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Journey;
