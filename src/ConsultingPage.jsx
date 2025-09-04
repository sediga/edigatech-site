import React, { useEffect, useState } from 'react';
import { PopupButton } from 'react-calendly';
import PrivacyPolicyModal from './PrivacyPolicyModal';

export default function ConsultingPage() {
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [calRoot, setCalRoot] = useState(null);

  useEffect(() => {
    // Avoid SSR/StrictMode timing issues
    setCalRoot(document.getElementById('root') || document.body);
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Hero */}
      <section className="py-12 md:py-14 px-6 bg-indigo-50 text-center">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-indigo-800 mb-4">
            Consulting for Healthcare Startups
          </h1>
          <p className="text-base md:text-lg leading-relaxed max-w-3xl mx-auto text-gray-700">
            We help healthcare teams modernize legacy systems, automate workflows, and launch
            production-grade solutions — fast and founder-friendly.
          </p>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-12 md:py-14 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-indigo-700 mb-10 text-center">
            Where We Can Help
          </h2>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="bg-white border-l-4 border-indigo-600 p-6 rounded-lg shadow transition hover:-translate-y-0.5 hover:shadow-lg">
              <h3 className="text-lg md:text-xl font-semibold mb-2 text-indigo-700">
                Custom Bot Development
              </h3>
              <p className="text-base leading-relaxed text-gray-700">
                Need tailored flows on top of Flowtra? We design and build custom smart bots for
                credentialing, onboarding, and back-office automation.
              </p>
            </div>

            <div className="bg-white border-l-4 border-rose-500 p-6 rounded-lg shadow transition hover:-translate-y-0.5 hover:shadow-lg">
              <h3 className="text-lg md:text-xl font-semibold mb-2 text-rose-700">
                .NET &amp; Cloud Modernization
              </h3>
              <p className="text-base leading-relaxed text-gray-700">
                Upgrade legacy platforms to clean, testable APIs. Deep .NET, Azure, and AWS
                expertise with a focus on healthcare security.
              </p>
            </div>

            <div className="bg-white border-l-4 border-indigo-400 p-6 rounded-lg shadow transition hover:-translate-y-0.5 hover:shadow-lg">
              <h3 className="text-lg md:text-xl font-semibold mb-2 text-indigo-600">
                Workflow Design &amp; Integration
              </h3>
              <p className="text-base leading-relaxed text-gray-700">
                From EHR integrations to staff onboarding flows — we analyze your manual processes
                and deliver high-leverage automation blueprints.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="bg-gray-50 py-12 md:py-14 px-6 text-center">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-indigo-700 mb-10">
            Why Work With Us
          </h2>
          <div className="grid md:grid-cols-3 gap-10 text-left">
            <div>
              <h3 className="text-lg font-semibold text-indigo-800 mb-2">Deep Tech Experience</h3>
              <p className="text-base leading-relaxed text-gray-700">
                24+ years in software delivery across industries. We&apos;ve seen every legacy mess
                and lived to rewrite it.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-indigo-800 mb-2">Small Team Speed</h3>
              <p className="text-base leading-relaxed text-gray-700">
                You&apos;re not just another ticket. Work directly with the person building your
                solution — fast, transparent, and effective.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-indigo-800 mb-2">Automation-First Thinking</h3>
              <p className="text-base leading-relaxed text-gray-700">
                We don&apos;t just write code — we streamline, automate, and optimize. Every project
                is shaped with efficiency in mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-12 md:py-14 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-indigo-800 mb-4">
            Let&apos;s Build Something Great Together
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-gray-700 mb-6 max-w-2xl mx-auto">
            Whether you&apos;re scaling a product, modernizing old systems, or exploring automation —
            we’re ready to jump in and help. Start with a free discovery call.
          </p>

          <div className="flex items-center justify-center gap-4 flex-wrap">
            <PopupButton
              url="https://calendly.com/sreenivasa-edigatech/30min?primary_color=4f46e5"
              rootElement={calRoot || document.body}
              text="Book a Free Discovery Call"
              className="bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition"
            />
            <button
              type="button"
              onClick={() => setShowPrivacy(true)}
              className="text-sm text-gray-600 underline underline-offset-2 hover:text-gray-800"
            >
              Privacy Policy
            </button>
          </div>
        </div>
      </section>

      {/* Privacy Modal */}
      <PrivacyPolicyModal isOpen={showPrivacy} onClose={() => setShowPrivacy(false)} />
    </div>
  );
}
