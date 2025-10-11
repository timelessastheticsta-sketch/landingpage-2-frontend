import { useEffect, useState } from 'react';
import { Star, Users, Building, TrendingUp } from 'lucide-react';
import heroBg from '@/assets/filler.jpg';
import heroBgMobile from '@/assets/mobile.jpg';
import LeadForm from '@/components/LeadForm';

const Hero = () => {
  const stats = [
    // { id: 1, value: 2000, label: 'Happy Families', icon: <Users size={32} className="text-secondary" /> },
    // { id: 2, value: 500, label: 'Courses Sold', icon: <Building size={32} className="text-secondary" /> },
    // { id: 3, value: 10, label: 'Years Experience', icon: <TrendingUp size={32} className="text-secondary" /> },
    // { id: 4, value: 4.9, label: 'Client Rating', icon: <Star size={32} className="text-secondary" /> },
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const intervals = stats.map((stat, index) => {
      return setInterval(() => {
        setCounts((prev) => {
          const newCounts = [...prev];
          if (newCounts[index] < stat.value) {
            newCounts[index] += Math.ceil(stat.value / 100);
          }
          return newCounts;
        });
      }, 30);
    });

    return () => intervals.forEach((interval) => clearInterval(interval));
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section id="home" className="relative h-[80vh] bg-black flex items-center pt-20 md:pt-0">
        {/* Desktop Background */}
        <div className="hidden md:block absolute inset-0">
  <img
    src={heroBg}
    alt="Hero Desktop"
    className="w-full h-full object-contain object-center"
  />
</div>

{/* Mobile Background */}
<div className="block md:hidden absolute inset-0 bg-black">
  <img
    src={heroBgMobile}
    alt="Hero Mobile"
    className="w-full h-full object-contain object-center"
  />
</div>


        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/20"></div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left side content */}
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
              {/* Masters in Permanent Makeup Course{' '} */}
                <span className="text-secondary"></span>
              </h1>

              <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-2xl">
              {/* Become a Certified Permanent Makeup Artist */}

              </p>

              {/* Stats (Desktop Grid / Mobile Stack) */}
              <div className="hidden md:grid grid-cols-2 gap-8">
                {stats.map((stat, index) => (
                  <div key={stat.id} className="text-center">
                    <div className="flex items-center justify-center mb-2">{stat.icon}</div>
                    <div className="text-3xl font-bold text-primary-foreground">
                      {counts[index] >= stat.value ? stat.value + (stat.value > 10 ? '+' : '') : counts[index]}
                    </div>
                    <div className="text-primary-foreground/80 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>


          </div>
        </div>
      </section>

{/* Mobile Stats + Form Section */}
<section className="block md:hidden bg-white py-10 px-4 text-center">
  {/* Hide stats on mobile – removed this block */}
  {/* <div className="space-y-6">
    {stats.map((stat, index) => (
      <div key={stat.id}>
        <div className="flex items-center justify-center mb-2">{stat.icon}</div>
        <div className="text-3xl font-bold text-gray-900">
          {counts[index] >= stat.value ? stat.value + (stat.value > 10 ? '+' : '') : counts[index]}
        </div>
        <div className="text-gray-600 text-sm">{stat.label}</div>
      </div>
    ))}
  </div> */}

  {/* Mobile Form Only */}
  <div className="max-w-md mx-auto">
    <LeadForm variant="compact" />
  </div>
</section>
    </>
  );
};

export default Hero;
