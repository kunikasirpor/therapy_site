// dr-blake-psychology/components/FAQ.jsx
'use client';

import { useState } from 'react';

const faqData = [
  {
    question: 'What are your fees?',
    answer: 'Individual sessions are $200. Couples sessions are $240.',
  },
  {
    question: 'Do you take insurance?',
    answer: 'While Dr. Blake does not directly accept insurance, she can provide a superbill for you to submit to your insurance company for potential out-of-network reimbursement. Please check with your insurance provider regarding their out-of-network benefits.',
  },
  {
    question: 'Do you provide online counseling?',
    answer: 'Yes, Dr. Blake offers virtual sessions via Zoom on Monday, Wednesday, and Friday from 1 PM–5 PM.',
  },
  {
    question: 'What are your office hours?',
    answer: 'In-person sessions are available Tuesday and Thursday from 10 AM–6 PM. Virtual sessions via Zoom are on Monday, Wednesday, and Friday from 1 PM–5 PM.',
  },
  {
    question: 'What geographic areas do you serve?',
    answer: 'In-person sessions are for clients in the Los Angeles, CA area. Virtual sessions are available for clients located anywhere within California.',
  },
  {
    question: 'What services do you offer?',
    answer: 'Dr. Blake specializes in Anxiety & Stress Management, Relationship Counseling, and Trauma Recovery.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 bg-blue-100">
      {/* Modified this div: removed container, mx-auto, max-w-screen-xl */}
      <div className="px-4 sm:px-6 lg:px-8"> {/* Apply horizontal padding directly */}
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">
          Frequently Asked Questions
        </h2>

        <div className="bg-white rounded-lg shadow-lg border border-blue-200 overflow-hidden">
          {faqData.map((item, index) => (
            <div key={index} className="border-b border-gray-200 last:border-b-0">
              <button
                className="flex justify-between items-center w-full p-6 text-left text-xl font-semibold text-gray-800 hover:bg-gray-50 focus:outline-none transition-colors duration-200"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                <span>{item.question}</span>
                <svg
                  className={`w-6 h-6 transform transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100 py-4' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="px-6 text-lg text-gray-700 leading-relaxed">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}