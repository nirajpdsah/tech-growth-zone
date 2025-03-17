
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LogIn, Menu, X } from 'lucide-react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/80 shadow-md backdrop-blur-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img 
            src="/lovable-uploads/f6b721e7-abf1-44b7-a95f-ac7bdbd6bc48.png" 
            alt="IS Club Logo" 
            className="h-10 w-auto"
          />
          <span className={`ml-2 font-semibold text-lg transition-colors duration-300 ${
            scrolled ? 'text-isclub-navy' : 'text-white'
          }`}>
            IS Club
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link 
            to="/" 
            className={`nav-link ${scrolled ? 'text-isclub-navy' : 'text-white'} ${isActive('/') ? 'font-medium' : ''}`}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className={`nav-link ${scrolled ? 'text-isclub-navy' : 'text-white'} ${isActive('/about') ? 'font-medium' : ''}`}
          >
            About
          </Link>
          <Link 
            to="/board" 
            className={`nav-link ${scrolled ? 'text-isclub-navy' : 'text-white'} ${isActive('/board') ? 'font-medium' : ''}`}
          >
            Board Members
          </Link>
          <Link 
            to="/events" 
            className={`nav-link ${scrolled ? 'text-isclub-navy' : 'text-white'} ${isActive('/events') ? 'font-medium' : ''}`}
          >
            Events
          </Link>
        </nav>

        {/* Admin Login Button */}
        <Link 
          to="/login" 
          className="hidden md:flex glow-button items-center gap-2"
        >
          <LogIn size={16} />
          <span>Admin Login</span>
        </Link>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-isclub-navy"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link 
              to="/" 
              className="nav-link text-isclub-navy text-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="nav-link text-isclub-navy text-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/board" 
              className="nav-link text-isclub-navy text-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              Board Members
            </Link>
            <Link 
              to="/events" 
              className="nav-link text-isclub-navy text-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              Events
            </Link>
            <Link 
              to="/login" 
              className="glow-button flex items-center justify-center gap-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              <LogIn size={16} />
              <span>Admin Login</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
