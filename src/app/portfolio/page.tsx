import React from 'react';
import Portfolio from '@/components/Portfolio';

export const metadata = {
  title: 'Project Portfolio - Bikaner Builders',
  description: 'Explore our completed construction projects, 3D elevations, and Vastu-compliant 2D nakshas in Bikaner.',
};

export default function PortfolioPage() {
  return (
    <div className="pt-20">
      <Portfolio />
    </div>
  );
}
