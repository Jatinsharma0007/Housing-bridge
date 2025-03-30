
import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, Send, X, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { chatQuestions } from './ChatBotQuestions';

interface Message {
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!inputMessage.trim()) return;
    
    // Add user message
    const userMessage = {
      text: inputMessage.trim(),
      isUser: true,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setShowSuggestions(false);
    
    // Find best matching question or respond with default
    setTimeout(() => {
      const lowerUserMessage = userMessage.text.toLowerCase();
      
      // Try to find a match in our predefined questions
      const matchingQuestion = chatQuestions.find(q => 
        q.question.toLowerCase().includes(lowerUserMessage) || 
        lowerUserMessage.includes(q.question.toLowerCase().substring(0, 10))
      );
      
      let botResponse;
      
      if (matchingQuestion) {
        botResponse = {
          text: matchingQuestion.answer,
          isUser: false,
          timestamp: new Date()
        };
      } else {
        botResponse = {
          text: "I don't have a specific answer for that query. Would you like to know about security deposits, rental agreements, or the best areas to rent?",
          isUser: false,
          timestamp: new Date()
        };
        setShowSuggestions(true);
      }
      
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  const handleSuggestionClick = (question: string) => {
    setInputMessage(question);
    
    // Add user message
    const userMessage = {
      text: question,
      isUser: true,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setShowSuggestions(false);
    
    // Find and send the answer
    setTimeout(() => {
      const matchingQuestion = chatQuestions.find(q => q.question === question);
      
      if (matchingQuestion) {
        const botResponse = {
          text: matchingQuestion.answer,
          isUser: false,
          timestamp: new Date()
        };
        
        setMessages(prev => [...prev, botResponse]);
      }
    }, 1000);
  };

  if (!isOpen) {
    return (
      <Button
        onClick={toggleChat}
        className="fixed bottom-6 right-6 flex h-14 w-14 items-center justify-center rounded-full bg-housing-navy p-0 shadow-lg hover:bg-blue-800"
        aria-label="Open chat"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 flex max-h-[70vh] w-full max-w-sm flex-col overflow-hidden rounded-lg border bg-white shadow-xl">
      {/* Chat header */}
      <div className="flex items-center justify-between border-b bg-housing-navy p-4 text-white">
        <h3 className="font-medium">Housing Bridge Assistant</h3>
        <div className="flex space-x-2">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleChat}
            className="h-8 w-8 rounded-full p-0 text-white hover:bg-blue-800"
          >
            <ChevronUp className="h-5 w-5" />
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsOpen(false)}
            className="h-8 w-8 rounded-full p-0 text-white hover:bg-blue-800"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>
      </div>
      
      {/* Chat messages */}
      <div className="flex-1 space-y-4 overflow-y-auto p-4">
        {/* Welcome message */}
        {messages.length === 0 && (
          <div className="rounded-lg bg-blue-50 p-4">
            <p className="text-sm text-gray-800">
              Hi there! I'm your Housing Bridge Assistant. How can I help you with your rental search today?
            </p>
          </div>
        )}
        
        {/* Message history */}
        {messages.map((message, index) => (
          <div 
            key={index} 
            className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
          >
            <div 
              className={`max-w-[80%] rounded-lg p-3 ${
                message.isUser 
                  ? 'bg-housing-navy text-white' 
                  : 'bg-gray-100 text-gray-800'
              }`}
            >
              <p className="text-sm">{message.text}</p>
              <p className="mt-1 text-right text-xs opacity-70">
                {message.timestamp.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
              </p>
            </div>
          </div>
        ))}
        
        {/* Suggested questions */}
        {showSuggestions && messages.length < 5 && (
          <div className="mt-4 space-y-2">
            <p className="text-xs text-gray-500">Suggested questions:</p>
            <div className="flex flex-wrap gap-2">
              {chatQuestions.slice(0, 4).map((q) => (
                <button
                  key={q.id}
                  onClick={() => handleSuggestionClick(q.question)}
                  className="rounded-full border border-gray-200 bg-white px-3 py-1 text-xs text-gray-700 hover:bg-gray-50"
                >
                  {q.question}
                </button>
              ))}
            </div>
          </div>
        )}
        
        {/* Auto scroll reference */}
        <div ref={messagesEndRef} />
      </div>
      
      {/* Chat input */}
      <form onSubmit={handleSendMessage} className="border-t p-3">
        <div className="flex space-x-2">
          <Input
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder="Type your message..."
            className="flex-1"
          />
          <Button type="submit" size="icon" disabled={!inputMessage.trim()}>
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ChatBot;
