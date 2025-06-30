'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const backgroundImages = [
  '/images/image1.jpg',
  '/images/image2.jpg',
];

const rotatingTexts = [
  'Greater Peace in Your Heart',
  'Greater Love in Your Relationship',
  "Greater Purpose in Your Life's Direction",
];

const rotatingIcons = [
  '/images/heart.png',
  '/images/handshake.png',
  '/images/compass.png',
];

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 8000);

    const textInterval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % rotatingTexts.length);
    }, 2000);

    return () => {
      clearInterval(imageInterval);
      clearInterval(textInterval);
    };
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden">
      {backgroundImages.map((imagePath, index) => (
        <Image
          key={index}
          src={imagePath}
          alt={`Background Image ${index + 1}`}
          fill
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out object-cover object-center ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
          priority={index === 0}
          quality={80}
        />
      ))}

      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

      <div className="relative z-10 p-4 max-w-3xl mx-auto">
        <p className="text-sm sm:text-base font-light mb-2 tracking-wide uppercase">
          Dr. Serena Blake, PsyD
        </p>

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug mb-4 drop-shadow-lg">
          Professional Clinical Psychology for Healing and Growth
        </h1>

        <h2 className="text-sm sm:text-base md:text-lg font-light mb-2 drop-shadow-md">
          Begin your journey today towards spiritual growth, deeper relationships, and lasting inner peace.
        </h2>

        <p className="text-base sm:text-lg font-medium mt-6 mb-2">I want to work with you for…</p>

        {/* Rotating icon + text block */}
        <div className="h-10 sm:h-12 overflow-hidden relative">
          <div
            key={currentTextIndex}
            className="absolute w-full flex items-center justify-center gap-2 animate-[slideUpFade_0.6s_ease-out]"
          >
            <Image
              src={rotatingIcons[currentTextIndex]}
              alt="Icon"
              width={20}
              height={20}
              className="filter invert brightness-[90%] sepia hue-rotate-[310deg] saturate-[600%]"
            />
            <span className="text-sm sm:text-base md:text-lg font-medium text-[#ffdede]">
              {rotatingTexts[currentTextIndex]}
            </span>
          </div>
        </div>

        {/* Rainbow glow button with star icon */}
        <Link
          href="/get-started"
          className="relative inline-flex items-center gap-2 mt-8 px-6 py-3 text-sm sm:text-base md:text-lg font-semibold text-blue-800 bg-white rounded-md shadow-lg overflow-hidden hover:brightness-110 transition-all duration-300"
        >
          {/* Rainbow animation background */}
          <span
            className="absolute inset-0 animate-[flowGradient_4s_linear_infinite] bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-[length:200%_200%] opacity-60 blur-sm"
            aria-hidden="true"
          ></span>

          {/* Star icon */}
          <Image
            src="/images/stars.png"
            alt="Star Icon"
            width={18}
            height={18}
            className="relative z-10 filter invert brightness-[90%] sepia hue-rotate-[310deg] saturate-[600%]"
          />

          <span className="relative z-10">Book a Free Consult</span>
        </Link>
      </div>
    </section>
  );
}
