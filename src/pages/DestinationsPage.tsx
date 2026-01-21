import { useState, useCallback, useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { destinations, WHATSAPP_NUMBER } from "@/data/tourData";
import { MapPin, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import useEmblaCarousel from "embla-carousel-react";
import { cn } from "@/lib/utils";
import heroImage from "@/assets/tours/kandy-viewpoint.jpg";

export default function DestinationsPage() {
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
    }, 5000);

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
          alt="Sri Lanka Destinations"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white container-custom">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Discover Sri Lanka's Treasures
          </h1>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
            From ancient ruins to pristine beaches, explore the island's most captivating destinations
          </p>
        </div>
      </section>

      {/* Featured Destination Slider */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
              Featured Locations
            </h2>
            <h3 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Must-Visit Destinations
            </h3>
          </div>

          <div className="relative max-w-5xl mx-auto">
            <div className="overflow-hidden rounded-2xl" ref={emblaRef}>
              <div className="flex">
                {destinations.map((destination) => (
                  <div key={destination.id} className="flex-[0_0_100%] min-w-0">
                    <div className="relative h-[500px] md:h-[600px]">
                      <img
                        src={destination.image}
                        alt={destination.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                        <div className="flex items-center gap-2 text-accent mb-3">
                          <MapPin className="w-5 h-5" />
                          <span className="font-medium">Sri Lanka</span>
                        </div>
                        <h4 className="font-display text-3xl md:text-4xl font-bold text-white mb-2">
                          {destination.name}
                        </h4>
                        <p className="text-white/80 mb-4 text-lg">{destination.title}</p>
                        <p className="text-white/70 mb-6 max-w-2xl">{destination.description}</p>
                        <div className="flex flex-wrap gap-2 mb-6">
                          {destination.highlights.slice(0, 4).map((highlight, index) => (
                            <span
                              key={index}
                              className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm"
                            >
                              {highlight}
                            </span>
                          ))}
                        </div>
                        <Button asChild className="bg-primary hover:bg-primary/90">
                          <a
                            href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi! I want to visit ${destination.name} in Sri Lanka. Can you help plan my trip?`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Plan Visit
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <button
              onClick={scrollPrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={scrollNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {destinations.map((_, index) => (
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

      {/* Destination Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
              Explore All
            </h2>
            <h3 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              All Destinations
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination) => (
              <div
                key={destination.id}
                className="group relative h-[350px] rounded-2xl overflow-hidden card-hover"
              >
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-2 text-accent mb-2">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm font-medium">Sri Lanka</span>
                  </div>
                  <h4 className="font-display text-2xl font-bold text-white mb-1">
                    {destination.name}
                  </h4>
                  <p className="text-white/70 text-sm mb-4">{destination.title}</p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {destination.highlights.slice(0, 3).map((highlight, index) => (
                      <span
                        key={index}
                        className="bg-white/20 text-white px-2 py-0.5 rounded text-xs"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                  <Button asChild size="sm" className="bg-primary hover:bg-primary/90">
                    <Link to="/tours">View Tours</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="container-custom text-center text-primary-foreground">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Ready to Explore?
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Let us help you plan the perfect itinerary covering your favorite destinations.
          </p>
          <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
            <Link to="/tours">
              Browse Tour Packages
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
