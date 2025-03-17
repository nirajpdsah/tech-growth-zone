
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
      color: "bg-isclub-teal"
    },
    {
      title: "Design Sessions",
      description: "Hands-on workshops to sharpen your design skills with industry-standard tools and techniques.",
      icon: <Monitor className="h-8 w-8 text-white" />,
      color: "bg-isclub-navy"
    },
    {
      title: "Business Hackathon",
      description: "Collaborate, innovate, and tackle real-world business challenges through technology solutions.",
      icon: <Users className="h-8 w-8 text-white" />,
      color: "bg-isclub-teal"
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
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center mb-12">
          <Calendar className="text-isclub-teal mr-3 h-7 w-7" />
          <h2 className="text-3xl md:text-4xl font-bold text-isclub-navy">Featured Events</h2>
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
              className="flex flex-col md:flex-row items-start gap-6 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              variants={itemVariants}
            >
              <div className={`${event.color} p-4 rounded-lg flex items-center justify-center`}>
                {event.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-isclub-navy mb-2">{event.title}</h3>
                <p className="text-gray-600">{event.description}</p>
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
