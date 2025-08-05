import React from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from './logo.png';
import ContactForm from './components/ContactForm';

export default function RecruitersPage() {
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
            <button
              onClick={() => navigate('/')}
              className="hover:underline transition"
            >
              Back
            </button>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="py-20 px-6 bg-indigo-50 text-center">
        <h1 className="text-4xl font-bold text-indigo-800 mb-4">Technical Hiring & Screening for Startups</h1>
        <p className="text-lg max-w-3xl mx-auto text-gray-700">
          Need reliable developers but tired of long interviews and bad hires? We help you screen, shortlist, and onboard faster — with deep technical reviews and zero fluff.
        </p>
      </section>

      {/* Highlights */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-indigo-700 mb-10 text-center">What We Offer</h2>
        <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="bg-white border-l-4 border-indigo-600 p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold mb-2 text-indigo-700">Tailored Role Understanding</h3>
            <p className="text-gray-700">
                We don’t just screen — we help clarify what kind of engineer you actually need. From tech stack to problem context, we translate your goals into focused evaluations that surface the right talent.
            </p>
            </div>

          <div className="bg-white border-l-4 border-rose-500 p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold mb-2 text-rose-700">Hands-on Evaluations</h3>
            <p className="text-gray-700">
              Candidates are tested on real-world problem solving, architecture thinking, and practical coding decisions — the stuff that actually matters on the job.
            </p>
          </div>
          <div className="bg-white border-l-4 border-indigo-400 p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold mb-2 text-indigo-600">Startup-Friendly Support</h3>
            <p className="text-gray-700">
              Whether you're hiring your first engineer or scaling fast, we make hiring faster and smarter — without bloated fees or layers.
            </p>
          </div>
        </div>
      </section>

      {/* Why Ediga */}
      <section className="py-16 px-6 bg-gray-50 text-center">
        <h2 className="text-3xl font-semibold text-indigo-700 mb-10">Why Choose Us</h2>
        <div className="grid md:grid-cols-3 gap-8 text-left max-w-6xl mx-auto">
          <div>
            <h4 className="text-lg font-semibold text-indigo-700 mb-2">Deep Technical Background</h4>
            <p className="text-gray-700">
              We’ve led teams, built products, and scaled codebases. We assess candidates based on how they think — not just how they code.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-indigo-700 mb-2">Fast Turnaround</h4>
            <p className="text-gray-700">
              We deliver feedback and recommendations within days — so you don’t lose great talent to delays or indecision.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-indigo-700 mb-2">Flexible Engagement</h4>
            <p className="text-gray-700">
              Need just the interviews? Done. Want help from screening to onboarding? We’ve got you covered, with no lock-ins.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold text-indigo-700 mb-4">Need Developer Help Now?</h2>
        <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
          Reach out to share your hiring needs — and get a technical partner who can help you find, vet, and grow your engineering team.
        </p>
        <div className="px-56 py-3 rounded">
          <ContactForm/>
          </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-600 text-white py-6 text-center">
        <p>&copy; {new Date().getFullYear()} Ediga Technology Solutions LLC. All rights reserved.</p>
      </footer>
    </div>
  );
}
