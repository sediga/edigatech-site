// RecruitersPage.js (content-only; use with SiteLayout)
import React from 'react';
import ContactForm from './components/ContactForm';

export default function RecruitersPage() {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero */}
      <section className="py-12 md:py-14 px-6 bg-indigo-50 text-center">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-indigo-800 mb-4">
            Technical Hiring &amp; Screening for Startups
          </h1>
          <p className="text-base md:text-lg leading-relaxed max-w-3xl mx-auto text-gray-700">
            Need reliable developers but tired of long interviews and bad hires? We help you
            screen, shortlist, and onboard faster — with deep technical reviews and zero fluff.
          </p>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-12 md:py-14 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-indigo-700 mb-10 text-center">
            What We Offer
          </h2>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="bg-white border-l-4 border-indigo-600 p-6 rounded-lg shadow transition hover:-translate-y-0.5 hover:shadow-lg">
              <h3 className="text-lg md:text-xl font-semibold mb-2 text-indigo-700">
                Tailored Role Understanding
              </h3>
              <p className="text-base leading-relaxed text-gray-700">
                We don’t just screen — we help clarify what kind of engineer you actually need.
                From tech stack to problem context, we translate your goals into focused
                evaluations that surface the right talent.
              </p>
            </div>

            <div className="bg-white border-l-4 border-rose-500 p-6 rounded-lg shadow transition hover:-translate-y-0.5 hover:shadow-lg">
              <h3 className="text-lg md:text-xl font-semibold mb-2 text-rose-700">
                Hands-on Evaluations
              </h3>
              <p className="text-base leading-relaxed text-gray-700">
                Candidates are tested on real-world problem solving, architecture thinking, and
                practical coding decisions — the stuff that actually matters on the job.
              </p>
            </div>

            <div className="bg-white border-l-4 border-indigo-400 p-6 rounded-lg shadow transition hover:-translate-y-0.5 hover:shadow-lg">
              <h3 className="text-lg md:text-xl font-semibold mb-2 text-indigo-600">
                Startup-Friendly Support
              </h3>
              <p className="text-base leading-relaxed text-gray-700">
                Whether you&apos;re hiring your first engineer or scaling fast, we make hiring faster
                and smarter — without bloated fees or layers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Ediga */}
      <section className="bg-gray-50 py-12 md:py-14 px-6 text-center">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-indigo-700 mb-10">
            Why Choose Us
          </h2>

          <div className="grid md:grid-cols-3 gap-10 text-left">
            <div>
              <h3 className="text-lg font-semibold text-indigo-700 mb-2">
                Deep Technical Background
              </h3>
              <p className="text-base leading-relaxed text-gray-700">
                We’ve led teams, built products, and scaled codebases. We assess candidates based
                on how they think — not just how they code.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-indigo-700 mb-2">
                Fast Turnaround
              </h3>
              <p className="text-base leading-relaxed text-gray-700">
                We deliver feedback and recommendations within days — so you don’t lose great
                talent to delays or indecision.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-indigo-700 mb-2">
                Flexible Engagement
              </h3>
              <p className="text-base leading-relaxed text-gray-700">
                Need just the interviews? Done. Want help from screening to onboarding? We’ve got
                you covered, with no lock-ins.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-14 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-indigo-700 mb-4">
            Need Developer Help Now?
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-gray-700 mb-6 max-w-2xl mx-auto">
            Reach out to share your hiring needs — and get a technical partner who can help you
            find, vet, and grow your engineering team.
          </p>
          <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
