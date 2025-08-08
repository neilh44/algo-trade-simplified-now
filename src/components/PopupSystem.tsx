// components/PopupSystem.tsx
import React, { useState } from 'react';
import GlobalContactSlider from './GlobalContactSlider';
import GlobalPopupIntentExit from './GlobalPopupIntentExit';

const PopupSystem: React.FC = () => {
  const [shouldTriggerPopup, setShouldTriggerPopup] = useState(false);
  
  // Function to trigger the popup
  const handleTriggerPopup = () => {
    setShouldTriggerPopup(true);
  };
  
  // Function to reset the trigger state when popup is closed
  const handlePopupClose = () => {
    setShouldTriggerPopup(false);
  };
  
  return (
    <>
      {/* The contact slider that will trigger the popup */}
      <GlobalContactSlider onTriggerPopup={handleTriggerPopup} />
      
      {/* The popup that will be triggered by the slider */}
      <GlobalPopupIntentExit 
        shouldTrigger={shouldTriggerPopup} 
        onClose={handlePopupClose} 
      />
    </>
  );
};

export default PopupSystem;