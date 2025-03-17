
import { Link } from 'react-router-dom';
import { ExternalLink, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-isclub-navy text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Club Information */}
          <div className="space-y-4">
            <div className="flex items-center">
              <img 
                src="/lovable-uploads/f6b721e7-abf1-44b7-a95f-ac7bdbd6bc48.png" 
                alt="IS Club Logo" 
                className="h-12 w-auto mr-3" 
              />
              <div>
                <h3 className="text-xl font-bold">IS Club</h3>
                <p className="text-white/70">KUSOM</p>
              </div>
            </div>
            <p className="text-white/70">
              Empowering KUSOMites to excel in the evolving business and tech landscape.
            </p>
          </div>

          {/* External Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Important Links</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="https://ku.edu.np" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-white/70 hover:text-isclub-accent transition-colors"
                >
                  <ExternalLink size={16} className="mr-2" />
                  <span>Kathmandu University</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://kusom.edu.np" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-white/70 hover:text-isclub-accent transition-colors"
                >
                  <ExternalLink size={16} className="mr-2" />
                  <span>KUSOM Website</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Location */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <MapPin size={18} className="mr-2" />
              <span>Find Us</span>
            </h3>
            <div className="h-48 w-full rounded-lg overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.580397865114!2d85.36525651513008!3d27.66974473329259!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19cbf1436215%3A0x6df4caac1b9c11!2sKathmandu%20University%20School%20of%20Management!5e0!3m2!1sen!2snp!4v1675420619196!5m2!1sen!2snp" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="KUSOM Location"
              />
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-6 text-center text-white/60 text-sm">
          © {new Date().getFullYear()} All rights reserved. IS Club KUSOM.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
