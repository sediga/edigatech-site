import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function LandingPage() {
  const navigate = useNavigate();
  return (
    <>
      <section className="text-center py-20 px-6 bg-indigo-50">
        <h1 className="text-4xl font-bold text-indigo-800 mb-4">
          Tech & Automation for Healthcare Startups
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          We help healthcare startups automate workflows, modernize legacy systems,
          and scale confidently with tailored consulting and technical expertise.
        </p>
      </section>

      <section className="text-center py-16 px-6">
        <h2 className="text-3xl font-semibold text-indigo-700 mb-10">What We Offer</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {/* Flowtra Product */}
          <div
            onClick={() => navigate('/products')}
            className="cursor-pointer border-t-4 border-indigo-600 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-bold mb-2 text-indigo-700">Flowtra Automation Platform</h3>
              <p className="text-gray-700 mb-4">
                Flowtra is our no-code platform for reliable browser automations — ideal for
                credentialing, RCM, data scraping, or any repetitive web task.
              </p>
              <p className="text-gray-700">
                Eliminate manual data entry and empower your non-technical staff with automation.
              </p>
            </div>
            <button className="mt-6 text-blue-600 underline">Explore Flowtra &rarr;</button>
          </div>

          {/* Consulting */}
          <div
            onClick={() => navigate('/consulting')}
            className="cursor-pointer border-t-4 border-rose-600 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-bold mb-2 text-rose-700">Consulting Services</h3>
              <p className="text-gray-700 mb-4">
                Hands-on leadership for legacy modernization and HIPAA-compliant cloud automation.
              </p>
              <p className="text-gray-700">
                White-glove help building custom Flowtra bots tailored to your workflows.
              </p>
            </div>
            <button className="mt-6 text-blue-600 underline">View Consulting Services &rarr;</button>
          </div>

          {/* Hiring */}
          <div
            onClick={() => navigate('/recruiters')}
            className="cursor-pointer border-t-4 border-indigo-400 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-bold mb-2 text-indigo-600">Technical Hiring & Screening</h3>
              <p className="text-gray-700 mb-4">
                Screened, job-ready developers with system design, cloud, and healthcare workflows.
              </p>
              <p className="text-gray-700">Save time and reduce hiring risks.</p>
            </div>
            <button className="mt-6 text-blue-600 underline">Recruit With Us &rarr;</button>
          </div>
        </div>
      </section>
    </>
  );
}
