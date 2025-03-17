
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { LogOut, Settings, Users, Calendar, FileText, Edit, Trash2, Plus, Save, X, LayoutDashboard } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState('dashboard');
  const [editingEvent, setEditingEvent] = useState<number | null>(null);
  const [newEventTitle, setNewEventTitle] = useState('');
  const [newEventDate, setNewEventDate] = useState('');
  const [newEventCategory, setNewEventCategory] = useState('');
  const [newEventLocation, setNewEventLocation] = useState('');
  
  const [events, setEvents] = useState([
    { id: 1, title: "IS Fair", date: "November 15-20, 2023", category: "flagship", location: "KUSOM Campus" },
    { id: 2, title: "Figma Competition", date: "October 5, 2023", category: "design", location: "Virtual Event" },
    { id: 3, title: "Business Hackathon", date: "September 18-19, 2023", category: "hackathon", location: "KUSOM Innovation Lab" }
  ]);
  
  useEffect(() => {
    // Simple authorization check - in a real app, this would verify an auth token
    const isAuthenticated = localStorage.getItem('isAdmin') === 'true';
    if (!isAuthenticated) {
      localStorage.setItem('isAdmin', 'true'); // For demo purposes only
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('isAdmin');
    toast({
      title: "Logged out",
      description: "You have been successfully logged out",
      variant: "default",
    });
    navigate('/');
  };

  const handleEditEvent = (id: number) => {
    const event = events.find(e => e.id === id);
    if (event) {
      setEditingEvent(id);
      setNewEventTitle(event.title);
      setNewEventDate(event.date);
      setNewEventCategory(event.category);
      setNewEventLocation(event.location);
    }
  };

  const handleSaveEvent = (id: number) => {
    setEvents(events.map(event => 
      event.id === id ? {
        ...event,
        title: newEventTitle,
        date: newEventDate,
        category: newEventCategory,
        location: newEventLocation
      } : event
    ));
    setEditingEvent(null);
    toast({
      title: "Event updated",
      description: "The event has been successfully updated",
      variant: "default",
    });
  };

  const handleAddEvent = () => {
    const newEvent = {
      id: Math.max(...events.map(e => e.id), 0) + 1,
      title: "New Event",
      date: "Date TBD",
      category: "other",
      location: "Location TBD"
    };
    setEvents([...events, newEvent]);
    handleEditEvent(newEvent.id);
    toast({
      title: "Event added",
      description: "A new event has been added",
      variant: "default",
    });
  };

  const handleDeleteEvent = (id: number) => {
    setEvents(events.filter(event => event.id !== id));
    toast({
      title: "Event deleted",
      description: "The event has been successfully deleted",
      variant: "destructive",
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-50"
    >
      {/* Admin Header */}
      <header className="bg-isclub-navy text-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/f6b721e7-abf1-44b7-a95f-ac7bdbd6bc48.png" 
              alt="IS Club Logo" 
              className="h-10 w-auto mr-3"
            />
            <h1 className="text-xl font-bold">IS Club Admin</h1>
          </div>
          
          <button
            onClick={handleLogout}
            className="flex items-center px-4 py-2 bg-isclub-teal/20 hover:bg-isclub-teal/30 rounded-md transition-colors"
          >
            <LogOut size={18} className="mr-2" />
            <span>Logout</span>
          </button>
        </div>
      </header>
      
      {/* Admin Dashboard */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar */}
          <div className="w-full md:w-64 bg-white rounded-lg shadow-md p-4">
            <nav>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => setActiveTab('dashboard')}
                    className={`w-full flex items-center px-4 py-2 rounded-md transition-colors ${
                      activeTab === 'dashboard' ? 'bg-isclub-teal text-white' : 'hover:bg-gray-100'
                    }`}
                  >
                    <LayoutDashboard size={18} className="mr-3" />
                    <span>Dashboard</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveTab('events')}
                    className={`w-full flex items-center px-4 py-2 rounded-md transition-colors ${
                      activeTab === 'events' ? 'bg-isclub-teal text-white' : 'hover:bg-gray-100'
                    }`}
                  >
                    <Calendar size={18} className="mr-3" />
                    <span>Events</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveTab('members')}
                    className={`w-full flex items-center px-4 py-2 rounded-md transition-colors ${
                      activeTab === 'members' ? 'bg-isclub-teal text-white' : 'hover:bg-gray-100'
                    }`}
                  >
                    <Users size={18} className="mr-3" />
                    <span>Members</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveTab('content')}
                    className={`w-full flex items-center px-4 py-2 rounded-md transition-colors ${
                      activeTab === 'content' ? 'bg-isclub-teal text-white' : 'hover:bg-gray-100'
                    }`}
                  >
                    <FileText size={18} className="mr-3" />
                    <span>Content</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveTab('settings')}
                    className={`w-full flex items-center px-4 py-2 rounded-md transition-colors ${
                      activeTab === 'settings' ? 'bg-isclub-teal text-white' : 'hover:bg-gray-100'
                    }`}
                  >
                    <Settings size={18} className="mr-3" />
                    <span>Settings</span>
                  </button>
                </li>
              </ul>
            </nav>
          </div>
          
          {/* Main Content */}
          <div className="flex-1 bg-white rounded-lg shadow-md p-6">
            {activeTab === 'dashboard' && (
              <div>
                <h2 className="text-2xl font-bold text-isclub-navy mb-6">Dashboard</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-gradient-to-br from-isclub-teal to-isclub-navy text-white rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-2">Total Events</h3>
                    <p className="text-3xl font-bold">{events.length}</p>
                  </div>
                  <div className="bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-2">Total Members</h3>
                    <p className="text-3xl font-bold">42</p>
                  </div>
                  <div className="bg-gradient-to-br from-amber-500 to-pink-600 text-white rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-2">Upcoming Events</h3>
                    <p className="text-3xl font-bold">3</p>
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-isclub-navy mb-4">Quick Actions</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <button className="p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow text-center">
                      <Calendar className="h-8 w-8 mx-auto mb-2 text-isclub-teal" />
                      <span>Add Event</span>
                    </button>
                    <button className="p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow text-center">
                      <Users className="h-8 w-8 mx-auto mb-2 text-isclub-teal" />
                      <span>Add Member</span>
                    </button>
                    <button className="p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow text-center">
                      <FileText className="h-8 w-8 mx-auto mb-2 text-isclub-teal" />
                      <span>Edit Content</span>
                    </button>
                    <button className="p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow text-center">
                      <Settings className="h-8 w-8 mx-auto mb-2 text-isclub-teal" />
                      <span>Settings</span>
                    </button>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'events' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-isclub-navy">Events Management</h2>
                  <button 
                    onClick={handleAddEvent}
                    className="glow-button flex items-center"
                  >
                    <Plus size={18} className="mr-2" />
                    <span>Add Event</span>
                  </button>
                </div>
                
                <div className="bg-gray-50 rounded-lg overflow-hidden">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-100">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Title
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Date
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Category
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Location
                        </th>
                        <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {events.map((event) => (
                        <tr key={event.id}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            {editingEvent === event.id ? (
                              <input
                                type="text"
                                value={newEventTitle}
                                onChange={(e) => setNewEventTitle(e.target.value)}
                                className="w-full px-2 py-1 border border-gray-300 rounded-md"
                              />
                            ) : (
                              <div className="text-sm font-medium text-gray-900">{event.title}</div>
                            )}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            {editingEvent === event.id ? (
                              <input
                                type="text"
                                value={newEventDate}
                                onChange={(e) => setNewEventDate(e.target.value)}
                                className="w-full px-2 py-1 border border-gray-300 rounded-md"
                              />
                            ) : (
                              <div className="text-sm text-gray-500">{event.date}</div>
                            )}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            {editingEvent === event.id ? (
                              <input
                                type="text"
                                value={newEventCategory}
                                onChange={(e) => setNewEventCategory(e.target.value)}
                                className="w-full px-2 py-1 border border-gray-300 rounded-md"
                              />
                            ) : (
                              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                {event.category}
                              </span>
                            )}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            {editingEvent === event.id ? (
                              <input
                                type="text"
                                value={newEventLocation}
                                onChange={(e) => setNewEventLocation(e.target.value)}
                                className="w-full px-2 py-1 border border-gray-300 rounded-md"
                              />
                            ) : (
                              <div className="text-sm text-gray-500">{event.location}</div>
                            )}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            {editingEvent === event.id ? (
                              <div className="flex justify-end space-x-2">
                                <button 
                                  onClick={() => handleSaveEvent(event.id)}
                                  className="text-green-600 hover:text-green-900"
                                >
                                  <Save size={18} />
                                </button>
                                <button 
                                  onClick={() => setEditingEvent(null)}
                                  className="text-gray-600 hover:text-gray-900"
                                >
                                  <X size={18} />
                                </button>
                              </div>
                            ) : (
                              <div className="flex justify-end space-x-2">
                                <button 
                                  onClick={() => handleEditEvent(event.id)}
                                  className="text-indigo-600 hover:text-indigo-900"
                                >
                                  <Edit size={18} />
                                </button>
                                <button 
                                  onClick={() => handleDeleteEvent(event.id)}
                                  className="text-red-600 hover:text-red-900"
                                >
                                  <Trash2 size={18} />
                                </button>
                              </div>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
            
            {activeTab === 'members' && (
              <div>
                <h2 className="text-2xl font-bold text-isclub-navy mb-6">Members Management</h2>
                <p className="text-gray-500">This section is under development. You will be able to manage club members here.</p>
              </div>
            )}
            
            {activeTab === 'content' && (
              <div>
                <h2 className="text-2xl font-bold text-isclub-navy mb-6">Content Management</h2>
                <p className="text-gray-500">This section is under development. You will be able to edit website content here.</p>
              </div>
            )}
            
            {activeTab === 'settings' && (
              <div>
                <h2 className="text-2xl font-bold text-isclub-navy mb-6">Settings</h2>
                <p className="text-gray-500">This section is under development. You will be able to manage website settings here.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AdminDashboard;
