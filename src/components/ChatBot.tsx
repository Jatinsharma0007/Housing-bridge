
import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MessageSquare, Send, X } from 'lucide-react';

interface Message {
  text: string;
  isUser: boolean;
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { text: "Hello! I'm RentWise Assistant. How can I help you with your rental search today?", isUser: false }
  ]);
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
        botResponse = 'Our comparison tool allows you to select up to 3 properties and compare them side by side. Look for the "Add to Compare" option on property cards.';
      } else if (input.toLowerCase().includes('best price') || input.toLowerCase().includes('lowest price')) {
        botResponse = 'We highlight the best available price for each property across all platforms. Look for the "Best Price" tag when browsing listings.';
      } else {
        botResponse = 'I can help with questions about property search, applications, document requirements, and comparison features. What specific information are you looking for?';
      }

      setMessages(prev => [...prev, { text: botResponse, isUser: false }]);
    }, 500);
  };

  const predefinedQuestions = [
    'How do I apply for a property?',
    'What documents do I need?',
    'How can I track my application?'
  ];

  const handlePredefinedQuestion = (question: string) => {
    setMessages([...messages, { text: question, isUser: true }]);

    // Simulate bot response for predefined questions
    setTimeout(() => {
      let botResponse = '';
      
      if (question.includes('apply')) {
        botResponse = 'To apply for a property, navigate to the property details page and click on the "Apply" button. You\'ll need to fill out the application form and upload required documents.';
      } else if (question.includes('documents')) {
        botResponse = 'For rental applications, you typically need ID proof, address proof, income proof/payslips, and sometimes employment verification. Specific requirements may vary by property.';
      } else if (question.includes('track')) {
        botResponse = 'You can track your application status in the "My Applications" section under your profile. Each application will show its current status and any pending requirements.';
      }

      setMessages(prev => [...prev, { text: botResponse, isUser: false }]);
    }, 500);
  };

  return (
    <>
      {/* Chat Button */}
      <button
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-housing-navy shadow-lg transition-transform hover:scale-105"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <X className="h-6 w-6 text-white" />
        ) : (
          <MessageSquare className="h-6 w-6 text-white" />
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 flex h-[500px] w-96 flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-xl">
          {/* Header */}
          <div className="bg-housing-navy p-4 text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <MessageSquare className="mr-2 h-5 w-5" />
                <h3 className="text-lg font-medium">Chat Support</h3>
              </div>
              <button onClick={() => setIsOpen(false)}>
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Messages */}
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

          {/* Predefined Questions */}
          <div className="flex gap-2 overflow-x-auto border-t border-gray-200 p-2">
            {predefinedQuestions.map((question) => (
              <button
                key={question}
                onClick={() => handlePredefinedQuestion(question)}
                className="whitespace-nowrap rounded-full border border-gray-300 bg-white px-3 py-1 text-xs hover:bg-gray-100"
              >
                {question}
              </button>
            ))}
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className="flex border-t border-gray-200 p-2">
            <Input
              type="text"
              placeholder="Type your question..."
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
      )}
    </>
  );
};

export default ChatBot;
