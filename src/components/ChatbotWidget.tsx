import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Phone, MapPin, ExternalLink, Sparkles } from 'lucide-react';
import { RESTAURANT_INFO, FEATURED_MENU } from '../data/restaurantData';
import { ChatMessage } from '../types';

export const ChatbotWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      sender: 'bot',
      text: 'Welcome to Pizza 1! I can provide verified information about our location, contact numbers, featured menu items, and social channels. How can I help you?',
      timestamp: 'Now',
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = (textToSend?: string) => {
    const query = (textToSend || input).trim();
    if (!query) return;

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMessage]);
    if (!textToSend) setInput('');

    // Process using ONLY verified information
    setTimeout(() => {
      const botResponse = generateVerifiedResponse(query.toLowerCase());
      setMessages((prev) => [...prev, botResponse]);
    }, 250);
  };

  const generateVerifiedResponse = (q: string): ChatMessage => {
    const now = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    // 1. Location / Address
    if (q.includes('location') || q.includes('address') || q.includes('where') || q.includes('direction') || q.includes('map') || q.includes('peshawar road')) {
      return {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: `Pizza 1 is located at 1, Peshawar Road, Rawalpindi, Pakistan.`,
        timestamp: now,
        action: {
          label: 'Get Google Maps Directions',
          href: RESTAURANT_INFO.directionsUrl,
        },
      };
    }

    // 2. Phone / Contact / Call
    if (q.includes('phone') || q.includes('call') || q.includes('number') || q.includes('contact') || q.includes('order')) {
      return {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: `You can reach Pizza 1 directly on:\n• 0336 7111124\n• 0314 5169922`,
        timestamp: now,
        action: {
          label: 'Call 0336 7111124',
          href: RESTAURANT_INFO.primaryPhoneLink,
        },
      };
    }

    // 3. Menu / Pizzas / Food items
    if (q.includes('menu') || q.includes('pizza') || q.includes('food') || q.includes('dish') || q.includes('flavor') || q.includes('item')) {
      const itemList = FEATURED_MENU.map((item) => `• ${item.name} (${item.category})`).join('\n');
      return {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: `Our featured items include:\n${itemList}\n\nPrices are confirmed by phone upon ordering.`,
        timestamp: now,
        action: {
          label: 'View Featured Menu',
          href: '#menu',
        },
      };
    }

    // 4. Prices / Cost / Deals -> Strictly NEVER invent prices
    if (q.includes('price') || q.includes('cost') || q.includes('rate') || q.includes('deal') || q.includes('offer') || q.includes('discount') || q.includes('how much')) {
      return {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: `Pricing information is currently confirmed directly at our restaurant counter. Please call 0336 7111124 or 0314 5169922 to check today's prices and current offers.`,
        timestamp: now,
        action: {
          label: 'Call 0336 7111124 for Pricing',
          href: RESTAURANT_INFO.primaryPhoneLink,
        },
      };
    }

    // 5. Opening hours / Timings -> Strictly NEVER invent hours
    if (q.includes('hour') || q.includes('time') || q.includes('open') || q.includes('close') || q.includes('timing')) {
      return {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: `Specific operating hours are currently unavailable online. Please call 0336 7111124 or 0314 5169922 to confirm today's opening times.`,
        timestamp: now,
        action: {
          label: 'Call to Confirm Hours',
          href: RESTAURANT_INFO.primaryPhoneLink,
        },
      };
    }

    // 6. Delivery / Reservations -> Strictly NEVER invent delivery or reservations
    if (q.includes('deliver') || q.includes('reservation') || q.includes('booking') || q.includes('book') || q.includes('table') || q.includes('rider')) {
      return {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: `Information regarding delivery service and table reservations is currently unavailable online. Please contact the branch directly on 0336 7111124 to ask about orders.`,
        timestamp: now,
        action: {
          label: 'Call 0336 7111124',
          href: RESTAURANT_INFO.primaryPhoneLink,
        },
      };
    }

    // 7. Social media / Instagram / Facebook
    if (q.includes('instagram') || q.includes('facebook') || q.includes('social') || q.includes('page') || q.includes('online')) {
      return {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: `• Instagram: @pizza1pakistan (Official)\n• Facebook link provided: facebook.com/hungrys.pk (Associated link)`,
        timestamp: now,
        action: {
          label: 'Visit Official Instagram',
          href: RESTAURANT_INFO.instagramUrl,
        },
      };
    }

    // 8. Restaurant background / history / owner
    if (q.includes('owner') || q.includes('chef') || q.includes('history') || q.includes('founded') || q.includes('branch') || q.includes('award')) {
      return {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: `Historical details, management names, or branch counts are not published online. Pizza 1 is located at 1, Peshawar Road, Rawalpindi.`,
        timestamp: now,
      };
    }

    // Fallback: Default verified assistant response
    return {
      id: `bot-${Date.now()}`,
      sender: 'bot',
      text: `I only provide verified details for Pizza 1 (Address, Phone Numbers, Featured Menu, and Social links). For any other inquiries, please call our counter directly.`,
      timestamp: now,
      action: {
        label: 'Call 0336 7111124',
        href: RESTAURANT_INFO.primaryPhoneLink,
      },
    };
  };

  const quickChips = [
    'Where is Pizza 1 located?',
    'Phone numbers',
    'Featured pizzas',
    'What are the prices?',
    'Instagram & Socials',
  ];

  return (
    <>
      {/* Small Floating Toggle Button */}
      <div className="fixed bottom-5 right-5 z-40">
        <button
          type="button"
          id="chatbot-toggle-button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-red-600 hover:bg-red-700 text-white font-semibold shadow-lg active:scale-95 transition-all text-xs focus:outline-hidden focus:ring-2 focus:ring-red-400"
          aria-label={isOpen ? 'Close assistant' : 'Open Pizza 1 info assistant'}
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <X className="w-4 h-4" />
          ) : (
            <>
              <MessageCircle className="w-4 h-4" />
              <span>Ask Pizza 1</span>
            </>
          )}
        </button>
      </div>

      {/* Chatbot Window */}
      {isOpen && (
        <div
          id="chatbot-window"
          className="fixed bottom-18 right-4 sm:right-6 z-40 w-[92vw] sm:w-92 max-h-[520px] bg-white rounded-2xl shadow-2xl border border-neutral-200/90 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-3 duration-200"
          role="dialog"
          aria-label="Pizza 1 Verified Information Assistant"
        >
          {/* Header */}
          <div className="bg-neutral-900 text-white p-3.5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-red-600 flex items-center justify-center text-white font-bold text-xs">
                P1
              </div>
              <div>
                <h3 className="text-xs font-bold leading-none">Pizza 1 Assistant</h3>
                <span className="text-[10px] text-neutral-300 flex items-center gap-1 mt-0.5">
                  <Sparkles className="w-2.5 h-2.5 text-red-400 inline" /> Verified Information Only
                </span>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="text-neutral-400 hover:text-white p-1 rounded-md transition-colors"
              aria-label="Close chat"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages Container */}
          <div className="flex-1 p-3.5 overflow-y-auto space-y-3 bg-[#FAF8F5] text-xs max-h-[320px]">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`max-w-[85%] rounded-xl p-2.5 ${
                    msg.sender === 'user'
                      ? 'bg-red-600 text-white rounded-br-xs'
                      : 'bg-white text-neutral-800 border border-neutral-200/80 rounded-bl-xs shadow-2xs'
                  }`}
                >
                  <p className="whitespace-pre-line leading-relaxed">{msg.text}</p>

                  {/* Action Link button */}
                  {msg.action && (
                    <div className="mt-2 pt-1.5 border-t border-neutral-200/70">
                      <a
                        href={msg.action.href}
                        target={msg.action.href.startsWith('http') ? '_blank' : undefined}
                        rel={msg.action.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="inline-flex items-center gap-1 font-bold text-red-600 hover:text-red-700 underline text-[11px]"
                      >
                        <span>{msg.action.label}</span>
                        {msg.action.href.startsWith('http') && <ExternalLink className="w-2.5 h-2.5" />}
                      </a>
                    </div>
                  )}
                </div>
                <span className="text-[10px] text-neutral-400 mt-0.5 px-1">{msg.timestamp}</span>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Query Chips */}
          <div className="p-2 bg-white border-t border-neutral-200/60 flex items-center gap-1.5 overflow-x-auto no-scrollbar">
            {quickChips.map((chip, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handleSend(chip)}
                className="shrink-0 text-[11px] bg-neutral-100 hover:bg-neutral-200 text-neutral-700 px-2.5 py-1 rounded-full border border-neutral-200 transition-colors whitespace-nowrap"
              >
                {chip}
              </button>
            ))}
          </div>

          {/* Input Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="p-2.5 bg-white border-t border-neutral-200 flex items-center gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about location, phone, menu..."
              className="flex-1 bg-neutral-50 border border-neutral-200 rounded-lg px-3 py-1.5 text-xs text-neutral-900 focus:outline-hidden focus:border-red-500 focus:bg-white"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              className="p-1.5 rounded-lg bg-red-600 text-white disabled:opacity-40 hover:bg-red-700 transition-colors shrink-0"
              aria-label="Send message"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      )}
    </>
  );
};
