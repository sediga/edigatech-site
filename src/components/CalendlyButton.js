import React, { useEffect } from 'react';

const CalendlyButton = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: 'hhttps://calendly.com/sreenivasa-edigatech/30min'
      });
    }
  };

  return (
    <button
      onClick={handleClick}
      className="inline-block mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
    >
      Book a Discovery Call
    </button>
  );
};

export default CalendlyButton;
