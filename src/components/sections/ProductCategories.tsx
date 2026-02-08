import React, { useState } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import ArrowRight from '../../assets/common/arrowRight';
import gemstonesImg from '../../assets/product/gemstones_on_steps.png';
import jewelleryImg from '../../assets/product/jewellery_on_steps.png';
import rudrakshaImg from '../../assets/product/rudraksha_on_steps.png';
import otherImg from '../../assets/product/other_products_on_steps.png';

const categories = [
    { name: 'Gemstones', id: 'gemstones', image: gemstonesImg },
    { name: 'Jewellery', id: 'jewellery', image: jewelleryImg },
    { name: 'Rudraksha', id: 'rudraksha', image: rudrakshaImg },
    { name: 'Other', id: 'other', image: otherImg },
];

const DiagonalArrow = ({ isActive }: { isActive: boolean }) => (
    <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M7 17L17 7M17 7H7M17 7V17"
            stroke={isActive ? "#FF8936" : "#1A1A1A"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

const ProductCategories: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.5, ease: 'easeOut' },
        },
    };

    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-16 items-center">
                    {/* Categories List */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="flex flex-col w-full"
                    >
                        {categories.map((category, index) => {
                            const isActive = activeIndex === index;
                            return (
                                <motion.div
                                    key={category.id}
                                    variants={itemVariants}
                                    onMouseEnter={() => setActiveIndex(index)}
                                    className={`relative group cursor-pointer transition-all duration-300 px-8 py-10 border-b border-[#F0F0F0] last:border-0 ${isActive ? 'bg-[#FFEFE6]' : 'bg-transparent'
                                        }`}
                                >
                                    <div className="flex items-center justify-between">
                                        <span className={`text-[40px] md:text-[40px] lg:text-[40px] font-very-vouge-display transition-colors duration-300 ${isActive ? 'text-[#FF8936]' : 'text-[#1A1A1A]'
                                            }`}>
                                            {category.name}
                                        </span>

                                        <div className={`w-14 h-14 rounded-full border flex items-center justify-center transition-all duration-300 ${isActive
                                            ? 'border-[#FF8936] bg-transparent'
                                            : 'border-[#1A1A1A] bg-transparent'
                                            }`}>
                                            {isActive ? (
                                                <div className="transform transition-transform duration-300">
                                                    <ArrowRight />
                                                </div>
                                            ) : (
                                                <DiagonalArrow isActive={false} />
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </motion.div>

                    <div className="relative mt-12 lg:mt-0 h-[400px] md:h-[600px] w-full">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeIndex}
                                initial={{ opacity: 0, x: 20, scale: 0.95 }}
                                animate={{ opacity: 1, x: 0, scale: 1 }}
                                exit={{ opacity: 0, x: -20, scale: 0.95 }}
                                transition={{ duration: 0.5, ease: 'easeInOut' }}
                                className="absolute inset-0"
                            >
                                <div className="relative h-full w-full overflow-hidden  shadow-sm max-w-[600px] max-h-[550px]">
                                    <img
                                        src={categories[activeIndex].image}
                                        alt={categories[activeIndex].name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductCategories;
