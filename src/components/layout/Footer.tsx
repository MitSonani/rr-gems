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
        <footer className="w-full bg-[#FCE1DC] pt-8 rounded-[30px] mx-auto mb-4 max-w-[calc(100%-4rem)]  flex flex-col justify-between overflow-hidden">
            <div className='max-w-7xl mx-auto w-full h-full pt-8 pb-10 px-4'>
                <div className=" grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24 ">
                    <div className="space-y-6">
                        <div className="bg-white p-4 rounded-xl inline-block shadow-sm flex items-center justify-center">
                            <img src={logo} alt="RR Gems & Jewels" />
                        </div>
                        <p className="text-[#4A4A4A] text-xl font-medium leading-relaxed max-w-xs">
                            Find your gemstone that truly connects with your zodiac sign.
                        </p>

                    </div>

                    <div className="space-y-8">
                        <h3 className="text-2xl font-bold text-[#1A1A1A] font-very-vouge-display">Quick Links</h3>
                        <div className="space-y-4">
                            <a href="/" className="block mb-[10px] text-[#4A4A4A] hover:text-[#FF8936] transition-colors">Home</a>
                            <a href="/about" className="block mb-[10px] text-[#4A4A4A] hover:text-[#FF8936] transition-colors">About Us</a>
                            <a href="/shipping" className="block mb-[10px] text-[#4A4A4A] hover:text-[#FF8936] transition-colors">Shipping & Returns</a>
                            <a href="/privacy" className="block text-[#4A4A4A] hover:text-[#FF8936] transition-colors">Privacy & Policy</a>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <h3 className="text-2xl font-bold text-[#1A1A1A]">Contact Details</h3>
                        <div className="space-y-2.5">
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0">
                                    <CallIcon />
                                </div>
                                <div className="text-[#4A4A4A] mt-2">+91-9057021038</div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="flex-shrink-0">
                                    <MapPinIcon />
                                </div>
                                <div className="text-[#4A4A4A]">120, near जैन मंदिर, Moti Chohatta, Jatwari, Bohrwadi, Udaipur, Rajasthan 313001</div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0">
                                    <MailIcon />
                                </div>
                                <div className="text-[#4A4A4A] mt-2">rrgemsandjewels@gmail.com</div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='flex gap-6 items-center'>
                    <FacebookIcon />
                    <TwitterIcon />
                    <InstaIcon />
                    <LinkdinIcon />
                </div>
            </div>


            <div className="w-full border-t border-[#000000]">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-[#000000]">
                    <p className="flex items-center gap-1 font-medium m-0">
                        Design with <span className="text-red-500 mx-1">❤</span> by <a href="#" className="border-b border-[#1A1A1A] hover:text-[#FF8936] hover:border-[#FF8936] transition-all">Mohit Asnani</a>
                    </p>
                    <p className="font-medium m-0">
                        © 2025 All rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};
