// components/GlobalContactSlider.tsx
import React, { useEffect } from 'react';
import ContactSlider from './ContactSlider';
import { useContactSlider } from '../hooks/useContactSlider';
import { useLocation } from 'react-router-dom';

interface GlobalContactSliderProps {
  onTriggerPopup: () => void; // Function to trigger the popup
}

const GlobalContactSlider: React.FC<GlobalContactSliderProps> = ({ 
  onTriggerPopup 
}) => {
  const config = useContactSlider();
  const location = useLocation();
  
  // Debug logging
  useEffect(() => {
    console.log("GlobalContactSlider: Current path =", location.pathname);
    console.log("GlobalContactSlider: Config =", config);
  }, [location.pathname, config]);
  
  // Function to handle click and trigger popup
  const handleTriggerPopup = () => {
    console.log("GlobalContactSlider: Trigger popup clicked");
    
    // Track event if analytics available
    if (typeof window !== 'undefined' && typeof gtag !== 'undefined') {
      gtag('event', 'bonus_tab_clicked', {
        event_category: 'engagement',
        event_label: window.location.pathname
      });
    }
    
    // Call the trigger function from props
    onTriggerPopup();
  };
  
  // Force enabled to true for debugging
  const forceEnabled = true;
  
  console.log("GlobalContactSlider: About to render ContactSlider with enabled =", 
    forceEnabled ? "true (forced)" : config.enabled);
  
  return (
    <ContactSlider
      position={config.position}
      tabText={config.tabText}
      tabIcon={config.tabIcon}
      accentColor={config.accentColor}
      enabled={forceEnabled} // Force to true for debugging
      onTriggerPopup={handleTriggerPopup}
    />
  );
};


export default GlobalContactSlider;