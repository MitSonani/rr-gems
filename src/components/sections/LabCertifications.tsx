import React from 'react';
import LabcerificationLine from '../../assets/common/labcerificationLine';
import { motion, type Variants } from 'framer-motion';
import Sectionbutton from '../ui/Sectionbutton';

const LabCertifications: React.FC = () => {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    const logoVariants: Variants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.4,
                ease: "easeInOut"
            }
        }
    };

    const rightLineVariants: Variants = {
        hidden: { scaleX: 0, opacity: 0, originX: 0 },
        visible: {
            scaleX: 1,
            opacity: 1,
            transition: {
                duration: 1,
                ease: "easeOut",
                delay: 0.8
            }
        }
    };

    const leftLineVariants: Variants = {
        hidden: { scaleX: 0, opacity: 0, originX: 1 },
        visible: {
            scaleX: 1,
            opacity: 1,
            transition: {
                duration: 1,
                ease: "easeOut",
                delay: 0.8
            }
        }
    };

    return (
        <motion.section
            className="py-20 bg-white flex flex-col items-center overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
        >
            <div className="w-full flex items-center mb-24 h-[50px]">
                <motion.div
                    className="h-[0.5px] bg-[#FD969A] flex-grow"
                    variants={leftLineVariants}
                />
                <motion.div
                    className="px-8 flex-shrink-0"
                    variants={itemVariants}
                >
                    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M31.2817 19.4449C30.358 20.3688 29.2195 20.7281 29.2195 20.7281C29.2195 20.7281 29.5788 19.5896 30.5024 18.666C31.4261 17.7423 32.5648 17.3828 32.5648 17.3828C32.5648 17.3828 32.2056 18.5213 31.2817 19.4449Z" fill="#FD969A" />
                        <path d="M33.2184 23.3302C31.9566 23.6691 30.791 23.4103 30.791 23.4103C30.791 23.4103 31.6714 22.6039 32.9332 22.2658C34.1949 21.9277 35.3605 22.1858 35.3605 22.1858C35.3605 22.1858 34.4804 22.9921 33.2184 23.3302Z" fill="#FD969A" />
                        <path d="M32.9527 27.6628C31.6907 27.3238 30.8105 26.5183 30.8105 26.5183C30.8105 26.5183 31.9759 26.2602 33.2379 26.5983C34.4999 26.9364 35.38 27.7428 35.38 27.7428C35.38 27.7428 34.2145 28.0009 32.9527 27.6628Z" fill="#FD969A" />
                        <path d="M30.5553 31.2826C29.6317 30.3587 29.2725 29.2205 29.2725 29.2205C29.2725 29.2205 30.4109 29.5797 31.3346 30.5033C32.2582 31.427 32.6175 32.5655 32.6175 32.5655C32.6175 32.5655 31.479 32.2062 30.5553 31.2826Z" fill="#FD969A" />
                        <path d="M26.6704 33.2184C26.3315 31.9566 26.5903 30.791 26.5903 30.791C26.5903 30.791 27.3967 31.6714 27.7348 32.9332C28.0729 34.1949 27.8148 35.3605 27.8148 35.3605C27.8148 35.3605 27.0085 34.4801 26.6704 33.2184Z" fill="#FD969A" />
                        <path d="M22.3373 32.9544C22.6762 31.6926 23.4815 30.8123 23.4815 30.8123C23.4815 30.8123 23.7396 31.9778 23.4015 33.2396C23.0634 34.5014 22.2573 35.3817 22.2573 35.3817C22.2573 35.3817 21.9992 34.2162 22.3373 32.9544Z" fill="#FD969A" />
                        <path d="M18.718 30.5571C19.6417 29.6334 20.7801 29.2742 20.7801 29.2742C20.7801 29.2742 20.4209 30.4126 19.4972 31.3363C18.5736 32.2599 17.4349 32.6194 17.4349 32.6194C17.4349 32.6194 17.7941 31.4823 18.718 30.5571Z" fill="#FD969A" />
                        <path d="M16.7816 26.6719C18.0434 26.333 19.209 26.5919 19.209 26.5919C19.209 26.5919 18.3286 27.3982 17.0668 27.7363C15.805 28.0745 14.6395 27.8161 14.6395 27.8161C14.6395 27.8161 15.5196 27.01 16.7816 26.6719Z" fill="#FD969A" />
                        <path d="M17.0473 22.3373C18.3093 22.6762 19.1894 23.4818 19.1894 23.4818C19.1894 23.4818 18.0241 23.7399 16.7621 23.4018C15.5 23.0636 14.6199 22.2573 14.6199 22.2573C14.6199 22.2573 15.7855 21.9992 17.0473 22.3373Z" fill="#FD969A" />
                        <path d="M19.4449 18.7177C20.3686 19.6413 20.7278 20.7798 20.7278 20.7798C20.7278 20.7798 19.5893 20.4206 18.6657 19.4969C17.7421 18.5733 17.3828 17.4348 17.3828 17.4348C17.3828 17.4348 18.5213 17.7941 19.4449 18.7177Z" fill="#FD969A" />
                        <path d="M23.3302 16.7825C23.6691 18.0443 23.4102 19.2099 23.4102 19.2099C23.4102 19.2099 22.6039 18.3295 22.2657 17.0677C21.9276 15.806 22.1857 14.6404 22.1857 14.6404C22.1857 14.6404 22.992 15.5208 23.3302 16.7825Z" fill="#FD969A" />
                        <path d="M27.6626 17.0482C27.3236 18.31 26.5184 19.1903 26.5184 19.1903C26.5184 19.1903 26.2603 18.0248 26.5984 16.763C26.9365 15.5012 27.7426 14.6208 27.7426 14.6208C27.7426 14.6208 28.0007 15.7875 27.6626 17.0482Z" fill="#FD969A" />
                        <path d="M40.1312 11.6189C37.9061 13.8437 35.1644 14.7089 35.1644 14.7089C35.1644 14.7089 36.0296 11.9669 38.2544 9.74213C40.4792 7.51735 43.2212 6.6521 43.2212 6.6521C43.2212 6.6521 42.3552 9.39384 40.1312 11.6189Z" fill="#FD969A" />
                        <path d="M44.7941 20.9782C41.7549 21.7927 38.9478 21.1709 38.9478 21.1709C38.9478 21.1709 41.068 19.229 44.1072 18.4145C47.1464 17.6001 49.9536 18.2219 49.9536 18.2219C49.9536 18.2219 47.8333 20.1638 44.7941 20.9782Z" fill="#FD969A" />
                        <path d="M44.1536 31.4143C41.1144 30.5999 38.9941 28.6579 38.9941 28.6579C38.9941 28.6579 41.8013 28.0362 44.8405 28.8506C47.8797 29.665 50 31.6069 50 31.6069C50 31.6069 47.193 32.2287 44.1536 31.4143Z" fill="#FD969A" />
                        <path d="M38.3814 40.1311C36.1566 37.9063 35.2913 35.1643 35.2913 35.1643C35.2913 35.1643 38.0331 36.0296 40.2581 38.2543C42.4831 40.4791 43.3481 43.2211 43.3481 43.2211C43.3481 43.2211 40.6061 42.3559 38.3814 40.1311Z" fill="#FD969A" />
                        <path d="M29.0231 44.7949C28.2089 41.7557 28.8304 38.9485 28.8304 38.9485C28.8304 38.9485 30.7723 41.0687 31.5868 44.1079C32.4012 47.1471 31.7794 49.9543 31.7794 49.9543C31.7794 49.9543 29.8375 47.8341 29.0231 44.7949Z" fill="#FD969A" />
                        <path d="M18.5871 44.1536C19.4012 41.1144 21.3431 38.9941 21.3431 38.9941C21.3431 38.9941 21.9649 41.8013 21.1505 44.8405C20.3361 47.8797 18.3941 50 18.3941 50C18.3941 50 17.7726 47.1928 18.5871 44.1536Z" fill="#FD969A" />
                        <path d="M9.86903 38.3813C12.0941 36.1565 14.8358 35.2913 14.8358 35.2913C14.8358 35.2913 13.9706 38.0333 11.7458 40.258C9.521 42.4828 6.77899 43.3481 6.77899 43.3481C6.77899 43.3481 7.64424 40.6053 9.86903 38.3813Z" fill="#FD969A" />
                        <path d="M5.20503 29.0232C8.24423 28.2088 11.0514 28.8305 11.0514 28.8305C11.0514 28.8305 8.93117 30.7725 5.89197 31.5866C2.85277 32.4008 0.0455933 31.7795 0.0455933 31.7795C0.0455933 31.7795 2.1661 29.8384 5.20503 29.0232Z" fill="#FD969A" />
                        <path d="M5.84638 18.5871C8.88558 19.4015 11.0058 21.3434 11.0058 21.3434C11.0058 21.3434 8.19864 21.9655 5.15944 21.1508C2.12024 20.3361 0 18.3939 0 18.3939C0 18.3939 2.80744 17.7727 5.84638 18.5871Z" fill="#FD969A" />
                        <path d="M11.6188 9.87029C13.8436 12.0951 14.7089 14.8371 14.7089 14.8371C14.7089 14.8371 11.9671 13.9721 9.74181 11.7473C7.51651 9.52252 6.65204 6.78052 6.65204 6.78052C6.65204 6.78052 9.39404 7.64577 11.6188 9.87029Z" fill="#FD969A" />
                        <path d="M20.9773 5.20656C21.7915 8.24576 21.17 11.0529 21.17 11.0529C21.17 11.0529 19.228 8.93269 18.4136 5.8935C17.5992 2.8543 18.221 0.0471191 18.221 0.0471191C18.221 0.0471191 20.1621 2.16736 20.9773 5.20656Z" fill="#FD969A" />
                        <path d="M31.4125 5.84612C30.5983 8.88531 28.6564 11.0058 28.6564 11.0058C28.6564 11.0058 28.0346 8.19838 28.8491 5.15944C29.6635 2.1205 31.6054 0 31.6054 0C31.6054 0 32.2269 2.80718 31.4125 5.84612Z" fill="#FD969A" />
                    </svg>
                </motion.div>
                <motion.div
                    className="h-[0.5px] bg-[#FD969A] flex-grow"
                    variants={rightLineVariants}
                />
            </div>
            <Sectionbutton text="Pure, Natural, Lab Certified" itemVariants={itemVariants} />


            <motion.h2
                className="text-[52px] leading-tight mb-4 text-center px-4"
                variants={itemVariants}
            >
                <span className="text-[#FF8936] italic font-very-vouge-display">Lab Certified</span>{' '}
                <span className="text-[#1A1A1A] font-very-vouge-display">Gemstones</span>
            </motion.h2>

            <motion.div
                className="flex items-center gap-2 mb-12"
                variants={itemVariants}
            >
                <LabcerificationLine />
            </motion.div>

            <motion.div
                className="max-w-4xl text-center mb-16 px-4"
                variants={itemVariants}
            >
                <p className="text-[#888888] text-[32px] font-very-vouge-display leading-[1.4] mb-2">
                    At RR Gems and Jewels, we believe that true beauty is
                </p>
                <p className="text-[#888888] text-[32px] font-very-vouge-display leading-[1.4] mb-2">
                    rooted in transparency. Every gemstone in our collection
                </p>
                <p className="text-[#888888] text-[32px] font-very-vouge-display leading-[1.4] mb-2">
                    is accompanied by a comprehensive certificate from
                </p>
                <p className="text-[#888888] text-[32px] font-very-vouge-display leading-[1.4]">
                    world-renowned gemological laboratories.
                </p>
            </motion.div>

            <motion.div
                className="w-full max-w-5xl border border-[#E5E7EB] rounded-sm overflow-hidden grid grid-cols-1 md:grid-cols-4"
                variants={containerVariants}
            >
                <motion.div
                    className="border-b md:border-b-0 md:border-r border-[#E5E7EB] p-8 flex items-center justify-center min-h-[160px]"
                    variants={logoVariants}
                >
                    <div className="flex flex-col items-center">
                        <span className="text-3xl font-bold text-[#1A1A1A]">GII</span>
                        <span className="text-[10px] uppercase tracking-tighter text-[#4A4A4A] mt-1 text-center">
                            Gemmological<br />Institute of India
                        </span>
                    </div>
                </motion.div>
                <motion.div
                    className="border-b md:border-b-0 md:border-r border-[#E5E7EB] p-8 flex items-center justify-center min-h-[160px]"
                    variants={logoVariants}
                >
                    <div className="flex flex-col items-center">
                        <span className="text-3xl font-bold text-[#1A1A1A]">GIA</span>
                        <span className="text-[10px] uppercase tracking-tighter text-[#4A4A4A] mt-1">
                            Certified Diamonds
                        </span>
                    </div>
                </motion.div>
                <motion.div
                    className="border-b md:border-b-0 md:border-r border-[#E5E7EB] p-8 flex items-center justify-center min-h-[160px]"
                    variants={logoVariants}
                >
                    <div className="flex flex-col items-center">
                        <span className="text-3xl font-bold text-[#1A1A1A]">GTL</span>
                        <span className="text-[10px] uppercase tracking-tighter text-[#4A4A4A] mt-1">
                            Gem Testing Lab
                        </span>
                    </div>
                </motion.div>
                <motion.div
                    className="p-8 flex items-center justify-center min-h-[160px]"
                    variants={logoVariants}
                >
                    <div className="flex flex-col items-center">
                        <div className="flex items-center gap-2 mb-1">
                            <span className="text-2xl font-bold text-[#1A1A1A]">IGI</span>
                        </div>
                        <span className="text-[8px] uppercase tracking-tighter text-[#4A4A4A] text-center">
                            International<br />Gemological<br />Institute
                        </span>
                    </div>
                </motion.div>
            </motion.div>
        </motion.section>
    );
};

export default LabCertifications;
