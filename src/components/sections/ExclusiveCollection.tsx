import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import firstImg from '../../assets/gemstones/first.png';
import secondImg from '../../assets/gemstones/second.png';
import thirdImg from '../../assets/gemstones/third.png';
import fourthImg from '../../assets/gemstones/fourth.png';
import fifthImg from '../../assets/gemstones/fifth.png';
import Sectionbutton from '../ui/Sectionbutton';
import LabcerificationLine from '../../assets/common/labcerificationLine';

interface Gemstone {
    id: number;
    title: string;
    price: number;
    originalPrice: number;
    discount: string;
    carat: string;
    origin: string;
    image: string;
    category: string;
}

const categories = [
    'Emerald',
    'Moon Stone',
    'Ruby',
    'Cats Eye',
    'Turquoise',
    'White Coral'
];

const gemstones: Gemstone[] = [
    {
        id: 1,
        title: "Nature Emerald",
        price: 32600,
        originalPrice: 40000,
        discount: "19% off",
        carat: "4.86 Carat",
        origin: "New Burma",
        image: firstImg,
        category: 'Emerald'
    },
    {
        id: 2,
        title: "Nature Emerald",
        price: 32600,
        originalPrice: 40000,
        discount: "19% off",
        carat: "4.86 Carat",
        origin: "New Burma",
        image: secondImg,
        category: 'Emerald'
    },
    {
        id: 3,
        title: "Nature Emerald",
        price: 32600,
        originalPrice: 40000,
        discount: "19% off",
        carat: "4.86 Carat",
        origin: "New Burma",
        image: thirdImg,
        category: 'Emerald'
    },
    {
        id: 4,
        title: "Nature Emerald",
        price: 32600,
        originalPrice: 40000,
        discount: "19% off",
        carat: "4.86 Carat",
        origin: "New Burma",
        image: fourthImg,
        category: 'Emerald'
    },
    {
        id: 5,
        title: "Nature Emerald",
        price: 32600,
        originalPrice: 40000,
        discount: "19% off",
        carat: "4.86 Carat",
        origin: "New Burma",
        image: fifthImg,
        category: 'Emerald'
    },
    {
        id: 6,
        title: "Nature Emerald",
        price: 32600,
        originalPrice: 40000,
        discount: "19% off",
        carat: "4.86 Carat",
        origin: "New Burma",
        image: firstImg,
        category: 'Emerald'
    }
];

const ExclusiveCollection: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState('Emerald');

    const filteredGems = gemstones.filter(gem => gem.category === activeCategory);

    return (
        <section className="py-20 md:py-32 px-4 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto text-center">
                <div className="mb-12">
                    <div className="mb-2 flex justify-center items-center">
                        <Sectionbutton text='Gemstone Variety' />
                    </div>
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-display text-gray-900 leading-tight">
                        Gemstones <span className="text-[#FF8936] italic serif font-serif">Exclusive Collection</span>
                    </h2>
                    <div className="flex justify-center items-center gap-4 my-6">
                        <LabcerificationLine />
                    </div>
                    <div className='flex justify-center align-center mb-20'>
                        <p className="text-gray-500 mx-auto text-lg max-w-[360px] ">
                            Discover a curated selection gemstones certified for their exceptional color and clarity.
                        </p>
                    </div>
                </div>

                {/* Categories */}
                <div className="flex overflow-x-auto lg:overflow-visible lg:justify-around border-b border-gray-100 mb-12 no-scrollbar scroll-smooth">
                    <div className="flex min-w-max lg:min-w-0 lg:w-full lg:justify-around gap-8 lg:gap-0 px-4 lg:px-0">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`pb-4 text-base md:text-lg font-medium transition-all relative whitespace-nowrap ${activeCategory === category ? 'text-[#FF8936]' : 'text-gray-400 hover:text-gray-600'
                                    }`}
                            >
                                {category}
                                {activeCategory === category && (
                                    <motion.div
                                        layoutId="activeCategory"
                                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FF8936]"
                                    />
                                )}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8">
                    <AnimatePresence mode="wait">
                        {filteredGems.map((gem) => (
                            <motion.div
                                key={gem.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.4 }}
                                className="group cursor-pointer"
                            >
                                <div className="flex items-center justify-center rounded-t-xl overflow-hidden bg-[#FAF8F5] relative group">
                                    <div className="absolute top-2 right-2 z-10">
                                        <span className="bg-white/80 backdrop-blur-sm text-[#FF8936] font-bold text-[10px] md:text-sm px-2 py-0.5 rounded-full shadow-sm">
                                            {gem.discount}
                                        </span>
                                    </div>
                                    {/* <motion.div
                                        className="w-full aspect-[4/5] md:aspect-auto flex items-center justify-center"
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                                    > */}
                                    <img
                                        src={gem.image}
                                        alt={gem.title}
                                        className="w-full h-full object-cover filter md:max-h-[320px]  drop-shadow-2xl"
                                    />
                                    {/* </motion.div> */}
                                </div>
                                <div className="bg-white border-x border-b border-gray-100/50 rounded-b-xl p-3 md:p-6 text-left shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)]">
                                    <div className="flex flex-col gap-0.5 md:gap-2 mb-2 md:mb-4">
                                        <h3 className="text-gray-900 font-medium text-xs md:text-xl truncate">{gem.title}</h3>
                                        <div className="flex items-baseline gap-1.5 md:gap-3">
                                            <span className="text-sm md:text-2xl font-bold text-gray-900 leading-none">₹{gem.price.toLocaleString()}</span>
                                            <span className="text-gray-400 line-through text-[10px] md:text-lg">₹{gem.originalPrice.toLocaleString()}</span>
                                        </div>
                                    </div>

                                    <div className="flex justify-between items-center pt-2 border-t border-gray-50">
                                        <div className="flex flex-col">
                                            <span className="text-gray-600 font-medium text-[10px] md:text-sm">{gem.carat}</span>
                                            <div className="flex items-center gap-1 text-[9px] md:text-xs text-gray-400">
                                                <span className="italic">{gem.origin}</span>
                                            </div>
                                        </div>
                                        <motion.button
                                            whileTap={{ scale: 0.9 }}
                                            className="text-[#FF8936] md:hidden"
                                        >
                                            <ArrowRight size={14} />
                                        </motion.button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                <div className="mt-16">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-3 bg-[#FFE5E1] text-[#FF8936] px-8 py-3 rounded-md font-medium hover:bg-[#ffd7d0] transition-colors group"
                    >
                        Discover All
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                </div>
            </div>
        </section>
    );
};

export default ExclusiveCollection;
