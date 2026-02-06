import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import LabCertifications from './components/sections/LabCertifications';
import GemstonesForPurpose from './components/sections/GemstonesForPurpose';
import ReturnPolicy from './components/sections/ReturnPolicy';
import Journey from './components/sections/Journey';

function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      <main className="flex-grow pt-32">
        <LabCertifications />
        <GemstonesForPurpose />
        <ReturnPolicy />
        <Journey />
      </main>

      <Footer />
    </div>
  );
}

export default App;
