// components/GlobalContactSlider.tsx
import React from 'react';
import ContactSlider from './ContactSlider';
import { useContactSlider } from '../hooks/useContactSlider';

interface GlobalContactSliderProps {
  onTriggerPopup: () => void; // Function to trigger the popup
}

const GlobalContactSlider: React.FC<GlobalContactSliderProps> = ({ 
  onTriggerPopup 
}) => {
  const config = useContactSlider();
  
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
  
  return (
    <ContactSlider
      position={config.position}
      tabText={config.tabText}
      tabIcon={config.tabIcon}
      accentColor={config.accentColor}
      enabled={config.enabled}
      onTriggerPopup={handleTriggerPopup}
    />
  );
};

export default GlobalContactSlider;