import React from 'react';
import logo from '../../assets/logo.svg';
import CallIcon from '../../assets/common/callIcon';
import MapPinIcon from '../../assets/common/maoPinIcon';
import MailIcon from '../../assets/common/mailIcon';
import InstaIcon from '../../assets/common/instaIcon';
import LinkdinIcon from '../../assets/common/linkdinIcon';
import FacebookIcon from '../../assets/common/facebookIcon';
import TwitterIcon from '../../assets/common/twitterIcon';

export const Footer: React.FC = () => {
    return (
        <footer className="w-full bg-[#FCE1DC] pt-6 md:pt-8 rounded-t-[30px] md:rounded-[30px] mx-auto mb-0 md:mb-4 max-w-full md:max-w-[calc(100%-4rem)] flex flex-col justify-between overflow-hidden">
            <div className='max-w-7xl mx-auto w-full h-full pt-4 md:pt-8 pb-6 md:pb-10 px-6'>
                <div className="flex flex-col md:grid md:grid-cols-3 gap-8 md:gap-12 lg:gap-24">
                    <div className="space-y-3 md:space-y-6 flex flex-col items-center md:items-start text-center md:text-left">
                        <img src={logo} alt="RR Gems & Jewels" className="h-8 md:h-auto" />
                        <p className="text-[#4A4A4A] text-xs md:text-xl font-medium leading-relaxed max-w-[200px] md:max-w-xs">
                            Find your gemstone that truly connects with your zodiac sign.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 md:contents">

                        <div className="space-y-4 md:space-y-8 flex flex-col items-start text-left">
                            <h3 className="text-sm md:text-2xl font-bold text-[#1A1A1A] font-very-vouge-display">Quick Links</h3>
                            <div className="flex flex-col gap-2 md:space-y-4">
                                <a href="/" className="text-[#4A4A4A] text-xs md:text-base hover:text-[#FF8936] transition-colors">Home</a>
                                <a href="/about" className="text-[#4A4A4A] text-xs md:text-base hover:text-[#FF8936] transition-colors">About Us</a>
                                <a href="/shipping" className="text-[#4A4A4A] text-xs md:text-base hover:text-[#FF8936] transition-colors">Shipping</a>
                                <a href="/privacy" className="text-[#4A4A4A] text-xs md:text-base hover:text-[#FF8936] transition-colors">Privacy</a>
                            </div>
                        </div>

                        <div className="space-y-4 md:space-y-8 flex flex-col items-start text-left">
                            <h3 className="text-sm md:text-2xl font-bold text-[#1A1A1A]">Contact</h3>
                            <div className="space-y-3 md:space-y-4">
                                <div className="flex flex-row items-center gap-2 md:gap-4">
                                    <div className="scale-75 md:scale-100 opacity-70">
                                        <CallIcon />
                                    </div>
                                    <div className="text-[#4A4A4A] text-xs md:text-base">+91-9057021038</div>
                                </div>
                                <div className="flex flex-row items-center gap-2 md:gap-4">
                                    <div className="scale-75 md:scale-100 opacity-70">
                                        <MapPinIcon />
                                    </div>
                                    <div className="text-[#4A4A4A] text-xs md:text-base">120, near जैन मंदिर, Moti Chohatta, Jatwari, Bohrwadi, Udaipur, Rajasthan 313001</div>
                                </div>
                                <div className="flex flex-row items-center gap-2 md:gap-4">
                                    <div className="scale-75 md:scale-100 opacity-70">
                                        <MailIcon />
                                    </div>
                                    <div className="text-[#4A4A4A] text-xs md:text-base truncate max-w-[120px] md:max-w-none">rrgemsandjewels@gmail.com</div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='flex gap-4 md:gap-6 items-center justify-center md:justify-start mt-4 md:mt-0 opacity-80 scale-90 md:scale-100'>
                    <FacebookIcon />
                    <TwitterIcon />
                    <InstaIcon />
                    <LinkdinIcon />
                </div>
            </div>


            <div className="w-full border-t border-black/10">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-4 md:py-6 flex justify-center items-center gap-2 md:gap-4 text-[#4A4A4A]">

                    <p className="font-medium m-0 text-[10px] md:text-base">
                        © 2025 All rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};
