import { useEffect } from 'react';

const CalendlyWidget = () => {
  useEffect(() => {
    const head = document.querySelector('head');
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    head.appendChild(script);

    return () => {
      head.removeChild(script);
    };
  }, []);

  return (
    <div
      className="my-8"
      style={{ minWidth: '320px', height: '630px' }}
      id="schedule_form"
    >
      <div
        className="calendly-inline-widget"
        data-url="https://calendly.com/sreenivasa-edigatech/30min?primary_color=4f46e5"
        style={{ minWidth: '320px', height: '630px' }}
      ></div>
    </div>
  );
};

export default CalendlyWidget;
