import React, { useEffect } from "react";

export default function PrivacyPolicyModal({ open, onClose }) {
  // Close on ESC
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") onClose?.();
    }
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby="privacy-title"
    >
      {/* Backdrop */}
      <button
        aria-label="Close privacy policy"
        onClick={onClose}
        className="absolute inset-0 bg-black/50"
      />
      {/* Panel */}
      <div className="relative mx-4 w-full max-w-3xl rounded-xl bg-white shadow-2xl">
        <div className="flex items-center justify-between border-b px-6 py-4">
          <h2 id="privacy-title" className="text-xl font-semibold text-gray-900">
            Privacy Policy
          </h2>
          <button
            onClick={onClose}
            className="rounded-md p-2 text-gray-500 hover:bg-gray-100"
            aria-label="Close"
          >
            ✕
          </button>
        </div>
        <div className="max-h-[75vh] overflow-y-auto px-6 py-5 text-sm leading-6 text-gray-700">
          {/* ————— START POLICY TEXT ————— */}
          <p className="text-xs text-gray-500 mb-3">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <p className="mb-4">
            This Privacy Policy explains how <strong>Ediga Technology Solutions LLC</strong>
            (“Ediga,” “we,” “our,” or “us”) collects, uses, and shares information
            when you visit our websites (including <em>edigatech.com</em>) and when
            you use our products and services such as the <strong>Flowtra</strong> automation
            platform (collectively, the “Services”).
          </p>

          <h3 className="mt-5 font-semibold text-gray-900">Information We Collect</h3>
          <ul className="list-disc ml-5 mt-2">
            <li><strong>Account & contact info</strong> (name, email, company, role).</li>
            <li><strong>Usage data</strong> (app activity, logs, device/browser, cookies).</li>
            <li><strong>Support communications</strong> (messages, attachments, metadata).</li>
            <li><strong>Customer input data</strong> you choose to process via Flowtra (e.g., CSV rows used to auto-fill forms). You control what you upload.</li>
          </ul>

          <h3 className="mt-5 font-semibold text-gray-900">How We Use Information</h3>
          <ul className="list-disc ml-5 mt-2">
            <li>Provide, maintain, and improve the Services.</li>
            <li>Operate features like data loops, replays, and reliability analytics.</li>
            <li>Communicate with you about updates, security, and support.</li>
            <li>Detect, prevent, and investigate fraud, abuse, or security incidents.</li>
            <li>Comply with legal obligations and enforce agreements.</li>
          </ul>

          <h3 className="mt-5 font-semibold text-gray-900">Legal Bases (EEA/UK)</h3>
          <p className="mt-2">
            We process personal data based on legitimate interests (running and securing
            the Services), performance of a contract (providing requested features),
            and consent where required (e.g., certain cookies or marketing).
          </p>

          <h3 className="mt-5 font-semibold text-gray-900">Sharing</h3>
          <ul className="list-disc ml-5 mt-2">
            <li><strong>Service providers</strong> under contract (hosting, analytics, email).</li>
            <li>As required by law or to protect rights, safety, and security.</li>
            <li>Business transfers (merger, acquisition). We will notify where required.</li>
            <li>We do <strong>not</strong> sell personal data.</li>
          </ul>

          <h3 className="mt-5 font-semibold text-gray-900">Healthcare & HIPAA</h3>
          <p className="mt-2">
            Flowtra can be configured to automate processes in healthcare contexts. Unless we
            have a separate, signed <strong>Business Associate Agreement (BAA)</strong>, you must not
            upload or process Protected Health Information (PHI) within Flowtra. Demo videos and
            examples use synthetic data only.
          </p>

          <h3 className="mt-5 font-semibold text-gray-900">Data Retention</h3>
          <p className="mt-2">
            We retain information for as long as needed to provide the Services and meet legal,
            tax, and security requirements. You may request deletion of your account data as
            described below.
          </p>

          <h3 className="mt-5 font-semibold text-gray-900">Security</h3>
          <p className="mt-2">
            We employ administrative, technical, and organizational measures appropriate to the
            risk (e.g., access controls, encryption in transit, regular backups). No method of
            transmission or storage is 100% secure.
          </p>

          <h3 className="mt-5 font-semibold text-gray-900">International Transfers</h3>
          <p className="mt-2">
            Data may be processed in the United States and other countries where we or our
            providers operate, subject to appropriate safeguards.
          </p>

          <h3 className="mt-5 font-semibold text-gray-900">Your Rights</h3>
          <p className="mt-2">
            Depending on your location, you may have rights to access, correct, delete, or
            port your personal data, object to or restrict processing, and withdraw consent.
            To exercise these rights, contact us at <a className="underline" href="mailto:privacy@edigatech.com">privacy@edigatech.com</a>.
          </p>

          <h3 className="mt-5 font-semibold text-gray-900">Cookies & Tracking</h3>
          <p className="mt-2">
            We use necessary cookies to operate the site and may use optional analytics
            cookies to understand usage. You can control cookies via your browser settings.
          </p>

          <h3 className="mt-5 font-semibold text-gray-900">Third-Party Links</h3>
          <p className="mt-2">
            Our site may link to third-party sites. Their privacy practices are governed by
            their own policies.
          </p>

          <h3 className="mt-5 font-semibold text-gray-900">Changes to This Policy</h3>
          <p className="mt-2">
            We may update this Policy from time to time. Material changes will be posted on
            this page with a new “Last updated” date.
          </p>

          <h3 className="mt-5 font-semibold text-gray-900">Contact Us</h3>
          <p className="mt-2">
            Ediga Technology Solutions LLC<br />
            Email: <a className="underline" href="mailto:privacy@edigatech.com">privacy@edigatech.com</a>
          </p>

          <p className="mt-6 text-xs text-gray-500">
            This template is provided for convenience only and does not constitute legal advice.
            Please consult counsel to tailor it to your specific obligations (e.g., HIPAA, GDPR, CCPA).
          </p>
          {/* ————— END POLICY TEXT ————— */}
        </div>
        <div className="flex justify-end gap-3 border-t px-6 py-4">
          <button onClick={onClose} className="rounded-md bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700">
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
