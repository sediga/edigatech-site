import React from 'react';
import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <>
      {/* Hero */}
      <section className="text-center py-12 md:py-14 px-6 bg-indigo-50">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-indigo-800 mb-4">
            Tech & Automation for Healthcare Startups
          </h1>
          <p className="text-base md:text-lg leading-relaxed text-gray-700 max-w-2xl mx-auto">
            We help healthcare startups automate workflows, modernize legacy systems,
            and scale confidently with tailored consulting and technical expertise.
          </p>
        </div>
      </section>

      {/* What we offer */}
      <section className="py-12 md:py-14 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-indigo-700 mb-8 text-center">
            What We Offer
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Flowtra Product */}
            <Link
              to="/products"
              className="group block border-t-4 border-indigo-600 bg-white p-6 rounded-xl shadow-md transition hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600"
            >
              <article className="flex h-full flex-col justify-between">
                <div>
                  <h3 className="text-lg md:text-xl font-semibold mb-2 text-indigo-700">
                    Flowtra Automation Platform
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Flowtra is our no-code platform for reliable browser automations — ideal for
                    credentialing, RCM, data scraping, or any repetitive web task.
                  </p>
                  <p className="text-gray-700">
                    Eliminate manual data entry and empower your non-technical staff with automation.
                  </p>
                </div>
                <span className="mt-6 text-indigo-600 underline underline-offset-2 group-hover:no-underline">
                  Explore Flowtra →
                </span>
              </article>
            </Link>

            {/* Consulting */}
            <Link
              to="/consulting"
              className="group block border-t-4 border-rose-600 bg-white p-6 rounded-xl shadow-md transition hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-600"
            >
              <article className="flex h-full flex-col justify-between">
                <div>
                  <h3 className="text-lg md:text-xl font-semibold mb-2 text-rose-700">
                    Consulting Services
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Hands-on leadership for legacy modernization and HIPAA-compliant cloud automation.
                  </p>
                  <p className="text-gray-700">
                    White-glove help building custom Flowtra bots tailored to your workflows.
                  </p>
                </div>
                <span className="mt-6 text-rose-700 underline underline-offset-2 group-hover:no-underline">
                  View Consulting Services →
                </span>
              </article>
            </Link>

            {/* Hiring */}
            <Link
              to="/recruiters"
              className="group block border-t-4 border-indigo-400 bg-white p-6 rounded-xl shadow-md transition hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
            >
              <article className="flex h-full flex-col justify-between">
                <div>
                  <h3 className="text-lg md:text-xl font-semibold mb-2 text-indigo-600">
                    Technical Hiring & Screening
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Screened, job-ready developers with system design, cloud, and healthcare workflows.
                  </p>
                  <p className="text-gray-700">Save time and reduce hiring risks.</p>
                </div>
                <span className="mt-6 text-indigo-600 underline underline-offset-2 group-hover:no-underline">
                  Recruit With Us →
                </span>
              </article>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
