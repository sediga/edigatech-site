import { Link } from 'react-router-dom';
import Logo from './logo.png';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-purple-100 flex flex-col items-center justify-center px-4 py-8">
      {/* Header with Logo and Company Name */}
      <header className="flex flex-col items-center mb-8">
        <img src={Logo} alt="EdigaTech Logo" className="w-16 h-16 mb-2" />
        <h1 className="text-3xl md:text-4xl font-extrabold text-indigo-700">Ediga Technology Solutions</h1>
        <p className="text-center text-gray-600 mt-2 max-w-xl">
          Empowering individuals through personalized coaching, mock interviews, and job placements — we grow when you succeed.
        </p>
      </header>

      {/* Tiles */}
      <div className="grid md:grid-cols-3 gap-8 w-full max-w-6xl mt-6">
        <Link to="/training" className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl border-l-8 border-indigo-400 transition-all">
          <h2 className="text-xl font-semibold text-indigo-700 mb-2">Developer Coaching & Training</h2>
          <p className="text-gray-700">
            Hands-on mentorship in .NET, cloud, and clean architecture. Ideal for junior to mid-level developers.
          </p>
        </Link>
        <Link to="/recruiters" className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl border-l-8 border-pink-400 transition-all">
          <h2 className="text-xl font-semibold text-pink-700 mb-2">Recruiter & Hiring Solutions</h2>
          <p className="text-gray-700">
            Find vetted, interview-ready developers for your roles. Technical screening and onboarding support included.
          </p>
        </Link>
        <Link to="/freelancing" className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl border-l-8 border-yellow-400 transition-all">
          <h2 className="text-xl font-semibold text-yellow-700 mb-2">Freelance Services</h2>
          <p className="text-gray-700">
            Hire us for .NET modernization, cloud projects, and automation expertise—on your terms.
          </p>
        </Link>
      </div>
    </div>
  );
}
