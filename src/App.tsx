import { Button } from './components/ui';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4 space-y-8">
      <header className="text-center space-y-4">
        <h1 className="text-5xl font-extrabold text-slate-900 tracking-tight">
          Production <span className="text-primary-600">React</span> Boilerplate
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Built with Vite, Tailwind CSS, TypeScript, and a scalable, feature-based architecture.
          Ready for your next big idea.
        </p>
      </header>

      <main className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
        <section className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex flex-col justify-between">
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900">UI Components</h2>
            <p className="text-slate-600">
              Check out the production-grade Button component with multiple variants and sizes.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
            </div>
          </div>
        </section>

        <section className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex flex-col justify-between">
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900">Scalable Structure</h2>
            <p className="text-slate-600">
              Folder structure designed for production, separating concerns by features and domains.
            </p>
            <ul className="text-sm text-slate-500 list-disc list-inside space-y-1">
              <li>Atomic UI Components</li>
              <li>Feature-based Modules</li>
              <li>Custom Hooks & Utilities</li>
              <li>Centralized State & Routing</li>
            </ul>
          </div>
        </section>
      </main>

      <footer className="text-slate-400 text-sm">
        <p>© 2024 Antigravity Pro. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
