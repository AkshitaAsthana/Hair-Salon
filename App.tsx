
import React from 'react';
import Navbar from './components/Navbar';
import ThreeDBackground from './components/ThreeDBackground';
import BookingSection from './components/BookingSection';
import AIConsultant from './components/AIConsultant';
import { ArrowRight, Instagram, Facebook, Twitter, MapPin, Phone } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <ThreeDBackground />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-7xl md:text-9xl font-serif leading-tight mb-8">
              Bespoke <br />
              <span className="italic text-[#d4af37]">Beauty.</span>
            </h1>
            <p className="text-xl text-gray-400 mb-10 max-w-xl leading-relaxed">
              Experience the pinnacle of hair care and creative styling. Our collective of master artists transforms vision into breathtaking reality.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
              <a href="#booking" className="bg-[#d4af37] text-black px-10 py-5 rounded-full font-bold uppercase tracking-widest text-sm flex items-center justify-center space-x-3 hover:bg-white hover:scale-105 transition-all">
                <span>Reserve Now</span>
                <ArrowRight size={18} />
              </a>
              <a href="#services" className="border border-white/20 text-white px-10 py-5 rounded-full font-bold uppercase tracking-widest text-sm flex items-center justify-center hover:bg-white/5 transition-all">
                Explore Services
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 right-10 hidden lg:block">
          <div className="flex space-x-6">
            <Instagram className="cursor-pointer hover:text-[#d4af37] transition-colors" />
            <Facebook className="cursor-pointer hover:text-[#d4af37] transition-colors" />
            <Twitter className="cursor-pointer hover:text-[#d4af37] transition-colors" />
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-24 bg-[#0a0a0a]">
        <div className="container mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-4xl font-serif mb-4 italic">The Collection</h2>
            <div className="w-24 h-1 bg-[#d4af37]"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Signature Cut', price: 'from $85', img: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=600&h=800' },
              { title: 'Artisan Color', price: 'from $150', img: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&q=80&w=600&h=800' },
              { title: 'Scalp Therapy', price: 'from $120', img: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=600&h=800' },
              { title: 'Elite Extensions', price: 'from $400', img: 'https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?auto=format&fit=crop&q=80&w=600&h=800' },
            ].map((service, idx) => (
              <div key={idx} className="group relative h-[500px] overflow-hidden rounded-2xl cursor-pointer">
                <img src={service.img} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent p-8 flex flex-col justify-end">
                  <h3 className="text-2xl font-serif mb-1">{service.title}</h3>
                  <p className="text-[#d4af37] font-bold tracking-widest text-sm uppercase">{service.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Style Consultant */}
      <AIConsultant />

      {/* Booking Form */}
      <BookingSection />

      {/* Footer */}
      <footer id="about" className="bg-[#050505] pt-24 pb-12 border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-2">
              <h2 className="text-4xl font-serif font-bold italic mb-6">Auric</h2>
              <p className="text-gray-500 max-w-sm leading-relaxed mb-8">
                Defining modern luxury in hair care. Our collective is a sanctuary for self-expression and refined aesthetics.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-[#d4af37] hover:text-black transition-all">
                  <Instagram size={20} />
                </a>
                <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-[#d4af37] hover:text-black transition-all">
                  <Facebook size={20} />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold uppercase tracking-widest text-xs mb-6 text-gray-400">Headquarters</h4>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3 text-sm text-gray-500">
                  <MapPin size={18} className="text-[#d4af37]" />
                  <span>Available in Luxury Cities <br />Globally</span>
                </li>
                <li className="flex items-center space-x-3 text-sm text-gray-500">
                  <Phone size={18} className="text-[#d4af37]" />
                  <span>Inquire for Consultations</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold uppercase tracking-widest text-xs mb-6 text-gray-400">Standard Hours</h4>
              <ul className="space-y-4 text-sm text-gray-500">
                <li className="flex justify-between">
                  <span>Mon - Fri</span>
                  <span>9:00 - 20:00</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday</span>
                  <span>10:00 - 18:00</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday</span>
                  <span>By Appointment</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-12 border-t border-white/5 flex flex-col md:row justify-between items-center text-xs text-gray-600 space-y-4 md:space-y-0">
            <p>© 2025 Auric Hair Collective Template. Designed for Excellence.</p>
            <div className="flex space-x-8 uppercase tracking-widest">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
