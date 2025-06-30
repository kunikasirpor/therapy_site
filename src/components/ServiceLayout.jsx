'use client';

import Image from 'next/image';
import Link from 'next/link';
import FAQ from '@/components/FAQ';
import { useEffect, useState } from 'react';

export default function ServiceLayout({
  serviceName,
  mainHeading,
  description,
  healingPoints,
  ctaText, // This CTA is for the Hero section, will remain as is
  healingFocusTags,
  faithPathHeading,
  faithPathDescription,
  therapeuticApproaches,
  mainServiceImage,
  faithPathImage,
  heroImage,
  // PROPS FOR CUSTOM BUTTON TEXTS
  healingCtaButtonText = "Get Started", // Default text
  faithPathCtaButtonText = "Get Started", // Default text
}) {
  const testimonials = [
    {
      name: 'Happy Client',
      text: '“Dr. Blake helped me find clarity and peace. I am forever grateful for the compassion and tools I received.”',
    },
    {
      name: 'Anonymous Client',
      text: '“The sessions changed my life. I learned how to cope with stress and truly understand myself.”.”',
    },
    {
      name: 'Recovered Patient',
      text: '“Her wisdom and care made a difference. I finally feel emotionally strong again.”',
    },
  ];

  const [current, setCurrent] = useState(0);
  const [animationClass, setAnimationClass] = useState('');
  const [showServiceFormSuccess, setShowServiceFormSuccess] = useState(false);


  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationClass('slide-out-fade-in'); // Trigger slide out and fade in
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % testimonials.length);
        setAnimationClass('slide-in'); // Trigger slide in for the new testimonial
      }, 500); // Half of the animation duration for the transition
    }, 4000); // 4 seconds per testimonial, adjust as needed

    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Handle submission for the form within ServiceLayout
  const handleServiceFormSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission

    // IMPORTANT: In a real application, you would perform CAPTCHA verification here
    // before proceeding with form submission.
    // Example: Check if the reCAPTCHA checkbox is checked (for a basic visual CAPTCHA)
    const recaptchaCheckbox = event.target.elements.recaptchaCheckbox;
    if (recaptchaCheckbox && !recaptchaCheckbox.checked) {
      alert("Please complete the CAPTCHA verification.");
      return; // Stop the submission if CAPTCHA is not checked
    }


    console.log("ServiceLayout form submitted!");
    // Simulate API call or form processing
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate 1-second delay

    setShowServiceFormSuccess(true); // Show the success message

    // Optionally, reset the form after successful submission
    event.target.reset();
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center text-center text-white overflow-hidden">
        <Image
          src={heroImage}
          alt={`${serviceName} Image`}
          fill
          className="absolute inset-0 object-cover object-center opacity-80"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 p-4 max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 drop-shadow-md">
            {serviceName}
          </h1>
          <p className="text-xl text-white drop-shadow-sm">
            Providing compassionate support for {serviceName.toLowerCase()}.
          </p>
          <Link
            href="/get-started"
            className="relative inline-flex items-center gap-2 mt-8 px-6 py-3 text-lg font-semibold text-blue-800 bg-white rounded-md shadow-lg overflow-hidden hover:brightness-110 transition-all duration-300"
          >
            <span
              className="absolute inset-0 animate-[flowGradient_4s_linear_infinite] bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-[length:200%_200%] opacity-60 blur-sm"
              aria-hidden="true"
            ></span>
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

      {/* Healing Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">{mainHeading}</h2>
            <p className="text-lg text-gray-700 mb-8">{description}</p>
            <div className="space-y-6 w-full">
              {healingPoints.map((point, index) => (
                <div key={index} className="bg-blue-100 border-l-4 border-blue-400 p-4 rounded shadow-sm">
                  <h3 className="text-lg font-semibold text-blue-800 mb-1">{point.title}</h3>
                  <p className="text-gray-700 text-sm">{point.description}</p>
                </div>
              ))}
            </div>
            {healingFocusTags?.length > 0 && (
              <div className="mt-8 flex flex-wrap gap-2 justify-center md:justify-start">
                {healingFocusTags.map((tag, index) => (
                  <span key={index} className="bg-blue-200 text-blue-800 text-sm px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            )}
            {/* "Get Started" button for Healing Section - now uses healingCtaButtonText */}
            <div className="mt-8">
              <Link
                href="/get-started"
                // MODIFIED: Smaller padding, lighter blue, no star
                className="inline-flex items-center gap-2 px-5 py-2 text-md font-semibold text-white bg-blue-500 rounded-md shadow-lg hover:bg-blue-600 transition-colors duration-300"
              >
                {healingCtaButtonText} {/* Dynamic text */}
              </Link>
            </div>
          </div>
          <div className="w-full h-full flex justify-center items-center">
            <Image
              src={mainServiceImage}
              alt={serviceName}
              width={500}
              height={600}
              className="rounded-lg shadow-xl object-cover"
              style={{ maxHeight: '100%' }}
            />
          </div>
        </div>
      </section>

      {/* Faith-Based Section */}
      <section className="bg-blue-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="w-full h-full flex justify-center items-center">
            <Image
              src={faithPathImage}
              alt="Faith-Based Path"
              width={500}
              height={600}
              className="rounded-lg shadow-xl object-cover"
              style={{ maxHeight: '100%' }}
            />
          </div>
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">{faithPathHeading}</h2>
            <p className="text-lg text-gray-700 mb-8">{faithPathDescription}</p>
            <div className="space-y-6 w-full">
              {therapeuticApproaches.map((approach, index) => (
                <div key={index} className="bg-blue-100 border-l-4 border-blue-400 p-4 rounded shadow-sm">
                  <h3 className="text-lg font-semibold text-blue-800 mb-1">{approach.title}</h3>
                  <p className="text-gray-700 text-sm">{approach.description}</p>
                </div>
              ))}
            </div>
            {/* "Get Started" button for Faith-Based Section - now uses faithPathCtaButtonText */}
            <div className="mt-8">
              <Link
                href="/get-started"
                // MODIFIED: Smaller padding, lighter blue, no star
                className="inline-flex items-center gap-2 px-5 py-2 text-md font-semibold text-white bg-blue-500 rounded-md shadow-lg hover:bg-blue-600 transition-colors duration-300"
              >
                {faithPathCtaButtonText} {/* Dynamic text */}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section (Now above Author, with sliding effect) */}
      <section className="bg-blue-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What Our Clients Say</h2>
          <p className="text-gray-700 mb-10">
            Real experiences from individuals who have found healing and growth through our work together.
          </p>
          <div className="relative h-40 overflow-hidden">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-transform transition-opacity duration-500 ease-in-out ${
                  current === index ? 'opacity-100 transform-none' : 'opacity-0 transform translate-x-full'
                } ${animationClass}`}
              >
                <div className="bg-white shadow-md rounded-lg p-6 mx-auto max-w-xl">
                  <h4 className="text-lg font-semibold mb-2">{testimonial.name}</h4>
                  <p className="text-gray-700 text-sm">{testimonial.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Author Section */}
      <section className="bg-blue-100 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div className="flex justify-center">
            {/* Profile Image with rectangular frame and transparent name overlay */}
            <div className="relative w-56 h-72 sm:w-72 sm:h-96 overflow-hidden shadow-lg border-2 border-blue-200 rounded-lg p-2 bg-white">
              <Image
                src="/images/dr-blake-profile.jpg"
                alt="Dr. Serena Blake"
                fill
                className="object-cover object-center rounded-md"
              />
              {/* Transparent name/experience section at the bottom-left */}
              <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-40 text-white text-xs px-3 py-2 text-left">
                <span className="font-semibold text-sm">Dr. Serena Blake</span>, PsyD
                <br />15+ Years Experience
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-sm bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full inline-block mb-3">
              Licensed Clinical Psychologist | 15+ Years Experience
            </h3>
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Meet Dr. Serena Blake</h2>
            <p className="text-gray-800 text-lg">
              With two decades of experience in helping individuals through trauma, anxiety,
              and relationship difficulties, Dr. Blake combines clinical techniques with spiritual care.
              Her work is centered around holistic healing and personal empowerment.
            </p>
            {/* "Start Counseling Today" button in Author Section */}
            <div className="mt-8 text-center md:text-left">
              <Link
                href="/get-started"
                // MODIFIED: Smaller padding, lighter blue, no star
                className="inline-flex items-center gap-2 px-5 py-2 text-md font-semibold text-white bg-blue-500 rounded-md shadow-lg hover:bg-blue-600 transition-colors duration-300"
              >
                <span className="relative z-10">Start Counseling Today</span> {/* Removed Image tag */}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ and Form stay unchanged */}
      <FAQ />

      {/* Get in Touch */}
      <section className="py-16 bg-blue-100 px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto bg-white rounded-lg shadow-lg border border-blue-200 p-8 md:p-10">
          <h3 className="text-2xl sm:text-3xl font-bold text-blue-800 text-center mb-4">
            Free Consultation Form
          </h3>
          <p className="text-center text-gray-600 text-sm mb-6">
            Simply fill out the brief fields below and Dr. Blake will be in touch with you soon,
            usually within one business day. This form is safe, private, and completely free.
          </p>

          <form className="space-y-4" onSubmit={handleServiceFormSubmit}>
            <input type="text" name="name" placeholder="Name" required className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <input type="email" name="email" placeholder="you@example.com" required className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <input type="tel" name="phone" placeholder="(555) 234-5678" required className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <textarea name="message" rows="4" placeholder="What brings you here?" required className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y"></textarea>
            <input type="text" name="preferredTime" placeholder="Preferred time to reach you" required className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <div className="flex items-center space-x-2">
              <input type="checkbox" name="agree" className="form-checkbox h-5 w-5 text-blue-600 rounded-md" required />
              <label className="text-gray-700 text-sm">I agree to be contacted</label>
            </div>

            {/* NEW: CAPTCHA Verification Checkbox (Visual only, for real integration see comments) */}
            <div className="flex items-center p-3 border border-gray-300 rounded-md bg-gray-50 max-w-xs shadow-sm">
              <input
                type="checkbox"
                id="recaptcha-checkbox-service" // Unique ID for this checkbox
                name="recaptchaCheckbox"
                className="form-checkbox h-6 w-6 text-blue-600 rounded-sm border-gray-400 focus:ring-blue-500"
                required // Added 'required' here to enforce checking for the placeholder
              />
              <label htmlFor="recaptcha-checkbox-service" className="ml-3 text-gray-700 text-base font-medium flex-grow">
                I'm not a robot
              </label>
              {/* Visual placeholder for reCAPTCHA logo */}
              <div className="ml-auto text-gray-500 text-xs text-right">
                <svg className="w-6 h-6 inline-block mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.01 12.01 0 002.944 12c0 2.879 1.144 5.438 2.999 7.379L12 21.426l6.057-3.955C20.007 17.438 21.056 14.879 21.056 12A12.009 12.009 0 0018.618 7.984z"></path>
                </svg>
                reCAPTCHA<br/>
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="hover:underline text-blue-600">Privacy</a> - <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="hover:underline text-blue-600">Terms</a>
              </div>
            </div>

            <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold text-lg hover:bg-blue-700 transition-colors shadow-md">
              Submit
            </button>
            <p className="text-xs text-gray-500 text-center mt-4">
              By submitting, you confirm you are 18+ and agree to our{' '}
              <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a> &{' '}
              <a href="#" className="text-blue-600 hover:underline">TOS</a>.
            </p>
          </form>
        </div>
      </section>

      {/* Success Message Dialog Box for ServiceLayout form */}
      {showServiceFormSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
          <div className="bg-white rounded-lg shadow-xl p-8 max-w-md mx-auto text-center border-t-4 border-blue-500 transform transition-all duration-300 scale-100 opacity-100">
            <svg className="mx-auto mb-4 h-16 w-16 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Booking Confirmed!</h3>
            <p className="text-gray-700 mb-6">
              Thank you for your inquiry. We have received your booking request and will reach out to you soon, typically within one business day.
            </p>
            <button
              onClick={() => setShowServiceFormSuccess(false)}
              className="px-6 py-3 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700 transition-colors shadow-md"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}