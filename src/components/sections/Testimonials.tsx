import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import Sectionbutton from '../ui/Sectionbutton';
import LabcerificationLine from '../../assets/common/labcerificationLine';
import reviewer1 from '../../assets/testimonials/reviewer1.png';
import reviewer2 from '../../assets/testimonials/reviewer2.png';
import reviewer3 from '../../assets/testimonials/reviewer3.png';

const testimonials = [
    {
        id: 1,
        image: reviewer1,
        text: "Fantastic buying experience from start to finish Puru ji was incredibly helpful, answering all my questions and delivering my custom emerald ring exactly as I envisioned. The price was unbeatable, it arrived early with a valid authenticity certificate, and the entire process was smooth. Highly recommend RR Gems & Jewels for quality, service, and value!",
        author: "Smita Chhetri",
        rating: 5
    },
    {
        id: 2,
        image: reviewer2,
        text: "On my astrologer's advice, I visited RR Gems & Jewels in Udaipur for Yellow Sapphire, Emerald, Coral, Sapphire, Diamond, and Pearl, all fully certified and set in custom gold without any upsell pressure. Their team explained each stone's origin, clarity, and astrological benefits with genuine care. I've already noticed a positive shift in my energy, highly recommend!",
        author: "Piyush Goswami",
        rating: 5
    },
    {
        id: 3,
        image: reviewer3,
        text: "I recently bought coral with ring and coral quality and ring quality is very good we 100% satisfied with us and I highly recommend to please visit RR Gems and Jewels once when you want to buy certified gemstone.",
        author: "Meenu Patel",
        rating: 5
    },
    {
        id: 4,
        image: reviewer3,
        text: "I recently bought coral with ring and coral quality and ring quality is very good we 100% satisfied with us and I highly recommend to please visit RR Gems and Jewels once when you want to buy certified gemstone.",
        author: "Meenu Patel",
        rating: 5
    },
    {
        id: 5,
        image: reviewer3,
        text: "I recently bought coral with ring and coral quality and ring quality is very good we 100% satisfied with us and I highly recommend to please visit RR Gems and Jewels once when you want to buy certified gemstone.",
        author: "Meenu Patel",
        rating: 5
    },
    {
        id: 6,
        image: reviewer3,
        text: "I recently bought coral with ring and coral quality and ring quality is very good we 100% satisfied with us and I highly recommend to please visit RR Gems and Jewels once when you want to buy certified gemstone.",
        author: "Meenu Patel",
        rating: 5
    },
    {
        id: 7,
        image: reviewer3,
        text: "I recently bought coral with ring and coral quality and ring quality is very good we 100% satisfied with us and I highly recommend to please visit RR Gems and Jewels once when you want to buy certified gemstone.",
        author: "Meenu Patel",
        rating: 5
    },
    {
        id: 8,
        image: reviewer3,
        text: "I recently bought coral with ring and coral quality and ring quality is very good we 100% satisfied with us and I highly recommend to please visit RR Gems and Jewels once when you want to buy certified gemstone.",
        author: "Meenu Patel",
        rating: 5
    },
    {
        id: 9,
        image: reviewer3,
        text: "I recently bought coral with ring and coral quality and ring quality is very good we 100% satisfied with us and I highly recommend to please visit RR Gems and Jewels once when you want to buy certified gemstone.",
        author: "Meenu Patel",
        rating: 5
    }
];

const Testimonials = () => {
    const [[page, direction], setPage] = useState([0, 0]);
    const [isPaused, setIsPaused] = useState(false);

    const totalPages = Math.ceil(testimonials.length / 3);

    const paginate = useCallback((newDirection: number) => {
        setPage(([prevPage]) => {
            const nextPage = (prevPage + newDirection + totalPages) % totalPages;
            return [nextPage, newDirection];
        });
    }, [totalPages]);

    const currentIndex = page * 3;

    useEffect(() => {
        if (!isPaused) {
            const interval = setInterval(() => paginate(1), 4000);
            return () => clearInterval(interval);
        }
    }, [isPaused, paginate]);

    const variants = {
        enter: (direction: number) => ({
            x: direction > 0 ? '100%' : '-100%',
            opacity: 0,
            scale: 0.95
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
            scale: 1
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? '100%' : '-100%',
            opacity: 0,
            scale: 0.95
        })
    };

    return (
        <section className="bg-[#FAF8F5] py-24 px-4 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <div className="flex justify-center mb-2">
                        <Sectionbutton text="Customer Reviews" />
                    </div>

                    <h2 className="text-4xl md:text-5xl lg:text-7xl font-display text-gray-900 mb-6">
                        Words That <span className="text-[#FF8936] italic serif font-serif">Made Us Smile</span>
                    </h2>

                    <div className="flex justify-center items-center gap-4 mb-8">
                        <LabcerificationLine />
                    </div>
                    <div className="flex justify-center items-center">
                        <p className="text-gray-500 text-lg max-w-xl mx-auto leading-relaxed font-sans">
                            Relentless craftsmanship. Timeless gemstones.<br />
                            Here’s what our customers say.
                        </p>
                    </div>
                </div>

                <div className="relative">
                    <div className="hidden lg:block absolute top-[120px] left-[15%] right-[15%] h-[2px]">
                        <div className="w-full h-full border-t-2 border-dashed border-[#FF8936]/40" />
                    </div>

                    <div className="relative h-[550px]">
                        <AnimatePresence initial={false} custom={direction}>
                            <motion.div
                                key={page}
                                custom={direction}
                                variants={variants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{
                                    x: { type: "spring", stiffness: 300, damping: 30 },
                                    opacity: { duration: 0.2 },
                                    scale: { duration: 0.4 }
                                }}
                                className="absolute inset-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 z-10"
                            >
                                {testimonials.slice(currentIndex, currentIndex + 3).map((testimonial, offset) => (
                                    <div
                                        key={testimonial.id}
                                        onMouseEnter={() => setIsPaused(true)}
                                        onMouseLeave={() => setIsPaused(false)}
                                        className={`relative flex flex-col items-center ${offset > 0 ? 'hidden lg:flex' : 'flex'} ${offset === 1 ? 'md:flex' : ''}`}
                                    >
                                        <div className="relative mb-[-60px] z-20">
                                            <div className="w-40 h-40 rounded-full border-4 border-white shadow-xl overflow-hidden bg-gray-100">
                                                <img
                                                    src={testimonial.image}
                                                    alt={testimonial.author}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                        </div>

                                        <div className="w-full bg-[#FFF9F3] border border-[#FF8936]/30 rounded-[32px] pt-20 p-8 flex flex-col min-h-[400px]">
                                            <div className="absolute top-[92px] left-8 w-4 h-4 bg-[#FF8936] rotate-45" />
                                            <div className="absolute top-[92px] right-8 w-4 h-4 bg-[#FF8936] rotate-45" />

                                            <div className="flex-grow mb-8 pt-4">
                                                <p className="text-gray-600 text-center leading-relaxed font-sans text-[15px]">
                                                    {testimonial.text}
                                                </p>
                                            </div>

                                            <div className="mt-auto pt-6 border-t border-[#FF8936]/10 flex items-center justify-between">
                                                <span className="text-xl font-display text-gray-900 font-semibold">{testimonial.author}</span>
                                                <div className="flex gap-0.5">
                                                    {[...Array(5)].map((_, i) => (
                                                        <Star
                                                            key={i}
                                                            className="w-4 h-4 fill-[#FF8936] text-[#FF8936]"
                                                        />
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

                <div className="mt-16 flex flex-col items-center gap-8">
                    <div className="flex items-center gap-6">
                        <button
                            onClick={() => paginate(-1)}
                            className="w-12 h-12 rounded-full border border-[#FF8936] flex items-center justify-center text-[#FF8936] hover:bg-[#FF8936] hover:text-white transition-all group z-20"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>
                        <div className="flex items-center gap-2">
                            {[...Array(totalPages)].map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => {
                                        const newDirection = index > page ? 1 : -1;
                                        setPage([index, newDirection]);
                                    }}
                                    className={`h-2 transition-all rounded-full ${page === index ? 'w-12 bg-[#FF8936]' : 'w-2 bg-[#FF8936]/30'}`}
                                />
                            ))}
                        </div>
                        <button
                            onClick={() => paginate(1)}
                            className="w-12 h-12 rounded-full border border-[#FF8936] flex items-center justify-center text-[#FF8936] hover:bg-[#FF8936] hover:text-white transition-all group z-20"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
