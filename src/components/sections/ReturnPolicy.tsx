import React from 'react';
import { motion } from 'framer-motion';
import buybackWoman from '../../assets/buyback-woman.png';
import Sunburst from '../../assets/common/sunBrust';



const ReturnPolicy: React.FC = () => {
    return (
        <section className="bg-[#FAF8F5] py-12 px-4 md:px-8">
            <div className="py-20 max-h-[600px] px-10 mx-auto overflow-hidden flex flex-col md:flex-row">
                {/* Left Content Section */}
                <div className="flex-[1.2] bg-[#FFE3CF] p-8 md:p-16 flex flex-col justify-center overflow-hidden relative">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative z-10"
                    >
                        <h2 className="text-[68px] md:text-6xl font-very-vouge-display leading-tight mb-6">
                            <span className="text-[#FF8936] italic">Get 80% back</span>{' '}
                            <span className="text-[#2C3E50]">if you ever return your gem!</span>
                        </h2>

                        <p className="text-[#666666] text-lg leading-relaxed mb-10 max-w-md">
                            Your trust means everything. If your gem doesn't match your energy,
                            even after years, we'll give you 80% back, no questions, no hassle.
                        </p>

                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="mt-5 bg-white text-black px-4 py-2 rounded-sm flex items-center gap-2 font-medium border border-black/5 hover:shadow-md transition-shadow"
                        >
                            Know More
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M5 12h14m-7-7l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </motion.button>
                    </motion.div>

                    {/* Decorative Sunburst (Bottom Left) */}
                    <div className='absolute bottom-[40px] left-[75%] -translate-x-1/2'><Sunburst color="#FF8936" /></div>

                </div>

                {/* Right Image Section */}
                <div className="bg-[#F5AE8B] flex-[0.8]  relative ">
                    <img
                        src={buybackWoman}
                        alt="Elegance and Trust"
                        className="w-full h-full object-cover absolute right-[120px]"
                    />

                    {/* Decorative Sunburst (Top Right) */}
                    <div className='absolute top-[60px] right-[50px] '><Sunburst color="#FF8936" /></div>

                </div>
            </div>
        </section>
    );
};

export default ReturnPolicy;
