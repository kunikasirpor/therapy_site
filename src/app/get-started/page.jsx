'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function GetStartedPage() {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleKeyDown = (event) => {
    if ([8, 9, 27, 13, 46].includes(event.keyCode) ||
        ((event.keyCode === 65 || event.keyCode === 67 || event.keyCode === 86 || event.keyCode === 88) && (event.ctrlKey === true || event.metaKey === true)) ||
        (event.keyCode >= 35 && event.keyCode <= 40)) {
      return;
    }
    if ((event.shiftKey || (event.keyCode < 48 || event.keyCode > 57)) && (event.keyCode < 96 || event.keyCode > 105)) {
      event.preventDefault();
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); 

    console.log("Get Started Page Form submitted!");
    await new Promise(resolve => setTimeout(resolve, 1000)); 

    setShowSuccessMessage(true);

    event.target.reset();
  };


  return (
    <div className="bg-blue-100 min-h-screen">
      {/* Container for the side-by-side content */}
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 items-start py-16 px-4 sm:px-6 lg:px-8">

        {/* Doctor's About Section (Image + Description) - Left Half */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
          {/* Profile Image with rectangular frame and name on transparent section */}
          <div className="mb-8 lg:mb-0 w-full flex justify-center lg:justify-start">
            {/* Added bg-white, p-2, and adjusted w/h for rectangular frame */}
            <div className="relative w-56 h-72 sm:w-72 sm:h-96 overflow-hidden shadow-lg border-2 border-blue-200 rounded-lg p-2 bg-white">
              <Image
                src="/images/dr-blake-profile.jpg"
                alt="Dr. Serena Blake"
                fill
                className="object-cover object-center rounded-md" // rounded-md for slight inner curve
              />
              {/* Transparent name/experience section at the bottom-left */}
              <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-40 text-white text-xs px-3 py-2 text-left">
                <span className="font-semibold text-sm">Dr. Serena Blake</span>, PsyD
                <br />8 Years Experience
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="w-full space-y-6 text-gray-700 px-2 sm:px-0 mt-8 lg:mt-0">
            <h3 className="text-2xl sm:text-3xl font-bold text-blue-800 mb-2">
              Hi, I'm Dr. Serena Blake
            </h3>
            <p className="text-sm sm:text-base">
              Dr. Serena Blake is a licensed clinical psychologist (PsyD) based in Los Angeles, CA, with eight years of experience and over 500 client sessions. She blends evidence-based approaches—like cognitive-behavioral therapy and mindfulness—with compassionate, personalized care to help you overcome anxiety, strengthen relationships, and heal from trauma.
            </p>
            <p className="text-sm sm:text-base">
              Whether you meet in her Maplewood Drive office or connect virtually via Zoom, Dr. Blake is committed to creating a safe, supportive space for you to thrive.
            </p>
          </div>
        </div>

        {/* Get In Touch Form Section - Right Half */}
        <div className="w-full lg:w-1/2 bg-white rounded-lg shadow-lg border border-blue-200 p-8 md:p-10">
          <h3 className="text-2xl sm:text-3xl font-bold text-blue-800 text-center mb-4">
            Free Consultation Form
          </h3>
          <p className="text-center text-gray-600 text-sm mb-6">
            Simply fill out the brief fields below and Dr. Blake will be in touch with you soon,
            usually within one business day. This form is safe, private, and completely free.
          </p>

          <form className="space-y-4" onSubmit={handleSubmit}> {/* ADDED onSubmit handler */}
            <input type="text" name="name" placeholder="Name" required className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <input type="email" name="email" placeholder="you@example.com" required className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <input type="tel" name="phone" placeholder="(555) 234-5678" required className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" onKeyDown={handleKeyDown} />
            <textarea name="message" rows="4" placeholder="What brings you here?" required className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y"></textarea>
            <input type="text" name="preferredTime" placeholder="Preferred time to reach you" required className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <div className="flex items-center space-x-2">
              <input type="checkbox" name="agree" className="form-checkbox h-5 w-5 text-blue-600 rounded-md" required />
              <label className="text-gray-700 text-sm">I agree to be contacted</label>
            </div>
            {/* CAPTCHA Verification Checkbox (Visual only) */}
            <div className="flex items-center p-3 border border-gray-300 rounded-md bg-gray-50 max-w-xs shadow-sm">
                <input
                    type="checkbox"
                    id="recaptcha-checkbox-getstarted"
                    name="recaptchaCheckbox"
                    className="form-checkbox h-6 w-6 text-blue-600 rounded-sm border-gray-400 focus:ring-blue-500"
                />
                <label htmlFor="recaptcha-checkbox-getstarted" className="ml-3 text-gray-700 text-base font-medium flex-grow">
                    I'm not a robot
                </label>
                <div className="ml-auto text-gray-500 text-xs text-right">
                    <svg className="w-6 h-6 inline-block mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.01 12.01 0 002.944 12c0 2.879 1.144 5.438 2.999 7.379L12 21.426l6.057-3.955C20.007 17.438 21.056 14.879 21.056 12A12.009 12.009 0 0018.618 7.984z"></path>
                    </svg>
                    reCAPTCHA<br/>
                    <Link href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="hover:underline text-blue-600">Privacy</Link> - <Link href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="hover:underline text-blue-600">Terms</Link>
                </div>
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold text-lg hover:bg-blue-700 transition-colors shadow-md">
              Submit
            </button>
            <p className="text-xs text-gray-500 text-center mt-4">
              By submitting, you confirm you are 18+ and agree to our{' '}
              <Link href="#" className="text-blue-600 hover:underline">Privacy Policy</Link> &{' '}
              <Link href="#" className="text-blue-600 hover:underline">TOS</Link>.
            </p>
          </form>
          {/* Please Note Disclaimer */}
          <div className="mt-8 p-6 bg-yellow-50 rounded-lg border border-yellow-200 text-yellow-800 shadow-md">
              <p className="font-semibold text-lg mb-2 flex items-center">
                  <svg className="w-6 h-6 mr-2 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                  </svg>
                  Please Note:
              </p>
              <p className="text-md">
                  I do not take insurance directly. However, I can provide you with a billing sheet
                  with the necessary codes and information so you can file for out-of-network benefits
                  with your insurance company.
              </p>
          </div>
        </div>
      </div>

      {/* NEW: Success Message Dialog Box for GetStartedPage form */}
      {showSuccessMessage && (
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
              onClick={() => setShowSuccessMessage(false)}
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
