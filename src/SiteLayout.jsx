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
      <footer className="bg-blue-600 text-white py-6 text-center">
        <p>&copy; {new Date().getFullYear()} Ediga Technology Solutions LLC. All rights reserved.</p>
        <p className="mt-1 text-sm">
          <button onClick={() => setShowPrivacy(true)} className="underline">
            Privacy Policy
          </button>
        </p>
      </footer>

      <PrivacyPolicyModal open={showPrivacy} onClose={() => setShowPrivacy(false)} />
    </div>
  );
}
