import React from 'react';
import { motion } from 'framer-motion';
import LabcerificationLine from '../../assets/common/labcerificationLine';
import firstImg from '../../assets/gemstones/first.png';
import secondImg from '../../assets/gemstones/second.png';
import thirdImg from '../../assets/gemstones/third.png';
import fourthImg from '../../assets/gemstones/fourth.png';
import fifthImg from '../../assets/gemstones/fifth.png';
import Sectionbutton from '../ui/Sectionbutton';


const purposeItems = [
    {
        title: "Health",
        image: firstImg,
        gemName: "Ruby",
        color: "bg-[#FFE7E7]"
    },
    {
        title: "Relationship",
        image: secondImg,
        gemName: "Coral",
        color: "bg-[#FFEBE7]"
    },
    {
        title: "Career",
        image: thirdImg,
        gemName: "Blue Sapphire",
        color: "bg-[#E7F0FF]"
    },
    {
        title: "Business",
        image: fourthImg,
        gemName: "Emerald",
        color: "bg-[#E7FFEF]"
    },
    {
        title: "Education",
        image: fifthImg,
        gemName: "Yellow Sapphire",
        color: "bg-[#FFFCE7]"
    }
];

const GemstonesForPurpose: React.FC = () => {
    return (
        <section className="bg-white py-24 px-4 overflow-hidden mb-48">
            <div className="max-w-7xl mx-auto text-center flex flex-col items-center">
                {/* Badge */}
                <div className='flex justify-center'>
                    <Sectionbutton text="As per your needs" />
                </div>

                {/* Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-4xl md:text-6xl lg:text-[75px] font-display text-gray-900 mb-6 leading-tight"
                >
                    Gemstones <span className="text-[#FF8936] italic font-display">For Purposes</span>
                </motion.h2>

                {/* Divider */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="mb-8"
                >
                    <LabcerificationLine />
                </motion.div>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    style={{ marginBottom: "40px" }}
                    className="text-gray-500 text-lg md:text-xl max-w-2xl leading-relaxed"
                >
                    Find the perfect gem aligned with your needs and desires.
                </motion.p>

                {/* Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12 w-full">
                    {purposeItems.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 + 0.4 }}
                            className="flex flex-col items-center group cursor-pointer"
                        >
                            <div className="relative w-full mb-6 flex items-center justify-center overflow-visible">
                                <motion.div
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                                    className=" z-10  flex items-center justify-center"
                                >
                                    <img
                                        src={item.image}
                                        alt={item.gemName}
                                        className="w-full h-full object-contain filter drop-shadow-2xl"
                                    />
                                </motion.div>
                            </div>

                            {/* Label */}
                            <h3 className="text-2xl md:text-3xl font-display text-gray-900 group-hover:text-[#FF8936] transition-colors duration-300">
                                {item.title}
                            </h3>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GemstonesForPurpose;
