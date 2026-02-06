import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import firstImg from '../../assets/gemstones/first.png';
import secondImg from '../../assets/gemstones/second.png';
import thirdImg from '../../assets/gemstones/third.png';

const festivalItems = [
    { id: 1, title: "1 Mukhi (Kaju) Rudraksha", price: "3,999", image: firstImg },
    { id: 2, title: "1 Mukhi (Kaju) Rudraksha", price: "3,999", image: secondImg },
    { id: 3, title: "1 Mukhi (Kaju) Rudraksha", price: "3,999", image: thirdImg },
    { id: 4, title: "1 Mukhi (Kaju) Rudraksha", price: "3,999", image: thirdImg },
    { id: 5, title: "1 Mukhi (Kaju) Rudraksha", price: "3,999", image: thirdImg },
];


const FestivalCollection: React.FC = () => {
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const [visibleItems, setVisibleItems] = React.useState(3);
    const [isTransitioning, setIsTransitioning] = React.useState(true);
    const containerRef = React.useRef<HTMLDivElement>(null);

    const nextSlide = () => {
        setIsTransitioning(true);
        setCurrentIndex((prevIndex) => prevIndex + 1);
    };

    React.useEffect(() => {
        const handleResize = () => {
            setVisibleItems(window.innerWidth >= 1024 ? 3 : 1);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        const timer = setInterval(() => {
            nextSlide();
        }, 3000);

        return () => {
            window.removeEventListener('resize', handleResize);
            clearInterval(timer);
        };
    }, []);

    // Handle seamless reset
    React.useEffect(() => {
        if (currentIndex === festivalItems.length) {
            const timer = setTimeout(() => {
                setIsTransitioning(false);
                setCurrentIndex(0);
            }, 800);
            return () => clearTimeout(timer);
        }
    }, [currentIndex]);

    return (
        <section className="bg-[#FFE5E1] py-30 px-4 overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
                <div className="lg:w-auto text-left shrink-0">
                    <motion.h2
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-5xl md:text-6xl font-display text-gray-900 mb-8 leading-tight whitespace-nowrap"
                    >
                        Festival Collection
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-gray-500 text-lg md:text-xl max-w-md mb-10 leading-relaxed"
                    >
                        From certified natural gemstones to sacred Rudraksha, discover treasures crafted with purity and purpose.
                    </motion.p>
                    <motion.button
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.4 }}
                        className="flex items-center mt-4 gap-3 bg-white text-gray-900 px-4 py-2 rounded-md font-medium hover:bg-gray-50 transition-all duration-300 border border-gray-100 shadow-sm group"
                    >
                        Discover All
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                </div>

                <div className="flex-1 w-full relative overflow-hidden" ref={containerRef}>
                    <motion.div
                        className="flex gap-6"
                        animate={{
                            x: visibleItems === 3
                                ? `calc(-${currentIndex * (100 / 3)}% - ${currentIndex * 8}px)`
                                : `calc(-${currentIndex * 100}% - ${currentIndex * 24}px)`
                        }}
                        transition={isTransitioning ? {
                            duration: 0.8,
                            ease: [0.32, 0.72, 0, 1]
                        } : { duration: 0 }}
                    >
                        {[...festivalItems, ...festivalItems, ...festivalItems].map((item, index) => (
                            <motion.div
                                key={`${item.id}-${index}`}
                                className="w-full lg:w-[calc(100%/3-16px)] bg-white rounded-none border border-gray-100 flex flex-col group cursor-pointer shrink-0"
                            >
                                <div className="p-4">
                                    <motion.img
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.4 }}
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-contain filter drop-shadow-lg"
                                    />
                                </div>

                                <div className="p-6 pt-2 flex flex-col gap-2 relative">
                                    <h3 className="text-xl font-display text-gray-800 leading-snug">
                                        {item.title}
                                    </h3>
                                    <p className="text-[#FF8936] text-xl font-medium">
                                        ₹{item.price}
                                    </p>

                                    <div className="absolute bottom-6 right-6">
                                        <div className="w-10 h-10 rounded-full border border-[#FF8936] flex items-center justify-center text-[#FF8936] group-hover:bg-[#FF8936] group-hover:text-white transition-all duration-300">
                                            <ArrowRight className="w-5 h-5" />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default FestivalCollection;
