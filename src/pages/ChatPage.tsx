
import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Send, ChevronRight, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface Message {
  text: string;
  isUser: boolean;
}

const ChatPage = () => {
  const [messages, setMessages] = useState<Message[]>([
    { text: "Hello! I'm the Housing Bridge Assistant. How can I help you with your rental search today?", isUser: false }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() === '') return;

    // Add user message
    setMessages([...messages, { text: input, isUser: true }]);
    setInput('');

    // Simulate bot response
    setTimeout(() => {
      let botResponse = '';

      // Simple FAQ responses
      if (input.toLowerCase().includes('apply')) {
        botResponse = 'To apply for a property, navigate to the property details page and click on the "Apply" button. You\'ll need to fill out the application form and upload required documents.';
      } else if (input.toLowerCase().includes('document')) {
        botResponse = 'For rental applications, you typically need ID proof, address proof, income proof/payslips, and sometimes employment verification. Specific requirements may vary by property.';
      } else if (input.toLowerCase().includes('track') || input.toLowerCase().includes('application status')) {
        botResponse = 'You can track your application status in the "My Applications" section under your profile. Each application will show its current status and any pending requirements.';
      } else if (input.toLowerCase().includes('compare')) {
        botResponse = 'Our comparison tool allows you to select up to 3 properties and compare them side by side. Look for the "Add to Compare" option on property cards or visit the Compare page directly.';
      } else if (input.toLowerCase().includes('best price') || input.toLowerCase().includes('lowest price')) {
        botResponse = 'We highlight the best available price for each property across all platforms. Look for the "Best Price" tag when browsing listings.';
      } else if (input.toLowerCase().includes('filter') || input.toLowerCase().includes('search')) {
        botResponse = 'You can filter properties by location, price range, number of bedrooms, furnished status, and data sources. Use the filters on the Properties page to narrow down your search.';
      } else {
        botResponse = 'I can help with questions about property search, applications, document requirements, and comparison features. What specific information are you looking for?';
      }

      setMessages(prev => [...prev, { text: botResponse, isUser: false }]);
    }, 800);
  };

  const FAQs = [
    {
      question: "How do I apply for a property?",
      answer: "To apply for a property, navigate to the property details page and click on the 'Apply' button. You'll need to fill out the application form and upload required documents."
    },
    {
      question: "What documents do I need for a rental application?",
      answer: "For rental applications, you typically need ID proof, address proof, income proof/payslips, and sometimes employment verification. Specific requirements may vary by property."
    },
    {
      question: "How can I track my application status?",
      answer: "You can track your application status in the 'My Applications' section under your profile. Each application will show its current status and any pending requirements."
    },
    {
      question: "How does price comparison work?",
      answer: "We aggregate property listings from multiple platforms and automatically compare prices to show you the best available deal for each property."
    },
    {
      question: "Can I filter properties by specific criteria?",
      answer: "Yes, you can filter properties by location, price range, number of bedrooms, furnished status, and data sources. Use the filters on the Properties page to narrow down your search."
    }
  ];

  const handleFAQClick = (question: string) => {
    // Add the FAQ question as a user message
    setMessages([...messages, { text: question, isUser: true }]);

    // Find corresponding answer
    const faq = FAQs.find(faq => faq.question === question);
    
    // Simulate bot response with a delay
    if (faq) {
      setTimeout(() => {
        setMessages(prev => [...prev, { text: faq.answer, isUser: false }]);
      }, 500);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="mb-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-housing-navy">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <span>Chat</span>
          </div>
        </div>

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Housing Bridge Assistant</h1>
          <p className="text-gray-600">Get answers to your questions and assistance with your rental search</p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
          {/* FAQs sidebar */}
          <div className="lg:col-span-1">
            <Card className="p-6 shadow-sm">
              <h2 className="mb-4 font-semibold text-gray-800">Frequently Asked Questions</h2>
              <ul className="space-y-2">
                {FAQs.map((faq, index) => (
                  <li key={index}>
                    <button
                      onClick={() => handleFAQClick(faq.question)}
                      className="w-full rounded-lg p-2 text-left text-sm hover:bg-gray-100"
                    >
                      {faq.question}
                    </button>
                  </li>
                ))}
              </ul>
            </Card>
          </div>

          {/* Chat main area */}
          <div className="flex h-[600px] flex-col rounded-lg border border-gray-200 bg-white shadow-sm lg:col-span-3">
            {/* Chat header */}
            <div className="flex items-center border-b border-gray-200 bg-housing-navy p-4 text-white">
              <MessageSquare className="mr-2 h-5 w-5" />
              <h2 className="text-lg font-medium">Chat Support</h2>
            </div>

            {/* Chat messages */}
            <div className="flex-1 overflow-y-auto p-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`mb-4 max-w-[80%] rounded-lg p-3 ${
                    message.isUser
                      ? 'ml-auto bg-housing-navy text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {message.text}
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Chat input */}
            <form onSubmit={handleSubmit} className="flex border-t border-gray-200 p-4">
              <Input
                type="text"
                placeholder="Type your question here..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 border-r-0 focus-visible:ring-0 focus-visible:ring-offset-0"
              />
              <Button 
                type="submit" 
                className="rounded-l-none bg-housing-navy hover:bg-blue-800"
              >
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ChatPage;
