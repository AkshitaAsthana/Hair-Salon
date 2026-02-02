
import React, { useState } from 'react';
import { Calendar, Clock, User, Phone, Mail, CheckCircle } from 'lucide-react';
import { ServiceType } from '../types';

const SERVICES = [
  { id: '1', name: ServiceType.CUT, price: '$85+' },
  { id: '2', name: ServiceType.COLOR, price: '$150+' },
  { id: '3', name: ServiceType.TREATMENT, price: '$120+' },
  { id: '4', name: ServiceType.EXTENSIONS, price: '$400+' },
];

const TIMES = ['09:00', '10:00', '11:00', '13:00', '14:00', '15:00', '16:00', '17:00'];

const BookingSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // In a real app, this would send to a server/Netlify function
  };

  if (submitted) {
    return (
      <div className="bg-[#1a1a1a] rounded-3xl p-12 text-center border border-white/10 max-w-2xl mx-auto my-20">
        <div className="flex justify-center mb-6">
          <CheckCircle className="text-[#d4af37] w-16 h-16" />
        </div>
        <h2 className="text-3xl font-serif mb-4">Reservation Confirmed</h2>
        <p className="text-gray-400 mb-8">Thank you, {formData.name}. We've sent a confirmation email for your {formData.service} on {formData.date} at {formData.time}.</p>
        <button 
          onClick={() => setSubmitted(false)}
          className="text-[#d4af37] font-bold uppercase tracking-widest hover:underline"
        >
          Book another session
        </button>
      </div>
    );
  }

  return (
    <section id="booking" className="py-24 container mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        <div className="space-y-6">
          <h2 className="text-5xl font-serif leading-tight">Secure Your <br /><span className="text-[#d4af37]">Luxury Experience</span></h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            Every appointment begins with a detailed consultation to ensure your vision is realized with precision and artistry. Select your preferred service and time below.
          </p>
          
          <div className="grid grid-cols-2 gap-4 pt-4">
            <div className="bg-white/5 p-6 rounded-2xl border border-white/5">
              <h4 className="text-[#d4af37] font-bold text-xl mb-1">Open 7 Days</h4>
              <p className="text-xs text-gray-500 uppercase tracking-widest">9:00 AM - 8:00 PM</p>
            </div>
            <div className="bg-white/5 p-6 rounded-2xl border border-white/5">
              <h4 className="text-[#d4af37] font-bold text-xl mb-1">Elite Team</h4>
              <p className="text-xs text-gray-500 uppercase tracking-widest">Master Stylists</p>
            </div>
          </div>
        </div>

        <div className="bg-[#111] rounded-3xl p-8 shadow-2xl border border-white/5">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
                <input 
                  required
                  type="text" 
                  placeholder="Full Name"
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-11 pr-4 focus:outline-none focus:border-[#d4af37] transition-colors"
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
                  <input 
                    required
                    type="email" 
                    placeholder="Email Address"
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-11 pr-4 focus:outline-none focus:border-[#d4af37] transition-colors"
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
                  <input 
                    required
                    type="tel" 
                    placeholder="Phone"
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-11 pr-4 focus:outline-none focus:border-[#d4af37] transition-colors"
                    value={formData.phone}
                    onChange={e => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <label className="text-xs uppercase tracking-widest text-gray-500 font-bold">Select Service</label>
              <div className="grid grid-cols-2 gap-3">
                {SERVICES.map(service => (
                  <button
                    key={service.id}
                    type="button"
                    onClick={() => setFormData({...formData, service: service.name})}
                    className={`text-left p-4 rounded-xl border transition-all ${formData.service === service.name ? 'bg-[#d4af37] border-[#d4af37] text-black' : 'bg-white/5 border-white/10 text-white hover:border-white/20'}`}
                  >
                    <div className="text-sm font-bold">{service.name}</div>
                    <div className="text-xs opacity-70">{service.price}</div>
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-gray-500 font-bold">Date</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
                  <input 
                    required
                    type="date" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-11 pr-4 focus:outline-none focus:border-[#d4af37] transition-colors text-sm"
                    value={formData.date}
                    onChange={e => setFormData({...formData, date: e.target.value})}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-gray-500 font-bold">Time</label>
                <div className="relative">
                  <Clock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
                  <select 
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-11 pr-4 focus:outline-none focus:border-[#d4af37] transition-colors text-sm appearance-none"
                    value={formData.time}
                    onChange={e => setFormData({...formData, time: e.target.value})}
                  >
                    <option value="" disabled>Time</option>
                    {TIMES.map(t => <option key={t} value={t} className="bg-[#111]">{t}</option>)}
                  </select>
                </div>
              </div>
            </div>

            <button 
              type="submit"
              className="w-full bg-[#d4af37] text-black font-bold py-4 rounded-xl uppercase tracking-widest hover:scale-[1.02] active:scale-95 transition-all shadow-lg shadow-[#d4af37]/20"
            >
              Confirm Appointment
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
