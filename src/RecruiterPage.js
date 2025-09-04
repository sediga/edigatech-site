import ContactForm from './components/ContactForm';

export default function RecruiterPage() {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <section className="text-center py-10">
        <h1 className="text-3xl font-semibold text-indigo-700 mb-4">
          Hire proven developers, faster
        </h1>
        <p className="text-gray-700 max-w-3xl mx-auto">
          We connect you with vetted, job-ready developers trained by industry experts — no upfront cost.
        </p>
      </section>

      {/* ...rest of your sections unchanged... */}
      <section id="contact" className="py-12">
        <h2 className="text-3xl font-semibold mb-8 text-indigo-700 text-center">Contact Us</h2>
        <div className="bg-indigo-50 rounded-2xl p-6 shadow-md border border-indigo-200 mx-auto max-w-3xl">
          <p className="text-gray-700 mb-4">
            Have questions? Reach out via email or connect with us on LinkedIn.
          </p>
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
