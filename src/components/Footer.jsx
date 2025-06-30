// dr-blake-psychology/components/Footer.jsx
import Link from 'next/link';
import Image from 'next/image'; 

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12"> {/* Dark background */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10"> {/* 4 columns on medium screens */}

          {/* Column 1: Logo & Contact Info */}
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-4">
              {/* Logo - Text placeholder for now. Use actual logo image if available. */}
              {/* <Image src="/images/dr-blake-logo.png" alt="Dr. Blake Psychology Logo" width={50} height={50} /> */}
              <span className="text-xl font-bold text-white">Dr. Blake Psychology</span>
            </Link>
            <p className="text-sm mb-2">1287 Maplewood Drive,</p>
            <p className="text-sm mb-2">Los Angeles, CA 90026</p>
            <p className="text-sm mb-4">Phone: <a href="tel:+13235550192" className="hover:underline">(323) 555-0192</a></p>
          </div>

          {/* Column 2: Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">LINKS</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#testimonials" className="hover:text-white transition-colors">Testimonials</Link></li>
              <li><Link href="#about" className="hover:text-white transition-colors">About Me</Link></li>
              <li><Link href="#faq" className="hover:text-white transition-colors">FAQ&apos;s</Link></li>
              <li><Link href="#services" className="hover:text-white transition-colors">Services</Link></li> 
              <li><Link href="#" className="hover:text-white transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Column 3: Areas Served  */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">AREAS SERVED</h3>
            <ul className="space-y-2 text-sm">
              <li>Los Angeles, CA</li>
              <li>Santa Monica, CA</li>
              <li>Pasadena, CA</li>
              <li>Beverly Hills, CA</li>
              <li>Glendale, CA</li>
              <li>Long Beach, CA</li>
            </ul>
          </div>

          {/* Column 4: Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">SERVICES</h3>
            <ul className="space-y-2 text-sm">
              <li>Individual Therapy</li>
              <li>Couples Therapy</li>
              <li>Anxiety & Stress Management</li>
              <li>Relationship Counseling</li>
              <li>Trauma Recovery</li>
            </ul>
          </div>

        </div>

        {/* Copyright Bar */}
        <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Dr. Blake Psychology. All Rights Reserved.</p>
          <p className="mt-1">
            <Link href="#" className="hover:underline">Privacy Policy</Link> | <Link href="#" className="hover:underline">Terms of Service</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
