import React from 'react';
import { motion, type Variants } from 'framer-motion';
import LabcerificationLine from '../../assets/common/labcerificationLine';
import emeraldImage from '../../assets/trust/emerald.png';
import rudrakshaImage from '../../assets/trust/rudraksha.png';
import womanImage from '../../assets/trust/woman.png';


interface StatBlockProps {
    title: string;
    value: string;
    description: string;
    index: number;
}

const StatBlock: React.FC<StatBlockProps> = ({ title, value, description, index }) => {
    const variants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut",
                delay: index * 0.1
            }
        }
    };

    return (
        <motion.div
            className="group flex flex-col items-center justify-center p-8 bg-white text-center max-h-[400px] max-w-[400px] border-[#CED4DA] border-[1px] text-[#FF8936] group-hover:text-white hover:bg-[#FF8936] transition-all duration-300"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={variants}
        >
            <div className="flex flex-col items-center">
                <h3 className="text-[#FF8936] text-5xl md:text-7xl font-very-vouge-display mb-2 group-hover:text-white transition-all duration-300">{value}</h3>
                <p className="text-[#FF8936] text-xl md:text-2xl font-very-vouge-display mb-4 italic group-hover:text-white transition-all duration-300">{title}</p>
                <div className="flex justify-center mb-6 mt-6">
                    <LabcerificationLine className="text-[#FF8936] group-hover:text-white" />
                </div>
                <p className="text-[#888888] text-sm md:text-base max-w-[250px] leading-relaxed group-hover:text-white transition-all duration-300">
                    {description}
                </p>
            </div>
        </motion.div>
    );
};

const ImageBlock: React.FC<{ src: string; alt: string; index: number }> = ({ src, alt, index }) => {
    const variants: Variants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 1,
                ease: "easeOut",
                delay: index * 0.1
            }
        }
    };

    return (
        <motion.div
            className="w-full max-h-[400px] max-w-[400px] overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={variants}
        >
            <img src={src} alt={alt} className="w-full h-full object-contain grayscale-[20%] hover:grayscale-0 transition-all duration-700" />
        </motion.div>
    );
};

const TrustStats: React.FC = () => {
    const stats = [
        {
            type: 'image',
            src: emeraldImage,
            alt: 'Emerald Gemstone'
        },
        {
            type: 'stat',
            value: '35',
            title: 'Years of Legacy',
            description: 'Bringing you decades of expertise in gemstones and jewels since 1990.'
        },
        {
            type: 'image',
            src: rudrakshaImage,
            alt: 'Rudraksha Beads'
        },
        {
            type: 'stat',
            value: '98%',
            title: 'Happy Clients',
            description: 'Our commitment to authenticity and customer satisfaction.'
        },
        {
            type: 'image',
            src: womanImage,
            alt: 'Woman Wearing Jewelry'
        },
        {
            type: 'stat',
            value: '100%',
            title: 'Lab Certified',
            description: 'Every stone is tested for your complete peace of mind.'
        }
    ];

    return (
        <section className="bg-white flex justify-center">

            <div className="max-w-7xl mx-[40px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]">
                {stats.map((item, index) => (
                    item.type === 'image' ? (
                        <ImageBlock key={index} src={item.src!} alt={item.alt!} index={index} />
                    ) : (
                        <StatBlock
                            key={index}
                            title={item.title!}
                            value={item.value!}
                            description={item.description!}
                            index={index}
                        />
                    )
                ))}
            </div>
        </section>
    );
};

export default TrustStats;
