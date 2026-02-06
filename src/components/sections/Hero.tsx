import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, MoveRight } from 'lucide-react';
import hero1 from '../../assets/1.png';

const SLIDES = [
    {
        id: 1,
        title: "GEMSTONES",
        description: "Explore an unmatched collection of untreated, high-carat gemstones. Direct from the source and ethically selected for quality and planetary alignment.",
        rightText: "Pure\nNatural\nLab Certified",
        image: hero1,
        bgColor: "#FFE8D7",
        buttonText: "Explore All Gemstones"
    },
    {
        id: 2,
        title: "DIAMONDS",
        description: "Exquisite diamonds and sapphires, hand-picked for their brilliance and clarity. Timeless elegance crafted for the modern connoisseur.",
        rightText: "Timeless\nElegance\nHand Crafted",
        image: hero1,
        bgColor: "#F5F5F5",
        buttonText: "View Collection"
    },
    {
        id: 3,
        title: "HERITAGE",
        description: "Experience the regal charm of our ruby and gold collection. Heritage designs that tell a story of luxury and tradition.",
        rightText: "Regal\nHeritage\nGold & Rubies",
        image: hero1,
        bgColor: "#F5F5F5",
        buttonText: "Shop Heritage"
    }
];

const Hero: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [direction, setDirection] = useState(0); // -1 for left, 1 for right

    const nextSlide = useCallback(() => {
        setDirection(1);
        setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, []);

    const prevSlide = useCallback(() => {
        setDirection(-1);
        setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
    }, []);

    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide();
        }, 6000);
        return () => clearInterval(timer);
    }, [nextSlide]);

    const slide = SLIDES[currentSlide];

    return (
        <section className="relative mt-[140px] h-[80vh] w-full overflow-hidden flex items-center justify-center transition-colors duration-1000" style={{ backgroundColor: slide.bgColor }}>
            <AnimatePresence initial={true} custom={direction} mode="wait">
                <motion.div
                    key={currentSlide}
                    custom={direction}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6 }}
                    className="absolute inset-0 w-full h-full flex items-center justify-center"
                >
                    {/* Background Text */}
                    <div className="absolute top-10 left-0 w-full flex justify-center z-0">
                        <motion.h1
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 0.6, scale: 1 }}
                            transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
                            className="text-[14vw] font-serif font-light text-white leading-none tracking-tight select-none pointer-events-none"
                        >
                            {slide.title}
                        </motion.h1>
                    </div>

                    {/* Arched Reveal Container */}
                    <div className="relative z-10 w-full h-full flex items-center justify-center">
                        <motion.div
                            initial={{
                                clipPath: 'inset(10% 20% 10% 20% round 300px 300px 0 0)',
                            }}
                            animate={{
                                clipPath: 'inset(0% 0% 0% 0% round 0px 0px 0 0)',
                            }}
                            transition={{
                                duration: 1.2,
                                delay: 2.2, // Starts closer to gate completion
                                ease: [0.77, 0, 0.175, 1]
                            }}
                            className="relative w-full h-full flex items-center justify-center overflow-hidden bg-transparent"
                        >
                            {/* Model Image */}
                            <motion.img
                                initial={{ scale: 1.1, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 1.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                                src={slide.image}
                                alt={slide.title}
                                className="h-full w-full object-cover object-top"
                            />

                            {/* Left Gate Panel */}
                            <motion.div
                                initial={{ x: '0%' }}
                                animate={{ x: '-100%' }}
                                transition={{ duration: 1.8, delay: 0.6, ease: [0.65, 0, 0.35, 1] }}
                                className="absolute inset-0 left-0 w-1/2 h-full z-20"
                                style={{ backgroundColor: slide.bgColor || '#1A1A1A' }}
                            />

                            {/* Right Gate Panel */}
                            <motion.div
                                initial={{ x: '0%' }}
                                animate={{ x: '100%' }}
                                transition={{ duration: 1.8, delay: 0.6, ease: [0.65, 0, 0.35, 1] }}
                                className="absolute inset-0 right-0 left-1/2 w-1/2 h-full z-20"
                                style={{ backgroundColor: slide.bgColor || '#1A1A1A' }}
                            />

                            {/* Subtle Arch Border */}
                            <motion.div
                                initial={{ opacity: 0.4 }}
                                animate={{ opacity: 0 }}
                                transition={{ duration: 0.6, delay: 2.3 }}
                                className="absolute inset-[10%_20%_10%_20%] border border-white/40 rounded-t-full pointer-events-none z-30 flex items-center justify-center"
                            />
                        </motion.div>
                    </div>

                    {/* Left Content Overlay */}
                    <div className="absolute left-[5%] bottom-[15%] z-40 max-w-[280px] text-white hidden lg:block">
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 1 }}
                            className="text-base font-light leading-relaxed mb-6"
                        >
                            {slide.description}
                        </motion.p>
                        <motion.button
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 1.2 }}
                            whileHover={{ x: 5 }}
                            className="bg-white text-black px-8 py-3 flex items-center gap-3 font-medium hover:bg-black hover:text-white transition-all duration-300 group"
                        >
                            {slide.buttonText} <MoveRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </motion.button>
                    </div>

                    {/* Right Content Overlay */}
                    <div className="absolute right-[5%] bottom-[15%] z-40 text-right text-white hidden lg:block">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 1.1 }}
                        >
                            <h2 className="text-4xl font-serif font-light leading-snug whitespace-pre-line">
                                {slide.rightText}
                            </h2>
                        </motion.div>
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <div className="absolute top-1/2 -translate-y-1/2 w-full px-6 flex justify-between z-30 pointer-events-none">
                <button
                    onClick={prevSlide}
                    className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white bg-white/10 backdrop-blur-sm pointer-events-auto hover:bg-white hover:text-black transition-all group"
                >
                    <ArrowLeft className="w-6 h-6 group-active:scale-95 transition-transform" />
                </button>
                <button
                    onClick={nextSlide}
                    className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white bg-white/10 backdrop-blur-sm pointer-events-auto hover:bg-white hover:text-black transition-all group"
                >
                    <ArrowRight className="w-6 h-6 group-active:scale-95 transition-transform" />
                </button>
            </div>

            {/* Pagination Dots */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-30">
                {SLIDES.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => {
                            setDirection(index > currentSlide ? 1 : -1);
                            setCurrentSlide(index);
                        }}
                        className={`transition-all duration-500 rounded-full h-1 ${currentSlide === index ? 'w-10 bg-white' : 'w-2 bg-white/30 hover:bg-white/60'
                            }`}
                    />
                ))}
            </div>

            {/* Subtle Decorative Elements */}
            <div className="absolute top-1/4 right-[15%] opacity-20 pointer-events-none z-0">
                <motion.svg
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    width="40" height="40" viewBox="0 0 40 40" fill="none"
                >
                    <path d="M20 0L22.5 17.5L40 20L22.5 22.5L20 40L17.5 22.5L0 20L17.5 17.5L20 0Z" fill="white" />
                </motion.svg>
            </div>
            <div className="absolute bottom-1/4 left-[15%] opacity-20 pointer-events-none z-0">
                <motion.svg
                    animate={{ rotate: -360 }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    width="30" height="30" viewBox="0 0 40 40" fill="none"
                >
                    <path d="M20 0L22.5 17.5L40 20L22.5 22.5L20 40L17.5 22.5L0 20L17.5 17.5L20 0Z" fill="white" />
                </motion.svg>
            </div>
        </section>
    );
};

export default Hero;
