import { useState, useEffect } from "react";
import { Menu, X, TrendingUp } from "lucide-react";
import { Button } from "./ui/button";
import { Link, useLocation } from "react-router-dom";

const navigationItems = [
  { id: 'home', label: 'Home', href: '/', external: false },
  { id: 'services', label: 'Services', href: '/services', external: false },
  { id: 'products', label: 'Products', href: '/products', external: false },
  { id: 'about', label: 'About Us', href: '/about', external: false }
];

const Header = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const redirectToAuth = () => {
    window.location.href = "https://app.automatealgos.in/";
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    const observerOptions = {
      threshold: 0.3,
      rootMargin: '-80px 0px -50% 0px'
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    // Observe all sections
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

  const handleNavigation = (item: any) => {
    if (item.href.startsWith('#')) {
      // Handle anchor scrolling for same page
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
    }
    // For external routes, Link component will handle navigation
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-border' 
          : 'bg-black/20 backdrop-blur-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-primary rounded-lg">
                <TrendingUp className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className={`text-xl font-bold transition-colors ${
                isScrolled ? 'text-foreground' : 'text-white'
              }`}>
                AlgoTrade
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navigationItems.map((item) => {
                const isActive = item.href.startsWith('#') 
                  ? activeSection === item.id 
                  : location.pathname === item.href;
                
                if (item.href.startsWith('#')) {
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

            {/* Desktop CTA */}
            <div className="hidden md:block">
              <Button 
                onClick={redirectToAuth}
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                Sign In / Sign Up
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
                
                if (item.href.startsWith('#')) {
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
              <div className="pt-4 border-t border-border">
                <Button 
                  onClick={redirectToAuth}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  Sign In / Sign Up
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