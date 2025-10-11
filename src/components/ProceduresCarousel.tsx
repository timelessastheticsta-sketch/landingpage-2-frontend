import React, { useEffect, useRef } from 'react';

// Import local images
import dermalFillersImg from '@/assets/111.jpg';
import skinTreatmentImg from '@/assets/222.jpeg';
import acneTreatmentImg from '@/assets/333.jpg';

const procedures = [
  {
    title: "Permanent Makeup",
    description:
      "Enhance your natural beauty with long-lasting eyebrow, eyeliner, and lip color treatments for a flawless, polished look.",
    imgUrl: dermalFillersImg,
    link: "https://www.timelessaesthetics.in/",
  },
  {
    title: "Cosmetology",
    description:
      "Rejuvenate your skin and enhance its glow with advanced skin treatments, chemical peels, and tailored skincare solutions.",
    imgUrl: skinTreatmentImg,
    link: "https://www.timelessaesthetics.in/",
  },
  {
    title: "Facial Aesthetics",
    description:
      "Restore youthful radiance with facial contouring, anti-aging treatments, and skincare solutions for smooth, healthy skin.",
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
        <p className="text-sm text-gray-200">{procedure.description}</p>
      </div>
    </div>
  </a>
);

const ProceduresCarousel = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    // Only apply auto-slide on mobile screens
    const isMobile = window.innerWidth < 768;
    if (!isMobile) return;

    let scrollPosition = 0;
    const cardWidth = 320 + 24; // card width + gap (w-80 + gap-6)
    const totalScrollWidth = cardWidth * procedures.length;

    const interval = setInterval(() => {
      scrollPosition += cardWidth;
      if (scrollPosition >= totalScrollWidth) scrollPosition = 0;
      carousel.scrollTo({
        left: scrollPosition,
        behavior: 'smooth',
      });
    }, 3000); // change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

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

        {/* Carousel */}
        <div className="relative h-[500px] overflow-hidden">
          <div
            ref={carouselRef}
            className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory md:flex-wrap md:justify-center md:overflow-visible md:snap-none px-4"
          >
            <style jsx>{`
              /* Snap each card to start on mobile */
              .snap-mandatory > a {
                scroll-snap-align: start;
              }
              /* Hide scrollbar */
              .overflow-x-auto::-webkit-scrollbar {
                display: none;
              }
              .overflow-x-auto {
                -ms-overflow-style: none;
                scrollbar-width: none;
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
