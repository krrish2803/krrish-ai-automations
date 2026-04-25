import { useEffect } from "react";

declare global {
  interface Window {
    Calendly: any;
  }
}

export const openCalendly = () => {
  if (window.Calendly) {
    window.Calendly.initPopupWidget({
      url: "https://calendly.com/kyaduka2803/30min",
    });
  }
};

export function Calendly() {
  useEffect(() => {
    // Check if script is already loaded
    if (!document.getElementById("calendly-script")) {
      const script = document.createElement("script");
      script.id = "calendly-script";
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      script.onload = () => {
        // Initialize badge widget as requested by user
        window.Calendly?.initBadgeWidget({
          url: "https://calendly.com/kyaduka2803/30min",
          text: "Schedule time with me",
          color: "#6888ad",
          textColor: "#ffffff",
          branding: true,
        });
      };
      document.body.appendChild(script);

      const link = document.createElement("link");
      link.href = "https://assets.calendly.com/assets/external/widget.css";
      link.rel = "stylesheet";
      document.head.appendChild(link);
    }
  }, []);

  return null;
}
