
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CalendarDays, Users, Trophy, Laptop, Monitor, Gamepad2, MapPin } from 'lucide-react';

const EventsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [filter, setFilter] = useState('all');

  const events = [
    {
      id: 1,
      title: "IS Fair",
      category: "flagship",
      date: "November 15-20, 2023",
      location: "KUSOM Campus",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      description: "Our annual flagship event featuring Figma competitions, tech talks, gaming tournaments, and innovative project showcases.",
      icon: <Trophy className="h-6 w-6" />
    },
    {
      id: 2,
      title: "Figma Competition",
      category: "design",
      date: "October 5, 2023",
      location: "Virtual Event",
      image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      description: "Showcase your design prowess in this competitive event focused on UI/UX design using Figma.",
      icon: <Monitor className="h-6 w-6" />
    },
    {
      id: 3,
      title: "Business Hackathon",
      category: "hackathon",
      date: "September 18-19, 2023",
      location: "KUSOM Innovation Lab",
      image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      description: "A 48-hour challenge to develop innovative solutions for real business problems using technology.",
      icon: <Laptop className="h-6 w-6" />
    },
    {
      id: 4,
      title: "IS Talk: Future of AI",
      category: "talk",
      date: "August 25, 2023",
      location: "KUSOM Auditorium",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      description: "Industry experts discuss the latest trends and future of artificial intelligence in business.",
      icon: <Users className="h-6 w-6" />
    },
    {
      id: 5,
      title: "E-Games Tournament",
      category: "gaming",
      date: "July 10, 2023",
      location: "Virtual Event",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      description: "Compete in popular games like Valorant, CSGO, and FIFA in our annual gaming tournament.",
      icon: <Gamepad2 className="h-6 w-6" />
    },
    {
      id: 6,
      title: "Web Development Workshop",
      category: "workshop",
      date: "June 15, 2023",
      location: "Computer Lab",
      image: "https://images.unsplash.com/photo-1552308995-2baac1ad5490?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      description: "Hands-on workshop on modern web development techniques using React and Node.js.",
      icon: <Laptop className="h-6 w-6" />
    }
  ];

  const filteredEvents = filter === 'all' ? events : events.filter(event => event.category === filter);

  const categories = [
    { id: 'all', name: 'All Events', icon: <CalendarDays className="h-4 w-4 mr-2" /> },
    { id: 'flagship', name: 'Flagship', icon: <Trophy className="h-4 w-4 mr-2" /> },
    { id: 'hackathon', name: 'Hackathons', icon: <Laptop className="h-4 w-4 mr-2" /> },
    { id: 'design', name: 'Design', icon: <Monitor className="h-4 w-4 mr-2" /> },
    { id: 'talk', name: 'Talks', icon: <Users className="h-4 w-4 mr-2" /> },
    { id: 'gaming', name: 'Gaming', icon: <Gamepad2 className="h-4 w-4 mr-2" /> },
    { id: 'workshop', name: 'Workshops', icon: <Laptop className="h-4 w-4 mr-2" /> }
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
              Events
            </motion.h1>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-3xl mx-auto"
            >
              <p className="text-xl leading-relaxed">
                Discover our exciting lineup of events, workshops, and competitions.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Events Listing */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            {/* Filters */}
            <div className="mb-10 flex flex-wrap gap-2 justify-center">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setFilter(category.id)}
                  className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    filter === category.id 
                      ? 'bg-isclub-teal text-white' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.icon}
                  {category.name}
                </button>
              ))}
            </div>

            {/* Events Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredEvents.map((event) => (
                <motion.div 
                  key={event.id}
                  className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-isclub-teal/30"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={event.image} 
                      alt={event.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute top-4 right-4 bg-isclub-navy/80 text-white text-xs px-2 py-1 rounded-full uppercase tracking-wider">
                      {event.category}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center mb-2">
                      <div className="bg-isclub-teal/10 p-2 rounded-full text-isclub-teal mr-3">
                        {event.icon}
                      </div>
                      <h3 className="text-xl font-bold text-isclub-navy">{event.title}</h3>
                    </div>
                    
                    <div className="mb-4 text-sm text-gray-500">
                      <div className="flex items-center mb-1">
                        <CalendarDays size={16} className="mr-2" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin size={16} className="mr-2" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-6">{event.description}</p>
                    
                    <button className="glow-button w-full flex justify-center items-center">
                      Learn More
                    </button>
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

export default EventsPage;
