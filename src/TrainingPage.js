import Logo from './logo.png';
import CalendlyButton from './components/CalendlyButton';
import ContactForm from './components/ContactForm';
import { Link, useNavigate } from 'react-router-dom';

export default function TrainingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-purple-100 text-gray-800">
      {/* Header with Logo, Menu, and Back to Home (sticky) */}
      <header className="bg-white shadow sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo + Site Name */}
          <div
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => navigate('/')}
          >
            <img src={Logo} alt="Ediga Logo" className="w-10 h-10" />
            <span className="text-xl font-bold text-indigo-700">
              Ediga Technology Solutions
            </span>
          </div>

          {/* Menu */}
          <ul className="flex space-x-6 text-sm font-medium text-gray-700">
            <li>
              <a href="#services" className="hover:text-indigo-600">
                Services
              </a>
            </li>
            <li>
              <a href="#book" className="hover:text-indigo-600">
                Book Call
              </a>
            </li>
            <li>
              <a href="#resume" className="hover:text-indigo-600">
                Upload Resume
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-indigo-600">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Back to Home Link (right-aligned below menu) */}
        <div className="max-w-6xl mx-auto px-4 pb-3 flex justify-end">
          <Link
            to="/"
            className="text-sm text-indigo-600 hover:text-indigo-800 transition font-medium"
          >
            ← Back to Home
          </Link>
        </div>
      </header>

      {/* Core Service Cards (uniform indigo accents) */}
      <section
        id="services"
        className="py-10 scroll-mt-20 max-w-4xl mx-auto px-4"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Developer Coaching & Training Card */}
          <a
            href="#coaching"
            className="flex items-start bg-white rounded-2xl shadow 
                       border-l-4 border-t-4 border-indigo-500 p-6 hover:shadow-lg transition"
          >
            <img
              src="./coaching-icon.png"
              alt="Developer Coaching Icon"
              className="h-12 w-12 object-contain flex-shrink-0"
            />
            <div className="ml-4">
              <h3 className="text-lg font-bold text-indigo-700">
                Developer Coaching &amp; Training
              </h3>
              <p className="mt-1 text-gray-700">
                Hands-on mentorship in .NET, cloud, and clean architecture. Ideal for junior to
                mid-level developers.
              </p>
            </div>
          </a>

          {/* Mock Interviews Card */}
          <a
            href="#interviews"
            className="flex items-start bg-white rounded-2xl shadow 
                       border-l-4 border-t-4 border-indigo-500 p-6 hover:shadow-lg transition"
          >
            <img
              src="./mock-interview-icon.png"
              alt="Mock Interviews Icon"
              className="h-12 w-12 object-contain flex-shrink-0"
            />
            <div className="ml-4">
              <h3 className="text-lg font-bold text-indigo-700">Mock Interviews</h3>
              <p className="mt-1 text-gray-700">
                Simulated interviews, real feedback — now with no upfront cost.
              </p>
            </div>
          </a>

          {/* Resume & LinkedIn Help Card */}
          <a
            href="#resume-help"
            className="flex items-start bg-white rounded-2xl shadow 
                       border-l-4 border-t-4 border-indigo-500 p-6 hover:shadow-lg transition"
          >
            <img
              src="./resume-help-icon.png"
              alt="Resume & LinkedIn Help Icon"
              className="h-12 w-12 object-contain flex-shrink-0"
            />
            <div className="ml-4">
              <h3 className="text-lg font-bold text-indigo-700">
                Resume &amp; LinkedIn Help
              </h3>
              <p className="mt-1 text-gray-700">
                Optimize your job application assets and online presence.
              </p>
            </div>
          </a>

          {/* Job Placement Card */}
          <a
            href="#placement"
            className="flex items-start bg-white rounded-2xl shadow 
                       border-l-4 border-t-4 border-indigo-500 p-6 hover:shadow-lg transition"
          >
            <img
              src="./job-placement-icon.png"
              alt="Job Placement Icon"
              className="h-12 w-12 object-contain flex-shrink-0"
            />
            <div className="ml-4">
              <h3 className="text-lg font-bold text-indigo-700">Job Placement</h3>
              <p className="mt-1 text-gray-700">
                Get hired through our partner companies and trusted network.
              </p>
            </div>
          </a>
        </div>
      </section>

      {/* Developer Coaching Detail */}
      <section
        id="coaching"
        className="py-12 scroll-mt-20 max-w-4xl mx-auto px-4"
      >
        <h2 className="text-2xl font-bold mb-4 text-indigo-700">Developer Coaching</h2>
        <p className="text-gray-700 mb-6">
          Our coaching program targets developers at all levels. You'll gain hands-on experience in
          modern .NET development using C# and .NET Core 8, dive into SOLID principles, microservices,
          and event-driven systems, and learn scalable API design with OAuth and JWT. We also cover AWS
          and Azure cloud patterns, Docker, CI/CD with Azure DevOps, and legacy modernization strategies.
          <br />
          <br />
          Sessions are led by industry veterans with over 20 years of experience in healthcare, finance,
          and cloud domains. It’s not just training — it’s mentorship designed to build confidence and
          bridge the gap between theory and professional practice.
        </p>
        <a href="#services" className="text-indigo-600 underline">
          ← Back to Services
        </a>
      </section>

      {/* Mock Interviews Detail */}
      <section
        id="interviews"
        className="py-12 scroll-mt-20 max-w-4xl mx-auto px-4"
      >
        <h2 className="text-2xl font-bold mb-4 text-indigo-700">Mock Interviews</h2>
        <p className="text-gray-700 mb-6">
          Our mock interviews simulate real-world scenarios — both technical and behavioral. We use
          actual job descriptions from top companies to tailor each session. You’ll get scored feedback
          on problem-solving, architecture thinking, communication, and technical depth.
          <br />
          <br />
          Have a real interview coming up? We’ll rehearse it with you. We’ve helped candidates walk into
          interviews with confidence and clarity — whether it’s system design, cloud architecture, or
          coding rounds.
        </p>
          <a href="#services" className="text-indigo-600 underline">
            ← Back to Services
          </a>
      </section>

      {/* Book a Discovery Call (moved below Mock Interviews) */}
      <section
        id="book"
        className="py-12 scroll-mt-20 max-w-4xl mx-auto px-4"
      >
        <h2 className="text-3xl font-semibold mb-4 text-indigo-700">
          Book a Discovery Call
        </h2>
        <div className="mb-6">
        </div>
        <div className="bg-indigo-50 rounded-2xl p-6 shadow-md border border-indigo-200">
          <p className="text-gray-700 mb-4">
            Let’s understand your background and career goals. We'll guide you from there.
          </p>
          <CalendlyButton />
        </div>
      </section>

      {/* Resume & LinkedIn Help Detail */}
      <section
        id="resume-help"
        className="py-12 scroll-mt-20 max-w-4xl mx-auto px-4"
      >
        <h2 className="text-2xl font-bold mb-4 text-indigo-700">
          Resume &amp; LinkedIn Help
        </h2>
        <p className="text-gray-700 mb-6">
          We offer personalized resume reviews, keyword optimization, and guidance to align your
          LinkedIn profile with your career goals. Stand out in ATS filters and improve your response
          rate from recruiters.
          <br />
          <br />
          Our approach emphasizes relevance, clarity, and value — so that your resume opens doors,
          not closes them.
        </p>
        <div className="mb-6">
          <a href="#services" className="text-indigo-600 underline">
            ← Back to Services
          </a>
        </div>
      </section>

      {/* Resume Upload (below Resume & LinkedIn Help) */}
      <section
        id="resume"
        className="py-12 scroll-mt-20 max-w-4xl mx-auto px-4"
      >
        <h2 className="text-3xl font-semibold mb-4 text-indigo-700">
          Upload Your Resume
        </h2>
        <div className="mb-6">
        </div>
        <div className="bg-indigo-50 rounded-2xl p-6 shadow-md border border-indigo-200">
          <p className="text-gray-700 mb-4">
            We’ll review your profile and invite you for a free screening call. Based on your goals,
            we’ll place you into our mentoring track or connect you with jobs. No upfront fees — you
            pay only when you're successfully placed.
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdpEOIy3z5D3-JGl2fBDpSG4OF97yk_fWvYs2uw5V1Yt168iw/viewform?usp=dialog"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
          >
            Upload Resume
          </a>
          <p className="text-sm text-gray-600 mt-2">
            The form opens in a new tab. Once submitted, return here to continue.
          </p>
        </div>
      </section>

      {/* Job Placement Detail */}
      <section
        id="placement"
        className="py-12 scroll-mt-20 max-w-4xl mx-auto px-4"
      >
        <h2 className="text-2xl font-bold mb-4 text-indigo-700">Job Placement</h2>
        <p className="text-gray-700 mb-6">
          We connect developers with companies looking for skilled talent. Our network and partnerships
          help match the right people with the right opportunities. Whether full-time or contract, we
          help you land the job that fits.
          <br />
          <br />
          🎓 <strong>For students and freshers:</strong> There’s no upfront fee. We assess your potential
          and admit you through a fair screening process. Once accepted, we coach and promote you until
          placement. You pay only when you're hired — a win-win.
        </p>
        <div className="mb-6">
          <a href="#services" className="text-indigo-600 underline">
            ← Back to Services
          </a>
        </div>
      </section>

      {/* Contact (at the bottom) */}
      <section
        id="contact"
        className="py-12 scroll-mt-20 max-w-4xl mx-auto px-4"
      >
        <h2 className="text-3xl font-semibold mb-8 text-indigo-700">Contact Us</h2>
        <div className="bg-indigo-50 rounded-2xl p-6 shadow-md border border-indigo-200">
          <p className="text-gray-700 mb-4">
            Have questions? Reach out via email or connect with us on LinkedIn.
          </p>
          <ContactForm />
        </div>
        <div className="mt-6">
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-sm text-gray-600">
        &copy; {new Date().getFullYear()} Ediga Technology Solutions LLC. All rights reserved.
      </footer>
    </div>
  );
}
