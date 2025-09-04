import CalendlyButton from './components/CalendlyButton';
import ContactForm from './components/ContactForm';

export default function TrainingPage() {
  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* keep your sections exactly as-is, minus the old header/footer */}
      {/* Example: */}
      <section id="services" className="py-10 scroll-mt-20 max-w-4xl mx-auto px-4">
        {/* ...cards... */}
      </section>
      {/* ...other sections... */}
      <section id="contact" className="py-12 scroll-mt-20 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-8 text-indigo-700">Contact Us</h2>
        <div className="bg-indigo-50 rounded-2xl p-6 shadow-md border border-indigo-200">
          <p className="text-gray-700 mb-4">
            Have questions? Reach out via email or connect with us on LinkedIn.
          </p>
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
