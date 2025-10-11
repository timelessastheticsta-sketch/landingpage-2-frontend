import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import LeadForm from '@/components/LeadForm';
import Footer from '@/components/Footer';
import Associations from '@/components/Associations';  // ✅ Import new component
import { Sheet, SheetContent } from '@/components/ui/sheet';
import Projects from '@/components/Projects';
import WhyChoose from '@/components/WhyChoose';
import CompanySection from '@/components/CompanySection'; // ✅ Import new component
import BeforeAfterResults from '@/components/BeforeAfterResults';
import ProceduresCarousel from '@/components/ProceduresCarousel';
const Index = () => {
  const [open, setOpen] = useState(false);

  // Open after delay on mobile; open on slight scroll on desktop
  useEffect(() => {
    const timer = setTimeout(() => {
      if (window.innerWidth < 768) setOpen(true);
    }, 5000);

    const onScroll = () => {
      if (window.scrollY > 800 && window.innerWidth >= 768) {
        setOpen(true);
        window.removeEventListener('scroll', onScroll);
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <ProceduresCarousel />
            <Projects />   {/* ✅ New Projects Section */}
            {/* <BeforeAfterResults /> */}
                        <CompanySection /> {/* ✅ Added here */}

      <Services />
      <Associations />
            <WhyChoose />   {/* ✅ Yeh ab alag component aa gaya */}

      <LeadForm />
      {/* Transparent side sheet lead form */}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="right" className="w-full sm:max-w-md bg-background/20 backdrop-blur-md border-white/20">
          <LeadForm variant="compact" transparent onSubmitted={() => setOpen(false)} />
        </SheetContent>
      </Sheet>
      <Footer />

<a
  href="https://wa.me/7289863239?text=Hi%20There!"
  target="_blank"
  className="fixed w-16 h-16 bottom-16 right-12 bg-green-500 text-white rounded-full flex items-center justify-center cursor-pointer z-50 shadow-lg hover:shadow-2xl transform hover:scale-110 transition-all duration-300"
>
  <img
    src="https://trickuweb.com/whatsapp.png"
    alt="WhatsApp"
    className="w-10 h-10 object-contain"
  />
</a>




    </div>
  );
};

export default Index;
