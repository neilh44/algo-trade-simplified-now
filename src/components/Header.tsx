import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Button } from "./ui/button";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "@/contexts/ThemeContext";

const navigationItems = [
  { id: 'home', label: 'Home', href: '/', external: false, newTab: false },
  { id: 'products', label: 'Product', href: '/products', external: false, newTab: true },
  { id: 'strategies', label: 'Strategies', href: '/strategies', external: true, newTab: true },
  { id: 'courses', label: 'Courses', href: '/courses', external: false, newTab: true },
  { id: 'pricing', label: 'Pricing', href: '/pricing', external: false, newTab: false },
  { id: 'about', label: 'About Us', href: '/about', external: false, newTab: false }
];

// Enhanced Theme Toggle Component
const ThemeToggle = ({ isScrolled }) => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <button
      onClick={toggleTheme}
      className={`relative p-2 rounded-lg transition-all duration-300 ease-in-out hover:scale-105 ${
        isScrolled 
          ? 'bg-accent hover:bg-accent/80 text-foreground' 
          : 'bg-white/10 hover:bg-white/20 text-white'
      }`}
      aria-label="Toggle theme"
    >
      <div className="relative w-5 h-5">
        {/* Sun Icon */}
        <Sun 
          className={`absolute inset-0 w-5 h-5 transition-all duration-300 ${
            theme === 'light' 
              ? 'opacity-100 rotate-0 scale-100' 
              : 'opacity-0 rotate-90 scale-75'
          }`}
        />
        {/* Moon Icon */}
        <Moon 
          className={`absolute inset-0 w-5 h-5 transition-all duration-300 ${
            theme === 'dark' 
              ? 'opacity-100 rotate-0 scale-100' 
              : 'opacity-0 -rotate-90 scale-75'
          }`}
        />
      </div>
    </button>
  );
};

const Header = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { theme } = useTheme();

  const redirectToAuth = () => {
    window.location.href = "https://app.automatealgos.in/authentication/side-register";
  };

  const redirectToLogin = () => {
    window.location.href = "https://app.automatealgos.in/authentication/login";
  };

  const redirectToHome = () => {
    window.location.href = "https://automatealgos.in";
  };

  const redirectToStrategies = () => {
    window.open("https://strategies.automatealgos.in", "_blank");
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    const observerOptions = {
      threshold: 0.3,
      rootMargin: '-80px 0px -50% 0px'
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    navigationItems.forEach(item => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const handleNavigation = (item) => {
    // Handle external redirects
    if (item.external) {
      if (item.id === 'strategies') {
        redirectToStrategies();
        return;
      }
    }

    // Handle internal navigation with new tab support
    if (item.href.startsWith('#')) {
      const targetId = item.href.replace('#', '');
      const element = document.getElementById(targetId);
      
      if (element) {
        const headerHeight = 80;
        const elementPosition = element.offsetTop - headerHeight;
        
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        });
      }
    } else if (item.newTab) {
      // Open in new tab for specified items
      const baseUrl = window.location.origin;
      window.open(`${baseUrl}${item.href}`, "_blank");
    }
    
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-md shadow-sm border-b border-border' 
          : 'bg-blue-900 backdrop-blur-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <button 
              onClick={redirectToHome}
              className="flex items-center space-x-2 transition-opacity hover:opacity-80"
            >
              <div className="p-2 bg-white rounded-lg">
                <img src="/logo.svg" alt="Automate Algos Logo" className="h-6 w-6" />
              </div>
              <span className={`text-xl font-bold transition-colors ${
                isScrolled ? 'text-foreground' : 'text-white'
              }`}>
                Automate Algos
              </span>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navigationItems.map((item) => {
                const isActive = item.href.startsWith('#') 
                  ? activeSection === item.id 
                  : location.pathname === item.href;
                
                if (item.external) {
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleNavigation(item)}
                      className={`px-3 py-2 text-sm font-medium transition-colors relative ${
                        isActive
                          ? isScrolled 
                            ? 'text-primary' 
                            : 'text-white'
                          : isScrolled 
                            ? 'text-muted-foreground hover:text-foreground' 
                            : 'text-white/80 hover:text-white'
                      }`}
                    >
                      {item.label}
                      {isActive && (
                        <div className={`absolute bottom-0 left-0 right-0 h-0.5 ${
                          isScrolled ? 'bg-primary' : 'bg-white'
                        } transition-colors`} />
                      )}
                    </button>
                  );
                } else if (item.href.startsWith('#')) {
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleNavigation(item)}
                      className={`px-3 py-2 text-sm font-medium transition-colors relative ${
                        isActive
                          ? isScrolled 
                            ? 'text-primary' 
                            : 'text-white'
                          : isScrolled 
                            ? 'text-muted-foreground hover:text-foreground' 
                            : 'text-white/80 hover:text-white'
                      }`}
                    >
                      {item.label}
                      {isActive && (
                        <div className={`absolute bottom-0 left-0 right-0 h-0.5 ${
                          isScrolled ? 'bg-primary' : 'bg-white'
                        } transition-colors`} />
                      )}
                    </button>
                  );
                } else if (item.newTab) {
                  // Render as button for new tab items
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleNavigation(item)}
                      className={`px-3 py-2 text-sm font-medium transition-colors relative ${
                        isActive
                          ? isScrolled 
                            ? 'text-primary' 
                            : 'text-white'
                          : isScrolled 
                            ? 'text-muted-foreground hover:text-foreground' 
                            : 'text-white/80 hover:text-white'
                      }`}
                    >
                      {item.label}
                      {isActive && (
                        <div className={`absolute bottom-0 left-0 right-0 h-0.5 ${
                          isScrolled ? 'bg-primary' : 'bg-white'
                        } transition-colors`} />
                      )}
                    </button>
                  );
                } else {
                  // Regular Link for same tab navigation
                  return (
                    <Link
                      key={item.id}
                      to={item.href}
                      onClick={() => window.scrollTo(0, 0)}
                      className={`px-3 py-2 text-sm font-medium transition-colors relative ${
                        isActive
                          ? isScrolled 
                            ? 'text-primary' 
                            : 'text-white'
                          : isScrolled 
                            ? 'text-muted-foreground hover:text-foreground' 
                            : 'text-white/80 hover:text-white'
                      }`}
                    >
                      {item.label}
                      {isActive && (
                        <div className={`absolute bottom-0 left-0 right-0 h-0.5 ${
                          isScrolled ? 'bg-primary' : 'bg-white'
                        } transition-colors`} />
                      )}
                    </Link>
                  );
                }
              })}
            </nav>

            {/* Desktop CTA + Theme Toggle */}
            <div className="hidden md:flex items-center space-x-4">
              {/* Enhanced Theme Toggle */}
              <ThemeToggle isScrolled={isScrolled} />
              
              <Button 
                onClick={redirectToLogin}
                variant="outline"
                className="bg-primary hover:bg-primary/90 text-primary-foreground border-2 border-primary transition-all duration-300 font-medium px-6 shadow-lg hover:shadow-xl"
              >
                Login
              </Button>
              <Button 
                onClick={redirectToAuth}
                className="bg-primary hover:bg-primary/90 text-primary-foreground border-2 border-primary transition-all duration-300 font-medium px-6 shadow-lg hover:shadow-xl"
              >
                Sign Up
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-2 rounded-md transition-colors ${
                isScrolled 
                  ? 'text-foreground hover:bg-accent' 
                  : 'text-white hover:bg-white/10'
              }`}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="fixed inset-0 bg-black/50" onClick={() => setIsMobileMenuOpen(false)} />
          <div className="fixed top-20 left-0 right-0 bg-background border-b border-border shadow-lg">
            <nav className="px-4 py-6 space-y-4">
              {navigationItems.map((item) => {
                const isActive = item.href.startsWith('#') 
                  ? activeSection === item.id 
                  : location.pathname === item.href;
                
                if (item.external) {
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleNavigation(item)}
                      className={`block w-full text-left px-3 py-3 text-base font-medium transition-colors ${
                        isActive
                          ? 'text-primary bg-primary/10'
                          : 'text-foreground hover:text-primary hover:bg-accent'
                      }`}
                    >
                      {item.label}
                    </button>
                  );
                } else if (item.href.startsWith('#')) {
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleNavigation(item)}
                      className={`block w-full text-left px-3 py-3 text-base font-medium transition-colors ${
                        isActive
                          ? 'text-primary bg-primary/10'
                          : 'text-foreground hover:text-primary hover:bg-accent'
                      }`}
                    >
                      {item.label}
                    </button>
                  );
                } else if (item.newTab) {
                  // Handle new tab items in mobile menu
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleNavigation(item)}
                      className={`block w-full text-left px-3 py-3 text-base font-medium transition-colors ${
                        isActive
                          ? 'text-primary bg-primary/10'
                          : 'text-foreground hover:text-primary hover:bg-accent'
                      }`}
                    >
                      {item.label}
                    </button>
                  );
                } else {
                  return (
                    <Link
                      key={item.id}
                      to={item.href}
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        setTimeout(() => window.scrollTo(0, 0), 100);
                      }}
                      className={`block w-full text-left px-3 py-3 text-base font-medium transition-colors ${
                        isActive
                          ? 'text-primary bg-primary/10'
                          : 'text-foreground hover:text-primary hover:bg-accent'
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                }
              })}
              
              {/* Enhanced Theme Toggle in Mobile Menu */}
              <div className="flex items-center justify-between px-3 py-4 border-t border-border bg-accent/30 rounded-lg mx-1">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-background rounded-md">
                    {theme === 'light' ? (
                      <Sun className="w-5 h-5 text-primary" />
                    ) : (
                      <Moon className="w-5 h-5 text-primary" />
                    )}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-base font-medium text-foreground">
                      {theme === 'light' ? 'Light Mode' : 'Dark Mode'}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      Switch appearance
                    </span>
                  </div>
                </div>
                <ThemeToggle isScrolled={true} />
              </div>
              
              <div className="pt-4 space-y-3">
                <Button 
                  onClick={redirectToLogin}
                  variant="outline"
                  className="w-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-medium py-3"
                >
                  Login
                </Button>
                <Button 
                  onClick={redirectToAuth}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground border-2 border-primary transition-all duration-300 font-medium py-3 shadow-lg"
                >
                  Sign Up
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;