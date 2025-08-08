// hooks/useContactSlider.ts
import { useLocation } from 'react-router-dom';

// Define the type for the slider configuration
interface ContactSliderConfig {
  enabled: boolean;
  position: 'right' | 'left';
  tabText: string;
  tabIcon: string;
  accentColor: string;
}

export const useContactSlider = (): ContactSliderConfig => {
  const location = useLocation();
  const currentPath = location.pathname;
  
  // Default configuration
  const defaultConfig: ContactSliderConfig = {
    enabled: true,
    position: 'right',
    tabText: 'Claim My Bonus',
    tabIcon: 'gift',
    accentColor: 'from-green-600 to-green-500'
  };
  
  // Path-specific configurations
  const pathConfigs: Record<string, Partial<ContactSliderConfig>> = {
    // Disable on specific pages
    '/contact': { enabled: false },
    '/pricing': { enabled: false },
    '/login': { enabled: false },
    '/register': { enabled: false },
    
    // Custom configurations for different paths
    '/blog': { 
      tabText: 'Get Free Guide',
      accentColor: 'from-blue-600 to-blue-500'
    },
    '/tools': {
      tabText: 'Unlock Tools',
      accentColor: 'from-purple-600 to-purple-500'
    }
  };
  
  // Get the configuration for the current path, or use the default
  const pathConfig = pathConfigs[currentPath] || {};
  
  // Merge the default config with any path-specific overrides
  return {
    ...defaultConfig,
    ...pathConfig
  };
};

export default useContactSlider;