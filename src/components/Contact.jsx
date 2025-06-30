'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';

export default function Contact() {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  // Function to allow only numbers, plus common control keys (backspace, arrows, etc.)
  const handleKeyDown = (event) => {
    // Allow: backspace, delete, tab, escape, enter, period
    if ([8, 9, 27, 13, 46].includes(event.keyCode) ||
        // Allow: Ctrl/cmd+A, Ctrl/cmd+C, Ctrl/cmd+V, Ctrl/cmd+X
        ((event.keyCode === 65 || event.keyCode === 67 || event.keyCode === 86 || event.keyCode === 88) && (event.ctrlKey === true || event.metaKey === true)) ||
        // Allow: home, end, left, right arrow keys
        (event.keyCode >= 35 && event.keyCode <= 40)) {
      return;
    }
    // Ensure that it is a number and stop the keypress if not
    if ((event.shiftKey || (event.keyCode < 48 || event.keyCode > 57)) && (event.keyCode < 96 || event.keyCode > 105)) {
      event.preventDefault();
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log("Form submitted!");
    // In a real application, you would send form data to your backend here
    // Example:
    // const formData = new FormData(event.target);
    // const data = Object.fromEntries(formData.entries());
    // try {
    //     const response = await fetch('/api/submit-contact-form', { // Your backend API endpoint
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify(data),
    //     });
    //     const result = await response.json();
    //
    //     if (response.ok) { // Assuming success if response is OK
    //         setShowSuccessMessage(true);
    //         event.target.reset();
    //     } else {
    //         alert(`Form submission failed: ${result.message || 'Server error.'}`);
    //     }
    // } catch (error) {
    //     console.error("Form submission error:", error);
    //     alert("An error occurred during form submission. Please try again.");
    // }

    // Simulating success if no actual backend is connected
    await new Promise(resolve => setTimeout(resolve, 1000));
    setShowSuccessMessage(true);
    event.target.reset();
  };

  return (
    <section id="contact" className="py-16 bg-blue-100">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-12 bg-white rounded-lg shadow-lg border border-blue-200 p-8 md:p-12">

          {/* Left Column: Our Office, Hours, Contact Info */}
          <div className="w-full md:w-1/2 text-center md:text-left space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-blue-800 mb-4">Our Office</h3>
              <p className="text-lg text-gray-700">1287 Maplewood Drive,</p>
              <p className="text-lg text-gray-700">Los Angeles, CA 90026</p>
              <a href="https://www.google.com/maps/search/?api=1&query=1287+Maplewood+Drive,+Los+Angeles,+CA+90026" target="_blank" rel="noopener noreferrer" className="inline-block mt-4 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
                Google Maps
              </a>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-blue-800 mb-4">Hours</h3>
              <ul className="text-lg text-gray-700 space-y-2">
                <li><strong>In-person:</strong> Tue & Thu, 10 AM–6 PM</li>
                <li><strong>Virtual via Zoom:</strong> Mon, Wed & Fri, 1 PM–5 PM</li>
              </ul>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-blue-800 mb-4">Contact</h3>
              <p className="text-lg text-gray-700">Phone: <a href="tel:+13235550192" className="hover:underline">(323) 555-0192</a></p>
              <p className="text-lg text-gray-700">Email: <a href="mailto:serena@blakepsychology.com" className="hover:underline">serena@blakepsychology.com</a></p>
            </div>
          </div>

          {/* Right Column: Get In Touch Form */}
          <div className="w-full md:w-1/2 flex justify-center items-start py-6">
            <div className="bg-gray-50 p-6 rounded-lg shadow-inner w-full max-w-sm">
              <h3 className="text-3xl font-bold text-blue-800 text-center mb-6">Get In Touch</h3>
              <p className="text-center text-gray-600 mb-6 text-sm">
                Simply fill the brief fields below and Dr. Blake will be in touch with you soon,
                usually within one business day. This form is safe, private, and completely free.
              </p>

              <form className="space-y-4" onSubmit={handleSubmit}>
                {/* Name (Required) */}
                <div>
                  <label htmlFor="name" className="sr-only">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                {/* Phone (Required, Numbers Only) */}
                <div>
                  <label htmlFor="phone" className="sr-only">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                    inputMode="numeric"
                    pattern="[0-9]*"
                    onKeyDown={handleKeyDown}
                  />
                </div>

                {/* Email (Required) */}
                <div>
                  <label htmlFor="email" className="sr-only">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                {/* "What brings you here?" (textarea, Required) */}
                <div>
                  <label htmlFor="message" className="sr-only">What brings you here?</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    placeholder="What brings you here?"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y"
                    required
                  ></textarea>
                </div>

                {/* "Preferred time to reach you" (text, Required) */}
                <div>
                  <label htmlFor="preferredTime" className="sr-only">Preferred time to reach you</label>
                  <input
                    type="text"
                    id="preferredTime"
                    name="preferredTime"
                    placeholder="Preferred time to reach you (e.g., Evenings, Mornings)"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                {/* "I agree to be contacted" checkbox (Required) */}
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="agree-contact"
                    name="agreeContact"
                    className="form-checkbox h-5 w-5 text-blue-600 rounded-md"
                    required
                  />
                  <label htmlFor="agree-contact" className="text-gray-700 text-sm">I agree to be contacted</label>
                </div>

                {/* ADDED: Dummy CAPTCHA Verification Checkbox */}
                <div className="flex items-center p-3 border border-gray-300 rounded-md bg-gray-50 max-w-xs shadow-sm">
                    <input
                        type="checkbox"
                        id="recaptcha-checkbox-contact" // Changed ID to be unique for this component
                        name="recaptchaCheckbox"
                        className="form-checkbox h-6 w-6 text-blue-600 rounded-sm border-gray-400 focus:ring-blue-500"
                    />
                    <label htmlFor="recaptcha-checkbox-contact" className="ml-3 text-gray-700 text-base font-medium flex-grow">
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
                {/* END ADDED DUMMY CAPTCHA */}

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold text-lg hover:bg-blue-700 transition-colors shadow-md"
                >
                  Submit
                </button>

                <p className="text-xs text-gray-500 text-center mt-4">
                  By submitting, you confirm you are 18+ and agree to our{' '}
                  <Link href="#" className="text-blue-600 hover:underline">Privacy Policy</Link> &{' '}
                  <Link href="#" className="text-blue-600 hover:underline">Terms of Service</Link>.
                </p>
              </form>
            </div>
          </div>
        </div>

        {/* Please Note Disclaimer */}
        <div className="mt-12 p-6 bg-yellow-50 rounded-lg border border-yellow-200 text-yellow-800 shadow-md">
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

      {/* Success Message Dialog Box */}
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
    </section>
  );
}