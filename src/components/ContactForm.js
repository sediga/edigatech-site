import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch('https://formspree.io/f/manjwnbe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-xl shadow-lg">
      <h3 className="text-lg font-bold text-indigo-800 mb-4">📩 Contact Us</h3>

      <div>
        <label className="block text-sm font-medium text-gray-700">Your Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded-lg"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Your Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded-lg"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Message</label>
        <textarea
          name="message"
          rows="4"
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded-lg"
        ></textarea>
      </div>

      <button
        type="submit"
        className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
        disabled={status === 'submitting'}
      >
        {status === 'submitting' ? 'Sending...' : 'Send Message'}
      </button>

      {status === 'success' && (
        <p className="text-green-600 mt-2">Thanks! Your message has been sent.</p>
      )}
      {status === 'error' && (
        <p className="text-red-600 mt-2">Oops! Something went wrong. Try again.</p>
      )}
    </form>
  );
}
