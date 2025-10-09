// components/CompanySection.jsx
import React from 'react';
import companyImage from '@/assets/q.jpg';
import secondImage from '@/assets/saas.jpeg';

const CompanySection = () => {
  return (
    <section className="py-12 bg-gray-50 flex justify-center items-center">
      <div className="w-full max-w-7xl mx-auto px-4">
        
        {/* Gallery Heading and Subtitle */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Our <span className="text-blue-600">Vision</span> In Pictures
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            A glimpse into our working environment, culture, and the tools we use to build the future.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* First Image */}
          <div className="relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-3xl border border-gray-200 shadow-lg transition-transform duration-500 hover:scale-105 hover:shadow-2xl">
            <img
              src={companyImage}
              alt="Company 1"
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* Second Image */}
          <div className="relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-3xl border border-gray-200 shadow-lg transition-transform duration-500 hover:scale-105 hover:shadow-2xl">
            <img
              src={secondImage}
              alt="Company 2"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanySection;