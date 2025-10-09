import React from 'react';

// Import local images (replace filenames with your actual image names)
import dermalFillersImg from '@/assets/11.webp';
import skinTreatmentImg from '@/assets/22.webp';
import acneTreatmentImg from '@/assets/33.webp';

const procedures = [
  {
    title: "Permanent Makeup",
    description: "Enhance your natural beauty with long-lasting eyebrow, eyeliner, and lip color treatments for a flawless, polished look.",
    imgUrl: dermalFillersImg,
    link: "https://www.timelessaesthetics.in/",
  },
  {
    title: "Cosmetology",
    description: "Rejuvenate your skin and enhance its glow with advanced skin treatments, chemical peels, and tailored skincare solutions.",
    imgUrl: skinTreatmentImg,
    link: "https://www.timelessaesthetics.in/",
  },
  {
    title: "Facial Aesthetics",
    description: "Restore youthful radiance with facial contouring, anti-aging treatments, and skincare solutions for smooth, healthy skin.",
    imgUrl: acneTreatmentImg,
    link: "https://www.timelessaesthetics.in/",
  },
];


const ProcedureCard = ({ procedure }) => (
  <a 
    href={procedure.link} 
    target="_blank" 
    rel="noopener noreferrer" 
    className="block flex-shrink-0 w-80 md:w-80 h-full rounded-3xl overflow-hidden shadow-2xl transition-transform duration-500 hover:scale-[1.03] active:scale-[0.98] transform-gpu bg-white"
  >
    <div className="relative w-full h-full">
      <img
        src={procedure.imgUrl}
        alt={procedure.title}
        className="w-full h-full object-cover transition-opacity duration-300 hover:opacity-80"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-6 flex flex-col justify-end">
        <h3 className="text-3xl font-bold text-white mb-2 leading-tight">
          {procedure.title}
        </h3>
        <p className="text-sm text-gray-200">
          {procedure.description}
        </p>
      </div>
    </div>
  </a>
);

const ProceduresCarousel = () => {
  return (
    <section className="py-16 bg-white min-h-screen font-sans flex flex-col">
      <div className="max-w-7xl mx-auto px-4 w-full">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-3">
            Discover the Art of Timeless Beauty
          </h2>
          <p className="text-xl text-gray-700">
            Choose the perfect treatment crafted exclusively for your skin and confidence.
          </p>
        </div>

        {/* Centered Cards */}
        <div className="relative h-[500px]">
          <div
            className="
              flex justify-center flex-wrap gap-6 
              overflow-x-auto snap-x snap-mandatory md:overflow-visible md:snap-none
              scrollbar-hide
            "
          >
            <style jsx>{`
              .scrollbar-hide {
                -ms-overflow-style: none;
                scrollbar-width: none;
              }
              .scrollbar-hide::-webkit-scrollbar {
                display: none;
              }
              .snap-mandatory > a {
                scroll-snap-align: start;
              }
            `}</style>

            {procedures.map((procedure, index) => (
              <ProcedureCard key={index} procedure={procedure} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProceduresCarousel;
