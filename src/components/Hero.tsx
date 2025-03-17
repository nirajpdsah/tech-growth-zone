
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-isclub-navy/90 to-isclub-teal/40 mix-blend-multiply z-10" />
        <div className="absolute inset-0 bg-isclub-navy/30 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
          alt="KUSOM" 
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>

      {/* Animated Grid Overlay */}
      <div className="absolute inset-0 tech-background z-10 opacity-70" />

      {/* Content */}
      <div className="container relative z-20 mx-auto px-4 text-white">
        <div className="max-w-3xl text-center mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={loaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <img 
              src="/lovable-uploads/f6b721e7-abf1-44b7-a95f-ac7bdbd6bc48.png" 
              alt="IS Club Logo" 
              className="h-24 md:h-32 mx-auto"
            />
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={loaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            Information Systems Club
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={loaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-white/80 mb-8"
          >
            Kathmandu University School of Management
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={loaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="px-6 py-12 glass-card rounded-xl"
          >
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">Our Vision</h2>
            <p className="text-lg leading-relaxed">
              <span className="text-isclub-accent font-medium">Empowering KUSOMites</span> to excel in the evolving business and tech landscape.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={loaded ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-12 animate-float"
          >
            <div className="w-8 h-8 mx-auto border-2 border-white rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M5 12l7 7 7-7"/></svg>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
