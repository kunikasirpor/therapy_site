'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  return (
    <section id="about" className="bg-blue-50 py-12 scroll-mt-28">
      {/* Consultation Bar */}
      <div className="bg-blue-700 text-white py-3 px-4 sm:px-6 lg:px-8 mb-12 shadow-md w-full">
        <div className="flex flex-col sm:flex-row justify-between items-center max-w-screen-xl mx-auto">
          <p className="text-sm sm:text-base mb-2 sm:mb-0 text-center sm:text-left">
            Ready to take the first step toward healing and growth?
          </p>
          <Link
            href="/get-started"
            className="bg-white text-blue-800 font-semibold px-4 py-2 rounded-md shadow hover:bg-blue-100 transition duration-300 text-sm"
          >
            Schedule a Free Consultation
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center mb-10">
          How I Help
        </h2>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row lg:space-x-12 items-center lg:items-start">
          {/* Profile Image with rectangular frame and name on transparent section */}
          <div className="mb-8 lg:mb-0 lg:w-1/3 w-full flex justify-center">
            <div className="relative w-56 h-72 sm:w-72 sm:h-96 overflow-hidden shadow-lg border-2 border-blue-200 rounded-lg p-2 bg-white">
              <Image
                src="/images/dr-blake-profile.jpg"
                alt="Dr. Serena Blake"
                fill
                className="object-cover object-center rounded-md"
              />
              {/* This is the transparent name/experience section */}
              <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-40 text-white text-xs px-3 py-2 text-left">
                <span className="font-semibold text-sm">Dr. Serena Blake</span>, PsyD
                <br />8 Years Experience
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="lg:w-2/3 w-full space-y-6 text-gray-700 px-2 sm:px-0">
            <h3 className="text-2xl sm:text-3xl font-bold text-blue-800 mb-2 text-center lg:text-left">
              Hi, I'm Dr. Serena Blake
            </h3>
            <p className="text-sm sm:text-base text-center lg:text-left">
              Dr. Serena Blake is a licensed clinical psychologist (PsyD) based in Los Angeles, CA, with eight years of experience and over 500 client sessions. She blends evidence-based approaches—like cognitive-behavioral therapy and mindfulness—with compassionate, personalized care to help you overcome anxiety, strengthen relationships, and heal from trauma.
            </p>
            <p className="text-sm sm:text-base text-center lg:text-left">
              Whether you meet in her Maplewood Drive office or connect virtually via Zoom, Dr. Blake is committed to creating a safe, supportive space for you to thrive.
            </p>
           
          </div>
        </div>
      </div>
    </section>
  );
}