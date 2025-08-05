import React from 'react';
import Logo from './logo.png';
import { useNavigate } from 'react-router-dom';

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Header */}
      <header className="sticky top-0 bg-white shadow z-50">
        <nav className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img src={Logo} alt="Logo" className="w-10 h-10" />
            <span className="text-xl font-bold text-indigo-700">Ediga Technology Solutions</span>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="text-center py-20 px-4 bg-indigo-50">
        <h1 className="text-4xl font-bold text-indigo-800 mb-4">
          Tech & Automation for Healthcare Startups
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          We help healthcare startups automate workflows, modernize legacy systems, and scale confidently with tailored consulting and technical expertise.
        </p>
      </section>

      {/* Expanded Core Services */}
      <section className="text-center py-16 px-4">
        <h2 className="text-3xl font-semibold text-indigo-700 mb-10">What We Offer</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Flowtra Product */}
          <div
            onClick={() => navigate('/products')}
            className="cursor-pointer border-t-4 border-indigo-600 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-bold mb-2 text-indigo-700">Flowtra Automation Platform</h3>
              <p className="text-gray-700 mb-4">
                Flowtra is our no-code platform for building reliable browser automations — ideal for credentialing, RCM, data scraping, or any repetitive web task.
              </p>
              <p className="text-gray-700">
                Use it to eliminate manual data entry, reduce operational costs, and empower your non-technical staff with powerful automation.
              </p>
            </div>
            <button className="mt-6 text-blue-600 underline">Explore Flowtra &rarr;</button>
          </div>

          {/* Consulting Services */}
          <div
            onClick={() => navigate('/consulting')}
            className="cursor-pointer border-t-4 border-rose-600 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-bold mb-2 text-rose-700">Consulting Services</h3>
              <p className="text-gray-700 mb-4">
                We provide hands-on engineering leadership and implementation support for startups. Whether you’re modernizing a legacy .NET system or building HIPAA-compliant cloud automation, we can help.
              </p>
              <p className="text-gray-700">
                We also offer white-glove support for building custom Flowtra bots and flows tailored to your internal workflows.
              </p>
            </div>
            <button className="mt-6 text-blue-600 underline">View Consulting Services &rarr;</button>
          </div>

          {/* Technical Hiring */}
          <div
            onClick={() => navigate('/recruiters')}
            className="cursor-pointer border-t-4 border-indigo-400 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-bold mb-2 text-indigo-600">Technical Hiring & Screening</h3>
              <p className="text-gray-700 mb-4">
                We support hiring managers and recruiters by screening candidates for real-world tech readiness. Our vetting focuses on system design, automation, cloud, and healthcare-specific workflows.
              </p>
              <p className="text-gray-700">
                Whether you're hiring for a startup or scaling an engineering team, we help you save time and reduce hiring risks.
              </p>
            </div>
            <button className="mt-6 text-blue-600 underline">Recruit With Us &rarr;</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-600 text-white py-6 text-center">
        <p>&copy; {new Date().getFullYear()} Ediga Technology Solutions LLC. All rights reserved.</p>
        <p className="mt-1 text-sm">
          <a href="/privacy" className="underline">Privacy Policy</a>
        </p>
      </footer>
    </div>
  );
}