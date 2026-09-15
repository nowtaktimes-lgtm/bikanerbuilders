import React from 'react';
import Contact from '@/components/Contact';

export const metadata = {
  title: 'Contact Us - Bikaner Builders',
  description: 'Get in touch with Bikaner Builders for construction, architectural design, and Vastu consultation.',
};

export default function ContactPage() {
  return (
    <div className="pt-20">
      <Contact />
    </div>
  );
}
