
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Award, Code, Laptop, Lightning, Users } from 'lucide-react';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const benefits = [
    {
      icon: <Code className="h-8 w-8 text-isclub-teal" />,
      title: "Cutting-edge Skills",
      description: "Develop expertise in coding, design, and web development through workshops and hands-on sessions."
    },
    {
      icon: <Users className="h-8 w-8 text-isclub-teal" />,
      title: "Leadership Opportunities",
      description: "Lead and participate in impactful events and projects to build your management experience."
    },
    {
      icon: <Lightning className="h-8 w-8 text-isclub-teal" />,
      title: "Networking",
      description: "Connect with IT professionals, industry leaders, and like-minded peers to expand your horizons."
    },
    {
      icon: <Laptop className="h-8 w-8 text-isclub-teal" />,
      title: "Portfolio Building",
      description: "Create real projects and showcase your work to potential employers and collaborators."
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="pt-28 pb-16 bg-gradient-to-b from-isclub-navy to-isclub-teal text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              About IS Club
            </motion.h1>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-3xl mx-auto"
            >
              <p className="text-xl leading-relaxed">
                The KUSOM Information Systems Club is a hub for students eager to explore the vast world of computing, design, coding, and web development.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <motion.div 
                className="bg-gray-50 p-8 rounded-lg shadow-md"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-isclub-teal rounded-full text-white mr-4">
                    <Award size={24} />
                  </div>
                  <h2 className="text-2xl font-bold text-isclub-navy">Our Vision</h2>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Empowering KUSOMites to excel in the evolving business and tech landscape by bridging the gap between academic knowledge and practical skills needed in today's digital world.
                </p>
              </motion.div>

              <motion.div 
                className="bg-gray-50 p-8 rounded-lg shadow-md"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-isclub-teal rounded-full text-white mr-4">
                    <Lightning size={24} />
                  </div>
                  <h2 className="text-2xl font-bold text-isclub-navy">Our Mission</h2>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  We are committed to providing practical IT skills and experiences to KUSOM students through workshops, competitions, and industry connections, preparing them for success in a technology-driven business environment.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Benefits of Membership */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-isclub-navy mb-4">Benefits of Membership</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Membership in the Information Systems Club comes with unparalleled opportunities to grow and thrive.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div 
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="rounded-full bg-isclub-teal/10 p-4 mb-4 inline-block">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-isclub-navy mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </motion.div>
  );
};

export default About;
