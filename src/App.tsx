import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      <main className="flex-grow pt-32">
        {/* Page content will go here */}
      </main>

      <Footer />
    </div>
  );
}

export default App;
