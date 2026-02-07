import React, { useState, useEffect } from 'react';
import { cn } from '../../../utils/cn';
import logo from '../../../assets/logo.svg'
import ProfileIcon from '../../../assets/common/profileIcon';
import CartIcon from '../../../assets/common/cartIcon';
import HeartIcon from '../../../assets/common/heartIcon';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
    { label: 'Home', href: '/', active: true },
    { label: 'Gemstone', href: '/gemstone' },
    { label: 'Jewellery', href: '/jewellery' },
    { label: 'Other Products', href: '/other-products' },
    { label: 'Gem Recommendation', href: '/recommendation' },
    { label: 'About Us', href: '/about-us' },
    { label: 'Contact Us', href: '/contact-us' },
];

export const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Prevent scrolling when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen]);

    return (
        <nav className="bg-white border-b border-slate-100 px-4 md:px-8 lg:px-[100px] py-[15px] sticky top-0 z-[100]">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <div className='flex items-center gap-[24px]'>
                    <img src={logo} alt="logo" className="h-8 md:h-10" />
                </div>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center gap-[24px]">
                    {navItems.map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            className={cn(
                                "text-sm font-medium tracking-wide transition-colors duration-200 relative py-1",
                                item.active
                                    ? "text-[#F97316]"
                                    : "text-slate-600 hover:text-[#F97316]"
                            )}
                        >
                            {item.label}
                            {item.active && (
                                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#F97316]" />
                            )}
                        </a>
                    ))}
                </div>

                {/* Desktop Icons */}
                <div className="hidden lg:flex items-center gap-[12px] text-slate-600">
                    <HeartIcon />
                    <ProfileIcon />
                    <CartIcon />
                </div>

                {/* Mobile Menu Button */}
                <div className="flex lg:hidden items-center">
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="p-2 text-slate-600 focus:outline-none"
                    >
                        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Side Drawer */}
            <AnimatePresence>
                {isMenuOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsMenuOpen(false)}
                            className="fixed inset-0 bg-black/50 z-[90] lg:hidden"
                        />

                        {/* Drawer */}
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 h-full w-[80%] max-w-[350px] bg-white z-[100] shadow-2xl lg:hidden flex flex-col"
                        >
                            <div className="flex items-center justify-between p-6 border-b border-slate-100">
                                <img src={logo} alt="logo" className="h-8" />
                                <button
                                    onClick={() => setIsMenuOpen(false)}
                                    className="p-2 text-slate-600"
                                >
                                    <X size={28} />
                                </button>
                            </div>

                            <div className="flex flex-col p-6 gap-6">
                                {navItems.map((item) => (
                                    <a
                                        key={item.label}
                                        href={item.href}
                                        onClick={() => setIsMenuOpen(false)}
                                        className={cn(
                                            "text-lg font-medium tracking-wide transition-colors",
                                            item.active
                                                ? "text-[#F97316]"
                                                : "text-slate-600"
                                        )}
                                    >
                                        {item.label}
                                    </a>
                                ))}
                            </div>

                            <div className="mt-auto p-6 border-t border-slate-100 flex items-center justify-around text-slate-600">
                                <div className="flex flex-col items-center gap-1">
                                    <ProfileIcon />
                                    <span className="text-xs">Profile</span>
                                </div>
                                <div className="flex flex-col items-center gap-1">
                                    <HeartIcon />
                                    <span className="text-xs">Wishlist</span>
                                </div>
                                <div className="flex flex-col items-center gap-1">
                                    <CartIcon />
                                    <span className="text-xs">Cart</span>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </nav>
    );
};
