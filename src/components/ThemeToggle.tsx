import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

interface ThemeToggleProps {
  isScrolled?: boolean;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ isScrolled = false }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`group relative p-2.5 rounded-xl transition-all duration-300 hover:scale-105 border ${
        isScrolled
          ? 'bg-surface-bright hover:bg-hover-background text-text-primary border-border shadow-sm'
          : 'bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm border-white/20 hover:border-white/30'
      }`}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
    >
      <div className="relative w-5 h-5">
        <Sun 
          className={`absolute inset-0 transition-all duration-500 ease-out ${
            theme === 'light' 
              ? 'opacity-100 rotate-0 scale-100' 
              : 'opacity-0 rotate-180 scale-50'
          } ${isScrolled ? 'text-matdash-primary' : 'text-white'}`}
        />
        <Moon 
          className={`absolute inset-0 transition-all duration-500 ease-out ${
            theme === 'dark' 
              ? 'opacity-100 rotate-0 scale-100' 
              : 'opacity-0 -rotate-180 scale-50'
          } ${isScrolled ? 'text-matdash-primary' : 'text-white'}`}
        />
      </div>
      
      {/* Subtle glow effect on hover */}
      <div className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
        isScrolled 
          ? 'bg-gradient-to-r from-matdash-primary/5 to-matdash-secondary/5' 
          : 'bg-white/5'
      }`} />
    </button>
  );
};

export default ThemeToggle;
