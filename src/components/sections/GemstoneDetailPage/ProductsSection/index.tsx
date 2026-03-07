import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import StarIcon from "/assets/AboutGem/star.svg";
import TitleBelowLine from "/assets/GemCollection/titlebelowLine.svg";
import { SlidersHorizontal, ArrowDownUp, ChevronDown } from 'lucide-react';
import ProductCard from './ProductCard';
import FiltersModal from './FiltersModal';
import ActiveFilters from './ActiveFilters';

export type FilterState = {
    price: [number, number];
    carat: [number, number];
    origin: string[];
    certification: string[];
    treatments: string[];
    shapes: string[];
    cuts: string[];
    compositions: string[];
};

const INITIAL_FILTERS: FilterState = {
    price: [0, 100000],
    carat: [0, 15],
    origin: ["Zambian"],
    certification: [],
    treatments: [],
    shapes: [],
    cuts: [],
    compositions: [],
};

export default function ProductsSection() {
    const [isBuybackActive, setIsBuybackActive] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isFiltersModalOpen, setIsFiltersModalOpen] = useState(false);
    const [selectedSort, setSelectedSort] = useState("Top Match");
    const [filters, setFilters] = useState<FilterState>(INITIAL_FILTERS);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const sortOptions = [
        "Top Match",
        "Prize - High to Low",
        "Prize - Low to High",
        "Weight - High to Low",
        "Weight - Low to High",
        "Our Choice"
    ];

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <div className="w-full bg-white px-4 pb-24">

            {/* Header Section */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={containerVariants}
                className="flex flex-col items-center justify-center pt-16 pb-12"
            >
                <motion.div variants={itemVariants} className="inline-flex items-center justify-center gap-[8px] bg-[#FCF2EB] py-[6px] px-[16px] mb-6">
                    <img src={StarIcon} alt="Star Icon" className="h-[10px] w-[10px]" />
                    <span className="font-open-sans font-medium text-[12px] md:text-[13px] leading-[20px] tracking-widest text-[#FF8936] uppercase">
                        PURE, NATURAL, LAB CERTIFIED
                    </span>
                    <img src={StarIcon} alt="Star Icon" className="h-[10px] w-[10px]" />
                </motion.div>

                <motion.h2 variants={itemVariants} className="font-['Very_Vogue-Display',Helvetica] font-[401] text-[40px] md:text-[56px] text-black leading-none mb-4">
                    All <span className="font-['Very_Vogue-Display_Italic',Helvetica] italic text-[#FF8936]">Products</span>
                </motion.h2>

                <motion.img variants={itemVariants} src={TitleBelowLine} alt="Decorative line" className="mb-10" />
            </motion.div>

            {/* Filters and Sorting Toolbar */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-[#CED4DA] pb-4 mb-8"
            >

                {/* Left Side: Filter and Toggle */}
                <div className="flex flex-wrap items-center gap-4">
                    {/* Filters Button */}
                    <button
                        onClick={() => setIsFiltersModalOpen(true)}
                        className="flex items-center gap-2 border border-[#CED4DA] px-4 py-2 hover:bg-gray-50 transition-colors cursor-pointer bg-white h-[40px]"
                    >
                        <SlidersHorizontal size={16} className="text-[#333333]" />
                        <span className="font-open-sans text-[14px] font-medium text-[#333333]">Filters</span>
                    </button>

                    {/* Toggle Switch */}
                    <label className="flex items-center gap-3 cursor-pointer border border-[#CED4DA] px-4 py-2 bg-white h-[40px]">
                        <div className="relative inline-flex items-center">
                            <input
                                type="checkbox"
                                className="sr-only peer"
                                checked={isBuybackActive}
                                onChange={() => setIsBuybackActive(!isBuybackActive)}
                            />
                            {/* Switch background */}
                            <div className={`w-[36px] h-[20px] rounded-full peer transition-colors ${isBuybackActive ? 'bg-[#FF8936]' : 'bg-[#E5E5E5]'
                                }`}></div>
                            {/* Switch dot */}
                            <div className={`absolute left-[2px] top-[2px] w-[16px] h-[16px] bg-white rounded-full transition-transform ${isBuybackActive ? 'translate-x-[16px]' : 'translate-x-0 outline border border-[#CED4DA]'
                                }`}></div>
                        </div>
                        <span className="font-open-sans text-[14px] font-medium text-[#333333]">
                            Only lifetime Buyback
                        </span>
                    </label>
                </div>

                {/* Right Side: Sorting */}
                <div className="flex items-center gap-4 self-end lg:self-auto">
                    <div className="flex items-center gap-2">
                        <ArrowDownUp size={16} className="text-[#333333]" />
                        <span className="font-open-sans text-[14px] font-medium text-[#333333]">
                            Sort By
                        </span>
                    </div>

                    <div className="relative" ref={dropdownRef}>
                        <button
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            className="flex items-center justify-between border border-[#CED4DA] px-4 py-2 w-[160px] md:w-[200px] h-[40px] bg-white hover:bg-gray-50 transition-colors"
                        >
                            <span className="font-open-sans text-[14px] font-medium text-[#333333]">
                                {selectedSort}
                            </span>
                            <ChevronDown
                                size={16}
                                className={`text-[#333333] transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}
                            />
                        </button>

                        <AnimatePresence>
                            {isDropdownOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: -5 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -5 }}
                                    transition={{ duration: 0.15 }}
                                    className="absolute top-full left-0 w-full bg-white border border-[#CED4DA] shadow-lg z-20 mt-[2px]"
                                >
                                    <div className="flex flex-col">
                                        {sortOptions.map((option, idx) => (
                                            <button
                                                key={idx}
                                                onClick={() => {
                                                    setSelectedSort(option);
                                                    setIsDropdownOpen(false);
                                                }}
                                                className={`w-full text-left px-4 py-[10px] font-open-sans text-[14px] text-[#000000] hover:bg-gray-50 transition-colors ${idx !== sortOptions.length - 1 ? 'border-b border-[#CED4DA]' : ''
                                                    } ${selectedSort === option ? 'font-medium bg-gray-50' : 'font-normal'}`}
                                            >
                                                {option}
                                            </button>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </motion.div>

            {/* Active Filters UI */}
            <ActiveFilters
                filters={filters}
                setFilters={setFilters}
            />

            {/* Product Grid */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={containerVariants}
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            >
                {Array.from({ length: 12 }).map((_, index) => (
                    <motion.div key={index} variants={itemVariants}>
                        <ProductCard />
                    </motion.div>
                ))}
            </motion.div>

            {/* Pagination */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex items-center justify-center gap-2 mt-16"
            >
                <button className="w-[36px] h-[36px] flex items-center justify-center border border-[#FF8936] bg-[#FCF2EB] text-[#FF8936] font-open-sans text-[14px] font-semibold rounded-sm">
                    1
                </button>
                {[2, 3, 4, 5, 6, 7].map(num => (
                    <button key={num} className="w-[36px] h-[36px] flex items-center justify-center border border-[#CED4DA] bg-white text-[#6C757D] hover:border-[#FF8936] hover:text-[#FF8936] transition-colors font-open-sans text-[14px] font-semibold rounded-sm">
                        {num}
                    </button>
                ))}
            </motion.div>

            {/* Modal */}
            <FiltersModal
                isOpen={isFiltersModalOpen}
                onClose={() => setIsFiltersModalOpen(false)}
                filters={filters}
                onApply={setFilters}
            />

        </div>
    );
}
