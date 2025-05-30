const CalendlyButton = () => {
    const openPopup = (e) => {
      e.preventDefault();
  
      if (
        window.Calendly &&
        typeof window.Calendly.initPopupWidget === 'function'
      ) {
        window.Calendly.initPopupWidget({
          url: 'https://calendly.com/sreenivasa-edigatech/30min',
        });
      } else {
        console.warn('Calendly is not ready yet.');
      }
    };
  
    return (
      <button
        onClick={openPopup}
        className="inline-block mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
      >
        Book a Discovery Call
      </button>
    );
  };
  
  export default CalendlyButton;
  