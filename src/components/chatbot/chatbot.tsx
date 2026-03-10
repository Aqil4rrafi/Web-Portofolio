"use client";

import { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, SendHorizontal, Bot } from 'lucide-react';

type Message = {
  id: number;
  text: string;
  isBot: boolean;
  time: string;
};

export default function Chatbox() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const initialMessage: Message = { 
    id: 1, 
    text: "Halo! 👋 Saya asisten AI Rafi. Ada yang bisa saya bantu hari ini?", 
    isBot: true, 
    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) 
  };

  useEffect(() => {
    if (isOpen) {
      setMessages([initialMessage]);
    } else {
      setMessages([]);
      setInput("");
    }
  }, [isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now(),
      text: input,
      isBot: false,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:5000';
      const response = await fetch(`${apiUrl}/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input }),
      });

      if (!response.ok) throw new Error();

      const data = await response.json();
      setMessages((prev) => [...prev, {
        id: Date.now() + 1,
        text: data.answer,
        isBot: true,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      }]);
    } catch (error) {
      setMessages((prev) => [...prev, {
        id: Date.now() + 1,
        text: "Koneksi terganggu. Pastikan server API sudah aktif!",
        isBot: true,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-[9999] flex flex-col items-end max-w-[calc(100vw-2rem)]">
      
      {isOpen && (
        <div className="mb-4 w-[calc(100vw-2rem)] sm:w-[380px] md:w-[400px] h-[70vh] max-h-[600px] flex flex-col overflow-hidden transition-all duration-500 ease-in-out animate-in fade-in slide-in-from-bottom-4 shadow-2xl">
          
          <div className="relative h-full w-full bg-white dark:bg-[#07070c] rounded-[2rem] flex flex-col overflow-hidden border border-neutral-200 dark:border-neutral-800">
            
            <div className="bg-zinc-100/80 dark:bg-neutral-900/90 backdrop-blur-md p-4 md:p-5 flex justify-between items-center border-b border-neutral-200 dark:border-neutral-800">
              <div className="flex items-center gap-3">
                <div className="bg-gradient-to-tr from-indigo-500 to-purple-600 p-2 rounded-xl text-white">
                  <Bot size={18} className="md:w-5 md:h-5" />
                </div>
                <div>
                  <h3 className="text-neutral-900 dark:text-white font-bold text-sm">AI Assistant</h3>
                  <div className="flex items-center gap-1.5">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    <span className="text-neutral-500 dark:text-neutral-400 text-[10px] uppercase tracking-widest font-bold">Online</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-neutral-400 hover:text-neutral-900 dark:hover:text-white p-2"
              >
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-white dark:bg-[#050509] scrollbar-thin scrollbar-thumb-zinc-200 dark:scrollbar-thumb-neutral-800">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex items-end gap-2 ${msg.isBot ? 'justify-start' : 'justify-end'}`}>
                  {msg.isBot && (
                    <div className="mb-1 bg-neutral-100 dark:bg-neutral-800 p-1 rounded-full border border-neutral-200 dark:border-neutral-700 hidden sm:block">
                      <Bot size={14} className="text-indigo-600 dark:text-indigo-400" />
                    </div>
                  )}
                  <div className={`flex flex-col ${msg.isBot ? 'items-start' : 'items-end'} max-w-[85%] sm:max-w-[80%]`}>
                    <div className={`px-4 py-2.5 rounded-2xl text-[13px] md:text-sm leading-relaxed ${
                      msg.isBot 
                        ? 'bg-zinc-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 rounded-bl-none border border-neutral-200 dark:border-neutral-700' 
                        : 'bg-gradient-to-br from-indigo-600 to-purple-600 text-white rounded-br-none'
                    }`}>
                      {msg.text}
                    </div>
                    <span className="text-[9px] text-neutral-400 mt-1 uppercase px-1 tracking-tighter font-medium">{msg.time}</span>
                  </div>
                </div>
              ))}
              
              {isLoading && (
                <div className="flex items-center gap-2">
                  <div className="bg-zinc-100 dark:bg-neutral-800 px-4 py-3 rounded-2xl rounded-bl-none border border-neutral-200 dark:border-neutral-700 flex gap-1">
                    <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-bounce"></div>
                    <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                    <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <div className="p-3 md:p-4 bg-zinc-50 dark:bg-neutral-900/50 border-t border-neutral-200 dark:border-neutral-800">
              <div className="relative flex items-center gap-2">
                <input 
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ketik pesan..."
                  className="w-full bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 p-3 pr-12 rounded-2xl text-sm md:text-base outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 dark:text-white transition-all shadow-sm"
                  disabled={isLoading}
                />
                <button 
                  onClick={handleSend}
                  disabled={isLoading || !input.trim()}
                  className="absolute right-2 p-2 text-indigo-600 dark:text-indigo-400 hover:text-purple-600 disabled:opacity-20 transition-all active:scale-90"
                >
                  <SendHorizontal size={22} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="group relative p-[1.5px] rounded-full overflow-hidden transition-all duration-300 hover:scale-110 active:scale-95 shadow-xl"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 animate-[spin_6s_linear_infinite]"></div>
        <div className="relative flex items-center justify-center bg-white dark:bg-[#07070c] h-14 w-14 md:h-16 md:w-16 rounded-full group-hover:bg-zinc-50 dark:group-hover:bg-neutral-900 transition-colors">
          {isOpen ? (
            <X className="text-neutral-800 dark:text-white" size={24} />
          ) : (
            <div className="relative">
              <MessageSquare className="text-indigo-600 dark:text-indigo-400" size={28} />
              <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
              </span>
            </div>
          )}
        </div>
      </button>
    </div>
  );
}