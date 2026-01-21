import { useState, useCallback, useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { services, WHATSAPP_NUMBER } from "@/data/tourData";
import {
  Plane,
  Hotel,
  Map,
  User,
  Mountain,
  Landmark,
  Shield,
  Headphones,
  ChevronLeft,
  ChevronRight,
  Check,
  Phone,
  ArrowRight,
} from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { cn } from "@/lib/utils";
import heroImage from "@/assets/tours/train-ride.jpg";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Plane,
  Hotel,
  Map,
  User,
  Mountain,
  Landmark,
  Shield,
  Headphones,
};

export default function ServicesPage() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
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
          alt="Our Services"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white container-custom">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Our Services
          </h1>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
            Comprehensive travel services to make your Sri Lankan adventure seamless and memorable
          </p>
        </div>
      </section>

      {/* Services Slider */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
              What We Offer
            </h2>
            <h3 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              All-Inclusive Travel Services
            </h3>
          </div>

          <div className="relative">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex -ml-4">
                {services.map((service) => {
                  const IconComponent = iconMap[service.icon] || Shield;
                  return (
                    <div
                      key={service.id}
                      className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-4"
                    >
                      <Card className="h-full card-hover">
                        <CardContent className="p-6 text-center">
                          <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                            <IconComponent className="w-8 h-8 text-primary" />
                          </div>
                          <h4 className="font-bold text-xl text-foreground mb-2">
                            {service.title}
                          </h4>
                          <p className="text-muted-foreground text-sm mb-4">
                            {service.description}
                          </p>
                          <p className="text-primary font-semibold">{service.price}</p>
                        </CardContent>
                      </Card>
                    </div>
                  );
                })}
              </div>
            </div>

            <button
              onClick={scrollPrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 z-10 w-10 h-10 bg-background shadow-lg rounded-full flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={scrollNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 z-10 w-10 h-10 bg-background shadow-lg rounded-full flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {services.map((_, index) => (
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
      </section>

      {/* Detailed Services Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
              Service Details
            </h2>
            <h3 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Everything You Need
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => {
              const IconComponent = iconMap[service.icon] || Shield;
              return (
                <Card key={service.id} className="overflow-hidden card-hover">
                  <CardContent className="p-6 md:p-8">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-7 h-7 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="font-bold text-xl text-foreground">{service.title}</h4>
                          <span className="text-primary font-semibold text-sm bg-primary/10 px-3 py-1 rounded-full">
                            {service.price}
                          </span>
                        </div>
                        <p className="text-muted-foreground mb-4">{service.fullDescription}</p>
                        <div className="grid grid-cols-2 gap-2 mb-4">
                          {service.features.map((feature, index) => (
                            <div key={index} className="flex items-center gap-2 text-sm">
                              <Check className="w-4 h-4 text-primary flex-shrink-0" />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                        <Button asChild size="sm">
                          <a
                            href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi! I'm interested in your ${service.title} service.`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Phone className="w-4 h-4 mr-2" />
                            Inquire Now
                          </a>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-secondary">
        <div className="container-custom text-center text-secondary-foreground">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Need a Custom Service?
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            We're happy to accommodate special requests and create custom solutions for your travel needs.
          </p>
          <Button asChild size="lg" className="bg-white text-secondary hover:bg-white/90">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi! I have a special request for my Sri Lanka trip.`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact Us
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
