// dr-blake-psychology/app/page.jsx
// This component needs client-side interactivity for the FAQ section and potentially others
'use client';

import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact'; // Only included if you want it on the home page, not just /get-started

export default function Home() {
  return (
    <main>
      <Hero />
      <Services /> {/* This is where the updated Services component will render */}
      <About />
      <FAQ />
      {/* If Contact is desired on the main page again, uncomment this. Otherwise, it's on /get-started */}
      <Contact /> 
    </main>
  );
}