
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Github, Linkedin, Mail } from 'lucide-react';

const BoardMembers = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const executives = [
    {
      name: "John Doe",
      position: "President",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
      bio: "Computer Science student with a passion for web development and AI.",
      social: {
        linkedin: "#",
        github: "#",
        email: "mailto:john@example.com"
      }
    },
    {
      name: "Jane Smith",
      position: "Vice President",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
      bio: "Digital marketing specialist focusing on UI/UX design and user research.",
      social: {
        linkedin: "#",
        github: "#",
        email: "mailto:jane@example.com"
      }
    },
    {
      name: "David Kim",
      position: "Secretary",
      image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
      bio: "Business administration major with expertise in project management.",
      social: {
        linkedin: "#",
        github: "#",
        email: "mailto:david@example.com"
      }
    },
    {
      name: "Sarah Johnson",
      position: "Treasurer",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
      bio: "Finance student with a keen interest in blockchain technology.",
      social: {
        linkedin: "#",
        github: "#",
        email: "mailto:sarah@example.com"
      }
    },
    {
      name: "Michael Chen",
      position: "Technical Lead",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
      bio: "Computer engineering student specializing in full-stack development.",
      social: {
        linkedin: "#",
        github: "#",
        email: "mailto:michael@example.com"
      }
    },
    {
      name: "Emily Wang",
      position: "Event Coordinator",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=388&q=80",
      bio: "Marketing major with a creative approach to event planning and promotion.",
      social: {
        linkedin: "#",
        github: "#",
        email: "mailto:emily@example.com"
      }
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
              Board Members
            </motion.h1>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-3xl mx-auto"
            >
              <p className="text-xl leading-relaxed">
                Meet the dedicated team leading the IS Club for the current academic year.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Board Members Grid */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {executives.map((member, index) => (
                <motion.div 
                  key={index}
                  className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-isclub-navy/80 to-transparent p-4">
                      <h3 className="text-xl font-bold text-white">{member.name}</h3>
                      <p className="text-isclub-accent">{member.position}</p>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <p className="text-gray-600 mb-4">{member.bio}</p>
                    
                    <div className="flex space-x-4">
                      <a 
                        href={member.social.linkedin}
                        className="text-gray-500 hover:text-isclub-teal transition-colors"
                        aria-label={`${member.name}'s LinkedIn`}
                      >
                        <Linkedin size={20} />
                      </a>
                      <a 
                        href={member.social.github}
                        className="text-gray-500 hover:text-isclub-teal transition-colors"
                        aria-label={`${member.name}'s GitHub`}
                      >
                        <Github size={20} />
                      </a>
                      <a 
                        href={member.social.email}
                        className="text-gray-500 hover:text-isclub-teal transition-colors"
                        aria-label={`Email ${member.name}`}
                      >
                        <Mail size={20} />
                      </a>
                    </div>
                  </div>
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

export default BoardMembers;
