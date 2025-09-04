import ContactForm from './components/ContactForm';

export default function FreelancingPage() {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-semibold text-indigo-700 mb-6">
          Freelancing Services
        </h1>
        {/* ...existing body copy... */}
        <a
          href="/#contact"
          className="inline-block mt-8 px-5 py-2 bg-indigo-600 text-white font-semibold rounded hover:bg-indigo-700 transition"
        >
          Contact for Freelance Work
        </a>
      </div>

      <section id="contact" className="py-12">
        <h2 className="text-3xl font-semibold mb-8 text-indigo-700 text-center">Contact Us</h2>
        <div className="bg-indigo-50 rounded-2xl p-6 shadow-md border border-indigo-200 mx-auto max-w-3xl">
          <p className="text-gray-700 mb-4">Have questions? Reach out via email or LinkedIn.</p>
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
