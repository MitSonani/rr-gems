import { motion, type Variants } from "framer-motion"
import TopIcon from "/assets/home/herotopicons.svg"
import HeadLineIcon from "/assets/home/headlinesideicon.svg"
import HeroLeftImage from "/assets/home/heroleftimage.svg"
import HeroRightImage from "/assets/home/herorightimage.svg"
import HeroBottomIcon from "/assets/home/herobottomIcon.svg"
import MiddleIcon from "/assets/home/middletitleicons.svg"

export default function GemStoneHeroSection() {
    const uspsData = [
        {
            count: "55+",
            title: "Years Trust"
        }, {
            count: "50,000+",
            title: "Gemstones Sold"
        }, {
            count: "100%",
            title: "Lab Certified"
        }
    ]

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1,
            },
        },
    };

    const fadeUpVariants: Variants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.8, ease: "easeOut" }
        },
    };

    const slideLeftVariants: Variants = {
        hidden: { x: -60, opacity: 0 },
        visible: { x: 0, opacity: 1, transition: { duration: 1, ease: "easeOut", delay: 0.4 } },
    };

    const slideRightVariants: Variants = {
        hidden: { x: 60, opacity: 0 },
        visible: { x: 0, opacity: 1, transition: { duration: 1, ease: "easeOut", delay: 0.4 } },
    };

    return (
        <div className="w-full bg-[#FAE9DF] pt-26 overflow-hidden">
            <motion.div
                className="flex flex-col justify-center w-full items-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={containerVariants}
            >
                <div className="w-full py-[18px] flex justify-center items-center relative">
                    <motion.img variants={fadeUpVariants} src={TopIcon} alt="" className="h-[40px] relative z-10 bg-[#FAE9DF] px-4" />
                </div>
                <motion.div variants={fadeUpVariants} className="w-full flex bg-[#DBAB8E] justify-center items-center gap-8 md:gap-12 py-4 border-y-[3px] border-y-[#BA9F8E]">
                    <img src={HeadLineIcon} alt="" className="h-[50px] w-auto shrink-0" />
                    <p className="font-['Very_Vogue'] text-white whitespace-nowrap font-normal text-[36px] md:text-[60px] leading-[100%] tracking-[0%] text-center align-middle">Discover Trusted, Certified Natural Gemstones</p>
                    <img src={HeadLineIcon} alt="" className="h-[50px] w-auto shrink-0" />
                </motion.div>
                <div className="flex justify-between items-end w-full mt-[28px] px-[40px]">
                    <motion.img variants={slideLeftVariants} src={HeroLeftImage} alt="" className="w-[22%] md:w-[28%] max-w-[380px] object-contain object-bottom shrink-0" />
                    <div className="flex flex-col justify-center items-center max-w-[650px] px-2 md:px-4 w-full z-10 relative pb-6 md:pb-10">
                        <motion.div variants={fadeUpVariants} className="flex flex-col justify-center items-center gap-[16px]">
                            <img src={MiddleIcon} alt="" className="h-[60px] md:h-[80px] w-auto" />
                            <p className="font-['Open_Sans'] font-normal text-[18px] md:text-[20px] leading-normal tracking-[0px] text-center mt-2 text-[#322f2d]">
                                Premium-quality natural gemstones, which are lab certified
                                <br className="hidden md:block" />
                                and trusted by over 3 lakh customers.
                            </p>
                        </motion.div>
                        <motion.div variants={containerVariants} className="grid grid-cols-3 gap-2 md:gap-2 mt-[35px] w-full">
                            {uspsData.map((item, index) => (
                                <motion.div variants={fadeUpVariants} key={index} className="flex flex-col justify-center items-center bg-white border border-[#d8c3b5] w-[120px] sm:w-[160px] md:w-[200px] py-[20px] md:py-[24px] shrink-0">
                                    <p className="font-['Very_Vogue'] whitespace-nowrap font-normal text-[20px] md:text-[30px] leading-[100%] tracking-[0%] text-center text-[#f17a41]">{item.count}</p>
                                    <p className="font-['Very_Vogue'] whitespace-nowrap font-normal text-[12px] md:text-[18px] leading-[100%] tracking-[0%] text-center text-[#f17a41] mt-[10px]">{item.title}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                        <motion.div variants={fadeUpVariants} className="w-[90%] md:w-full flex justify-center items-center py-2 relative mt-[45px]">
                            <img src={HeroBottomIcon} className="h-[20px] md:h-[28px] relative z-20 bg-[#FAE9DF] px-6" alt="" />
                        </motion.div>
                    </div>
                    <motion.img variants={slideRightVariants} src={HeroRightImage} alt="" className="w-[22%] md:w-[28%] max-w-[380px] object-contain object-bottom shrink-0" />
                </div>
            </motion.div>
        </div>
    )
}
