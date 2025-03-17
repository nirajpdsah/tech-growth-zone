
import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  LogOut, Settings, Users, Calendar, FileText, Edit, Trash2, Plus, 
  Save, X, LayoutDashboard, Image, Type, Monitor, Link, Upload, Palette
} from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [editingEvent, setEditingEvent] = useState<number | null>(null);
  const [newEventTitle, setNewEventTitle] = useState('');
  const [newEventDate, setNewEventDate] = useState('');
  const [newEventCategory, setNewEventCategory] = useState('');
  const [newEventLocation, setNewEventLocation] = useState('');
  const [heroBackgroundUrl, setHeroBackgroundUrl] = useState("https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80");
  const [websiteColors, setWebsiteColors] = useState({
    primary: '#8B5CF6',
    secondary: '#3B82F6',
    accent: '#22D3EE'
  });
  const [siteContent, setSiteContent] = useState({
    heroTitle: "Information Systems Club",
    heroSubtitle: "Kathmandu University School of Management",
    vision: "Empowering KUSOMites to excel in the evolving business and tech landscape.",
    mission: "We are committed to providing practical IT skills and experiences to KUSOM students through workshops, competitions, and industry connections, preparing them for success in a technology-driven business environment."
  });
  
  // Members state
  const [members, setMembers] = useState([
    { id: 1, name: "Aayush Karki", position: "President", image: "https://randomuser.me/api/portraits/men/1.jpg", email: "aayush.karki@example.com" },
    { id: 2, name: "Priya Sharma", position: "Vice President", image: "https://randomuser.me/api/portraits/women/2.jpg", email: "priya.sharma@example.com" },
    { id: 3, name: "Rohan Thapa", position: "Secretary", image: "https://randomuser.me/api/portraits/men/3.jpg", email: "rohan.thapa@example.com" }
  ]);
  
  const [editingMember, setEditingMember] = useState<number | null>(null);
  const [newMemberName, setNewMemberName] = useState('');
  const [newMemberPosition, setNewMemberPosition] = useState('');
  const [newMemberImage, setNewMemberImage] = useState('');
  const [newMemberEmail, setNewMemberEmail] = useState('');
  
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

  // Member management functions
  const handleEditMember = (id: number) => {
    const member = members.find(m => m.id === id);
    if (member) {
      setEditingMember(id);
      setNewMemberName(member.name);
      setNewMemberPosition(member.position);
      setNewMemberImage(member.image);
      setNewMemberEmail(member.email);
    }
  };

  const handleSaveMember = (id: number) => {
    setMembers(members.map(member => 
      member.id === id ? {
        ...member,
        name: newMemberName,
        position: newMemberPosition,
        image: newMemberImage,
        email: newMemberEmail
      } : member
    ));
    setEditingMember(null);
    toast({
      title: "Member updated",
      description: "The member information has been successfully updated",
      variant: "default",
    });
  };

  const handleAddMember = () => {
    const newMember = {
      id: Math.max(...members.map(m => m.id), 0) + 1,
      name: "New Member",
      position: "Position",
      image: "https://randomuser.me/api/portraits/lego/1.jpg",
      email: "email@example.com"
    };
    setMembers([...members, newMember]);
    handleEditMember(newMember.id);
    toast({
      title: "Member added",
      description: "A new member has been added",
      variant: "default",
    });
  };

  const handleDeleteMember = (id: number) => {
    setMembers(members.filter(member => member.id !== id));
    toast({
      title: "Member deleted",
      description: "The member has been successfully deleted",
      variant: "destructive",
    });
  };

  // Website content handlers
  const handleContentChange = (key: string, value: string) => {
    setSiteContent({
      ...siteContent,
      [key]: value
    });
    toast({
      title: "Content updated",
      description: `The ${key} has been successfully updated`,
      variant: "default",
    });
  };

  const handleColorChange = (key: string, value: string) => {
    setWebsiteColors({
      ...websiteColors,
      [key]: value
    });
    toast({
      title: "Color updated",
      description: `The ${key} color has been successfully updated`,
      variant: "default",
    });
  };

  const handleBackgroundChange = (url: string) => {
    setHeroBackgroundUrl(url);
    toast({
      title: "Background updated",
      description: "The hero background has been successfully updated",
      variant: "default",
    });
  };

  const handleFileUpload = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // In a real application, you would upload to a server. Here we'll use a placeholder
      const imageUrl = URL.createObjectURL(file);
      setHeroBackgroundUrl(imageUrl);
      toast({
        title: "Image uploaded",
        description: "Your image has been uploaded and set as background",
        variant: "default",
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white"
    >
      {/* Admin Header */}
      <header className="bg-gray-800 border-b border-isclub-accent/20 shadow-md">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/f6b721e7-abf1-44b7-a95f-ac7bdbd6bc48.png" 
              alt="IS Club Logo" 
              className="h-10 w-auto mr-3"
            />
            <h1 className="text-xl font-bold text-white">IS Club Admin</h1>
          </div>
          
          <button
            onClick={handleLogout}
            className="flex items-center px-4 py-2 bg-isclub-primary/20 hover:bg-isclub-primary/30 rounded-md transition-colors"
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
          <div className="w-full md:w-64 bg-gray-800 rounded-lg border border-gray-700 shadow-lg p-4">
            <nav>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => setActiveTab('dashboard')}
                    className={`w-full flex items-center px-4 py-2 rounded-md transition-colors ${
                      activeTab === 'dashboard' ? 'bg-isclub-primary text-white' : 'hover:bg-gray-700 text-gray-300'
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
                      activeTab === 'events' ? 'bg-isclub-primary text-white' : 'hover:bg-gray-700 text-gray-300'
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
                      activeTab === 'members' ? 'bg-isclub-primary text-white' : 'hover:bg-gray-700 text-gray-300'
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
                      activeTab === 'content' ? 'bg-isclub-primary text-white' : 'hover:bg-gray-700 text-gray-300'
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
                      activeTab === 'settings' ? 'bg-isclub-primary text-white' : 'hover:bg-gray-700 text-gray-300'
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
          <div className="flex-1 bg-gray-800 rounded-lg border border-gray-700 shadow-lg p-6">
            {activeTab === 'dashboard' && (
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">Dashboard</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-gradient-to-br from-isclub-primary to-isclub-secondary/70 rounded-lg p-6 border border-gray-700">
                    <h3 className="text-lg font-semibold mb-2">Total Events</h3>
                    <p className="text-3xl font-bold">{events.length}</p>
                  </div>
                  <div className="bg-gradient-to-br from-isclub-secondary to-isclub-accent/70 rounded-lg p-6 border border-gray-700">
                    <h3 className="text-lg font-semibold mb-2">Total Members</h3>
                    <p className="text-3xl font-bold">{members.length}</p>
                  </div>
                  <div className="bg-gradient-to-br from-isclub-accent to-isclub-primary/70 rounded-lg p-6 border border-gray-700">
                    <h3 className="text-lg font-semibold mb-2">Upcoming Events</h3>
                    <p className="text-3xl font-bold">3</p>
                  </div>
                </div>
                
                <div className="bg-gray-900 rounded-lg p-6 border border-gray-700">
                  <h3 className="text-xl font-semibold text-white mb-4">Quick Actions</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <button 
                      onClick={() => setActiveTab('events')}
                      className="p-4 bg-gray-800 rounded-lg border border-gray-700 hover:border-isclub-accent/50 shadow hover:shadow-md transition-all text-center"
                    >
                      <Calendar className="h-8 w-8 mx-auto mb-2 text-isclub-accent" />
                      <span>Manage Events</span>
                    </button>
                    <button 
                      onClick={() => setActiveTab('members')}
                      className="p-4 bg-gray-800 rounded-lg border border-gray-700 hover:border-isclub-accent/50 shadow hover:shadow-md transition-all text-center"
                    >
                      <Users className="h-8 w-8 mx-auto mb-2 text-isclub-accent" />
                      <span>Manage Members</span>
                    </button>
                    <button 
                      onClick={() => setActiveTab('content')}
                      className="p-4 bg-gray-800 rounded-lg border border-gray-700 hover:border-isclub-accent/50 shadow hover:shadow-md transition-all text-center"
                    >
                      <FileText className="h-8 w-8 mx-auto mb-2 text-isclub-accent" />
                      <span>Edit Content</span>
                    </button>
                    <button 
                      onClick={() => setActiveTab('settings')}
                      className="p-4 bg-gray-800 rounded-lg border border-gray-700 hover:border-isclub-accent/50 shadow hover:shadow-md transition-all text-center"
                    >
                      <Settings className="h-8 w-8 mx-auto mb-2 text-isclub-accent" />
                      <span>Settings</span>
                    </button>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'events' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-white">Events Management</h2>
                  <button 
                    onClick={handleAddEvent}
                    className="glow-button flex items-center"
                  >
                    <Plus size={18} className="mr-2" />
                    <span>Add Event</span>
                  </button>
                </div>
                
                <div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-700">
                  <table className="min-w-full divide-y divide-gray-700">
                    <thead className="bg-gray-800">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                          Title
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                          Date
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                          Category
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                          Location
                        </th>
                        <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-300 uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-gray-900 divide-y divide-gray-800">
                      {events.map((event) => (
                        <tr key={event.id} className="hover:bg-gray-800/50 transition-colors">
                          <td className="px-6 py-4 whitespace-nowrap">
                            {editingEvent === event.id ? (
                              <input
                                type="text"
                                value={newEventTitle}
                                onChange={(e) => setNewEventTitle(e.target.value)}
                                className="w-full px-2 py-1 bg-gray-800 border border-gray-600 rounded-md text-white"
                              />
                            ) : (
                              <div className="text-sm font-medium text-white">{event.title}</div>
                            )}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            {editingEvent === event.id ? (
                              <input
                                type="text"
                                value={newEventDate}
                                onChange={(e) => setNewEventDate(e.target.value)}
                                className="w-full px-2 py-1 bg-gray-800 border border-gray-600 rounded-md text-white"
                              />
                            ) : (
                              <div className="text-sm text-gray-300">{event.date}</div>
                            )}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            {editingEvent === event.id ? (
                              <input
                                type="text"
                                value={newEventCategory}
                                onChange={(e) => setNewEventCategory(e.target.value)}
                                className="w-full px-2 py-1 bg-gray-800 border border-gray-600 rounded-md text-white"
                              />
                            ) : (
                              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-isclub-primary/20 text-isclub-primary border border-isclub-primary/30">
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
                                className="w-full px-2 py-1 bg-gray-800 border border-gray-600 rounded-md text-white"
                              />
                            ) : (
                              <div className="text-sm text-gray-300">{event.location}</div>
                            )}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            {editingEvent === event.id ? (
                              <div className="flex justify-end space-x-2">
                                <button 
                                  onClick={() => handleSaveEvent(event.id)}
                                  className="text-green-500 hover:text-green-400"
                                >
                                  <Save size={18} />
                                </button>
                                <button 
                                  onClick={() => setEditingEvent(null)}
                                  className="text-gray-400 hover:text-gray-300"
                                >
                                  <X size={18} />
                                </button>
                              </div>
                            ) : (
                              <div className="flex justify-end space-x-2">
                                <button 
                                  onClick={() => handleEditEvent(event.id)}
                                  className="text-isclub-secondary hover:text-isclub-accent"
                                >
                                  <Edit size={18} />
                                </button>
                                <button 
                                  onClick={() => handleDeleteEvent(event.id)}
                                  className="text-red-500 hover:text-red-400"
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
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-white">Members Management</h2>
                  <button 
                    onClick={handleAddMember}
                    className="glow-button flex items-center"
                  >
                    <Plus size={18} className="mr-2" />
                    <span>Add Member</span>
                  </button>
                </div>
                
                <div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-700">
                  <table className="min-w-full divide-y divide-gray-700">
                    <thead className="bg-gray-800">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                          Name
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                          Position
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                          Email
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                          Profile Image
                        </th>
                        <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-300 uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-gray-900 divide-y divide-gray-800">
                      {members.map((member) => (
                        <tr key={member.id} className="hover:bg-gray-800/50 transition-colors">
                          <td className="px-6 py-4 whitespace-nowrap">
                            {editingMember === member.id ? (
                              <input
                                type="text"
                                value={newMemberName}
                                onChange={(e) => setNewMemberName(e.target.value)}
                                className="w-full px-2 py-1 bg-gray-800 border border-gray-600 rounded-md text-white"
                              />
                            ) : (
                              <div className="flex items-center">
                                <img className="h-8 w-8 rounded-full mr-3" src={member.image} alt={member.name} />
                                <div className="text-sm font-medium text-white">{member.name}</div>
                              </div>
                            )}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            {editingMember === member.id ? (
                              <input
                                type="text"
                                value={newMemberPosition}
                                onChange={(e) => setNewMemberPosition(e.target.value)}
                                className="w-full px-2 py-1 bg-gray-800 border border-gray-600 rounded-md text-white"
                              />
                            ) : (
                              <div className="text-sm text-gray-300">{member.position}</div>
                            )}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            {editingMember === member.id ? (
                              <input
                                type="text"
                                value={newMemberEmail}
                                onChange={(e) => setNewMemberEmail(e.target.value)}
                                className="w-full px-2 py-1 bg-gray-800 border border-gray-600 rounded-md text-white"
                              />
                            ) : (
                              <div className="text-sm text-gray-300">{member.email}</div>
                            )}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            {editingMember === member.id ? (
                              <input
                                type="text"
                                value={newMemberImage}
                                onChange={(e) => setNewMemberImage(e.target.value)}
                                className="w-full px-2 py-1 bg-gray-800 border border-gray-600 rounded-md text-white"
                                placeholder="Image URL"
                              />
                            ) : (
                              <div className="text-sm text-gray-300 truncate max-w-[150px]">{member.image}</div>
                            )}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            {editingMember === member.id ? (
                              <div className="flex justify-end space-x-2">
                                <button 
                                  onClick={() => handleSaveMember(member.id)}
                                  className="text-green-500 hover:text-green-400"
                                >
                                  <Save size={18} />
                                </button>
                                <button 
                                  onClick={() => setEditingMember(null)}
                                  className="text-gray-400 hover:text-gray-300"
                                >
                                  <X size={18} />
                                </button>
                              </div>
                            ) : (
                              <div className="flex justify-end space-x-2">
                                <button 
                                  onClick={() => handleEditMember(member.id)}
                                  className="text-isclub-secondary hover:text-isclub-accent"
                                >
                                  <Edit size={18} />
                                </button>
                                <button 
                                  onClick={() => handleDeleteMember(member.id)}
                                  className="text-red-500 hover:text-red-400"
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
            
            {activeTab === 'content' && (
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">Content Management</h2>
                
                <Tabs defaultValue="hero">
                  <TabsList className="grid w-full grid-cols-4 mb-6 bg-gray-900">
                    <TabsTrigger value="hero" className="data-[state=active]:bg-isclub-primary">Hero Section</TabsTrigger>
                    <TabsTrigger value="about" className="data-[state=active]:bg-isclub-primary">About Content</TabsTrigger>
                    <TabsTrigger value="visuals" className="data-[state=active]:bg-isclub-primary">Visuals</TabsTrigger>
                    <TabsTrigger value="colors" className="data-[state=active]:bg-isclub-primary">Colors</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="hero" className="py-4">
                    <div className="space-y-6">
                      <div className="p-6 bg-gray-900 rounded-lg border border-gray-700">
                        <div className="flex items-center mb-4">
                          <Type className="h-5 w-5 mr-2 text-isclub-accent" />
                          <h3 className="text-xl font-semibold">Hero Content</h3>
                        </div>
                        
                        <div className="space-y-4">
                          <div>
                            <label className="block text-gray-300 mb-2">Hero Title</label>
                            <Input
                              value={siteContent.heroTitle}
                              onChange={(e) => handleContentChange('heroTitle', e.target.value)}
                              className="bg-gray-800 border-gray-700 text-white"
                            />
                          </div>
                          
                          <div>
                            <label className="block text-gray-300 mb-2">Hero Subtitle</label>
                            <Input
                              value={siteContent.heroSubtitle}
                              onChange={(e) => handleContentChange('heroSubtitle', e.target.value)}
                              className="bg-gray-800 border-gray-700 text-white"
                            />
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-6 bg-gray-900 rounded-lg border border-gray-700">
                        <div className="flex items-center mb-4">
                          <Image className="h-5 w-5 mr-2 text-isclub-accent" />
                          <h3 className="text-xl font-semibold">Hero Background</h3>
                        </div>
                        
                        <div className="space-y-4">
                          <div>
                            <label className="block text-gray-300 mb-2">Background Image URL</label>
                            <div className="flex gap-2">
                              <Input
                                value={heroBackgroundUrl}
                                onChange={(e) => handleBackgroundChange(e.target.value)}
                                className="bg-gray-800 border-gray-700 text-white flex-1"
                                placeholder="Enter image URL"
                              />
                              <button 
                                onClick={handleFileUpload}
                                className="px-4 py-2 bg-isclub-primary rounded-md hover:bg-isclub-primary/80 transition-colors"
                              >
                                <Upload size={18} />
                              </button>
                              <input 
                                type="file" 
                                ref={fileInputRef} 
                                onChange={handleFileChange} 
                                className="hidden" 
                                accept="image/*"
                              />
                            </div>
                          </div>
                          
                          <div className="mt-4">
                            <p className="text-gray-300 mb-2">Preview:</p>
                            <div className="relative h-40 w-full overflow-hidden rounded-lg border border-gray-700">
                              <img 
                                src={heroBackgroundUrl} 
                                alt="Hero Background Preview" 
                                className="h-full w-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="about" className="py-4">
                    <div className="space-y-6">
                      <div className="p-6 bg-gray-900 rounded-lg border border-gray-700">
                        <div className="flex items-center mb-4">
                          <FileText className="h-5 w-5 mr-2 text-isclub-accent" />
                          <h3 className="text-xl font-semibold">Vision & Mission</h3>
                        </div>
                        
                        <div className="space-y-4">
                          <div>
                            <label className="block text-gray-300 mb-2">Vision Statement</label>
                            <textarea
                              value={siteContent.vision}
                              onChange={(e) => handleContentChange('vision', e.target.value)}
                              className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white"
                              rows={3}
                            ></textarea>
                          </div>
                          
                          <div>
                            <label className="block text-gray-300 mb-2">Mission Statement</label>
                            <textarea
                              value={siteContent.mission}
                              onChange={(e) => handleContentChange('mission', e.target.value)}
                              className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white"
                              rows={5}
                            ></textarea>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="visuals" className="py-4">
                    <div className="p-6 bg-gray-900 rounded-lg border border-gray-700">
                      <div className="flex items-center mb-4">
                        <Monitor className="h-5 w-5 mr-2 text-isclub-accent" />
                        <h3 className="text-xl font-semibold">Website Visuals</h3>
                      </div>
                      
                      <div className="space-y-4">
                        <div>
                          <label className="block text-gray-300 mb-2">Logo (Coming soon)</label>
                          <div className="flex items-center gap-4">
                            <div className="h-16 w-16 bg-gray-800 rounded-lg flex items-center justify-center border border-gray-700">
                              <img 
                                src="/lovable-uploads/f6b721e7-abf1-44b7-a95f-ac7bdbd6bc48.png" 
                                alt="Current Logo" 
                                className="max-h-12 max-w-12"
                              />
                            </div>
                            <button className="px-4 py-2 bg-gray-800 text-gray-400 cursor-not-allowed rounded-md border border-gray-700">
                              <span className="flex items-center">
                                <Upload size={18} className="mr-2" />
                                Upload New Logo
                              </span>
                            </button>
                          </div>
                          <p className="text-gray-400 text-sm mt-2">Logo upload feature coming in future update</p>
                        </div>
                        
                        <div>
                          <label className="block text-gray-300 mb-2">Favicon (Coming soon)</label>
                          <button className="px-4 py-2 bg-gray-800 text-gray-400 cursor-not-allowed rounded-md border border-gray-700">
                            <span className="flex items-center">
                              <Upload size={18} className="mr-2" />
                              Upload Favicon
                            </span>
                          </button>
                          <p className="text-gray-400 text-sm mt-2">Favicon upload feature coming in future update</p>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="colors" className="py-4">
                    <div className="p-6 bg-gray-900 rounded-lg border border-gray-700">
                      <div className="flex items-center mb-4">
                        <Palette className="h-5 w-5 mr-2 text-isclub-accent" />
                        <h3 className="text-xl font-semibold">Color Theme</h3>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                          <label className="block text-gray-300 mb-2">Primary Color</label>
                          <div className="flex items-center space-x-2">
                            <input
                              type="color"
                              value={websiteColors.primary}
                              onChange={(e) => handleColorChange('primary', e.target.value)}
                              className="w-12 h-10 rounded cursor-pointer"
                            />
                            <Input
                              value={websiteColors.primary}
                              onChange={(e) => handleColorChange('primary', e.target.value)}
                              className="bg-gray-800 border-gray-700 text-white flex-1"
                            />
                          </div>
                        </div>
                        
                        <div>
                          <label className="block text-gray-300 mb-2">Secondary Color</label>
                          <div className="flex items-center space-x-2">
                            <input
                              type="color"
                              value={websiteColors.secondary}
                              onChange={(e) => handleColorChange('secondary', e.target.value)}
                              className="w-12 h-10 rounded cursor-pointer"
                            />
                            <Input
                              value={websiteColors.secondary}
                              onChange={(e) => handleColorChange('secondary', e.target.value)}
                              className="bg-gray-800 border-gray-700 text-white flex-1"
                            />
                          </div>
                        </div>
                        
                        <div>
                          <label className="block text-gray-300 mb-2">Accent Color</label>
                          <div className="flex items-center space-x-2">
                            <input
                              type="color"
                              value={websiteColors.accent}
                              onChange={(e) => handleColorChange('accent', e.target.value)}
                              className="w-12 h-10 rounded cursor-pointer"
                            />
                            <Input
                              value={websiteColors.accent}
                              onChange={(e) => handleColorChange('accent', e.target.value)}
                              className="bg-gray-800 border-gray-700 text-white flex-1"
                            />
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-6">
                        <h4 className="text-md font-medium text-gray-300 mb-3">Preview:</h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div className="rounded-lg p-4 h-20 flex items-center justify-center" style={{ backgroundColor: websiteColors.primary }}>
                            <span className="text-white font-semibold">Primary</span>
                          </div>
                          <div className="rounded-lg p-4 h-20 flex items-center justify-center" style={{ backgroundColor: websiteColors.secondary }}>
                            <span className="text-white font-semibold">Secondary</span>
                          </div>
                          <div className="rounded-lg p-4 h-20 flex items-center justify-center" style={{ backgroundColor: websiteColors.accent }}>
                            <span className="text-white font-semibold">Accent</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-6">
                        <p className="text-gray-300">Note: Color changes will be applied on next website build.</p>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            )}
            
            {activeTab === 'settings' && (
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">Settings</h2>
                <div className="p-6 bg-gray-900 rounded-lg border border-gray-700">
                  <div className="flex items-center mb-4">
                    <Link className="h-5 w-5 mr-2 text-isclub-accent" />
                    <h3 className="text-xl font-semibold">Social Media Links</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-gray-300 mb-2">Facebook URL</label>
                      <Input
                        className="bg-gray-800 border-gray-700 text-white"
                        placeholder="https://facebook.com/your-page"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-gray-300 mb-2">Instagram URL</label>
                      <Input
                        className="bg-gray-800 border-gray-700 text-white"
                        placeholder="https://instagram.com/your-handle"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-gray-300 mb-2">LinkedIn URL</label>
                      <Input
                        className="bg-gray-800 border-gray-700 text-white"
                        placeholder="https://linkedin.com/company/your-page"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AdminDashboard;
