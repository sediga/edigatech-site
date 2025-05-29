import Logo from './logo.png';

export default function HomePage() {
  return (
    <main className="p-6 max-w-6xl mx-auto bg-gradient-to-br from-white via-blue-50 to-purple-100 min-h-screen">
      <section className="text-center py-12">
        <img src={Logo} alt="Ediga Logo" className="mx-auto w-24 h-24 mb-6" />
        <h1 className="text-5xl font-extrabold mb-4 text-indigo-800">Ediga Technology Solutions</h1>
        <p className="text-xl text-gray-700">Empowering Developers Through Coaching, Interviews & Job Placement</p>
      </section>
      <section className="py-10">
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
      <section className="py-12">
        <h2 className="text-3xl font-semibold mb-8 text-indigo-800">📌 Ready to Take the Next Step?</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-indigo-50 rounded-2xl p-6 shadow-md border border-indigo-200">
            <h3 className="font-bold text-lg mb-2 text-indigo-900">📅 Book a Discovery Call</h3>
            <p className="text-gray-700">Let’s understand your background and career goals. We'll guide you from there.</p>
            <div className="mt-4">
            <a href="#" onclick="Calendly.initPopupWidget({ url: 'https://calendly.com/sreenivasa-edigatech/30min' }); return false;">
              Book a Discovery Call
            </a>
            </div>
          </div>
          <div className="bg-blue-50 rounded-2xl p-6 shadow-md border border-blue-200">
            <h3 className="font-bold text-lg mb-2 text-blue-900">📤 Upload Your Resume</h3>
            <p className="text-gray-700">We'll assess your profile and provide training or job matching recommendations.</p>
            <a href="https://forms.gle/your-google-form-link" className="inline-block mt-4 text-blue-700 underline font-medium">Upload Resume</a>
          </div>
          <div className="bg-purple-50 rounded-2xl p-6 shadow-md border border-purple-200">
            <h3 className="font-bold text-lg mb-2 text-purple-900">📩 Contact Us</h3>
            <p className="text-gray-700">Got questions? Reach out via email or connect with us on LinkedIn.</p>
            <a href="mailto:contact@edigatech.com" className="inline-block mt-4 text-purple-700 underline font-medium">Email Us</a>
          </div>
        </div>
      </section>
      <footer className="text-center py-6 text-sm text-gray-600">
        &copy; {new Date().getFullYear()} Ediga Technology Solutions LLC. All rights reserved.
      </footer>
    </main>
  );
}
