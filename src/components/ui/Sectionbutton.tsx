import React from 'react'
import { motion, type Variants } from 'framer-motion'

const Sectionbutton = ({ text, itemVariants }: { text: string, itemVariants?: Variants }) => {
    return (
        <motion.div
            className="mb-4 px-4 py-1.5 border border-[#1A1A1A]/20 rounded-lg"
            variants={itemVariants}
        >
            <span className="text-[12px] text-[#4A4A4A] font-medium tracking-wide text-sans">
                {text}
            </span>
        </motion.div>
    )
}

export default Sectionbutton