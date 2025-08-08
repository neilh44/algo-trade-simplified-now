// components/ContactSlider.tsx
import React, { useState, useEffect } from 'react';
import { Gift } from 'lucide-react';

interface ContactSliderProps {
  position?: 'right' | 'left';
  tabText?: string;
  tabIcon?: string;
  accentColor?: string;
  enabled?: boolean;
  onTriggerPopup?: () => void; // Callback for triggering popup
}

const ContactSlider: React.FC<ContactSliderProps> = ({
  position = 'right',
  tabText = 'Claim My Bonus',
  tabIcon = 'gift',
  accentColor = 'from-primary to-primary/90',
  enabled = true,
  onTriggerPopup = () => console.log('No trigger function provided')
}) => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  
  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Function to render the correct icon
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'gift':
        return <Gift className="h-5 w-5" />;
      // Add other icon cases as needed
      default:
        return <Gift className="h-5 w-5" />;
    }
  };

  // Handle click event on the tab
  const handleClick = () => {
    console.log('ContactSlider: Tab clicked');
    onTriggerPopup();
  };

  // Don't render if disabled
  if (!enabled) return null;

  // Tab position classes based on position prop
  const tabPositionClasses = position === 'right' 
    ? 'right-0 rounded-l-lg' 
    : 'left-0 -translate-x-full rounded-r-lg';
  
  return (
    <div className={`fixed z-40 top-1/3 ${position === 'right' ? 'right-0' : 'left-0'}`}>
      {/* Tab/Handle */}
      <button
        onClick={handleClick}
        className={`${tabPositionClasses} h-32 w-12 ${
          isScrolled
            ? 'bg-gradient-to-b ' + accentColor
            : 'bg-blue-900'
        } flex flex-col items-center justify-center cursor-pointer shadow-lg text-primary-foreground transition-all duration-300 hover:brightness-110 active:brightness-90`}
        aria-label="Claim your bonus"
      >
        <div className="text-white font-medium text-xs whitespace-nowrap transform -rotate-90 flex items-center gap-1">
          {renderIcon(tabIcon)}
          <span>{tabText}</span>
        </div>
      </button>
    </div>
  );
};

export default ContactSlider;