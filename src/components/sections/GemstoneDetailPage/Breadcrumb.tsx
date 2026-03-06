import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import RightArrow from "/assets/Breadcrumb/rightarrow.svg";

export default function Breadcrumb() {
    return (
        <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 px-4 py-4 bg-white font-open-sans text-[16px] font-medium leading-6 mt-6"
        >
            <Link to="/" className="text-[#6C757D] hover:text-[#FF8936] transition-colors">Home</Link>
            <img src={RightArrow} alt="RightArrow" />
            <Link to="/gemstone" className="text-[#6C757D] hover:text-[#FF8936] transition-colors">Gemstones</Link>
            <img src={RightArrow} alt="RightArrow" />
            <span className="text-[#FF8936]">Emerald (Panna Stone)</span>
        </motion.div>
    );
}
