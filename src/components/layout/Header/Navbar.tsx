import React from 'react';
import { cn } from '../../../utils/cn';
import logo from '../../../assets/logo.svg'
import ProfileIcon from '../../../assets/common/profileIcon';
import CartIcon from '../../../assets/common/cartIcon';
import HeartIcon from '../../../assets/common/heartIcon';

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
    return (
        <nav className="bg-white border-b border-slate-100 px-[100px] py-[15px]">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <div className='flex items-center gap-[24px]'>
                    <img src={logo} alt="logo" />
                </div>

                <div className=" flex sm:hidden items-center gap-[24px]">
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

                <div className="flex items-center gap-[12px] text-slate-600">
                    <HeartIcon />
                    <ProfileIcon />
                    <CartIcon />
                </div>
            </div>
        </nav>
    );
};
