
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, Monitor, Users, Award } from 'lucide-react';

const EventsComponent = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const events = [
    {
      title: "IS Fair (Flagship Event)",
      description: "A celebration of technology featuring Figma competitions, talks, e-games, and innovative student projects.",
      icon: <Award className="h-8 w-8 text-white" />,
      color: "bg-indigo-600"
    },
    {
      title: "Design Sessions",
      description: "Hands-on workshops to sharpen your design skills with industry-standard tools and techniques.",
      icon: <Monitor className="h-8 w-8 text-white" />,
      color: "bg-blue-600"
    },
    {
      title: "Business Hackathon",
      description: "Collaborate, innovate, and tackle real-world business challenges through technology solutions.",
      icon: <Users className="h-8 w-8 text-white" />,
      color: "bg-indigo-600"
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
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="py-20 bg-gray-900 tech-dot-pattern" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center mb-12">
          <div className="relative">
            <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 blur-md opacity-75 animate-pulse-glow"></div>
            <div className="relative flex items-center bg-gray-800 px-6 py-3 rounded-lg">
              <Calendar className="text-cyan-400 mr-3 h-7 w-7" />
              <h2 className="text-3xl md:text-4xl font-bold text-white">Featured Events</h2>
            </div>
          </div>
        </div>

        <motion.div 
          className="space-y-6 max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {events.map((event, index) => (
            <motion.div 
              key={index}
              className="cyberpunk-card bg-gray-800 p-6 rounded-lg hover:shadow-[0_0_15px_rgba(56,189,248,0.4)] transition-all duration-300"
              variants={itemVariants}
            >
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className={`${event.color} p-4 rounded-lg flex items-center justify-center pulse-border`}>
                  {event.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2 flex items-center">
                    {event.title}
                    <span className="inline-block w-2 h-2 ml-2 rounded-full bg-cyan-400 animate-pulse"></span>
                  </h3>
                  <p className="text-gray-300">{event.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <a 
            href="/events" 
            className="glow-button inline-flex items-center"
          >
            <span>View All Events</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default EventsComponent;
