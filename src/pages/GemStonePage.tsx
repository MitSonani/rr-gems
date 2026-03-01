import { motion } from 'framer-motion';
import { AboutGemStone } from '../components/sections/GemStonePage/AboutGemStone';
import GemStoneFilter from '../components/sections/GemStonePage/GemStoneFilter/GemStoneFilter';
import GemStoneHeroSection from '../components/sections/GemStonePage/HeroSection';
import GemStoneCollections from '../components/sections/GemStonePage/GemStoneCollections/GemStoneCollections';
import Testimonials from '../components/sections/Testimonials';
import ExpertGuidance from '../components/sections/ExpertGuidance/ExpertGuidance';

export default function GemStonePage() {
  return (
    <>
      <GemStoneHeroSection />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1.0] }}
      >
        <AboutGemStone />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1.0], delay: 0.15 }}
      >
        <GemStoneFilter />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1.0], delay: 0.15 }}
      >
        <GemStoneCollections />
      </motion.div>
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
    </>
  );
}
