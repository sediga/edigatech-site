import React from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from './logo.png';
import CalendlyButton from './components/CalendlyButton';

export default function ConsultingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Header */}
      <header className="sticky top-0 bg-white shadow z-50">
        <nav className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => navigate("/")}>
            <img src={Logo} alt="Logo" className="w-10 h-10" />
            <span className="text-xl font-bold text-indigo-700">Ediga Technology Solutions</span>
          </div>
          <div className="space-x-4 text-sm font-medium text-indigo-700">
            <button onClick={() => navigate('/')} className="hover:underline">Back</button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6 bg-indigo-50 text-center">
        <h1 className="text-4xl font-bold text-indigo-800 mb-4">Consulting for Healthcare Startups</h1>
        <p className="text-lg max-w-3xl mx-auto text-gray-700">
          We help healthcare teams modernize legacy systems, automate workflows, and launch production-grade solutions — fast and founder-friendly.
        </p>
      </section>

      {/* Service Areas */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-indigo-700 mb-10 text-center">Where We Can Help</h2>
        <div className="grid md:grid-cols-3 gap-8 text-left">
          <div className="bg-white border-l-4 border-indigo-600 p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold mb-2 text-indigo-700">Custom Bot Development</h3>
            <p className="text-gray-700">
              Need tailored flows on top of Flowtra? We design and build custom smart bots for credentialing, onboarding, and back-office automation.
            </p>
          </div>

          <div className="bg-white border-l-4 border-rose-500 p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold mb-2 text-rose-700">.NET & Cloud Modernization</h3>
            <p className="text-gray-700">
              Upgrade legacy platforms to clean, testable APIs. We bring deep .NET, Azure, and AWS expertise with a focus on healthcare security.
            </p>
          </div>

          <div className="bg-white border-l-4 border-indigo-400 p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold mb-2 text-indigo-600">Workflow Design & Integration</h3>
            <p className="text-gray-700">
              From EHR integrations to staff onboarding flows — we analyze your manual processes and deliver high-leverage automation blueprints.
            </p>
          </div>
        </div>
      </section>

      {/* Why Us */}
<section className="bg-gray-50 py-20 px-6 text-center">
  <h2 className="text-3xl font-semibold text-indigo-700 mb-12">Why Work With Us</h2>
  <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto text-left">
    <div>
      <h3 className="text-lg font-bold text-indigo-800 mb-2">Deep Tech Experience</h3>
      <p className="text-gray-700">
        24+ years in software delivery across industries. We've seen every legacy mess and lived to rewrite it.
      </p>
    </div>
    <div>
      <h3 className="text-lg font-bold text-indigo-800 mb-2">Small Team Speed</h3>
      <p className="text-gray-700">
        You're not just another ticket. You’ll work directly with the person building your solution — fast, transparent, and effective.
      </p>
    </div>
    <div>
      <h3 className="text-lg font-bold text-indigo-800 mb-2">Automation-First Thinking</h3>
      <p className="text-gray-700">
        We don't just write code — we streamline, automate, and optimize. Every project is shaped with efficiency in mind.
      </p>
    </div>
  </div>
</section>


      {/* CTA */}
<section className="bg-white py-20 px-6 text-center">
  <h2 className="text-2xl font-semibold text-indigo-800 mb-4">
    Let's Build Something Great Together
  </h2>
  <p className="text-gray-700 text-lg mb-6 max-w-2xl mx-auto">
    Whether you're scaling a product, modernizing old systems, or exploring automation — we’re ready to jump in and help. Start with a free discovery call.
  </p>
              <CalendlyButton />
</section>


      {/* Footer */}
      <footer className="bg-blue-600 text-white py-6 text-center">
        <p>&copy; {new Date().getFullYear()} Ediga Technology Solutions LLC. All rights reserved.</p>
      </footer>
    </div>
  );
}
