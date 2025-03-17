
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Lightbulb, Users, Zap } from 'lucide-react';

const Mission = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const features = [
    {
      icon: <Code className="h-8 w-8 text-isclub-teal" />,
      title: "Coding & Development",
      description: "Learn cutting-edge programming languages and development skills for the modern tech landscape."
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-isclub-teal" />,
      title: "Design & Innovation",
      description: "Sharpen your creative skills with design sessions, Figma competitions, and UI/UX workshops."
    },
    {
      icon: <Users className="h-8 w-8 text-isclub-teal" />,
      title: "Networking & Mentorship",
      description: "Connect with industry professionals and like-minded peers to expand your career opportunities."
    },
    {
      icon: <Zap className="h-8 w-8 text-isclub-teal" />,
      title: "Hands-on Experience",
      description: "Participate in hackathons, case studies, and real-world projects to build your portfolio."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-isclub-navy mb-4">Our Mission</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We bridge the gap between academic knowledge and practical IT skills, preparing students for success in a technology-driven business environment.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 hover:border-isclub-teal/30 transition-all duration-300"
              variants={itemVariants}
            >
              <div className="rounded-full bg-isclub-teal/10 p-4 mb-6 inline-block">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-isclub-navy mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Mission;
