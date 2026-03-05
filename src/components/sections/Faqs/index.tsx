import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import StarIcon from "/assets/AboutGem/star.svg"
import TitleBelowLine from "/assets/GemCollection/titlebelowLine.svg"
import FaqOpenIcon from "/assets/faqopenicon.svg"
import FaqCloseIcon from "/assets/faqcloseicon.svg"

const faqs = [
    {
        id: "01",
        question: "Why do you love jewelry?",
        answer: "Solitary pieces were worn to express respective messages such as security, culture-tradition, grandeur, and luxury. Most women like to carry jewelry as an icon of femininity or to showcase social status. Jewelry can also make a woman feel optimistic and classy or graceful."
    },
    {
        id: "02",
        question: "What is the significance of jewelry in life?",
        answer: "A natural gemstone is one that has been mined from the earth and not created in a laboratory. It retains its natural properties, which makes it unique and valuable, often accompanied by natural inclusions that authenticate its origin."
    },
    {
        id: "03",
        question: "What are the Gemstones?",
        answer: "A natural gemstone is one that has been mined from the earth and not created in a laboratory. It retains its natural properties, which makes it unique and valuable, often accompanied by natural inclusions that authenticate its origin."
    },
    {
        id: "04",
        question: "How does gemstone become a Jewelry?",
        answer: "A natural gemstone is one that has been mined from the earth and not created in a laboratory. It retains its natural properties, which makes it unique and valuable, often accompanied by natural inclusions that authenticate its origin."
    },
    {
        id: "05",
        question: "What are Precious  Gemstones?",
        answer: "A natural gemstone is one that has been mined from the earth and not created in a laboratory. It retains its natural properties, which makes it unique and valuable, often accompanied by natural inclusions that authenticate its origin."
    },
    {
        id: "06",
        question: "What is the meaning of a Birthstone?",
        answer: "To care for your gemstone jewelry, avoid exposing it to harsh chemicals, extreme temperatures, and sudden impacts. Clean it regularly with mild soapy water and a soft brush, and store it separately to prevent scratches."
    },
    {
        id: "07",
        question: "What Is My Birthstone and what are the twelve Birthstones according to Western Calendar?",
        answer: "Yes, we provide authenticity certificates from recognized gemological laboratories for our premium gemstones, ensuring you know exactly what you are purchasing, including details on cut, color, clarity, and carat weight."
    }
];

export default function Faqs() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" as const }
        },
    };

    return (
        <div className='w-full flex bg-[#ffffff] pt-[60px] pb-[160px]'>
            <div className='w-full max-w-[1280px] mx-auto flex flex-col items-center gap-[40px] px-[20px] xl:px-0'>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6 }}
                    className='inline-flex items-center justify-center gap-[8px] bg-[#FCF2EB] py-[8px] px-[24px]'
                >
                    <img src={StarIcon} alt="Star Icon" className='h-[12px] w-[12px]' />
                    <p className="font-open-sans font-medium text-[14px] leading-[20px] tracking-[0.1em] text-[#FF8936] uppercase">
                        WE HAVE ANSWERS
                    </p>
                    <img src={StarIcon} alt="Star Icon" className='h-[12px] w-[12px]' />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className='flex flex-col items-center gap-[16px]'
                >
                    <p className="font-['Very_Vogue-Display',Helvetica] font-[401] text-[36px] sm:text-[46px] md:text-[68px] leading-[100%] tracking-[0.02em] text-center text-[#000000]">
                        Frequently Asked <span className="font-['Very_Vogue-Display_Italic',Helvetica] italic text-[#FF8936]">Questions</span>
                    </p>
                    <div className="flex justify-center w-full">
                        <img src={TitleBelowLine} alt="Title Below Line" />
                    </div>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="font-open-sans font-medium text-[16px] md:text-[18px] leading-[24px] md:leading-[28px] tracking-[0px] text-center text-[#6C757D] max-w-[466px] px-2"
                >
                    Everything you need to know about gemstones, <br className="hidden md:block" /> certification, quality, and buying with confidence.
                </motion.p>

                <div className="max-w-[1143px] w-full">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        className="flex flex-col w-full border-t border-[#EAEAEA]"
                    >
                        {faqs.map((faq, index) => (
                            <motion.div
                                variants={itemVariants}
                                key={faq.id}
                                className="w-full flex flex-col py-6 md:py-[32px] border-b border-[#EAEAEA]"
                            >
                                <div
                                    className="w-full flex items-center justify-between cursor-pointer group"
                                    onClick={() => setOpenIndex(index === openIndex ? null : index)}
                                >
                                    <div className="flex items-center gap-4 md:gap-[32px]">
                                        <span className="font-['Very_Vogue-Display',Helvetica] font-[400] text-[18px] md:text-[24px] text-[#FF8936] w-[20px] md:w-[24px]">
                                            {faq.id}
                                        </span>
                                        <span className="font-['Very_Vogue-Display',Helvetica] text-[18px] md:text-[28px] text-[#000000] leading-[1.2]">
                                            {faq.question}
                                        </span>
                                    </div>
                                    <motion.div
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <img
                                            src={openIndex === index ? FaqCloseIcon : FaqOpenIcon}
                                            alt={openIndex === index ? "Collapse FAQ" : "Expand FAQ"}
                                            className="w-[24px] h-[24px] md:w-[40px] md:h-[40px] object-cover"
                                        />
                                    </motion.div>
                                </div>

                                <AnimatePresence initial={false}>
                                    {openIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                            className="overflow-hidden"
                                        >
                                            <div className="max-w-[1063px]">
                                                <div className="mt-4 md:mt-[24px] pl-6 md:pl-[56px]">
                                                    <div className="border-l-2 border-[#FF8936] pl-4 md:pl-[24px]">
                                                        <p className="font-open-sans font-medium text-[18px] leading-[28px] text-[#6C757D]">
                                                            {faq.answer}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
