import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import LabCertifications from './components/sections/LabCertifications';

function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      <main className="flex-grow pt-32">
        <LabCertifications />
      </main>

      <Footer />
    </div>
  );
}

export default App;
