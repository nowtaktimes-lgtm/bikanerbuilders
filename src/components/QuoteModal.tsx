'use client';

import React, { FormEvent, useEffect, useState } from 'react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const phone = formData.get('phone') as string;
    const service = formData.get('service') as string;
    const message = formData.get('message') as string;

    const messageText = `*New Quote Request*%0A%0A*Name:* ${name}%0A*Phone:* ${phone}%0A*Service:* ${service}%0A*Message:* ${message}`;
    const encodedMessage = messageText.replace(/ /g, '%20'); // Basic encoding, %0A is already encoded

    window.open(`https://wa.me/919376590313?text=${encodedMessage}`, '_blank');

    setIsSubmitting(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="relative bg-slate-900 w-full max-w-md rounded-2xl shadow-2xl border border-slate-700 overflow-hidden transform transition-all animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="border-b border-slate-800 p-5 sm:p-6 text-center relative">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-full p-1.5 transition-colors"
            aria-label="Close"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <h2 className="text-2xl font-black text-white mb-1">
            Get an Estimate
          </h2>
          <p className="text-orange-500 text-sm font-medium">
            Connect instantly on WhatsApp
          </p>
        </div>

        {/* Form */}
        <div className="p-5 sm:p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            
            <div>
              <label htmlFor="name" className="block text-sm font-bold text-slate-300 mb-1.5">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Ramesh Kumar"
                className="w-full px-4 py-3 rounded-lg border border-slate-700 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition bg-slate-800 text-white placeholder-slate-500"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-bold text-slate-300 mb-1.5">
                WhatsApp Number <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 font-medium">
                  +91
                </span>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  pattern="[0-9]{10}"
                  maxLength={10}
                  placeholder="9876543210"
                  className="w-full pl-12 pr-4 py-3 rounded-lg border border-slate-700 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition bg-slate-800 text-white placeholder-slate-500"
                />
              </div>
            </div>

            <div>
              <label htmlFor="service" className="block text-sm font-bold text-slate-300 mb-1.5">
                Service Needed <span className="text-red-500">*</span>
              </label>
              <select
                id="service"
                name="service"
                required
                defaultValue=""
                className="w-full px-4 py-3 rounded-lg border border-slate-700 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition bg-slate-800 text-white appearance-none cursor-pointer"
                style={{ backgroundImage: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 20 20\'%3e%3cpath stroke=\'%2394a3b8\' stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'1.5\' d=\'M6 8l4 4 4-4\'/%3e%3c/svg%3e")', backgroundPosition: 'right 1rem center', backgroundRepeat: 'no-repeat', backgroundSize: '1.5em 1.5em' }}
              >
                <option value="" disabled className="text-slate-500">Select a service...</option>
                <option value="2D Naksha">2D Naksha</option>
                <option value="3D Elevation">3D Elevation</option>
                <option value="Turnkey Construction">Turnkey Construction</option>
                <option value="False Ceiling / POP / Other">False Ceiling / POP / Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-bold text-slate-300 mb-1.5">
                Message / Plot Size
              </label>
              <textarea
                id="message"
                name="message"
                rows={3}
                placeholder="e.g. 30x60 plot size, need a quote."
                className="w-full px-4 py-3 rounded-lg border border-slate-700 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition bg-slate-800 text-white placeholder-slate-500 resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full mt-2 bg-[#EA580C] hover:bg-[#F97316] text-white font-black text-lg py-4 rounded-xl shadow-[0_4px_15px_rgba(234,88,12,0.4)] hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.97 2.005a9.962 9.962 0 00-8.528 15.11L2 22l5.023-1.328a9.964 9.964 0 104.947-18.667zM12 20a7.973 7.973 0 01-4.062-1.115l-.291-.173-3.023.794.808-2.953-.19-.3A7.95 7.95 0 014.032 12 7.977 7.977 0 1112 20zm4.242-5.467c-.232-.116-1.378-.68-1.593-.758-.215-.078-.372-.116-.528.116-.156.232-.6 .758-.737.914-.136.155-.274.175-.506.058-.232-.116-.983-.362-1.87-1.156-.69-.617-1.155-1.38-1.29-1.612-.136-.233-.014-.359.102-.475.105-.105.232-.272.348-.408.116-.136.155-.233.232-.388.077-.156.039-.292-.019-.408-.058-.116-.528-1.277-.723-1.748-.19-.46-.383-.398-.528-.406-.137-.008-.293-.008-.45-.008z" />
              </svg>
              Send Request
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
