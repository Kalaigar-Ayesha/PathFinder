
import { useState } from 'react';
import { Button } from './ui/button';
import { MessageSquare, X } from 'lucide-react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: "Hi there! I'm your Pathfinder AI assistant. How can I help with your learning journey today?", isBot: true },
  ]);
  const [newMessage, setNewMessage] = useState('');

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;
    
    // Add user message
    setMessages(prev => [...prev, { id: Date.now(), text: newMessage, isBot: false }]);
    setNewMessage('');
    
    // Simulate bot response
    setTimeout(() => {
      setMessages(prev => [
        ...prev, 
        { 
          id: Date.now() + 1, 
          text: "Thanks for your message! As a demo chatbot, I'm here to show how Pathfinder's AI can assist with your tech learning journey. In the full version, I'd provide personalized guidance based on your skills and goals.", 
          isBot: true 
        }
      ]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen ? (
        <div className="glass-card w-80 sm:w-96 h-96 rounded-xl flex flex-col overflow-hidden">
          <div className="bg-pathfinder-primary text-white p-3 flex justify-between items-center">
            <h3 className="font-medium">Pathfinder Assistant</h3>
            <button onClick={toggleChatbot} className="text-white hover:text-gray-200">
              <X size={20} />
            </button>
          </div>
          
          <div className="flex-1 p-3 overflow-y-auto bg-white/50">
            {messages.map(message => (
              <div 
                key={message.id} 
                className={`mb-3 ${message.isBot ? 'text-left' : 'text-right'}`}
              >
                <div 
                  className={`inline-block rounded-lg px-4 py-2 max-w-[80%] ${
                    message.isBot 
                      ? 'bg-pathfinder-light text-gray-800' 
                      : 'bg-pathfinder-primary text-white'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>
          
          <form onSubmit={handleSubmit} className="p-3 bg-white border-t border-gray-200">
            <div className="flex">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 border rounded-l-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-pathfinder-primary"
              />
              <Button 
                type="submit" 
                className="rounded-l-none"
              >
                Send
              </Button>
            </div>
          </form>
        </div>
      ) : (
        <Button 
          onClick={toggleChatbot} 
          className="h-14 w-14 rounded-full shadow-lg bg-pathfinder-primary hover:bg-pathfinder-primary/90 flex items-center justify-center"
        >
          <MessageSquare size={24} />
        </Button>
      )}
    </div>
  );
};

export default Chatbot;
