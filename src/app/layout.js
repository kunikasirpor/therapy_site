// dr-blake-psychology/app/layout.js
import './globals.css';
import { Inter } from 'next/font/google';

import Header from '@/components/Header'; // Import the Header component
import Footer from '@/components/Footer'; // Import the Footer component

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Dr. Serena Blake, PsyD | Professional Clinical Psychology',
  description: 'Begin your journey today towards inner peace, strengthened relationships, and lasting well-being with Dr. Serena Blake, PsyD, a licensed clinical psychologist.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header /> {/* Place the Header here */}
        {children} {/* This is where your page content (Hero, Services, About, FAQ) will be rendered */}
        <Footer /> {/* Place the Footer here */}
      </body>
    </html>
  );
}