// SiteLayout.jsx
import React, { useState } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import Logo from "./logo.svg";
import PrivacyPolicyModal from "./PrivacyPolicyModal";

export default function SiteLayout() {
  const [showPrivacy, setShowPrivacy] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 flex flex-col">
      {/* Header (shared) */}
      <header className="sticky top-0 bg-white shadow z-50">
        <nav className="w-full px-6 py-3 flex justify-between items-center">
          <button
            onClick={() => navigate("/")}
            className="flex items-center space-x-2"
            aria-label="Go home"
          >
            <img src={Logo} alt="Logo" className="w-10 h-10" />
            <span className="text-xl font-bold text-indigo-700">
              Ediga Technology Solutions
            </span>
          </button>

          {/* Simple top nav (optional) */}
          <ul className="flex gap-4 text-sm">
            <li><Link className="hover:text-indigo-700" to="/">Home</Link></li>
            <li><Link className="hover:text-indigo-700" to="/products">Products</Link></li>
            <li><Link className="hover:text-indigo-700" to="/consulting">Consulting</Link></li>
            <li><Link className="hover:text-indigo-700" to="/recruiters">Recruiters</Link></li>
          </ul>
        </nav>
      </header>

      {/* Page body (swaps per route) */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer (shared) */}
      <footer className="bg-blue-600 text-white py-6bg-blue-600 text-white py-6 text-center">
        &copy; {new Date().getFullYear()} Ediga Technology Solutions LLC. All rights reserved.
        <div className="items-center space-x-4 bg-blue-600 text-white py-6 text-center">
          <a
            href="https://www.linkedin.com/company/ediga-technology-solutions/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Flowtra on LinkedIn"
            className="inline-flex items-center gap-2 hover:text-gray-700"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" aria-hidden="true">
              <path d="M19 0H5C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5zM7 20H4V9h3v11zM5.5 7.7A2.2 2.2 0 1 1 5.5 3.3a2.2 2.2 0 0 1 0 4.4zM21 20h-3v-5.6c0-1.3-.5-2.1-1.7-2.1-.9 0-1.4.6-1.6 1.2-.1.2-.1.5-.1.8V20h-3V9h3v1.6c.5-.8 1.4-1.9 3.2-1.9 2.1 0 3.6 1.4 3.6 4.3V20z" />
            </svg>
            <span>LinkedIn</span>
          </a>
          <button onClick={() => setShowPrivacy(true)} className="underline">
            Privacy Policy
          </button>
          </div>
      </footer>
      <PrivacyPolicyModal open={showPrivacy} onClose={() => setShowPrivacy(false)} />
    </div>
  );
}
