
import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, Send, Bot, User } from 'lucide-react';
import { getStyleConsultation } from '../services/geminiService';
import { ChatMessage } from '../types';

const AIConsultant: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'assistant', content: 'Welcome to the Style Architect. I am your personal curator for the Auric Collective. How can I help you transform your look today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: ChatMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    const responseText = await getStyleConsultation(messages, input);
    
    setMessages(prev => [...prev, { role: 'assistant', content: responseText }]);
    setIsLoading(false);
  };

  return (
    <section id="ai-consultant" className="py-24 container mx-auto px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center space-x-3 mb-8">
          <div className="bg-[#d4af37] p-2 rounded-lg">
            <Sparkles className="text-black w-6 h-6" />
          </div>
          <div>
            <h3 className="text-2xl font-serif">Style Architect AI</h3>
            <p className="text-xs text-gray-500 uppercase tracking-widest">Personalized Aesthetic Consultations</p>
          </div>
        </div>

        <div className="bg-[#111] border border-white/5 rounded-3xl overflow-hidden flex flex-col h-[600px] shadow-2xl">
          <div ref={chatRef} className="flex-1 p-6 space-y-6 overflow-y-auto scrollbar-hide">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] flex items-start space-x-3 ${m.role === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                  <div className={`p-2 rounded-full ${m.role === 'user' ? 'bg-[#d4af37]' : 'bg-white/10'}`}>
                    {m.role === 'user' ? <User className="w-4 h-4 text-black" /> : <Bot className="w-4 h-4 text-white" />}
                  </div>
                  <div className={`p-4 rounded-2xl text-sm leading-relaxed ${m.role === 'user' ? 'bg-[#d4af37] text-black' : 'bg-white/5 text-gray-200'}`}>
                    {m.content}
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white/5 p-4 rounded-2xl animate-pulse">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 bg-[#d4af37] rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <div className="w-2 h-2 bg-[#d4af37] rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <div className="w-2 h-2 bg-[#d4af37] rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 border-t border-white/5 bg-white/5">
            <div className="relative">
              <input
                type="text"
                placeholder="Ask about face shapes, hair colors, or care routines..."
                className="w-full bg-black/40 border border-white/10 rounded-xl py-4 pl-4 pr-14 focus:outline-none focus:border-[#d4af37] transition-all"
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleSend()}
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-3 bg-[#d4af37] text-black rounded-lg hover:scale-110 active:scale-95 transition-all disabled:opacity-50"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIConsultant;
