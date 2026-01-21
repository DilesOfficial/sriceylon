import { useState, useCallback, useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { WHATSAPP_NUMBER } from "@/data/tourData";
import {
  Car,
  Users,
  Shield,
  Award,
  MapPin,
  Clock,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Phone,
} from "lucide-react";
import { Link } from "react-router-dom";
import useEmblaCarousel from "embla-carousel-react";
import { cn } from "@/lib/utils";
import heroImage from "@/assets/tours/sigiriya-group.jpg";
import storyImage from "@/assets/tours/village-family.jpg";

const stats = [
  { number: "500+", label: "Happy Travelers" },
  { number: "50+", label: "Tours Completed" },
  { number: "7+", label: "Years Experience" },
  { number: "24/7", label: "Support Available" },
];

const whyChooseUs = [
  {
    icon: Car,
    title: "Luxury Vehicles",
    description: "Travel in comfort with our fleet of modern, air-conditioned vehicles maintained to the highest standards.",
  },
  {
    icon: Users,
    title: "Expert Guides",
    description: "Our professional driver-guides bring deep local knowledge and fluent English communication.",
  },
  {
    icon: Shield,
    title: "Full Insurance",
    description: "All our tours include comprehensive travel insurance for your peace of mind.",
  },
  {
    icon: Award,
    title: "Quality Service",
    description: "We're committed to delivering exceptional experiences that exceed your expectations.",
  },
  {
    icon: MapPin,
    title: "Local Expertise",
    description: "As Sri Lankans, we know the hidden gems and best experiences our island has to offer.",
  },
  {
    icon: Clock,
    title: "Flexible Planning",
    description: "We customize every tour to match your pace, interests, and travel preferences.",
  },
];

const benefitSlides = whyChooseUs.map((item) => ({
  ...item,
  id: item.title.toLowerCase().replace(/\s+/g, "-"),
}));

export default function AboutPage() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);

    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 4000);

    return () => {
      clearInterval(interval);
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <img
          src={heroImage}
          alt="About Sri Ceylon Tours"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white container-custom">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            About Sri Ceylon Tours
          </h1>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
            Your trusted partner for unforgettable Sri Lankan adventures
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
                Our Story
              </h2>
              <h3 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Experience the Heart of Paradise
              </h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Sri Ceylon Tours was founded with a simple mission: to share the incredible beauty 
                  and rich culture of Sri Lanka with travelers from around the world. As proud Sri Lankans, 
                  we know every hidden gem, every breathtaking viewpoint, and every authentic experience 
                  our island has to offer.
                </p>
                <p>
                  What started as a passion for showing visitors our homeland has grown into a 
                  full-service travel company, offering everything from custom tours and airport 
                  transfers to adventure activities and cultural experiences.
                </p>
                <p>
                  We believe that travel should be more than just visiting places – it should be 
                  about creating memories, connecting with local culture, and experiencing the true 
                  spirit of a destination. That's exactly what we deliver with every tour.
                </p>
              </div>
              <div className="mt-8">
                <Button asChild size="lg">
                  <Link to="/tours">
                    Explore Our Tours
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src={storyImage}
                alt="Sri Lanka Landscape"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-2xl shadow-xl">
                <p className="text-4xl font-bold">7+</p>
                <p className="text-sm opacity-90">Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-primary">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center text-primary-foreground">
                <p className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</p>
                <p className="text-sm opacity-90">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Slider */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
              Why Choose Us
            </h2>
            <h3 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              The Sri Ceylon Difference
            </h3>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {benefitSlides.map((item) => (
                  <div key={item.id} className="flex-[0_0_100%] min-w-0 px-4">
                    <div className="bg-card rounded-2xl p-8 md:p-12 text-center shadow-lg">
                      <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                        <item.icon className="w-10 h-10 text-primary" />
                      </div>
                      <h4 className="font-display text-2xl font-bold text-foreground mb-4">
                        {item.title}
                      </h4>
                      <p className="text-muted-foreground text-lg max-w-md mx-auto">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={scrollPrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-background shadow-lg rounded-full flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={scrollNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-background shadow-lg rounded-full flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <div className="flex justify-center gap-2 mt-6">
              {benefitSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => emblaApi?.scrollTo(index)}
                  className={cn(
                    "w-2 h-2 rounded-full transition-all",
                    index === selectedIndex ? "bg-primary w-6" : "bg-primary/30 hover:bg-primary/50"
                  )}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Grid View */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-2xl bg-card border border-border card-hover"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-secondary">
        <div className="container-custom text-center text-secondary-foreground">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Contact us today and let us help you plan the perfect Sri Lankan adventure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-secondary hover:bg-white/90 font-semibold">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi! I'd like to know more about Sri Ceylon Tours.`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Phone className="w-5 h-5 mr-2" />
                Chat on WhatsApp
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-white/20 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-secondary font-semibold"
            >
              <Link to="/contact">Send Inquiry</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
