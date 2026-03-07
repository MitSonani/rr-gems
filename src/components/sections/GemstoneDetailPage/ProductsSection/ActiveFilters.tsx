import React from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import type { FilterState } from './index';

interface ActiveFiltersProps {
    filters: FilterState;
    setFilters: React.Dispatch<React.SetStateAction<FilterState>>;
}

export default function ActiveFilters({
    filters,
    setFilters
}: ActiveFiltersProps) {
    const activeFiltersList: { category: keyof FilterState; value: string; label: string }[] = [];

    // Add Price if not default
    if (filters.price[0] !== 0 || filters.price[1] !== 100000) {
        activeFiltersList.push({
            category: 'price',
            value: 'price',
            label: `Price: ₹${filters.price[0]} - ₹${filters.price[1]}`
        });
    }

    // Add Carat if not default
    // Add Carat if not default
    if (filters.carat[0] !== 0 || filters.carat[1] !== 15) {
        activeFiltersList.push({
            category: 'carat',
            value: 'carat',
            label: `Carat: ${filters.carat[0]} - ${filters.carat[1]}`
        });
    }

    // Add Multi-select categories
    const categories: (keyof FilterState)[] = ['origin', 'certification', 'treatments', 'shapes', 'cuts', 'compositions'];
    categories.forEach(cat => {
        const values = filters[cat] as string[];
        values.forEach(val => {
            activeFiltersList.push({
                category: cat,
                value: val,
                label: `${cat.charAt(0).toUpperCase() + cat.slice(1)}: ${val}`
            });
        });
    });

    if (activeFiltersList.length === 0) return null;

    const handleRemove = (category: keyof FilterState, value: string) => {
        setFilters(prev => {
            if (category === 'price') return { ...prev, price: [0, 100000] };
            if (category === 'carat') return { ...prev, carat: [0, 15] };

            const currentValues = prev[category] as string[];
            return {
                ...prev,
                [category]: currentValues.filter(v => v !== value)
            };
        });
    };

    const handleClearAll = () => {
        setFilters({
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

    return (
        <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap items-center gap-3 mb-8"
        >
            <span className="font-open-sans text-[14px] font-semibold text-[#333333] mr-2">
                Active Filters:
            </span>

            <AnimatePresence>
                {activeFiltersList.map((filter) => (
                    <motion.div
                        key={`${filter.category}-${filter.value}`}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="flex items-center gap-2 bg-[#FCF2EB] border border-[#FF8936] px-3 py-1.5 min-h-[32px]"
                    >
                        <span className="font-open-sans text-[13px] text-[#333333]">{filter.label}</span>
                        <button
                            onClick={() => handleRemove(filter.category, filter.value)}
                            className="hover:text-red-500 text-[#333333] transition-colors flex items-center justify-center p-0.5"
                        >
                            <X size={14} />
                        </button>
                    </motion.div>
                ))}
            </AnimatePresence>

            <button
                onClick={handleClearAll}
                className="font-open-sans text-[13px] font-semibold text-[#FF8936] hover:underline ml-2"
            >
                Clear All
            </button>
        </motion.div>
    );
}
