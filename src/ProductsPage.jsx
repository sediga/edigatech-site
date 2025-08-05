import React from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from './logo.png';

export default function ProductsPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Header */}
      <header className="sticky top-0 bg-white shadow z-50">
        <nav className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
          {/* Logo and name - clickable */}
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => navigate("/")}>
            <img src={Logo} alt="Logo" className="w-10 h-10" />
            <span className="text-xl font-bold text-indigo-700">Ediga Technology Solutions</span>
          </div>

          {/* Top-right link */}
          <div className="space-x-4 text-sm font-medium text-indigo-700">
            <button
              onClick={() => navigate('/')}
              className="hover:underline transition"
            >
              Back
            </button>
          </div>
        </nav>
      </header>

      {/* Product Overview */}
      <section className="py-20 px-6 bg-indigo-50 text-center">
        <h1 className="text-4xl font-bold text-indigo-800 mb-4">Flowtra Automation Platform</h1>
        <p className="text-lg max-w-3xl mx-auto text-gray-700">
          Flowtra is a lightweight automation tool designed to help back-office teams reduce repetitive browser tasks.
          From credentialing steps to bulk form actions, Flowtra helps you record and replay flows — without deep technical setup.
          We're actively evolving the platform based on real-world feedback.
        </p>
      </section>

      {/* Features */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-indigo-700 mb-10 text-center">Early Use Cases We're Exploring</h2>
        <div className="grid md:grid-cols-3 gap-8 text-left">
          <div className="bg-white border-l-4 border-indigo-600 p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold mb-2 text-indigo-700">Visual Workflow Builder</h3>
            <p className="text-gray-700">
              Build automation flows by simply recording your clicks and inputs. Add smart steps like loops and filters to handle
              variations — no scripting required.
            </p>
          </div>
          <div className="bg-white border-l-4 border-rose-500 p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold mb-2 text-rose-700">Flexible Data Mapping</h3>
            <p className="text-gray-700">
              Use your own datasets to drive flows — mapping values into fields, lists, or steps dynamically. Ideal for scaling
              repetitive browser work across many cases.
            </p>
          </div>
          <div className="bg-white border-l-4 border-indigo-400 p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold mb-2 text-indigo-600">Built for the Future</h3>
            <p className="text-gray-700">
              We’re building toward AI-guided flows — where you can describe what you want and Flowtra assembles it. Until then,
              our intuitive builder gives you full control.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-6 bg-gray-50 text-center">
        <h2 className="text-3xl font-semibold text-indigo-700 mb-8">How Flowtra Works</h2>
        <p className="max-w-3xl mx-auto text-lg text-gray-700 mb-8">
          Flowtra includes a browser agent that records your interactions and turns them into replayable steps.
          You can test flows, edit them in a visual dashboard, and run them on demand or on a schedule.
          We're adding new features weekly and welcome pilot users.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-4">
<button onClick={() => window.open('https://flowtra.app', '_blank')} className="bg-indigo-600 text-white px-6 py-3 rounded hover:bg-indigo-700">
            Try the Beta
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-600 text-white py-6 text-center">
        <p>&copy; {new Date().getFullYear()} Ediga Technology Solutions LLC. All rights reserved.</p>
      </footer>
    </div>
  );
}
