import Logo from './logo.png';
import ContactForm from './components/ContactForm';
import { Link } from 'react-router-dom';

export default function RecruiterPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-purple-100 text-gray-800">
      {/* Header */}
      <header className="sticky top-0 bg-white shadow z-50">
        <nav className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
          {/* Logo + Site Name */}
          <div className="flex items-center space-x-2">
            <img src={Logo} alt="Logo" className="w-10 h-10" />
            <span className="text-xl font-bold text-indigo-700">
              Ediga Technology Solutions
            </span>
          </div>
          {/* Back to Home */}
          <Link
            to="/"
            className="text-sm text-indigo-600 hover:text-indigo-800 transition font-medium"
          >
            ← Back to Home
          </Link>
        </nav>
      </header>

      <main className="max-w-6xl mx-auto p-6 min-h-screen">
        {/* Headline & Value Prop */}
        <section className="text-center py-10">
          <h1 className="text-3xl font-semibold text-indigo-700 mb-4">
            Hire proven developers, faster
          </h1>
          <p className="text-gray-700 max-w-3xl mx-auto">
            We connect you with vetted, job-ready developers trained by industry experts — no upfront cost.
          </p>
        </section>

        {/* How It Works */}
        <section className="py-12">
          <h2 className="text-3xl font-semibold text-indigo-700 mb-8 text-center">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow border-l-4 border-indigo-500">
              <h3 className="text-xl font-bold text-indigo-700 mb-2">1. Tell Us What You Need</h3>
              <p className="text-gray-700">
                Share your role requirements. We’ll match candidates with the right technical and domain skills.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow border-l-4 border-indigo-500">
              <h3 className="text-xl font-bold text-indigo-700 mb-2">2. Get Screened Talent</h3>
              <p className="text-gray-700">
                Candidates are coached, interviewed, and screened for technical and behavioral fit before they reach you.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow border-l-4 border-indigo-500">
              <h3 className="text-xl font-bold text-indigo-700 mb-2">3. Hire with Confidence</h3>
              <p className="text-gray-700">
                Only pay when you hire. We succeed when you find the right fit — it’s that simple.
              </p>
            </div>
          </div>
        </section>

        {/* Why EdigaTech */}
        <section className="py-12">
          <h2 className="text-3xl font-semibold text-indigo-700 text-center mb-8">
            Why EdigaTech?
          </h2>
          <ul className="grid md:grid-cols-2 gap-6 text-base text-gray-700">
            <li className="bg-white p-5 rounded-2xl shadow border-l-4 border-indigo-500">
              Developers trained in .NET, APIs, AWS, Azure, and modern cloud-native practices.
            </li>
            <li className="bg-white p-5 rounded-2xl shadow border-l-4 border-indigo-500">
              No-cost screening, mock interviews, and technical evaluations.
            </li>
            <li className="bg-white p-5 rounded-2xl shadow border-l-4 border-indigo-500">
              Candidates with experience in healthcare, logistics, and finance domains.
            </li>
            <li className="bg-white p-5 rounded-2xl shadow border-l-4 border-indigo-500">
              Pay only upon successful placement — no risk, no upfront fees.
            </li>
          </ul>
        </section>

        {/* Call to Action */}
        <section className="text-center py-12">
          <h2 className="text-3xl font-semibold text-indigo-700 mb-4">Need developers now?</h2>
          <p className="text-gray-700 mb-6">
            Let’s talk. We’ll introduce you to candidates ready to deliver from day one.
          </p>
          <a
            href="#contact"
            className="inline-block px-6 py-3 bg-indigo-600 text-white text-lg font-semibold rounded hover:bg-indigo-700 transition"
          >
            Request Talent
          </a>
        </section>

        {/* Contact Form */}
        <section id="contact" className="py-12">
          <h2 className="text-3xl font-semibold mb-8 text-indigo-700 text-center">Contact Us</h2>
          <div className="bg-indigo-50 rounded-2xl p-6 shadow-md border border-indigo-200 mx-auto max-w-3xl">
            <p className="text-gray-700 mb-4">
              Have questions? Reach out via email or connect with us on LinkedIn.
            </p>
            <ContactForm />
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center py-6 text-sm text-gray-600 mt-10">
          &copy; {new Date().getFullYear()} Ediga Technology Solutions LLC. All rights reserved.
        </footer>
      </main>
    </div>
  );
}
