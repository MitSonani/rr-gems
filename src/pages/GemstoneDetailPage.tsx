import ExpertGuidance from "../components/sections/ExpertGuidance/ExpertGuidance";
import Breadcrumb from "../components/sections/GemstoneDetailPage/Breadcrumb";
import HeroSection from "../components/sections/GemstoneDetailPage/HeroSection";
import TabsSection from "../components/sections/GemstoneDetailPage/TabsSection";
import { motion } from 'framer-motion';
import Testimonials from "../components/sections/Testimonials";
import Faqs from "../components/sections/Faqs";

export default function GemstoneDetailPage() {
    return (
        <div className="bg-[#FAFAFA] min-h-screen pt-[90px] lg:pt-[82px]">
            <Breadcrumb />
            <HeroSection />
            <TabsSection />
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1.0], delay: 0.15 }}
            >
                <ExpertGuidance />
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1.0], delay: 0.15 }}
            >
                <Testimonials />
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1.0], delay: 0.15 }}
            >
                <Faqs />
            </motion.div>
        </div>
    );
}
