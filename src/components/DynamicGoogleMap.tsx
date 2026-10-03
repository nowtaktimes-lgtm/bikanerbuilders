import React from 'react';

interface DynamicGoogleMapProps {
  locationName?: string;
}

export default function DynamicGoogleMap({ locationName }: DynamicGoogleMapProps) {
  const defaultAddress = "Shop No 04, Opp Govt School, Napasar Rd, Ridmalsar Sipahiyan, Bikaner, Rajasthan 334022";
  
  // If location is provided, append "Bikaner, Rajasthan" to ensure accurate targeting
  // If no location is provided, use the exact office address
  const searchQuery = locationName 
    ? `${locationName}, Bikaner, Rajasthan` 
    : defaultAddress;

  const mapUrl = `https://maps.google.com/maps?hl=en&q=${encodeURIComponent(searchQuery)}&t=&z=14&ie=UTF8&iwloc=B&output=embed`;

  return (
    <div className="mt-12 bg-white p-4 md:p-8 rounded-3xl shadow-xl border border-slate-100">
      <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6">
        {locationName ? `Our Projects in ${locationName}` : 'Visit Our Office'}
      </h2>
      <div className="relative w-full overflow-hidden rounded-xl shadow-md bg-slate-100">
        <iframe
          title={`Map of ${searchQuery}`}
          src={mapUrl}
          className="w-full h-64 md:h-96 border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
