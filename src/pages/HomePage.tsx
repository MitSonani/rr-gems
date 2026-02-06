import React from 'react';
import LabCertifications from '../components/sections/LabCertifications';
import GemstonesForPurpose from '../components/sections/GemstonesForPurpose';
import ReturnPolicy from '../components/sections/ReturnPolicy';
import Journey from '../components/sections/Journey';
import FestivalCollection from '../components/sections/FestivalCollection';
import ExclusiveCollection from '../components/sections/ExclusiveCollection';
import Testimonials from '../components/sections/Testimonials';
import Hero from '../components/sections/Hero';

export const HomePage: React.FC = () => {
    return (
        <>
            <Hero />
            <LabCertifications />
            <Journey />
            <ReturnPolicy />
            <GemstonesForPurpose />
            <FestivalCollection />
            <ExclusiveCollection />
            <Testimonials />
        </>
    );
};
