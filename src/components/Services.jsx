'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';

export default function Services() {
  const serviceData = [
    {
      title: 'Anxiety & Stress Management',
      description:
        'Discover effective strategies to manage daily stressors, reduce anxiety symptoms, and cultivate inner calm for a more peaceful life.',
      image: '/images/service-img-1.jpg',
      linkSlug: 'anxiety-stress-management',
    },
    {
      title: 'Relationship Counseling',
      description:
        'Strengthen communication, resolve conflicts, and deepen your connections with loved ones through supportive and insightful guidance.',
      image: '/images/service-img-2.jpg',
      linkSlug: 'relationship-counseling',
    },
    {
      title: 'Trauma Recovery',
      description:
        'Heal from past experiences and move towards resilience. Develop coping mechanisms to process trauma and reclaim your well-being.',
      image: '/images/service-img-3.jpg',
      linkSlug: 'trauma-recovery',
    },
  ];

  const [yearsCount, setYearsCount] = useState(0);
  const [sessionsCount, setSessionsCount] = useState(0);
  const statisticsSectionRef = useRef(null);

  const animateCount = (target, duration, setCount) => {
    const startTime = performance.now();
    const updateCount = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const currentValue = Math.floor(progress * target);
      setCount(currentValue);
      if (progress < 1) {
        requestAnimationFrame(updateCount);
      }
    };
    requestAnimationFrame(updateCount);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setYearsCount(0);
            setSessionsCount(0);
            animateCount(15, 2000, setYearsCount);
            animateCount(5000, 2000, setSessionsCount);
          } else {
            setYearsCount(0);
            setSessionsCount(0);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (statisticsSectionRef.current) {
      observer.observe(statisticsSectionRef.current);
    }

    return () => {
      if (statisticsSectionRef.current) {
        observer.unobserve(statisticsSectionRef.current);
      }
    };
  }, []);

  return (
    <section id="services" className="py-16 bg-gray-50 relative overflow-hidden">
      {/* Statistics Section */}
      <div ref={statisticsSectionRef} className="bg-blue-800 text-white py-8 mb-12 shadow-inner">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl flex flex-col sm:flex-row justify-around items-center text-center gap-8">
          <div className="flex flex-col items-center">
            <p className="text-4xl sm:text-5xl font-bold">{yearsCount}+</p>
            <p className="text-lg sm:text-xl font-light">Years Experience</p>
            <p className="text-sm italic opacity-80">
              Providing compassionate and effective Individual and Couples Therapy
            </p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-4xl sm:text-5xl font-bold">{sessionsCount}+</p>
            <p className="text-lg sm:text-xl font-light">Client Sessions</p>
            <p className="text-sm italic opacity-80">
              Helping individuals and couples heal, grow, and find purpose
            </p>
          </div>
        </div>
      </div>

      {/* Service Cards */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl relative z-10">
        <h2 className="text-4xl font-bold text-blue-800 text-center mb-12">How I Help</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {serviceData.map((service, index) => (
            <div
              key={index}
              className="bg-blue-100 rounded-lg p-6 shadow-lg transition-all duration-300 hover:shadow-xl flex flex-col"
            >
              <div className="relative h-40 overflow-hidden rounded mb-4">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover object-center"
                />
              </div>

              <div className="flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-blue-800 mb-2">{service.title}</h3>
                <p className="text-blue-700 text-sm mb-4 leading-relaxed flex-grow">
                  {service.description}
                </p>
                <Link
                  href={`/get-started/services/${service.linkSlug}`}
                  className="block w-72 bg-blue-200 border border-blue-400 text-blue-800 py-2 px-4 rounded-md font-medium hover:bg-blue-300 transition-colors text-center mt-auto"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative Circle */}
      <div className="absolute bottom-0 right-0 w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 bg-teal-200 opacity-30 rounded-full transform translate-x-1/3 translate-y-1/3 rotate-45 -z-0"></div>
    </section>
  );
}
