'use client';

import React, { useState } from 'react';
import { useSettings } from '@/components/SettingsProvider';

export default function CostCalculator() {
  const settings = useSettings();
  const [area, setArea] = useState<number | ''>('');
  const [unit, setUnit] = useState<'sqft' | 'gaj'>('gaj');
  const [quality, setQuality] = useState<number>(1500);
  const [floors, setFloors] = useState<number>(1);

  // Math Logic
  const areaValue = typeof area === 'number' ? area : 0;
  const totalSqFt = unit === 'gaj' ? areaValue * 9 : areaValue;
  const estimatedCost = totalSqFt * quality * floors;

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(value);
  };

  const getQualityName = (rate: number) => {
    if (rate === 1500) return 'Standard';
    if (rate === 1800) return 'Premium';
    if (rate === 2200) return 'Luxury';
    return '';
  };

  const getFloorName = (num: number) => {
    if (num === 1) return 'Ground Floor (G)';
    return `G + ${num - 1}`;
  };

  const whatsappMessage = `Namaste! I want a detailed quote for my construction project.\n\nPlot Area: ${areaValue} ${unit === 'gaj' ? 'Gaj' : 'Sq Ft'}\nQuality: ${getQualityName(quality)}\nFloors: ${getFloorName(floors)}\nEstimated Cost: ${formatCurrency(estimatedCost)}\n\nPlease send me a detailed PDF quote.`;
  const whatsappUrl = `https://wa.me/${settings.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-slate-100 p-6 sm:p-10 max-w-2xl mx-auto transform hover:-translate-y-1 transition-all duration-300">
      <div className="mb-8 text-center">
        <h2 className="text-2xl sm:text-3xl font-black text-[#0F172A] mb-2">Estimate Your Cost</h2>
        <p className="text-gray-500 font-medium">Get an instant, approximate construction cost</p>
      </div>

      <div className="space-y-6">
        {/* Plot Area */}
        <div>
          <label className="block text-sm font-bold text-[#0F172A] mb-2">Plot Area</label>
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <input
                type="number"
                value={area}
                onChange={(e) => setArea(e.target.value === '' ? '' : Number(e.target.value))}
                placeholder="Enter plot area"
                className="w-full bg-slate-50 border border-slate-200 text-[#0F172A] font-bold rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#EA580C] focus:border-transparent transition-all"
                min={0}
              />
            </div>
            <select
              value={unit}
              onChange={(e) => setUnit(e.target.value as 'sqft' | 'gaj')}
              className="bg-slate-50 border border-slate-200 text-[#0F172A] font-bold rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#EA580C] cursor-pointer"
            >
              <option value="sqft">Sq Ft</option>
              <option value="gaj">Gaj</option>
            </select>
          </div>
          {/* Helper Text */}
          <div className="mt-2 text-sm font-medium text-gray-500 h-5">
            {unit === 'gaj' && areaValue > 0 && (
              <span className="text-[#EA580C] animate-fade-in-up">
                {areaValue} Gaj = {totalSqFt} Sq Ft
              </span>
            )}
            {unit === 'sqft' && areaValue > 0 && (
              <span className="text-gray-400">
                {areaValue} Sq Ft = {(areaValue / 9).toFixed(2)} Gaj
              </span>
            )}
          </div>
        </div>

        {/* Construction Quality */}
        <div>
          <label className="block text-sm font-bold text-[#0F172A] mb-3">Construction Quality</label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { label: 'Standard', rate: 1500, desc: '₹1,500/sqft' },
              { label: 'Premium', rate: 1800, desc: '₹1,800/sqft' },
              { label: 'Luxury', rate: 2200, desc: '₹2,200/sqft' },
            ].map((option) => (
              <button
                key={option.rate}
                onClick={() => setQuality(option.rate)}
                className={`flex flex-col items-center justify-center p-3 rounded-xl border-2 transition-all ${
                  quality === option.rate
                    ? 'border-[#EA580C] bg-[#EA580C]/5 text-[#EA580C]'
                    : 'border-slate-100 bg-white text-gray-600 hover:border-slate-200'
                }`}
              >
                <span className="font-bold">{option.label}</span>
                <span className="text-xs font-medium opacity-80">{option.desc}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Number of Floors */}
        <div>
          <label className="block text-sm font-bold text-[#0F172A] mb-2">Number of Floors</label>
          <select
            value={floors}
            onChange={(e) => setFloors(Number(e.target.value))}
            className="w-full bg-slate-50 border border-slate-200 text-[#0F172A] font-bold rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#EA580C] cursor-pointer appearance-none"
            style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%230F172A'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center', backgroundSize: '1.2em' }}
          >
            <option value={1}>Ground Floor Only (G)</option>
            <option value={2}>Ground + 1 Floor (G+1)</option>
            <option value={3}>Ground + 2 Floors (G+2)</option>
            <option value={4}>Ground + 3 Floors (G+3)</option>
          </select>
        </div>
      </div>

      {/* Result Section */}
      <div className="mt-8 bg-[#0F172A] rounded-2xl p-6 text-center shadow-inner relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-radial-pattern-light"></div>
        <p className="text-gray-400 font-bold uppercase tracking-wider text-xs mb-2">Estimated Total Cost</p>
        <p className="text-4xl sm:text-5xl font-black text-white drop-shadow-md mb-2">
          {areaValue > 0 ? formatCurrency(estimatedCost) : '₹0'}
        </p>
        <p className="text-xs text-gray-500 font-medium">
          *This is an approximate estimate. Actual cost may vary based on exact material choices and local conditions.
        </p>
      </div>

      {/* CTA Button */}
      <div className="mt-6">
        <a
          href={areaValue > 0 ? whatsappUrl : '#'}
          target={areaValue > 0 ? "_blank" : undefined}
          rel="noopener noreferrer"
          className={`w-full flex items-center justify-center gap-3 py-4 rounded-xl font-black text-lg transition-all shadow-[0_8px_30px_rgba(37,211,102,0.3)] ${
            areaValue > 0 
              ? 'bg-[#25D366] hover:bg-[#1fae54] text-white hover:-translate-y-1' 
              : 'bg-slate-200 text-slate-400 cursor-not-allowed shadow-none'
          }`}
          onClick={(e) => {
            if (areaValue <= 0) e.preventDefault();
          }}
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M11.97 2.005a9.962 9.962 0 00-8.528 15.11L2 22l5.023-1.328a9.964 9.964 0 104.947-18.667zM12 20a7.973 7.973 0 01-4.062-1.115l-.291-.173-3.023.794.808-2.953-.19-.3A7.95 7.95 0 014.032 12 7.977 7.977 0 1112 20zm4.242-5.467c-.232-.116-1.378-.68-1.593-.758-.215-.078-.372-.116-.528.116-.156.232-.6 .758-.737.914-.136.155-.274.175-.506.058-.232-.116-.983-.362-1.87-1.156-.69-.617-1.155-1.38-1.29-1.612-.136-.233-.014-.359.102-.475.105-.105.232-.272.348-.408.116-.136.155-.233.232-.388.077-.156.039-.292-.019-.408-.058-.116-.528-1.277-.723-1.748-.19-.46-.383-.398-.528-.406-.137-.008-.293-.008-.45-.008a.86.86 0 00-.618.291c-.215.233-.822.805-.822 1.96 0 1.155.843 2.27 1.96 2.443.116.175 1.636 2.5 3.96 3.504.552.238.983.38 1.318.487.553.176 1.057.151 1.455.092.445-.067 1.378-.563 1.572-1.107.193-.544.193-1.01.136-1.107-.058-.097-.215-.155-.447-.272z" /></svg>
          Get Detailed PDF Quote on WhatsApp
        </a>
      </div>
    </div>
  );
}
