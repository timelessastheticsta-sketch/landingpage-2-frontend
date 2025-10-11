import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, User, MessageSquare, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

type LeadFormVariant = "full" | "compact";

interface LeadFormProps {
  variant?: LeadFormVariant;
  transparent?: boolean;
  onSubmitted?: () => void;
}

const LeadForm = ({
  variant = "full",
  transparent = false,
  onSubmitted,
}: LeadFormProps) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.phone.trim()) {
      toast({
        title: "Required fields missing",
        description: "Please enter your name and phone number",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    // Show success immediately for better UX
    toast({
      title: "Thank you for connecting 🖤",
      description: "Our aesthetic consultant will reach out within 24 hours.",
    });

    try {
      const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/leads`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          source: import.meta.env.VITE_SOURCE || "FAQ"
        }),
      });

      // Fire-and-forget; we don't block UX on response
      await res.json().catch(() => undefined);

      setFormData({ name: "", email: "", phone: "", message: "" });

      if (onSubmitted) onSubmitted();
    } catch (err) {
      console.error("Error submitting form:", err);
      toast({
        title: "Submission failed",
        description: "Please try again or call us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const FormCard = (
    <Card
      className={cn(
        "rounded-2xl shadow-xl border bg-white/80 backdrop-blur-xl transition hover:shadow-2xl",
        transparent ? "bg-background/50 border-white/20" : ""
      )}
    >
      <CardHeader>
        <CardTitle className="text-3xl font-bold text-black">
    Book Your Appointment Now
                </CardTitle>
        <CardDescription className="text-base text-gray-600">
          Fill in your details, and our beauty expert will connect with you shortly ✨
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name */}
          <div>
            <Label htmlFor="name" className="flex items-center gap-2 font-semibold">
              <User size={16} />
              Full Name *
            </Label>
            <Input
              id="name"
              type="text"
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
              placeholder="e.g., Priya Sharma"
              required
              className="mt-2 rounded-lg focus:ring-2 focus:ring-black transition"
            />
          </div>

          {/* Email */}
          <div>
            <Label htmlFor="email" className="flex items-center gap-2 font-semibold">
              <Mail size={16} />
              Email Address
            </Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              placeholder="your@email.com"
              className="mt-2 rounded-lg focus:ring-2 focus:ring-black transition"
            />
          </div>

          {/* Phone */}
          <div>
            <Label htmlFor="phone" className="flex items-center gap-2 font-semibold">
              <Phone size={16} />
              Phone Number *
            </Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
              placeholder="+91 9654009966"
              required
              className="mt-2 rounded-lg focus:ring-2 focus:ring-black transition"
            />
          </div>

          {/* Message */}
          <div>
            <Label htmlFor="message" className="flex items-center gap-2 font-semibold">
              <MessageSquare size={16} />
              Message
            </Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => handleChange("message", e.target.value)}
              placeholder="E.g., acne treatment, laser hair removal, skin glow..."
              rows={4}
              className="mt-2 rounded-lg focus:ring-2 focus:ring-black transition"
            />
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 text-lg font-semibold rounded-lg text-white hover:opacity-90 transition relative overflow-hidden bg-black"
          >
            <span className="relative z-10">
              {isSubmitting ? "Submitting..." : " Apply Now"}
            </span>
            <div className="absolute inset-0 bg-white/20 blur-md opacity-30 animate-pulse"></div>
          </Button>
        </form>
      </CardContent>
    </Card>
  );

  if (variant === "compact") return FormCard;

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-gray-50 via-gray-100 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-14">
            <h2 className="text-5xl font-extrabold text-black">
              Start Your Beauty Journey Today
            </h2>
            <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
              Connect with our certified experts to discover personalized treatments
              that enhance your natural glow and confidence ✨
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Left Info Section */}
            <div className="space-y-6">
              <Card className="rounded-2xl shadow-lg bg-white/90 backdrop-blur-md border border-gray-200">
                <CardHeader>
                  <CardTitle className="text-2xl text-black">📞 Contact Us</CardTitle>
                  <CardDescription>
                    Our experts are here to assist you with your skincare goals.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="text-black" size={20} />
                    <div>
                      <div className="font-semibold">Call Us</div>
                      <div className="text-gray-600">+91 96540 09966</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="text-black" size={20} />
                    <div>
                      <div className="font-semibold">Email</div>
                      <div className="text-gray-600">info@timelessaesthetics.in</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-black mt-1" size={20} />
                    <div>
                      <div className="font-semibold">Trusted by 10,000+ Clients</div>
                      <div className="text-gray-600">
                        Certified clinic with international-grade treatments
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Why Choose Us - Updated */}
              <div className="p-6 rounded-2xl text-white shadow-lg bg-gradient-to-r from-black to-gray-800">
                <h3 className="text-xl font-semibold mb-3">Why Choose Timeless Aesthetics?</h3>
                <ul className="space-y-2 text-sm">
                  <li>✅ Internationally trained & certified faculty</li>
                  <li>✅ Practical hands-on training with live models</li>
                  <li>✅ Small batches for personal mentorship</li>
                  <li>✅ State-of-the-art equipment & safe practices</li>
                  <li>✅ Career guidance & placement support</li>
                </ul>
              </div>
            </div>

            {/* Right - Form */}
            {FormCard}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadForm;
