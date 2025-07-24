// hooks/usePopupConfig.ts
import { useLocation } from 'react-router-dom';
import { POPUP_CONFIGS, DEFAULT_CONFIG, PopupConfig } from '../config/popupConfig';

export const usePopupConfig = (): PopupConfig => {
  const location = useLocation();
  const currentPath = location.pathname;
  
  // Check for exact match
  if (POPUP_CONFIGS[currentPath]) {
    return POPUP_CONFIGS[currentPath];
  }
  
  // Check for admin routes (any path starting with /admin)
  if (currentPath.startsWith('/admin')) {
    return { enabled: false, showAfterSeconds: 0 };
  }
  
  // Check for dashboard routes (protected routes that shouldn't show popup)
  const protectedRoutes = ['/dashboard', '/FreeCourses', '/Resources', '/Progress', '/LiveSessions', '/Profile', '/Support'];
  if (protectedRoutes.some(route => currentPath.startsWith(route))) {
    return { enabled: false, showAfterSeconds: 0 };
  }
  
  // Return default config for unmatched routes
  return DEFAULT_CONFIG;
};