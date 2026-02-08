import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { MoveRight } from 'lucide-react';
import gemstoneGiftImg from '../../assets/product/gemstoneGift.png';

const GemstoneGift: React.FC = () => {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    const imageVariants: Variants = {
        hidden: { opacity: 0, scale: 0.95, x: -30 },
        visible: {
            opacity: 1,
            scale: 1,
            x: 0,
            transition: { duration: 1.2, ease: "easeOut" }
        }
    };

    return (
        <section className="bg-white py-16 md:py-30 px-4 overflow-hidden relative">
            <motion.div
                animate={{
                    y: [0, -15, 0],
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute top-20 right-[10%] w-64 h-64 bg-orange-100/30 rounded-full blur-3xl -z-10"
            />
            <motion.div
                animate={{
                    y: [0, -15, 0],
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                }}
                className="absolute bottom-20 left-[5%] w-80 h-80 bg-slate-100/40 rounded-full blur-3xl -z-10"
            />

            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-[25px] lg:gap-[50px]">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    variants={imageVariants}
                    className="w-full max-w-[500px]"
                >
                    <motion.div
                        whileHover={{ y: -10 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="relative overflow-hidden "
                    >
                        <img
                            src={gemstoneGiftImg}
                            alt="Luxury Gemstones and Rings"
                            className="w-full h-auto object-cover transform transition-transform duration-1000 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </motion.div>


                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                    className="w-full flex items-center"
                >
                    <div>
                        <motion.h2
                            variants={itemVariants}
                            className="text-3xl md:text-5xl lg:text-[58px] font-display text-gray-900 leading-[1.1] mb-8"
                        >
                            Gemstones are the universe's <br className="hidden lg:block" />
                            <motion.span
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.8, duration: 1 }}
                                className="text-[#FF8936] italic font-display inline-block"
                            >
                                gift to the soul.
                            </motion.span>
                        </motion.h2>

                        <motion.p
                            variants={itemVariants}
                            className="text-gray-500 text-base md:text-lg leading-relaxed mb-10 max-w-xl font-sans"
                        >
                            RR Gems & Jewels offer handpicked Rashi Ratna, custom-made gold pieces, and expert guidance to help you align with your spiritual and planetary path. Every gem we provide reflects authenticity, tradition, and positive transformation.
                        </motion.p>

                        <motion.div variants={itemVariants} className='mt-10'>
                            <motion.button
                                whileHover={{
                                    scale: 1.05,
                                    backgroundColor: "#e67a2e",
                                    boxShadow: "0 20px 25px -5px rgba(255, 137, 54, 0.4)"
                                }}
                                whileTap={{ scale: 0.98 }}
                                className="bg-[#FF8936]  text-white px-6 py-3 font-medium flex items-center gap-3 group transition-all duration-300 rounded-xs"
                            >
                                Discover Gemstones
                                <motion.div
                                    animate={{ x: [0, 5, 0] }}
                                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                                >
                                    <MoveRight className="w-5 h-5" />
                                </motion.div>
                            </motion.button>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default GemstoneGift;
