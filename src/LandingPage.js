import React from 'react';
import Logo from './logo.png';
import { useNavigate } from 'react-router-dom';

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Header with logo and name */}
      <header className="sticky top-0 bg-white shadow z-50">
        <nav className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img src={Logo} alt="Logo" className="w-10 h-10" />
            <span className="text-xl font-bold text-indigo-700">Ediga Technology Solutions</span>
          </div>
        </nav>
      </header>

      {/* Mission Statement */}
      <section className="text-center py-16 px-4 bg-indigo-50">
        <h1 className="text-3xl font-semibold mb-4 text-indigo-800">Mission Statement</h1>
        <p className="max-w-3xl mx-auto text-lg text-gray-700">
          At Ediga Technology Solutions, our mission is to empower individuals and teams to thrive in the tech industry.
          We offer personalized training and mentorship for aspiring developers, recruiting and hiring support for
          companies seeking top talent, and freelance consulting to deliver high-impact software solutions.
        </p>
      </section>

      {/* Core Services */}
      <section className="text-center py-16 px-4">
        <h2 className="text-3xl font-semibold text-indigo-700 mb-10">Core Services</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Coaching */}
          <div
            onClick={() => navigate('/training')}
            className="cursor-pointer border-t-4 border-indigo-600 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
          >
            <h3 className="text-xl font-bold mb-2 text-indigo-700">Developer Coaching & Training</h3>
            <p className="text-gray-700">
              Hands-on mentorship in .NET, cloud, and clean architecture. Ideal for junior to mid-level developers.
            </p>
          </div>

          {/* Recruiter */}
          <div
            onClick={() => navigate('/recruiters')}
            className="cursor-pointer border-t-4 border-rose-600 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
          >
            <h3 className="text-xl font-bold mb-2 text-rose-700">Recruiter & Hiring Solutions</h3>
            <p className="text-gray-700">
              Find vetted, interview-ready developers for your roles. Technical screening and onboarding support included.
            </p>
          </div>

          {/* Freelance */}
          <div
            onClick={() => navigate('/freelancing')}
            className="cursor-pointer border-t-4 border-indigo-400 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
          >
            <h3 className="text-xl font-bold mb-2 text-indigo-600">Freelance Services</h3>
            <p className="text-gray-700">
              Hire us for .NET modernization, cloud projects, and automation expertise — on your terms.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
