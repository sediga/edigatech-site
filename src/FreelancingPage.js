import { Link } from 'react-router-dom';
import Logo from './logo.png'; 
export default function FreelancingPage() {
  return (
    <>
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-purple-100 text-gray-800">
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

    <main className="max-w-6xl mx-auto p-6 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
            <Link
            to="/"
            className="text-sm text-indigo-600 hover:text-indigo-800 transition font-medium"
            >
            ← Back to Home
            </Link>
        </div>
        <h1 className="text-4xl font-bold text-orange-700 mb-6">Freelancing Services</h1>
        <p className="text-gray-700 mb-4">
          At EdigaTech, we offer freelance development services focused on .NET modernization, cloud-native applications,
          API development, and automation. Whether you're a startup or an enterprise, we bring 24+ years of experience
          across healthcare, insurance, logistics, and finance to help you scale with confidence.
        </p>
        <h2 className="text-2xl font-semibold text-orange-600 mt-6 mb-2">What We Offer:</h2>
        <ul className="list-disc list-inside text-gray-800 space-y-2">
          <li>Legacy system modernization (VB/.NET to Core)</li>
          <li>Cloud migration (AWS & Azure)</li>
          <li>Microservices & API-first development</li>
          <li>CI/CD automation & DevOps consulting</li>
          <li>Performance tuning & system re-architecture</li>
        </ul>
        <p className="mt-6 text-gray-700">
          We're flexible with short-term gigs, long-term contracts, or hourly consulting. Let’s build something great—together.
        </p>

        <a
          href="/#contact"
          className="inline-block mt-8 px-5 py-2 bg-orange-600 text-white font-semibold rounded hover:bg-orange-700"
        >
          Contact for Freelance Work
        </a>
      </div>
    </main>
    </div>
    </>
  );
}
