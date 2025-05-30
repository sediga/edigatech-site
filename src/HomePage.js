import Logo from './logo.png';
import CalendlyButton from './components/CalendlyButton';
import ContactForm from './components/ContactForm';

export default function HomePage() {
  return (
    <>
      {/* Navigation */}
      <header className="sticky top-0 bg-white shadow z-50">
        <nav className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
          <div>
            <div className="flex items-center space-x-2">
              <img src={Logo} alt="Logo" className="w-10 h-10" />
              <span className="text-xl font-bold text-indigo-700">Ediga Technology Solutions</span>
            </div>
            <p className="text-sm text-gray-500 ml-12">Empowering Developers Through Coaching, Interviews & Job Placement</p>
          </div>
          <ul className="flex space-x-6 text-sm font-medium text-gray-700">
            <li><a href="#hero" className="hover:text-indigo-600">Home</a></li>
            <li><a href="#services" className="hover:text-indigo-600">Services</a></li>
            <li><a href="#book" className="hover:text-indigo-600">Book Call</a></li>
            <li><a href="#resume" className="hover:text-indigo-600">Upload Resume</a></li>
            <li><a href="#contact" className="hover:text-indigo-600">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main className="p-6 max-w-6xl mx-auto bg-gradient-to-br from-white via-blue-50 to-purple-100 min-h-screen">
        <section id="services" className="py-10 scroll-mt-20">
          <h2 className="text-3xl font-semibold mb-6 text-purple-700">Our Core Services</h2>
          <ul className="grid md:grid-cols-2 gap-6">
            <li className="bg-white p-6 rounded-2xl shadow-xl border-l-8 border-blue-400">
              <img src="./coaching-icon.png" alt="Coaching Icon" className="w-10 h-10 mb-2" />
              <h3 className="text-lg font-bold mb-2 text-blue-700">Developer Coaching</h3>
              <p>Training junior to senior developers in .NET, APIs, cloud, and modernization best practices.</p>
            </li>
            <li className="bg-white p-6 rounded-2xl shadow-xl border-l-8 border-indigo-400">
              <img src="./mock-interview-icon.png" alt="Mock Interview" className="w-10 h-10 mb-2" />
              <h3 className="text-lg font-bold mb-2 text-indigo-700">Mock Interviews</h3>
              <p>Simulated technical interviews based on actual job descriptions with scoring and feedback.</p>
            </li>
            <li className="bg-white p-6 rounded-2xl shadow-xl border-l-8 border-purple-400">
              <img src="./resume-help-icon.png" alt="Resume Help Icon" className="w-10 h-10 mb-2" />
              <h3 className="text-lg font-bold mb-2 text-purple-700">Resume & LinkedIn Help</h3>
              <p>Professional guidance to optimize your job applications and online presence.</p>
            </li>
            <li className="bg-white p-6 rounded-2xl shadow-xl border-l-8 border-pink-400">
              <img src="./job-placement-icon.png" alt="Job Placement Icon" className="w-10 h-10 mb-2" />
              <h3 className="text-lg font-bold mb-2 text-pink-700">🔗 Job Placement</h3>
              <p>Connect with companies seeking vetted, skilled developers or get hired via our network.</p>
            </li>
          </ul>
        </section>

        <section id="book" className="py-12 scroll-mt-20">
          <h2 className="text-3xl font-semibold mb-8 text-indigo-800">Book a Discovery Call</h2>
          <div className="bg-indigo-50 rounded-2xl p-6 shadow-md border border-indigo-200">
            <p className="text-gray-700 mb-4">Let’s understand your background and career goals. We'll guide you from there.</p>
            <CalendlyButton />
          </div>
        </section>

        <section id="resume" className="py-12 scroll-mt-20">
          <h2 className="text-3xl font-semibold mb-8 text-blue-800">Upload Your Resume</h2>
          <div className="bg-blue-50 rounded-2xl p-6 shadow-md border border-blue-200">
            <p className="text-gray-700 mb-4">We’ll assess your profile and provide training or job matching recommendations.</p>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdpEOIy3z5D3-JGl2fBDpSG4OF97yk_fWvYs2uw5V1Yt168iw/viewform?usp=dialog"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Upload Resume
            </a>
            <p className="text-sm text-gray-600 mt-2">The form opens in a new tab. Once submitted, return here to continue.</p>
          </div>
        </section>

        <section id="contact" className="py-12 scroll-mt-20">
          <h2 className="text-3xl font-semibold mb-8 text-purple-800">Contact Us</h2>
          <div className="bg-purple-50 rounded-2xl p-6 shadow-md border border-purple-200">
            <p className="text-gray-700 mb-4">Have questions? Reach out via email or connect with us on LinkedIn.</p>
            <ContactForm />
          </div>
        </section>

        <footer className="text-center py-6 text-sm text-gray-600">
          &copy; {new Date().getFullYear()} Ediga Technology Solutions LLC. All rights reserved.
        </footer>
      </main>
    </>
  );
}
