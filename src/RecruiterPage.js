import Logo from './logo.png';
import ContactForm from './components/ContactForm';

export default function RecruiterPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-green-50 to-green-100 p-6">
      {/* Header */}
      <header className="flex justify-between items-center max-w-6xl mx-auto py-4 border-b">
        <div className="flex items-center space-x-3">
          <img src={Logo} alt="Logo" className="w-10 h-10" />
          <span className="text-2xl font-bold text-green-700">EdigaTech</span>
        </div>
        <a href="/" className="text-green-600 hover:underline">← Back to Homepage</a>
      </header>

      {/* Content */}
      <section className="max-w-4xl mx-auto mt-16">
        <h1 className="text-4xl font-extrabold text-green-800 mb-6">Hire Job-Ready Developers</h1>
        
        <p className="text-lg text-gray-700 mb-4">
          Are you a recruiter or hiring manager looking to onboard skilled developers quickly? At EdigaTech, we partner
          with you to provide access to pre-vetted talent trained in .NET, REST APIs, Azure, AWS, microservices, and enterprise-grade architectures.
        </p>

        <p className="text-lg text-gray-700 mb-4">
          Our coaching pipeline ensures every candidate is not only technically sound, but also coached on communication,
          real-world project delivery, system design, and modern development practices. We don’t just train — we transform them into professionals ready for impact.
        </p>

        <p className="text-lg text-gray-700 mb-4">
          Think of us as a <strong>context switch</strong> for your recruitment funnel. No need to sift through hundreds of resumes —
          we connect you with developers who’ve already passed mock interviews, hands-on coding, and career alignment assessments.
        </p>

        <p className="text-lg text-gray-700 mb-4">
          Whether you’re looking to scale your team or fill a short-term contract, our network can match you with top talent faster and more reliably.
        </p>

        <p className="text-lg text-gray-700 mb-4">
          Get in touch with us below and let’s discuss how we can help you hire better, faster.
        </p>

        <div className="mt-8 bg-white p-6 rounded-lg shadow border border-green-200">
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 mt-16">
        &copy; {new Date().getFullYear()} Ediga Technology Solutions LLC.
      </footer>
    </main>
  );
}
