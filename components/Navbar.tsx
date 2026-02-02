
import React, { useState, useEffect } from 'react';
import { Menu, X, Scissors } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'Services', href: '#services' },
    { name: 'Style AI', href: '#ai-consultant' },
    { name: 'Booking', href: '#booking' },
    { name: 'Studio', href: '#about' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Scissors className="text-gold-500 w-6 h-6 text-[#d4af37]" />
          <span className="text-2xl font-serif font-bold tracking-tighter uppercase italic">Auric</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          {links.map((link) => (
            <a key={link.name} href={link.href} className="text-sm uppercase tracking-widest hover:text-[#d4af37] transition-colors">
              {link.name}
            </a>
          ))}
          <a href="#booking" className="bg-[#d4af37] text-black px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-white transition-all">
            Book Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/95 absolute top-full left-0 w-full h-screen flex flex-col items-center pt-20 space-y-8 animate-in slide-in-from-top duration-300">
          {links.map((link) => (
            <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-xl uppercase tracking-widest">
              {link.name}
            </a>
          ))}
          <a href="#booking" onClick={() => setIsOpen(false)} className="bg-[#d4af37] text-black px-8 py-3 rounded-full font-bold uppercase tracking-widest">
            Book Appointment
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
