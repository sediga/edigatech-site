import Logo from './logo.png';
import ContactForm from './components/ContactForm';
import { Link } from 'react-router-dom';

export default function RecruiterPage() {
  return (
    <>
      {/* header */}
      <header className="sticky top-0 bg-white shadow z-50">
        <nav className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img src={Logo} alt="Logo" className="w-10 h-10" />
            <span className="text-xl font-bold text-indigo-700">Ediga Technology Solutions</span>
          </div>
          </nav>
      </header>

      {/* header */}

    <main className="max-w-6xl mx-auto p-6 bg-gradient-to-br from-white via-blue-50 to-purple-100 min-h-screen">

      {/* Back Link */}
      <div className="mb-6">
        <Link
          to="/"
          className="text-sm text-indigo-600 hover:text-indigo-800 transition font-medium"
        >
          ← Back to Home
        </Link>
      </div>

      {/* Headline & Value Prop */}
      <section className="text-center py-10">
        <h1 className="text-5xl font-extrabold text-indigo-800 mb-4">Hire Proven Developers, Faster.</h1>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
          We connect you with vetted, job-ready developers trained by industry experts — no upfront cost.
        </p>
      </section>

      {/* How It Works */}
      <section className="py-12">
        <h2 className="text-3xl font-semibold text-purple-700 mb-8 text-center">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-indigo-400">
            <h3 className="text-xl font-bold text-indigo-700 mb-2">1. Tell Us What You Need</h3>
            <p className="text-gray-600">Share your role requirements. We’ll match candidates with the right technical and domain skills.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-blue-400">
            <h3 className="text-xl font-bold text-blue-700 mb-2">2. Get Screened Talent</h3>
            <p className="text-gray-600">Candidates are coached, interviewed, and screened for technical and behavioral fit before they reach you.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-purple-400">
            <h3 className="text-xl font-bold text-purple-700 mb-2">3. Hire with Confidence</h3>
            <p className="text-gray-600">Only pay when you hire. We succeed when you find the right fit — it’s that simple.</p>
          </div>
        </div>
      </section>

      {/* Why EdigaTech */}
      <section className="py-12">
        <h2 className="text-3xl font-semibold text-indigo-700 text-center mb-8">Why EdigaTech?</h2>
        <ul className="grid md:grid-cols-2 gap-6 text-lg text-gray-700">
          <li className="bg-white p-5 rounded-xl shadow border-l-4 border-green-400">
            ✅ Developers trained in .NET, APIs, AWS, Azure, and modern cloud-native practices.
          </li>
          <li className="bg-white p-5 rounded-xl shadow border-l-4 border-yellow-400">
            ✅ No-cost screening, mock interviews, and technical evaluations.
          </li>
          <li className="bg-white p-5 rounded-xl shadow border-l-4 border-pink-400">
            ✅ Candidates with experience in healthcare, logistics, and finance domains.
          </li>
          <li className="bg-white p-5 rounded-xl shadow border-l-4 border-blue-400">
            ✅ Pay only upon successful placement — no risk, no upfront fees.
          </li>
        </ul>
      </section>

      {/* Call to Action */}
      <section className="text-center py-12">
        <h2 className="text-3xl font-bold text-indigo-800 mb-4">Need Developers Now?</h2>
        <p className="text-gray-700 mb-6">Let’s talk. We’ll introduce you to candidates ready to deliver from day one.</p>
        <a
          href="#contact"
          className="inline-block px-6 py-3 bg-indigo-600 text-white text-lg font-semibold rounded hover:bg-indigo-700 transition"
        >
          Request Talent
        </a>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-sm text-gray-600 mt-10">
        &copy; {new Date().getFullYear()} Ediga Technology Solutions LLC. All rights reserved.
      </footer>
    </main>
    </>
  );
}
