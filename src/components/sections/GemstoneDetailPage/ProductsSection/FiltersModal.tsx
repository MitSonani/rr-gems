import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, Check } from 'lucide-react';
import type { FilterState } from './index';

interface FiltersModalProps {
    isOpen: boolean;
    onClose: () => void;
    filters: FilterState;
    onApply: (filters: FilterState) => void;
}

const TABS = [
    "Price",
    "Carat",
    "Origin",
    "Certification",
    "Treatments",
    "Cuts",
    "Shapes",
    "Compositions"
];

export default function FiltersModal({ isOpen, onClose, filters, onApply }: FiltersModalProps) {
    const [activeTab, setActiveTab] = useState("Price");
    const [localFilters, setLocalFilters] = useState<FilterState>(filters);

    // Sync local filters when modal opens
    useEffect(() => {
        if (isOpen) {
            setLocalFilters(filters);
        }
    }, [isOpen, filters]);

    // Block scrolling context when open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    const handleToggle = (category: keyof FilterState, value: string) => {
        setLocalFilters(prev => {
            const current = prev[category] as string[];
            if (current.includes(value)) {
                return { ...prev, [category]: current.filter(v => v !== value) };
            } else {
                return { ...prev, [category]: [...current, value] };
            }
        });
    };

    const handleClearAll = () => {
        setLocalFilters({
            price: [0, 100000],
            carat: [0, 15],
            origin: [],
            certification: [],
            treatments: [],
            shapes: [],
            cuts: [],
            compositions: [],
        });
    };

    const handleApply = () => {
        onApply(localFilters);
        onClose();
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/50 z-100"
                    />

                    {/* Drawer */}
                    <motion.div
                        initial={{ x: '-100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '-100%' }}
                        transition={{ type: "tween", duration: 0.4 }}
                        className="fixed inset-y-0 left-0 w-full md:w-[80vw] lg:max-w-[1124px] bg-white z-110 shadow-2xl flex flex-col"
                    >
                        {/* Common Header */}
                        <div className="h-[70px] md:h-[80px] bg-[#FDECEB] flex items-center px-6 border-b border-[#CED4DA] shrink-0">
                            <button
                                onClick={onClose}
                                className="w-[32px] h-[32px] border border-[#333333] flex items-center justify-center mr-4 hover:bg-white hover:text-[#FF8936] hover:border-[#FF8936] transition-colors"
                            >
                                <X size={18} className="text-[#333333] hover:text-[#FF8936]" />
                            </button>
                            <span className="font-['Very_Vogue-Display',Helvetica] text-[22px] md:text-[24px] text-[#333333] mt-1">Filters</span>
                        </div>

                        <div className="flex flex-1 flex-col md:flex-row overflow-hidden">
                            {/* Sidebar / Top Tabs */}
                            <div className="w-full md:w-[40%] lg:w-[480px] flex flex-col border-r border-[#CED4DA] bg-white z-10 shrink-0">
                                <div className="md:block flex overflow-x-auto no-scrollbar border-b md:border-none border-[#E5E5E5] bg-white sticky top-0 z-10">
                                    {TABS.map((tab) => (
                                        <button
                                            key={tab}
                                            onClick={() => setActiveTab(tab)}
                                            className={`
                                                flex-shrink-0 md:w-full text-left px-6 md:px-8 py-3.5 md:py-5 border-r md:border-r-0 md:border-b border-[#E5E5E5] font-['Very_Vogue-Display',Helvetica] text-[16px] md:text-[20px] transition-colors
                                                ${activeTab === tab
                                                    ? 'bg-[#FCF2EB] text-[#FF8936] md:text-[#333333] border-b-2 md:border-none border-b-[#FF8936]'
                                                    : 'bg-white text-[#333333] hover:bg-gray-50'
                                                }
                                            `}
                                        >
                                            {tab}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Main Content Pane */}
                            <div className="flex-1 flex flex-col bg-white relative w-full overflow-hidden">
                                {/* Content Area */}
                                <div className="flex-1 overflow-y-auto pt-8 md:pt-10 px-6 md:px-10 pb-32">
                                    <h2 className="font-['Very_Vogue-Display',Helvetica] text-[24px] md:text-[32px] text-[#333333] mb-8 md:mb-16">
                                        {activeTab === "Compositions" ? "Composition" : activeTab}
                                    </h2>

                                    {activeTab === "Price" && (
                                        <div className="ml-2">
                                            <RangeSlider
                                                min={0}
                                                max={100000}
                                                step={100}
                                                value={localFilters.price}
                                                onChange={(val) => setLocalFilters(prev => ({ ...prev, price: val }))}
                                                formatLabel={(v) => `₹${v}`}
                                            />
                                        </div>
                                    )}

                                    {activeTab === "Carat" && (
                                        <div className="ml-2">
                                            <RangeSlider
                                                min={0}
                                                max={20}
                                                step={0.01}
                                                value={localFilters.carat}
                                                onChange={(val) => setLocalFilters(prev => ({ ...prev, carat: val }))}
                                            />
                                        </div>
                                    )}

                                    {["Origin", "Certification", "Treatments", "Shapes", "Cuts", "Compositions"].includes(activeTab) && (
                                        <div className="flex flex-col gap-[22px] ml-2">
                                            {getOptionsForTab(activeTab).map((option) => {
                                                const category = activeTab.toLowerCase() as keyof FilterState;
                                                const isChecked = (localFilters[category] as string[]).includes(option);
                                                return (
                                                    <label key={option} className="flex items-center gap-4 cursor-pointer group w-fit" onClick={() => handleToggle(category, option)}>
                                                        <div className={`w-[20px] h-[20px] flex items-center justify-center border transition-colors rounded-[2px] ${isChecked
                                                            ? 'bg-[#FF8936] border-[#FF8936]'
                                                            : 'bg-white border-[#848484] group-hover:border-[#FF8936]'
                                                            }`}>
                                                            {isChecked && <Check size={14} className="text-white" strokeWidth={3} />}
                                                        </div>
                                                        <span className={`font-open-sans text-[16px] tracking-wide ${isChecked ? 'text-[#FF8936]' : 'text-[#333333]'
                                                            }`}>
                                                            {option}
                                                        </span>
                                                    </label>
                                                );
                                            })}
                                        </div>
                                    )}
                                </div>

                                {/* Footer */}
                                <div className="h-[80px] md:h-[90px] bg-[#FCF2EB] flex items-center justify-between px-6 md:px-10 border-t border-[#CED4DA] shrink-0 absolute bottom-0 w-full left-0 z-30">
                                    <button
                                        onClick={handleClearAll}
                                        className="border border-[#CED4DA] bg-white px-5 md:px-8 py-[8px] md:py-[10px] text-[#333333] font-open-sans text-[13px] md:text-[14px] font-semibold hover:bg-gray-50 transition-colors"
                                    >
                                        Clear All
                                    </button>
                                    <button
                                        onClick={handleApply}
                                        className="bg-[#FF8936] text-white px-5 md:px-8 py-[8px] md:py-[10px] flex items-center gap-2 md:gap-3 font-open-sans text-[13px] md:text-[14px] font-semibold hover:bg-[#e67a30] transition-colors shadow-sm"
                                    >
                                        Apply <span className="hidden sm:inline">Filters</span>
                                        <ArrowRight size={16} className="text-white" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}

function getOptionsForTab(tab: string): string[] {
    switch (tab) {
        case "Origin": return ["Zambian", "Indian", "Brazil", "Colombia", "Russia"];
        case "Certification": return ["IIGJ OriginTest", "GSI Treatment Test", "IIGJ Treatment Test", "Free Certificate", "GSI Origin Test"];
        case "Treatments": return ["Untreated", "Treated"];
        case "Shapes": return ["Cushion", "Fancy", "Heart", "Hexagon", "Octagon", "Oval", "Pear"];
        case "Cuts": return ["Mixed"];
        case "Compositions": return ["Natural"];
        default: return [];
    }
}

interface RangeSliderProps {
    min: number;
    max: number;
    value: [number, number];
    onChange: (val: [number, number]) => void;
    step?: number;
    formatLabel?: (v: number) => string;
}

function RangeSlider({ min, max, value, onChange, step = 1, formatLabel = (v: number) => v.toFixed(step < 1 ? 2 : 0) }: RangeSliderProps) {
    const trackRef = useRef<HTMLDivElement>(null);

    const updateValue = (clientX: number, isMin: boolean) => {
        if (!trackRef.current) return;
        const rect = trackRef.current.getBoundingClientRect();
        const percentage = Math.min(Math.max((clientX - rect.left) / rect.width, 0), 1);
        const rawValue = min + percentage * (max - min);
        const steppedValue = Math.round(rawValue / step) * step;

        if (isMin) {
            const newValue = Math.min(Math.max(steppedValue, min), value[1] - step);
            onChange([Number(newValue.toFixed(4)), value[1]]);
        } else {
            const newValue = Math.max(Math.min(steppedValue, max), value[0] + step);
            onChange([value[0], Number(newValue.toFixed(4))]);
        }
    };

    const startDrag = (isMin: boolean) => (e: React.MouseEvent | React.TouchEvent) => {
        // Don't prevent default on touch start to allow scrolling if needed, 
        // but here we probably want to capture it.
        // Actually, for a slider, we usually want to prevent scroll.
        if (e.cancelable) e.preventDefault();

        const moveHandler = (moveEvent: MouseEvent | TouchEvent) => {
            const clientX = 'touches' in moveEvent ? moveEvent.touches[0].clientX : moveEvent.clientX;
            updateValue(clientX, isMin);
        };

        const upHandler = () => {
            document.removeEventListener('mousemove', moveHandler as any);
            document.removeEventListener('mouseup', upHandler);
            document.removeEventListener('touchmove', moveHandler as any);
            document.removeEventListener('touchend', upHandler);
        };

        document.addEventListener('mousemove', moveHandler as any);
        document.addEventListener('mouseup', upHandler);
        document.addEventListener('touchmove', moveHandler as any, { passive: false });
        document.addEventListener('touchend', upHandler);
    };

    const minPos = ((value[0] - min) / (max - min)) * 100;
    const maxPos = ((value[1] - min) / (max - min)) * 100;

    return (
        <div className="flex flex-col">
            <div
                ref={trackRef}
                className="relative w-full max-w-[280px] sm:max-w-[340px] h-[2px] bg-[#CED4DA] mb-12 mt-8 mx-auto md:mx-0"
            >
                {/* Active range track */}
                <div
                    className="absolute h-full bg-[#FF8936]"
                    style={{ left: `${minPos}%`, right: `${100 - maxPos}%` }}
                />

                {/* Left Thumb */}
                <div
                    className="absolute top-1/2 -translate-y-1/2 -translate-x-[50%] w-[26px] h-[26px] cursor-grab active:cursor-grabbing z-20 touch-none"
                    style={{ left: `${minPos}%` }}
                    onMouseDown={startDrag(true)}
                    onTouchStart={startDrag(true)}
                >
                    <img src="/assets/diamondslider.svg" alt="slider thumb" className="w-full h-full object-contain pointer-events-none" />
                </div>

                {/* Right Thumb */}
                <div
                    className="absolute top-1/2 -translate-y-1/2 -translate-x-[50%] w-[26px] h-[26px] cursor-grab active:cursor-grabbing z-20 touch-none"
                    style={{ left: `${maxPos}%` }}
                    onMouseDown={startDrag(false)}
                    onTouchStart={startDrag(false)}
                >
                    <img src="/assets/diamondslider.svg" alt="slider thumb" className="w-full h-full object-contain pointer-events-none" />
                </div>
            </div>

            <div className="flex w-full max-w-[280px] sm:max-w-[340px] justify-between relative mx-auto md:mx-0">
                <div className="flex flex-col items-center -ml-6 sm:-ml-8">
                    <div className="border border-[#CED4DA] w-[80px] sm:w-[100px] h-[32px] sm:h-[36px] flex items-center justify-center font-open-sans text-[12px] sm:text-[14px] font-semibold text-[#333333] mb-2 shadow-sm bg-white">
                        {formatLabel(value[0])}
                    </div>
                    <span className="font-open-sans text-[11px] sm:text-[13px] text-[#6C757D]">Lowest</span>
                </div>
                <div className="flex flex-col items-center -mr-6 sm:-mr-8">
                    <div className="border border-[#CED4DA] w-[80px] sm:w-[100px] h-[32px] sm:h-[36px] flex items-center justify-center font-open-sans text-[12px] sm:text-[14px] font-semibold text-[#333333] mb-2 shadow-sm bg-white">
                        {formatLabel(value[1])}
                    </div>
                    <span className="font-open-sans text-[11px] sm:text-[13px] text-[#6C757D]">Highest</span>
                </div>
            </div>
        </div>
    );
}
