import Logo from './logo.png';
import CalendlyButton from './components/CalendlyButton';
import ContactForm from './components/ContactForm';

export default function HomePage() {
  return (
    <>
      {/* Navigation */}
      <header className="sticky top-0 bg-white shadow z-50">
        <nav className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img src={Logo} alt="Logo" className="w-10 h-10" />
            <span className="text-xl font-bold text-indigo-700">Ediga Technology Solutions</span>
          </div>
          <ul className="flex space-x-6 text-sm font-medium text-gray-700">
            <li><a href="#mission" className="hover:text-indigo-600">Mission</a></li>
            <li><a href="#services" className="hover:text-indigo-600">Services</a></li>
            <li><a href="#book" className="hover:text-indigo-600">Book Call</a></li>
            <li><a href="#resume" className="hover:text-indigo-600">Upload Resume</a></li>
            <li><a href="#contact" className="hover:text-indigo-600">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Mission */}
      <section id="mission" className="bg-indigo-50 py-10 text-center px-6">
        <h1 className="text-4xl font-extrabold text-indigo-800 mb-4">Mission Statement</h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          At Ediga Technology Solutions, our mission is to empower individuals to land meaningful tech careers. 
          We focus on results — offering coaching, interview prep, and job placement with no upfront cost. 
          We only win when you win. Whether you're a fresh graduate or switching fields, we're here to guide 
          you with heart and hustle.
        </p>
      </section>

      {/* Core Services */}
      <main className="p-6 max-w-6xl mx-auto bg-gradient-to-br from-white via-blue-50 to-purple-100 min-h-screen">
        <section id="services" className="py-10 scroll-mt-20">
          <h2 className="text-3xl font-semibold mb-8 text-purple-700 text-center">Our Core Services</h2>
          <ul className="grid md:grid-cols-2 gap-6">
            <li className="bg-white rounded-2xl shadow-md border-l-4 border-blue-500 p-4 md:flex items-center space-x-6 hover:shadow-lg transition">
              <div className="flex-shrink-0 w-1/3 flex justify-center">
                <img src="./coaching-icon.png" alt="Developer Coaching Icon" className="h-16 w-16 object-contain" />
              </div>
              <div className="w-2/3">
                <h3 className="text-lg font-bold text-blue-700">Developer Coaching</h3>
                <p className="text-gray-700">Training developers in real-world .NET and cloud-based applications.</p>
                <a href="#coaching" className="text-sm text-blue-600 hover:underline mt-2 inline-block">Learn more →</a>
              </div>
            </li>
            <li className="bg-white rounded-2xl shadow-md border-l-4 border-indigo-500 p-4 md:flex items-center space-x-6 hover:shadow-lg transition">
              <div className="flex-shrink-0 w-1/3 flex justify-center">
                <img src="./mock-interview-icon.png" alt="Mock Interview Icon" className="h-16 w-16 object-contain" />
              </div>
              <div className="w-2/3">
                <h3 className="text-lg font-bold text-indigo-700">Mock Interviews</h3>
                <p className="text-gray-700">Simulated interviews, real feedback — now with no upfront cost.</p>
                <a href="#interviews" className="text-sm text-indigo-600 hover:underline mt-2 inline-block">Learn more →</a>
              </div>
            </li>
            <li className="bg-white rounded-2xl shadow-md border-l-4 border-purple-500 p-4 md:flex items-center space-x-6 hover:shadow-lg transition">
              <div className="flex-shrink-0 w-1/3 flex justify-center">
                <img src="./resume-help-icon.png" alt="Resume Help Icon" className="h-16 w-16 object-contain" />
              </div>
              <div className="w-2/3">
                <h3 className="text-lg font-bold text-purple-700">Resume & LinkedIn Help</h3>
                <p className="text-gray-700">Optimize your job application assets and online presence.</p>
                <a href="#resume-help" className="text-sm text-purple-600 hover:underline mt-2 inline-block">Learn more →</a>
              </div>
            </li>
            <li className="bg-white rounded-2xl shadow-md border-l-4 border-pink-500 p-4 md:flex items-center space-x-6 hover:shadow-lg transition">
              <div className="flex-shrink-0 w-1/3 flex justify-center">
                <img src="./job-placement-icon.png" alt="Job Placement Icon" className="h-16 w-16 object-contain" />
              </div>
              <div className="w-2/3">
                <h3 className="text-lg font-bold text-pink-700">Job Placement</h3>
                <p className="text-gray-700">Get hired through our partner companies and trusted network.</p>
                <a href="#placement" className="text-sm text-pink-600 hover:underline mt-2 inline-block">Learn more →</a>
              </div>
            </li>
          </ul>
        </section>

        {/* Developer Coaching Detail */}
        <section id="coaching" className="py-12 scroll-mt-20">
          <h2 className="text-2xl font-bold mb-4 text-blue-700">Developer Coaching</h2>
          <p className="text-gray-700 mb-6">
            Our coaching program targets developers at all levels — from junior to senior. With 24+ years of real-world experience in software development, we bring you training in full-stack .NET development, API integration, modern DevOps, and cloud-native design. Sessions are practical and tech-driven, covering:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
            <li>.NET Core 8 and C# architecture best practices</li>
            <li>RESTful API design and security (OAuth2, JWT)</li>
            <li>Azure and AWS fundamentals including IAM, Lambda, ECS, S3, Azure Functions</li>
            <li>Legacy modernization and domain-driven design (DDD)</li>
            <li>Microservices with containerization and CI/CD workflows</li>
          </ul>
          <a href="#services" className="text-blue-600 underline">← Back to Services</a>
        </section>

        {/* Mock Interviews Detail */}
        <section id="interviews" className="py-12 scroll-mt-20">
          <h2 className="text-2xl font-bold mb-4 text-indigo-700">Mock Interviews</h2>
          <p className="text-gray-700 mb-6">
            We conduct realistic mock interviews based on job descriptions from real openings. Whether it’s system design, cloud architecture, or .NET coding, we simulate the actual pressure and format.
            <br /><br />
            You'll receive a detailed feedback scorecard and actionable tips to improve. We also offer 1:1 practice sessions for actual upcoming interviews to boost confidence and performance.
          </p>
          <a href="#services" className="text-indigo-600 underline">← Back to Services</a>
        </section>

        {/* Resume Help Detail */}
        <section id="resume-help" className="py-12 scroll-mt-20">
          <h2 className="text-2xl font-bold mb-4 text-purple-700">Resume & LinkedIn Help</h2>
          <p className="text-gray-700 mb-6">
            We optimize your resume to align with modern ATS systems, focusing on clarity, keywords, and relevance. We also refine your LinkedIn profile to boost visibility and credibility with recruiters. 
            This service includes 1:1 review and strategic advice tailored to your background.
          </p>
          <a href="#services" className="text-purple-600 underline">← Back to Services</a>
        </section>

        {/* Job Placement Detail */}
        <section id="placement" className="py-12 scroll-mt-20">
          <h2 className="text-2xl font-bold mb-4 text-pink-700">Job Placement</h2>
          <p className="text-gray-700 mb-6">
            We connect you with hiring partners and opportunities through our network. There are no upfront fees. You only pay after you land a job.
            <br /><br />
            🎓 <strong>For freshers and students:</strong> We offer a fair screening process. Once accepted, we’ll coach and promote you to recruiters until you’re placed.
          </p>
          <a href="#services" className="text-pink-600 underline">← Back to Services</a>
        </section>

        {/* Discovery Call */}
        <section id="book" className="py-12 scroll-mt-20">
          <h2 className="text-3xl font-semibold mb-8 text-indigo-800">Book a Discovery Call</h2>
          <div className="bg-indigo-50 rounded-2xl p-6 shadow-md border border-indigo-200">
            <p className="text-gray-700 mb-4">Let’s understand your background and career goals. We'll guide you from there.</p>
            <CalendlyButton />
          </div>
        </section>

        {/* Resume Upload */}
        <section id="resume" className="py-12 scroll-mt-20">
          <h2 className="text-3xl font-semibold mb-8 text-blue-800">Upload Your Resume</h2>
          <div className="bg-blue-50 rounded-2xl p-6 shadow-md border border-blue-200">
            <p className="text-gray-700 mb-4">
              We’ll review your resume and reach out for screening. If accepted, we’ll match you with coaching or job opportunities based on your profile.
            </p>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdpEOIy3z5D3-JGl2fBDpSG4OF97yk_fWvYs2uw5V1Yt168iw/viewform?usp=dialog"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Upload Resume
            </a>
            <p className="text-sm text-gray-600 mt-2">This form opens in a new tab. Come back after you submit.</p>
          </div>
        </section>

        {/* Contact Form */}
        <section id="contact" className="py-12 scroll-mt-20">
          <h2 className="text-3xl font-semibold mb-8 text-purple-800">Contact Us</h2>
          <div className="bg-purple-50 rounded-2xl p-6 shadow-md border border-purple-200">
            <p className="text-gray-700 mb-4">Have questions? Reach out via email or connect with us on LinkedIn.</p>
            <ContactForm />
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center py-6 text-sm text-gray-600">
          &copy; {new Date().getFullYear()} Ediga Technology Solutions LLC. All rights reserved.
        </footer>
      </main>
    </>
  );
}
